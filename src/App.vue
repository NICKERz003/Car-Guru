<template>
  <div>
    <AppHeader></AppHeader>
    <NavbarComponent></NavbarComponent>
    <router-view></router-view>
    <FooterKub></FooterKub>
  </div>
</template>


<script>
  import AppHeader from './components/AppHeader.vue';
  import NavbarComponent from './components/Navbar.vue';
  import FooterKub from './components/FooterKub.vue';

  
export default {
  name: 'App',
  components: {
    AppHeader,
    NavbarComponent,
    FooterKub

  },

}
</script>

<style>

</style>
