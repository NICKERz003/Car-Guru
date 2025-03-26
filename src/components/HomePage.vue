<template>
  <div>
    <header-component />
    <navbar-component />
    <div id="content">
      <h1>Welcome to Car-Guru</h1>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './AppHeader.vue';
import NavbarComponent from './Navbar.vue';

export default {
  components: {
    HeaderComponent,
    NavbarComponent
  }
};
</script>
