<template>
  <nav>
    <router-link to="/">หน้าหลัก</router-link>
    <router-link to="/car-search">ค้นหารถยนต์</router-link>
    <router-link to="/car-comparison">เปรียบเทียบรถยนต์</router-link>
    <router-link to="/loan-calculator">คำนวณการผ่อนชำระ</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
};
</script>
