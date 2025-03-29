<template>
  <section id="brand-section">
    <h1>Popular รถ Brands</h1>
    <div class="brand-container">
      <div class="brand-card" v-for="(brand, index) in brands" :key="index">
        <router-link :to="'/brand/' + brand.name"> <!-- ใช้ router-link สำหรับการไปยังแต่ละแบรนด์ -->
          <img :src="brand.image" :alt="brand.name" class="brand-logo" />
        </router-link>
      </div>
    </div>
    <button class="view-more-btn">ดูเพิ่มเติม</button>
  </section>
</template>

<script>
export default {
  name: "BrandCar",
  data() {
    return {
      // ข้อมูลแบรนด์รถ
      brands: [
        { name: "Toyota", image: "https://via.placeholder.com/100x100?text=Toyota" },
        { name: "Isuzu", image: "https://via.placeholder.com/100x100?text=Isuzu" },
        { name: "Honda", image: "https://via.placeholder.com/100x100?text=Honda" },
        { name: "Mitsubishi", image: "https://via.placeholder.com/100x100?text=Mitsubishi" },
        { name: "Ford", image: "https://via.placeholder.com/100x100?text=Ford" },
        { name: "Mazda", image: "https://via.placeholder.com/100x100?text=Mazda" },
        { name: "MG", image: "https://via.placeholder.com/100x100?text=MG" },
        { name: "Nissan", image: "https://via.placeholder.com/100x100?text=Nissan" },
        { name: "Suzuki", image: "https://via.placeholder.com/100x100?text=Suzuki" },
      ],
    };
  },
};
</script>

<style scoped>
#brand-section {
  text-align: center;
  margin: 20px;
}


.brand-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.brand-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.brand-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.view-more-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.view-more-btn:hover {
  background-color: #45a049;
}
</style>
