<template>
  <div>
    <Advertising_space></Advertising_space>
    <ComparisonComponent></ComparisonComponent>
  </div>
</template>

<script>
import ComparisonComponent from './ComparisonComponent.vue';
import Advertising_space from './Advertising_space.vue';
export default {
  components:{
    ComparisonComponent,
    Advertising_space
  } ,
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
      // Logic to fetch data from an API or local state
      this.cars = [
        { id: 1, name: 'Car 1', specs: 'Engine: 200HP, Fuel: Petrol' },
        { id: 2, name: 'Car 2', specs: 'Engine: 180HP, Fuel: Diesel' },
        // Add actual data fetching logic
      ];
    }
  }
};
</script>
