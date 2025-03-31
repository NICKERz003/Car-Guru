<template>
<div class="head_slide"><h1>รถยนต์ไฟฟ้า</h1></div>
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
            <router-link :to="'/car-detail/ElectricCar/' + car.id"><button class="view-details">ดูรายละเอียด</button></router-link>
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
  name: 'Image_slide1',
  data() {
    return {
      cars: [
        {
          id: 1,
          image: 'https://www.mercedes-benz.co.th/content/dam/hq/passengercars/cars/g-class/n465-pi/overview/exterior/03-2024/images/mercedes-benz-g-class-n465-exterior-protectivestrips-2176x1224-03-2024.jpg/1740019670643.jpg?im=Crop,rect=(0,0,2176,1224);Resize=(1280)',
          brand: 'Mercedes',
          model: 'G-Class Electric',
          price: 9500000,
          description: 'พบกับราคานี้ในประเทศไทย',
        },
        {
          id: 2,
          image: 'https://autolifethailand.tv/wp-content/uploads/2025/03/MG_S5_EV_TH_001-1.jpg',
          brand: 'BYD',
          model: 'S5 EV',
          price: 849900,
          description: 'รถไฟฟ้าราคาเยี่ยม',
        },
        {
          id: 3,
          image: 'https://autolifethailand.tv/wp-content/uploads/2025/02/MG_IM6_TH_014.jpg',
          brand: 'BYD',
          model: 'IM6',
          price: 1799000,
          description: 'รถไฟฟ้า สำหรับคนรักสิ่งแวดล้อม',
        },
        {
          id: 4,
          image: 'https://autolifethailand.tv/wp-content/uploads/2024/11/GEELY_EX5_TH_001-1.jpg',
          brand: 'Geely',
          model: 'EX5',
          price: 949000,
          description: 'พร้อมราคาสุดคุ้ม',
        },
        {
          id: 5,
          image: 'https://s359.kapook.com//pagebuilder/98da6012-eb4b-417e-b333-c8e32c0762dd.jpg',
          brand: 'MG',
          model: 'ES',
          price: 959000 ,
          description: 'ผสานความเป็น EV มีฟังก์ชันที่ครบครัน',
        },
        {
          id: 6,
          image: 'https://s359.kapook.com//pagebuilder/090c5dee-265c-4aa4-ae2d-8d74073a4d4d.jpg',
          brand: 'GWM',
          model: 'ORA Good Cat',
          price: 899000,
          description: 'ดีไซน์น่ารักเป็นเอกลักษณ์',
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

<style >
.head_slide {
    width: 100%;
}

h1 {
    display: flex;   
    margin-bottom: 20px;
    font-size: 24px;
    text-shadow: 5px 5px 10px rgb(180, 180, 180);
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
  background-color: #e6e6e6;
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