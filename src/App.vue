<template>
  <div>
    <AppHeader v-if="!isLoginPage && !isRegisterPage" @search="applySearch"></AppHeader>
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
  data() {
    return {
      searchQuery: ''  // ค่าคำค้นหา
    };
  },
  computed: {
    // ตรวจสอบว่าเส้นทางปัจจุบันคือหน้า login หรือ register หรือไม่
    isLoginPage() {
      return this.$route.meta.noHeader && this.$route.meta.noFooter ;
    },
    isRegisterPage() {
      return this.$route.meta.noHeader && this.$route.meta.noFooter;
    }
  },
  methods: {
    applySearch(query) {
      this.searchQuery = query; // รับคำค้นหาจาก AppHeader และเก็บไว้ใน searchQuery
    }
  }
}
</script>

<style>

</style>
