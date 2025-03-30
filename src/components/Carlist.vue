<template>
  <div>
    <Advertising_space></Advertising_space>
    <FilterComponent @apply-filters="applyFilters" @reset-filters="resetFilters" />
    <CarListComponent :cars="filteredCars" :filters="filters" />
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
  components:{
  FilterComponent,
  CarListComponent,
  Advertising_space,
  NewsCard
  },
  data() {
    return {
      cars: [
        { id: 1, brand: 'Toyota', model: 'Corolla', price: 750000, image: 'https://via.placeholder.com/200x150?text=Car1', description: 'Affordable sedan' },
        { id: 2, brand: 'Honda', model: 'Civic', price: 900000, image: 'https://via.placeholder.com/200x150?text=Car2', description: 'Sporty and stylish' },
        { id: 3, brand: 'BMW', model: 'X5', price: 3000000, image: 'https://via.placeholder.com/200x150?text=Car3', description: 'Luxury SUV' },
        { id: 4, brand: 'BMW', model: 'X6', price: 3000000, image: 'https://via.placeholder.com/200x150?text=Car4', description: 'Luxury SUV' },
        // Add more cars here...
      ],
      filters: {
        brand: '',
        model: '',
        price: '',
      },
    };
  },
    computed: {
    filteredCars() {
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
    applyFilters(filters) {
      this.filters = filters;
    },
    resetFilters() {
      this.filters = { brand: '', model: '', price: '' };
    },
  },
  created() {
    // ดึงข้อมูลจาก API
    axios.get('/api/cars')
      .then(response => {
        this.cars = response.data;  // เก็บข้อมูลใน array cars
      })
      .catch(error => {
        console.error("Error fetching car data:", error);
      });
  }
};
</script>


