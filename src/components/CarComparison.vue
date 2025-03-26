<template>
  <div>
    <header-component />
    <navbar-component />
    <h2>เปรียบเทียบรถยนต์</h2>
    <div v-for="car in cars" :key="car.id">
      <p>{{ car.name }}</p>
      <p>{{ car.specs }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
