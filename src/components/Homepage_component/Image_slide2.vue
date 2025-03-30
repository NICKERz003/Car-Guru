<template>
<div class="head_slide"><h1>รถยนต์ที่นิยมในไทย</h1></div>
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
            <router-link :to="'/car-detail/PopularCar/' + car.id"><button class="view-details">ดูรายละเอียด</button></router-link>
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
          image: 'https://www.toyota.co.th/media/product/series/banners/v/hilux_revo_prerunner/190/accessories/55a6cbfff5864415322006f4110ab14955fabba549341665a179d2e948149329.webp',
          brand: 'Toyota',
          model: 'Hilux Revo',
          price: 700000,
          description: 'รถกระบะที่ได้รับความนิยมสูงสุดในไทย ',
        },
        {
          id: 2,
          image: 'https://images.contentstack.io/v3/assets/blt04fb7dc282801dd0/blt8037dcce90e622f4/673317c0ed5a1d6b3de34aa4/4door_cab4-2-2-ddi-l-at_siberian-white_front.png',
          brand: 'Isuzu',
          model: 'D-Max',
          price: 600000,
          description: 'รถกระบะที่มีความคุ้มค่าและประหยัดน้ำมัน​',
        },
        {
          id: 3,
          image: 'https://www.toyota.co.th/media/product/series/banners/v/yarisativ/25/lead/005c9bca8ec8b0e3de4044d88b6d01a9635ff59e8a1cd682d21ee73fc963f8a2.webp',
          brand: 'Toyota',
          model: 'Yaris ATIV',
          price: 550000,
          description: 'ซีดานขนาดเล็กที่เหมาะสำหรับการใช้งานในเมือง',
        },
        {
          id: 4,
          image: 'https://www.hondafirst.co.th/sites/storage/files/styles/550x550/typmedia/olc/80006259/80006259_16-Honda+HR-V+e%3AHEV+%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99.jpg?itok=67e9a0e4',
          brand: 'Honda',
          model: 'HR-V',
          price: 800000,
          description: 'ฟังก์ชันการใช้งานที่ครบครัน',
        },
        {
          id: 5,
          image: 'https://www.hondafirst.co.th/sites/storage/files/styles/550x550/typmedia/olc/80006259/660c18b38bd63-Honda+City+Hatchback+%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99.jpg?itok=67e9a114',
          brand: 'Honda',
          model: 'City Hatchback​',
          price:  600000,
          description: 'มีความสปอร์ตและประหยัดน้ำมัน',
        },
        {
          id: 6,
          image: 'https://images.squarespace-cdn.com/content/v1/6527b5ece04b97628471bfd2/e14cd007-c7a0-45f5-a3bd-3a717b485d71/new-dolphin-frost-white-Stz-z196011367717.png',
          brand: 'BYD',
          model: 'Dolphin',
          price: 600000,
          description: 'รถยนต์ไฟฟ้าที่ได้รับความนิยม',
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

