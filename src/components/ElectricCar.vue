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
  name: 'DetailElectricCar',
  props: ['id'], // รับค่า id จาก URL
  data() {
    return {
      cars: [
        { 
        id: 1, 
        image: 'https://www.mercedes-benz.co.th/content/dam/hq/passengercars/cars/g-class/n465-pi/overview/exterior/03-2024/images/mercedes-benz-g-class-n465-exterior-protectivestrips-2176x1224-03-2024.jpg/1740019670643.jpg?im=Crop,rect=(0,0,2176,1224);Resize=(1280)', 
        brand: 'Mercedes', 
        model: 'G-Class Electric', 
        price: 9500000, 
        description: 'เป็นรถยนต์ไฟฟ้าที่มีลักษณะการออกแบบและสมรรถนะที่คงไว้จากรุ่น G-Class ที่มีชื่อเสียงอย่างสูง โดย Mercedes-Benz นำเสนอ EQG เป็นรถยนต์ไฟฟ้าในกลุ่ม SUV ระดับพรีเมียมที่มีความทนทานและความสามารถในการขับขี่ในทุกสภาพพื้นผิวแบบเดียวกับ G-Class รุ่นเครื่องยนต์สันดาป ' },

        { 
        id: 2,
        image: 'https://autolifethailand.tv/wp-content/uploads/2025/03/MG_S5_EV_TH_001-1.jpg', 
        brand: 'BYD', 
        model: 'S5 EV', 
        price: 849900, 
        description: 'BYD S5 EV เป็นรถยนต์ไฟฟ้าในกลุ่ม SUV ที่ผลิตโดยบริษัท BYD (บีวายดี) ซึ่งเป็นหนึ่งในผู้ผลิตรถยนต์ไฟฟ้ารายใหญ่ของจีน โดยรถยนต์รุ่นนี้ถูกออกแบบมาเพื่อตอบโจทย์ผู้ที่ต้องการรถยนต์ไฟฟ้าที่มีขนาดใหญ่ พร้อมสมรรถนะดี และมีความสะดวกสบายในการใช้งาน' },

        { 
        id: 3, 
        image: 'https://autolifethailand.tv/wp-content/uploads/2025/02/MG_IM6_TH_014.jpg', 
        brand: 'BYD', 
        model: 'IM6', 
        price: 1799000, 
        description: 'BYD IM6 เป็นรถยนต์ไฟฟ้าในกลุ่ม SUV ที่ผลิตโดย BYD ซึ่งเป็นผู้ผลิตรถยนต์ไฟฟ้าชั้นนำจากประเทศจีน โดย IM6 เป็นส่วนหนึ่งของกลุ่ม BYD IM series ซึ่งเน้นการออกแบบที่หรูหรา เทคโนโลยีทันสมัย และสมรรถนะที่ยอดเยี่ยมสำหรับตลาดรถยนต์ไฟฟ้าในอนาคต' },

        {
        id: 4, 
        image: 'https://autolifethailand.tv/wp-content/uploads/2024/11/GEELY_EX5_TH_001-1.jpg', 
        brand: 'Geely', 
        model: 'EX5', 
        price: 949000, 
        description: 'Geely EX5 เป็นรถยนต์ไฟฟ้ารุ่นหนึ่งที่ผลิตโดย Geely บริษัทผู้ผลิตรถยนต์จากประเทศจีน ซึ่งมุ่งเน้นในการพัฒนาและผลิตรถยนต์ไฟฟ้าที่มีประสิทธิภาพสูง โดย EX5 เป็น SUV ขนาดกลางที่ได้รับการออกแบบมาให้ตอบสนองความต้องการของผู้ใช้ที่มองหารถยนต์ไฟฟ้าที่มีเทคโนโลยีทันสมัย, ความสะดวกสบาย, และสมรรถนะที่ดีเยี่ยม' },
        {
        id: 5,
        image: 'https://s359.kapook.com//pagebuilder/98da6012-eb4b-417e-b333-c8e32c0762dd.jpg',
        brand: 'MG',
        model: 'ES',
        price: 959000 ,
        description: 'เมื่อรถ STATION WAGON ผสานความเป็น EV รถคันนี้จึงพร้อมเป็นทุกอย่าง เพื่อความสะดวกสบายในการขับขี่ภายใต้แนวคิด BRIT DYNAMIC จึงมาพร้อมสมรรถนะที่คงจุดเด่นของ STATION WAGON เอาไว้อย่างดี ทั้งการขับขี่ที่สนุก (PERFORMANCE) ควบคุมรถได้ดั่งใจ (HANDLING) การออกแบบที่เรียบหรู (DESIGN) รวมถึงเทคโนโลยีความปลอดภัยแบบจัดเต็ม (SAFETY) ทั้งยังมีความกว้างที่มากพอสำหรับทั้งครอบครัว (CAPACITY) และเบาะที่ปรับพับได้ตาใจ (FLEXIBILITY)ทำให้ NEW MG ES มีฟังก์ชันที่ครบครัน พร้อมเป็นทุกอย่างเพื่อให้คุณ และครอบครัวเอ็นจอยกับทุกโมเมนต์ได้อย่างเต็มที่สะดวกสบายในทุกการใช้งานตลอดเส้นทาง' },
        {
        id: 6, 
        image: 'https://s359.kapook.com//pagebuilder/090c5dee-265c-4aa4-ae2d-8d74073a4d4d.jpg',
        brand: 'GWM',
        model: 'ORA Good Cat',
        price: 899000,
        description: 'ORA Good Cat รถยนต์ไฟฟ้าขนาดซับคอมแพกต์ ตัวถังแฮตช์แบ็ก 5 ประตู 5 ที่นั่ง ดีไซน์น่ารักเป็นเอกลักษณ์ มี 2 รุ่นย่อย Pro กับ Ultra กำลัง 143 แรงม้า ระยะทางวิ่ง 480 กิโลเมตร (NEDC) มีหลังคากระจก และระบบช่วยขับขี่ ADAS ถ้าเป็นรุ่น Ultra จะมีเบาะนวดฝั่งคนขับเพิ่มมาให้ด้วย  ' },
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
    width: 100%;
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
