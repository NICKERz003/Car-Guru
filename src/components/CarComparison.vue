<template>
  <div>
    <Advertising_space></Advertising_space>
    <ComparisonComponent :cars="cars" @updateSelectedCars="updateSelectedCars"></ComparisonComponent>
  </div>
</template>

<script>
import axios from 'axios';
import ComparisonComponent from './CarComparepage_component/ComparisonComponent.vue';
import Advertising_space from './Advertising_space.vue';

export default {
  components: {
    ComparisonComponent,
    Advertising_space
  },
  data() {
    return {
      cars: [] // This will hold the car data for comparison
    };
  },
  mounted() {
    this.fetchCars();
  },
  methods: {
    fetchCars() {
      // Replace this logic with actual API calls to fetch car data
      axios.get('http://localhost:8000/cars')  // Assume you're fetching data from API
        .then(response => {
          this.cars = response.data.cars;  // Assuming 'cars' is the response data
        })
        .catch(error => {
          console.error("Error fetching cars:", error);
        });
    },
    updateSelectedCars(selectedCars) {
      // Optionally, you can handle the updated selected cars here if needed
      console.log('Selected Cars:', selectedCars);
    }
  }
};
</script>
