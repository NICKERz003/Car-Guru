<template>
    <div class="car-container">
      <div class="car-info-header">
        <h1>{{ carName }}</h1>
        <p class="car-price">ราคา: ฿959,000</p>
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
          {{ carDescription }} เป็นรถยนต์ Station Wagon ไฟฟ้า 100% ที่มาพร้อมดีไซน์โฉบเฉี่ยว
          พื้นที่ภายในกว้างขวาง และเทคโนโลยีที่ทันสมัย เหมาะสำหรับครอบครัวและผู้ที่ต้องการความคล่องตัวในการใช้งาน
        </p>
        <p>
          {{ carName }} ขับเคลื่อนด้วยมอเตอร์ไฟฟ้า ให้พละกำลังที่เพียงพอต่อการใช้งานในชีวิตประจำวัน
          พร้อมแบตเตอรี่ที่ให้ระยะทางวิ่งที่น่าพอใจ และรองรับการชาร์จที่หลากหลาย
        </p>
        <p>
          ภายในห้องโดยสารของ {{ carName }} ออกแบบมาเพื่อความสะดวกสบายของผู้โดยสาร
          ด้วยพื้นที่เก็บสัมภาระขนาดใหญ่ และอุปกรณ์อำนวยความสะดวกที่ครบครัน
        </p>
  
        <div class="table-section">
          <div class="table-header">
            <h3>รายละเอียดเบื้องต้น</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>แบรนด์</td>
                <td>MG</td>
              </tr>
              <tr>
                <td>รุ่น</td>
                <td>{{ carName }}</td>
              </tr>
              <tr>
                <td>ประเภทรถ</td>
                <td>รถยนต์ Station Wagon ไฟฟ้า 100%</td>
              </tr>
              <tr>
                <td>ปีที่เปิดตัว</td>
                <td>2023</td>
              </tr>
              <tr>
                <td>ราคาเริ่มต้น</td>
                <td>{{ carPrice }}</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
  
        <div class="table-section">
          <div class="table-header">
            <h3>สเปคเบื้องต้น (รุ่น Long Range)</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>ระบบขับเคลื่อน:</td>
                <td>ล้อหน้า</td>
              </tr>
              <tr>
                <td>เครื่องยนต์:</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>ความจุเครื่องยนต์ (CC):</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>มอเตอร์ไฟฟ้า:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>กำลังมอเตอร์ไฟฟ้าสูงสุด:</td>
                <td>130 กิโลวัตต์ (177 แรงม้า)</td>
              </tr>
              <tr>
                <td>แรงบิดมอเตอร์ไฟฟ้าสูงสุด:</td>
                <td>280 นิวตัน-เมตร</td>
              </tr>
              <tr>
                <td>ระบบเกียร์:</td>
                <td>อัตโนมัติ</td>
              </tr>
              <tr>
                <td>ขนาด (ยาว x กว้าง x สูง):</td>
                <td>4,600 x 1,818 x 1,543 มม.</td>
              </tr>
              <tr>
                <td>ความจุแบตเตอรี่:</td>
                <td>51 kWh</td>
              </tr>
              <tr>
                <td>ระยะทางวิ่งสูงสุด (NEDC):</td>
                <td>412 กม.</td>
              </tr>
              <tr>
                <td>ระบบเบรก (หน้า/หลัง):</td>
                <td>ดิสก์เบรก/ดิสก์เบรก</td>
              </tr>
              <tr>
                <td>ยาง:</td>
                <td>215/55 R17</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
  
        <p class="disclaimer">
          คำแนะนำการใช้ข้อมูล: ข้อมูลที่แสดงเป็นข้อมูลเบื้องต้นของ MG ES รุ่น Long Range
          สเปคและราคาอาจแตกต่างกันไปในแต่ละรุ่นย่อย โปรดตรวจสอบข้อมูลอย่างเป็นทางการจาก MG Thailand อีกครั้ง
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carName: "MG ES",
        carDescription: "รถยนต์ Station Wagon ไฟฟ้า 100%",
        carPrice: "฿959,0000",
        carImages: [
          "https://mgautogallerygroup.com/wp-content/uploads/2023/03/2-%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99-MGES.jpg", 
          "https://mgautogallerygroup.com/wp-content/uploads/2023/03/New-MG-ES-Charging-1024x682.jpg",
          "https://mgautogallerygroup.com/wp-content/uploads/2023/03/1-%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B8%99%E0%B8%AD%E0%B8%81-MGES.jpg",
          "https://ex-prod.mgcars.com/mg-es-2023/images/overview/color/car-silver.png",
          "https://www.headlightmag.com/hlmwp/wp-content/uploads/2023/03/MG_ES_Exterior_36.jpg"
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
    color: #4caf50; /* เปลี่ยนสีราคา */
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
    color: #4caf50; /* เปลี่ยนสีหัวข้อ */
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
    color: #4caf50; /* เปลี่ยนสีหัวข้อตาราง */
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