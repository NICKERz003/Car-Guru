<template>
  <div>
    <Advertising_space></Advertising_space>
    <FilterComponent @apply-filters="applyFilters" @reset-filters="resetFilters" />
    <CarListComponent :cars="paginatedCars" :currentPage="currentPage" :totalPages="totalPages" @next-page="nextPage" @prev-page="prevPage" />
    <NewsCard></NewsCard>
  </div>
</template>

<script>
import axios from 'axios';
import FilterComponent from './Carlistpage_component/FilterComponent.vue';
import CarListComponent from './Carlistpage_component/CarListComponent.vue';
import Advertising_space from './Advertising_space.vue';
import NewsCard from './NewsCard.vue';

export default {
  name: 'CarlistPage',
  components: {
    FilterComponent,
    CarListComponent,
    Advertising_space,
    NewsCard
  },
  data() {
    return {
      cars: [],
      filters: {
        brand: '',
        model: '',
        price: '',
      },
      currenPage:1,
      totalPages:1,
    };
  },
  computed: {
    paginatedCars() {
      return this.cars;  // ส่งข้อมูลที่ได้รับจาก API มาทั้งหมด
    },
    filteredCars() {
      // คำนวณข้อมูลที่กรองแล้วและส่งไปยัง CarListComponent
      return this.cars.filter(car => {
        if (this.filters.brand && car.brand !== this.filters.brand) return false;
        if (this.filters.model && car.model !== this.filters.model) return false;
        if (this.filters.price) {
          const [minPrice, maxPrice] = this.filters.price.split('-').map(Number);
          if (maxPrice) {
            if (car.price < minPrice || car.price > maxPrice) return false;
          } else {
            if (car.price < minPrice) return false;
          }
        }
        return true;
      });
    },
  },
  methods: {
    async applyFilters(filters) {
      this.filters = filters;
      this.currentPage = 1;  // รีเซ็ตหน้าเป็นหน้าแรกเมื่อกรองข้อมูลใหม่
      this.fetchCars();
    },
    async fetchCars() {
      try {
        const response = await axios.get('http://localhost:8000/cars', {
          params: {
            ...this.filters,
            page: this.currentPage, // ส่งค่า page
          },
        });
        this.cars = response.data;
        // คำนวณจำนวนหน้าทั้งหมด
        this.totalPages = Math.ceil(response.data.total / 20); // คำนวณจำนวนหน้าทั้งหมดจากจำนวนผลลัพธ์ทั้งหมด
      } catch (error) {
        console.error(error);
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchCars();
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchCars();
      }
    },

    resetFilters() {
      this.filters = { brand: '', model: '', price: '' };
      this.fetchCars();  // รีเซ็ตหน้าและโหลดข้อมูลใหม่
    },
  },
  created() {
     this.fetchCars();
    // ดึงข้อมูลจาก API
    axios.get('http://localhost:8000/cars')
      .then(response => {
        this.cars = response.data;  // เก็บข้อมูลใน array cars
      })
      .catch(error => {
        console.error("Error fetching car data:", error);
      });
  }
};
</script>


