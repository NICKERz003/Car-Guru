<template>
  <div>
    <AppHeader v-if="!isLoginPage && !isRegisterPage"></AppHeader>
    <NavbarComponent v-if="!isLoginPage && !isRegisterPage"></NavbarComponent>
    <router-view></router-view>
    <FooterKub v-if="!isLoginPage && !isRegisterPage"></FooterKub>
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
    // ตรวจสอบว่าเส้นทางปัจจุบันคือหน้า login หรือ register หรือไม่
    isLoginPage() {
      return this.$route.meta.noHeader && this.$route.meta.noFooter;
    },
    isRegisterPage() {
      return this.$route.meta.noHeader && this.$route.meta.noFooter;
    }
  }
}
</script>

<style>

</style>
