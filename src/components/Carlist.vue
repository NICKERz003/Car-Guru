<template>
  <div>

    <Advertising_space></Advertising_space>
    
    <FilterComponent @apply-filters="applyFilters" @reset-filters="resetFilters" />
    <!-- ช่องค้นหาที่สามารถพิมพ์ในขณะที่กรองข้อมูล -->
    <div class="search-box">
      <input type="text" v-model="searchQuery" @input="applySearch" placeholder="Search by Brand" />
    </div>
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
      filteredCars: [],
      filters: {
        brand: '',
        model: '',
        price: '',
      },
      searchQuery: '', // ตัวแปรเก็บคำค้นหา
      currentPage: 1,
      totalPages: 1,
    };
  },
  computed: {
    paginatedCars() {
      return this.filteredCars.slice((this.currentPage - 1) * 20, this.currentPage * 20);  // ใช้ pagination
    },
  },
  methods: {
    async applyFilters(filters) {
      this.filters = filters;
      this.currentPage = 1;  // รีเซ็ตหน้าเมื่อกรองใหม่
      await this.fetchCars(); // ดึงข้อมูลใหม่หลังจากกรอง
    },
    async applySearch() {
      this.filters.brand = this.searchQuery;  // ใช้ searchQuery เป็นตัวกรอง
      this.currentPage = 1;
      await this.fetchCars(); // ดึงข้อมูลใหม่ตามคำค้นหาที่กรอก
    },
    async fetchCars() {
      try {
        const response = await axios.get('http://localhost:8000/cars', {
          params: {
            ...this.filters,  // ส่งค่าฟิลเตอร์ไปใน API
            page: this.currentPage, // ส่งค่าหน้า
          },
        });
        this.filteredCars = response.data.cars;
        this.totalPages = Math.ceil(response.data.total / 20); // คำนวณจำนวนหน้าทั้งหมด
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
      this.searchQuery = ''; // รีเซ็ตช่องค้นหา
      this.fetchCars();
    },
  },
  created() {
    this.fetchCars();
  },
};
</script>

<style scoped>
.search-box {
  background-color: #f5f5f5; /* Match the filter box background */
  text-align: center;
  padding: 15px;
  margin: 20px;
  margin-bottom: 20px; /* Connect with the filter component */
  position: relative;
  z-index: 2;
  width: 25%; /* Match width with filter box below */
  margin-left: auto;
  margin-right: auto; /* Center it horizontally */
  max-width: 100%; /* Responsive width */
}

.search-box input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.search-box input:focus {
  outline: none;
  border-color: #4CAF50; /* Green to match your filter button */
}
</style>