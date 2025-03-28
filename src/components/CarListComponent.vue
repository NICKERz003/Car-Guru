<template>
  <div class="car-list">
    <div class="car-cards">
      <!-- การแสดงการ์ดรถยนต์ -->
      <div class="car-card" v-for="car in filteredCars" :key="car.id">
        <div class="car-image">
          <img :src="car.image" alt="Car image" />
        </div>
        <div class="car-details">
          <h3>{{ car.brand }} {{ car.model }}</h3>
          <p class="car-price">฿{{ car.price.toLocaleString() }}</p>
          <p class="car-description">{{ car.description }}</p>
          <router-link :to="'/car-detail/' + car.id">
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
  props: ['cars', 'filters'],
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 20,  // แสดงการ์ด 20 อันในแต่ละหน้า
    };
  },
  computed: {
    filteredCars() {
      let filtered = this.cars;

      // กรองตามแบรนด์
      if (this.filters.brand) {
        filtered = filtered.filter(car => car.brand === this.filters.brand);
      }

      // กรองตามรุ่น
      if (this.filters.model) {
        filtered = filtered.filter(car => car.model === this.filters.model);
      }

      // กรองตามช่วงราคา
      if (this.filters.price) {
        const [minPrice, maxPrice] = this.filters.price.split('+');
        filtered = filtered.filter(car => {
          // กรองราคาตามช่วง
          if (minPrice && !maxPrice) {
            return car.price >= parseInt(minPrice); // ถ้าไม่มี maxPrice จะกรองแค่ minPrice
          }
          // ถ้ามี maxPrice
          if (maxPrice) {
            return car.price >= parseInt(minPrice) && car.price <= parseInt(maxPrice);
          }
          return true;
        });
      }

      return filtered.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.cars.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
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
}

.car-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* แสดง 4 การ์ดในแต่ละแถว */
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
}

.car-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s;
}

.car-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
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
