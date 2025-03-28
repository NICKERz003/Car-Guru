<template>
  <div>
    <FilterComponent @apply-filters="applyFilters" @reset-filters="resetFilters" />
    <CarListComponent :cars="filteredCars" :filters="filters" />
  </div>
</template>

<script>
import axios from 'axios';
import FilterComponent from './FilterComponent.vue';
import CarListComponent from './CarListComponent.vue';
export default {
  name: 'CarlistPage',
  components:{
  FilterComponent,
  CarListComponent,
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

<style scoped>
.car-list-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.car-card {
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

.car-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.car-details {
  margin-top: 10px;
}

.car-price {
  font-size: 18px;
  color: #4caf50;
}

.view-details {
  background-color: #4caf50;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.view-details:hover {
  background-color: #45a049;
}
</style>
