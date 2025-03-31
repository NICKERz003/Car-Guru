<template>
<div class="head_slide"><h1>รถยนต์ที่มาใหม่ในไทย</h1></div>
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
            <router-link :to="'/car-detail/DetailNewCar/' + car.id"><button class="view-details">ดูรายละเอียด</button></router-link>
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
  name: 'Image_slide3',
  data() {
    return {
      cars: [
        { 
        id: 1, 
        image: 'https://mpics.mgronline.com/pics/Images/568000002700501.JPEG', 
        brand: 'Mitsubishi', 
        model: 'XFORCE HEV', 
        price: 899000, 
        description: 'รถยนต์ SUV ไฮบริด' },
        { 
        id: 2, 
        image: 'https://krungsrimarket.cjdataservice.com/uploads/articles/article_content_1bc.jpg', 
        brand: 'Nissan', 
        model: 'Serena e-POWER', 
        price: 1690000, 
        description: 'รถยนต์ MPV ไฮบริด' },
        { 
        id: 3, 
        image: 'https://cdn.wheel-size.com/thumbs/d3/97/d397b9de6255f8a9a881236ce1b82253.jpg', 
        brand: 'Zeekr', 
        model: '009', 
        price: 3099000, 
        description: 'MPV ไฟฟ้าระดับพรีเมียม' },
        { 
        id: 4, 
        image: 'https://autostation.com/wp-content/uploads/2025/03/05-DEEPAL-S05-1-scaled.jpg', 
        brand: 'Deepal', 
        model: 'S05 ', 
        price: 799000, 
        description: 'SUV ขนาดกลาง' },
        { 
        id: 5, 
        image: 'https://www.omodajaecoo.co.th/v2/images/Ultimate-Mint-green-with-black-roof.png', 
        brand: 'OMODA', 
        model: 'C5 EV', 
        price: 899000, 
        description: 'Compact Crossover SUV' },
        { 
        id: 6, 
        image: 'https://www.headlightmag.com/hlmwp/wp-content/uploads/2024/11/Sealion7_Exterior-9.jpg', 
        brand: 'BYD', 
        model: 'SEALION 7', 
        price: 1200000, 
        description: ' C-SUV สปอร์ตไฟฟ้า' },
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

