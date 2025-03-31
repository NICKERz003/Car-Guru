<template>
    <div class="car-container">
      <div class="car-info-header">
        <h1>{{ carName }}</h1>
        <p class="car-price">ราคา: ฿1,200,000</p>
      </div>
  
      <div class="main-image-container">
        <button class="prev-button" @click="prevImage">
          <svg viewBox="0 0 24 24" fill="currentColor" class="chevron">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
        </button>
        <img :src="carImages[currentImage]" :alt="carName" class="main-image" />
        <button class="next-button" @click="nextImage">
          <svg viewBox="0 0 24 24" fill="currentColor" class="chevron">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </button>
      </div>
  
      <div class="thumbnail-gallery">
        <div
          v-for="(image, index) in carImages"
          :key="index"
          :class="{ 'thumbnail-item': true, 'active': index === currentImage }"
          @click="currentImage = index"
        >
          <img :src="image" :alt="`${carName} - ${index + 1}`" class="thumbnail" />
        </div>
      </div>
  
      <div class="car-article">
        <h2>{{ carName }}</h2>
        <p>
          {{ carDescription }} เป็นรถยนต์ SUV ไฟฟ้าดีไซน์สปอร์ตคูเป้ 5 ที่นั่ง ที่มาพร้อมเทคโนโลยีล้ำสมัยและสมรรถนะที่น่าสนใจ
          เป็นหนึ่งในรถยนต์ไฟฟ้าตระกูล Ocean Series จาก BYD
        </p>
        <p>
          {{ carName }} ขับเคลื่อนด้วยระบบไฟฟ้า 100% มอบอัตราเร่งที่รวดเร็วและเงียบสงบ
          พร้อมแบตเตอรี่ Blade Battery อันเป็นเอกลักษณ์ของ BYD ที่เน้นความปลอดภัยและอายุการใช้งานที่ยาวนาน
        </p>
        <p>
          ภายในห้องโดยสารของ {{ carName }} ออกแบบให้มีความทันสมัยและสะดวกสบาย
          ด้วยหน้าจอ Infotainment ขนาดใหญ่ที่หมุนได้ ระบบเสียงคุณภาพ และระบบช่วยเหลือการขับขี่ ADAS
        </p>
  
        <div class="table-section">
          <div class="table-header">
            <h3>รายละเอียดเบื้องต้น</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>แบรนด์</td>
                <td>BYD</td>
              </tr>
              <tr>
                <td>รุ่น</td>
                <td>{{ carName }}</td>
              </tr>
              <tr>
                <td>ประเภทรถ</td>
                <td>รถยนต์ SUV ไฟฟ้า</td>
              </tr>
              <tr>
                <td>ปีที่เปิดตัว</td>
                <td>2024</td>
              </tr>
              <tr>
                <td>ราคา</td>
                <td>฿1,149,900</td>
              </tr>
              <tr>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div class="table-section">
          <div class="table-header">
            <h3>สเปค (เบื้องต้น)</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>ระบบขับเคลื่อน:</td>
                <td>ไฟฟ้า 100% (BEV), ขับเคลื่อนล้อหน้า (RWD) หรือ ขับเคลื่อนสี่ล้อ (AWD)</td>
              </tr>
              <tr>
                <td>มอเตอร์ไฟฟ้า:</td>
                <td>Permanent Magnet Synchronous</td>
              </tr>
              <tr>
                <td>กำลังมอเตอร์ไฟฟ้าสูงสุด (RWD):</td>
                <td>230 kW (308 hp)</td>
              </tr>
              <tr>
                <td>แรงบิดสูงสุด (RWD):</td>
                <td>380 Nm</td>
              </tr>
              <tr>
                <td>กำลังมอเตอร์ไฟฟ้าสูงสุด (AWD):</td>
                <td>รวม 390 kW (523 hp)</td>
              </tr>
              <tr>
                <td>แรงบิดสูงสุด (AWD):</td>
                <td>รวม 690 Nm</td>
              </tr>
              <tr>
                <td>ระบบเกียร์:</td>
                <td>อัตโนมัติ</td>
              </tr>
              <tr>
                <td>แบตเตอรี่:</td>
                <td>BYD Blade Battery (LFP) ขนาด 82.5 kWh (โดยประมาณ)</td>
              </tr>
              <tr>
                <td>ระยะทางวิ่งสูงสุด (NEDC โดยประมาณ):</td>
                <td>542 - 567 กม.</td>
              </tr>
              <tr>
                <td>อัตราเร่ง 0-100 กม./ชม. (RWD):</td>
                <td>6.7 วินาที (โดยประมาณ)</td>
              </tr>
              <tr>
                <td>อัตราเร่ง 0-100 กม./ชม. (AWD):</td>
                <td>4.5 วินาที (โดยประมาณ)</td>
              </tr>
              <tr>
                <td>ขนาด (ยาว x กว้าง x สูง):</td>
                <td>4,830 x 1,925 x 1,620 มม.</td>
              </tr>
              <tr>
                <td>ความจุห้องสัมภาระด้านท้าย:</td>
                <td>500 ลิตร</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <p class="disclaimer">
          คำแนะนำการใช้ข้อมูล: ข้อมูลที่แสดงเป็นข้อมูลเบื้องต้นและอาจมีการเปลี่ยนแปลง
          ราคาและสเปคอย่างเป็นทางการอาจแตกต่างกันไปในแต่ละรุ่นย่อย โปรดสอบถามรายละเอียดเพิ่มเติมจากผู้จำหน่าย BYD อย่างเป็นทางการ
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carName: "BYD SEALION 7",
        carDescription: "SUV ไฟฟ้า 5 ที่นั่ง ดีไซน์สปอร์ต",
        carPrice: "฿1,200,000",
        carImages: [
          "https://www.headlightmag.com/hlmwp/wp-content/uploads/2024/11/Sealion7_Exterior-9.jpg", // ตัวอย่างภาพ
          "https://www.byd.com/content/dam/byd-site/eu/electric-cars/sealion-7/xl/byd-sealion-7-interior-01-xl.jpg",
          "https://www.byd.com/content/dam/byd-site/eu/electric-cars/sealion-7/xl/byd-sealion-7-interior-03-xl.jpg",
          "https://www.byd.com/content/dam/byd-site/eu/electric-cars/sealion-7/xl/byd-sealion-7-interior-06-xl.jpg",
          "https://www.byd.com/content/dam/byd-site/eu/electric-cars/sealion-7/xl/byd-sealion-7-interior-02-xl.jpg"
        ],
        currentImage: 0
      };
    },
    methods: {
      nextImage() {
        this.currentImage = (this.currentImage + 1) % this.carImages.length;
      },
      prevImage() {
        this.currentImage = (this.currentImage - 1 + this.carImages.length) % this.carImages.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .car-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 900px;
    margin: auto;
  }
  
  .car-info-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .car-info-header h1 {
    color: #212121;
    margin-bottom: 5px;
  }
  
  .car-info-header .car-description {
    color: #757575;
    font-size: 16px;
  }
  
  .car-info-header .car-price {
    color: #4caf50;
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
  }
  
  .main-image-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .main-image {
    width: 100%;
    max-height: 500px; /* ปรับความสูงตามต้องการ */
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
  }
  
  .prev-button {
    left: 10px;
  }
  
  .next-button {
    right: 10px;
  }
  
  .chevron {
    width: 24px;
    height: 24px;
  }
  
  .thumbnail-gallery {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    overflow-x: auto; /* เพิ่มแถบเลื่อนแนวนอนหากรูปภาพเยอะ */
  }
  
  .thumbnail-item {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid transparent;
  }
  
  .thumbnail-item.active {
    opacity: 1;
    border-color: #4caf50; /* สีเน้นเมื่อรูปภาพถูกเลือก */
  }
  
  .thumbnail {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
    display: block;
  }
  
  .car-article {
    margin-top: 30px;
    text-align: left;
    width: 100%;
    margin-bottom: 20px; /* เพิ่ม margin-bottom ให้ car-article */
  }
  
  .car-article h2 {
    color: #4caf50;
    margin-bottom: 10px;
  }
  
  .table-section {
    margin-top: 5%; /* ปรับ margin-top ของ table-section */
    width: 100%;
    padding-bottom: 30px;
  }
  
  .table-header {
    padding: 10px;
    background-color: #f2f2f2; /* สีพื้นหลังอ่อน */
    border-radius: 8px 8px 0 0; /* มุมโค้งด้านบน */
    margin-bottom: 0;
  }
  
  .table-header h3 {
    color: #4caf50; /* เปลี่ยนสีหัวข้อเป็นสีน้ำเงิน */
    margin: 0;
    font-size: 1.1em; /* ปรับขนาดตัวอักษรเล็กน้อย */
  }
  
  .special-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc; /* เส้นขอบรอบนอก */
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px; /* เพิ่ม margin-bottom ให้ตาราง */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* เพิ่มเงาเล็กน้อย */
  }
  
  .special-table th,
  .special-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .special-table tbody tr:last-of-type td {
    border-bottom: 1px solid #ccc; /* เส้นขอบด้านล่าง */
  }
  
  .special-table tbody tr:nth-child(even) {
    background-color: #f3f3f3; /* สลับสีพื้นหลังแถว */
  }
  
  .special-table td:first-child {
    font-weight: bold; /* ทำให้หัวข้อในคอลัมน์แรกหนา */
    background-color: #f9f9f9; /* สีพื้นหลังอ่อนสำหรับหัวข้อ */
  }
  
  .disclaimer {
    font-size: 14px;
    color: #9e9e9e;
    margin-top: 20px;
    font-style: italic;
  }
  </style>