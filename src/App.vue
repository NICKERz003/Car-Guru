<template>
  <div>
    <AppHeader v-if="!isLoginPage"></AppHeader>
    <NavbarComponent v-if="!isLoginPage"></NavbarComponent>
    <router-view></router-view>
    <FooterKub v-if="!isLoginPage"></FooterKub>
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
    FooterKub,
  },
   computed: {
    isLoginPage() {
      return this.$route.meta.noHeader && this.$route.meta.noFooter;
    }
  }

}
</script>

<style>

</style>
