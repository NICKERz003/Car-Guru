<template>
  <div>
    <header-component />
    <navbar-component />
    <h2>ค้นหารถยนต์</h2>
    <input v-model="searchTerm" placeholder="Search..." />
    <button @click="searchCar">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    };
  },
  methods: {
    searchCar() {
      console.log('Searching for car:', this.searchTerm);
      // Add logic to fetch car data from API or local state
    }
  }
};
</script>
