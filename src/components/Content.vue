<template>
  <section id="content">
    <h1>รถใหม่ใน Thailand</h1>
    <div class="car-container">
      <!-- การ์ดรถ -->
      <div class="car-list-container" :style="{ transform: 'translateX(' + (-currentIndex *235) + 'px)' }">
        <div class="car-card" v-for="(car, index) in cars" :key="index">
          <div class="car-image">
            <img :src="car.image" alt="Car image" />
          </div>
          <div class="car-details">
            <h3>{{ car.brand }} {{ car.model }}</h3>
            <p class="car-price">฿{{ car.price.toLocaleString() }}</p>
            <p class="car-description">{{ car.description }}</p>
            <router-link :to="'/car-detail/' + car.id"><button class="view-details">ดูรายละเอียด</button></router-link>
          </div>
        </div>
      </div>
      <!-- ปุ่มลูกศรซ้าย -->
      <button @click="prevCar" class="arrow-button left-arrow">←</button>
      <!-- ปุ่มลูกศรขวา -->
      <button @click="nextCar" class="arrow-button right-arrow">→</button>
    </div>
    <h1>Porsche</h1>
  </section>
</template>

<script>
export default {
  name: 'ContentPart',
  data() {
    return {
      cars: [
        {
          id: 1,
          image: 'https://via.placeholder.com/200x150?text=Car+1',
          brand: 'Mercedes',
          model: 'G-Class Electric',
          price: 949900,
          description: 'พบกับราคานี้ในประเทศไทย',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/200x150?text=Car+2',
          brand: 'BYD',
          model: 'S5 EV',
          price: 849900,
          description: 'รถไฟฟ้าราคาเยี่ยม',
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/200x150?text=Car+3',
          brand: 'BYD',
          model: 'IM6',
          price: 1799000,
          description: 'รถไฟฟ้า สำหรับคนรักสิ่งแวดล้อม',
        },
        {
          id: 4,
          image: 'https://via.placeholder.com/200x150?text=Car+4',
          brand: 'Geely',
          model: 'EX5',
          price: 1599000,
          description: 'พร้อมราคาสุดคุ้ม',
        },
        {
          id: 5,
          image: 'https://via.placeholder.com/200x150?text=Car+5',
          brand: 'Porsche',
          model: 'Panamera 4 E-Hybrid',
          price:  7990000,
          description: 'รถสปอร์ตสุดหรู',
        },
        {
          id: 6,
          image: 'https://via.placeholder.com/200x150?text=Car+6',
          brand: 'BMW',
          model: 'M3 Competition Sedan',
          price: 14899000,
          description: 'พร้อมราคาสุดคุ้ม',
        },
        
        
        
      ],
      currentIndex: -1,
    };
  },
  methods: {
    nextCar() {
      if (this.currentIndex < 1) {
        this.currentIndex++;
      } else{
        this.currentIndex = -1;
      }

    },
    prevCar() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } 
      else{
        this.currentIndex = -1;
      }

    },
  },
};
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 40px auto;
  padding: 10px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.car-container {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  overflow: hidden;
  padding: 10px;
}

.car-list-container {
  display: flex;
  transition: transform 0.5s ease;
  gap: 20px;
  width: fit-content;
}

.car-card {
  border: 1px solid;
  background-color: #fff;
  border-radius: 10px;
  width: 200px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s;
  
}

.car-card:hover {
  transform: scale(1.05);
}

.car-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.car-details {
  margin-top: 10px;
}

.car-price {
  font-size: 18px;
  font-weight: bold;
  color: #4caf50;
}

.car-description {
  font-size: 14px;
  color: #888;
}

.view-details {
  background-color: #4caf50;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.view-details:hover {
  background-color: #45a049;
}

.arrow-buttons {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.arrow-button {
  background-color: white;
  border: 2px solid #4caf50;
  color: #4caf50;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;
}

.arrow-button:hover {
  background-color: #4caf50;
  color: white;
}

.left-arrow {
  position: absolute;
  left: 10px;
}

.right-arrow {
  position: absolute;
  right: 10px;
}
</style>
