<template>
  
  <div class="car-list">
    <div class="car-cards">
      <!-- การแสดงการ์ดรถยนต์ -->
      <div class="car-card" v-for="car in cars" :key="car.model">
        <div class="car-image">
          <img :src="car.image_url" alt="Car image" />
        </div>
        <div class="car-details">
          <h3>{{ car.brand }} {{ car.model }}</h3>
          <p class="car-price">฿{{car.price.toLocaleString('th')}}</p>
          <p class="car-description">{{ car.description }}</p>
          <router-link :to="'/car-detail/' + car.brand + '/'+ car.model">
            <button class="view-details">ดูรายละเอียด</button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">←</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">→</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cars', 'currentPage', 'totalPages'],  // รับข้อมูลกรองจาก parent component
  methods: {
    formatPrice(price) {
      return price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
         this.$emit('next-page');
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('prev-page');
      }
    },
    
  },
};
</script>

<style scoped>
.car-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.car-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* แสดง 4 การ์ดในแต่ละแถว */
  gap: 20px;
  width: 70%;
  margin-bottom: 20px;
  padding: 20px;
}

.car-card {
  background-color: #fff;
  border-radius: 10px;
  width: 200px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s;
  
}

.car-image img {
  width: 100%;
  height: 150px;
  object-fit: contain;
}

.view-details {
  background-color: #4caf50;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.view-details:hover {
  background-color: #45a049;
}

.pagination {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
