<template>
  <div>
    <h1>{{ brandName }} Details</h1>
    <!-- แสดงข้อมูลเกี่ยวกับแบรนด์ -->
    <p>รายละเอียดเกี่ยวกับแบรนด์ {{ brandName }}</p>
  </div>
</template>

<script>
export default {
  name: "BrandPage",
  props: {
    brandName: String, // รับข้อมูล brandName จาก URL
  },
};
</script>
