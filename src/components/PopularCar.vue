<template>
  <section id="car-detail">
    <h1>{{ car.brand }} {{ car.model }}</h1>
    <div class="car-detail-container">
      <div class="car-image">
        <img :src="car.image" alt="Car image" />
      </div>
      <div class="car-details">
        <p class="car-price">฿{{ car.price.toLocaleString() }}</p>
        <p class="car-description">{{ car.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DetailPopularCar',
  props: ['id'], // รับค่า id จาก URL
  data() {
    return {
      cars: [
        { 
        id: 1, 
        image: 'https://www.toyota.co.th/media/product/series/banners/v/hilux_revo_prerunner/190/accessories/55a6cbfff5864415322006f4110ab14955fabba549341665a179d2e948149329.webp', 
        brand: 'Toyota', 
        model: 'Hilux Revo', 
        price: 700000, 
        description: 'Toyota Hilux Revo เป็นรถกระบะที่ได้รับความนิยมอย่างสูงในประเทศไทยและทั่วโลก ด้วยความทนทาน, ความสมบูรณ์แบบในการใช้งานทั้งในเมืองและการใช้งานในงานหนัก พร้อมทั้งเทคโนโลยีและความสะดวกสบายที่ได้รับการพัฒนาอย่างต่อเนื่อง รุ่นนี้เหมาะสำหรับทั้งการใช้งานในชีวิตประจำวันและการทำงานที่ต้องการความสามารถในการขนส่ง' },

        { 
        id: 2,
        image: 'https://images.contentstack.io/v3/assets/blt04fb7dc282801dd0/blt8037dcce90e622f4/673317c0ed5a1d6b3de34aa4/4door_cab4-2-2-ddi-l-at_siberian-white_front.png', 
        brand: 'Isuzu', 
        model: 'D-Max', 
        price: 600000, 
        description: 'Isuzu D-Max เป็นรถกระบะที่ได้รับความนิยมอย่างมากในประเทศไทยและหลายประเทศทั่วโลก โดยเฉพาะในกลุ่มผู้ใช้ที่ต้องการรถยนต์ที่มีความทนทานสูงและสมรรถนะดีในการใช้งานทั้งในเมืองและการทำงานหนัก รวมถึงการขับขี่ในสภาพถนนที่หลากหลาย' },

        { 
        id: 3, 
        image: 'https://www.toyota.co.th/media/product/series/banners/v/yarisativ/25/lead/005c9bca8ec8b0e3de4044d88b6d01a9635ff59e8a1cd682d21ee73fc963f8a2.webp', 
        brand: 'Toyota', 
        model: 'Yaris ATIV', 
        price: 550000, 
        description: 'Toyota Yaris ATIV เป็นรถยนต์ประเภท ซีดาน ขนาดเล็ก ที่พัฒนาโดย Toyota สำหรับตลาดในประเทศไทย โดยเน้นการออกแบบที่ทันสมัยและการใช้งานที่คุ้มค่า เหมาะสำหรับผู้ที่มองหารถยนต์ที่ประหยัดน้ำมันและสะดวกสบายในชีวิตประจำวัน' },

        {
        id: 4, 
        image: 'https://www.hondafirst.co.th/sites/storage/files/styles/550x550/typmedia/olc/80006259/80006259_16-Honda+HR-V+e%3AHEV+%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99.jpg?itok=67e9a0e4', 
        brand: 'Honda', 
        model: 'HR-V', 
        price: 800000, 
        description: 'Honda HR-V เป็น SUV ขนาดเล็กที่ได้รับความนิยมสูงในประเทศไทย โดยเฉพาะในกลุ่มผู้ใช้ที่ต้องการรถยนต์ที่มีความสะดวกสบายในการขับขี่, เทคโนโลยีที่ทันสมัย, และสมรรถนะที่ดีในทุกสภาพถนน รวมถึงดีไซน์ที่มีความสปอร์ตและหรูหรา' },
        {
        id: 5,
        image: 'https://www.hondafirst.co.th/sites/storage/files/styles/550x550/typmedia/olc/80006259/660c18b38bd63-Honda+City+Hatchback+%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99.jpg?itok=67e9a114',
        brand: 'Honda',
        model: 'City Hatchback​',
        price:  600000,
        description: 'Honda City Hatchback เป็นรถยนต์ประเภท แฮทช์แบ็ค ขนาดเล็กที่พัฒนาโดย Honda เพื่อให้เหมาะกับการใช้งานในเมืองและเหมาะสำหรับคนที่ต้องการรถยนต์ที่มีดีไซน์ทันสมัย สะดวกสบาย และมีสมรรถนะที่ดี พร้อมทั้งความประหยัดน้ำมันและฟีเจอร์ที่ทันสมัย' },
        {
        id: 6, 
        image: 'https://images.squarespace-cdn.com/content/v1/6527b5ece04b97628471bfd2/e14cd007-c7a0-45f5-a3bd-3a717b485d71/new-dolphin-frost-white-Stz-z196011367717.png',
        brand: 'BYD',
        model: 'Dolphin',
        price: 600000, 
        description: 'BYD Dolphin เป็น รถยนต์ไฟฟ้า (EV) ขนาดเล็กที่ผลิตโดย BYD (บีวายดี) ซึ่งเป็นหนึ่งในผู้ผลิตรถยนต์ไฟฟ้าที่ใหญ่ที่สุดในจีน โดยรุ่นนี้ได้รับการออกแบบมาเพื่อให้เหมาะกับการใช้งานในเมืองและตอบโจทย์ผู้ที่มองหารถยนต์ไฟฟ้าที่มีราคาจับต้องได้ พร้อมกับสมรรถนะที่ดีและเทคโนโลยีทันสมัย' },
      ],
      car: null,
    };
  },
  created() {
    // ค้นหาข้อมูลของรถที่เลือกตาม id
    const carId = parseInt(this.id);
    this.car = this.cars.find(car => car.id === carId);
  },
};
</script>

<style scoped>
#car-detail {
  padding: 20px;
  text-align: center;
}

.car-detail-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.car-image img {
    width: 800px;
    height: 500px;
  object-fit: cover;
}

.car-details {
  max-width: 500px;
  text-align: left;
}

.car-price {
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
}

.car-description {
  font-size: 16px;
  color: #888;
}
</style>
