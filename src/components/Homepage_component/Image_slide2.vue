<template>
<div class="head_slide"><h1>รถยนต์ที่Popular</h1></div>
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
</template>

<script>
export default {
  name: 'Image_slide2',
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

