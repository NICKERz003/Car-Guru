<template>
    <div class="car-container">
      <div class="car-info-header">
        <h1>{{ carName }}</h1>
        <p class="car-price">ราคา: {{ carPrice }}</p>
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
          {{ carDescription }} เป็นรถยนต์ไฟฟ้า 5 ประตูขนาดเล็ก ที่โดดเด่นด้วยดีไซน์ทันสมัย
          ห้องโดยสารกว้างขวาง และเทคโนโลยีที่น่าสนใจ เหมาะสำหรับการใช้งานในเมืองเป็นหลัก
        </p>
        <p>
          {{ carName }} ขับเคลื่อนด้วยมอเตอร์ไฟฟ้า ให้อัตราเร่งที่ดีและเงียบสงบ
          พร้อมแบตเตอรี่ที่ให้ระยะทางวิ่งที่เหมาะสมกับการใช้งานในชีวิตประจำวัน
        </p>
        <p>
          ภายในห้องโดยสารของ {{ carName }} ออกแบบมาเพื่อความสะดวกสบายของผู้ขับขี่และผู้โดยสาร
          พร้อมอุปกรณ์อำนวยความสะดวกและระบบความปลอดภัยที่ครบครัน
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
                <td>รถยนต์ไฟฟ้า</td>
              </tr>
              <tr>
                <td>ปีที่เปิดตัว</td>
                <td>2023 (ในประเทศไทย)</td>
              </tr>
              <tr>
                <td>ราคาเริ่มต้น</td>
                <td>{{ carPrice }}</td>
              </tr>
              <tr>
                <td>จำนวนที่นั่ง</td>
                <td>5 ที่นั่ง</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div class="table-section">
          <div class="table-header">
            <h3>สเปค (รุ่น Extended Range)</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>ระบบขับเคลื่อน:</td>
                <td>ขับเคลื่อนล้อหน้า (FWD)</td>
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
                <td>Permanent Magnet Synchronous Motor</td>
              </tr>
              <tr>
                <td>กำลังมอเตอร์ไฟฟ้าสูงสุด:</td>
                <td>150 กิโลวัตต์ (204 แรงม้า)</td>
              </tr>
              <tr>
                <td>แรงบิดมอเตอร์ไฟฟ้าสูงสุด:</td>
                <td>310 นิวตัน-เมตร</td>
              </tr>
              <tr>
                <td>ระบบเกียร์:</td>
                <td>อัตโนมัติ</td>
              </tr>
              <tr>
                <td>ขนาด (ยาว x กว้าง x สูง):</td>
                <td>4,290 x 1,770 x 1,570 มม.</td>
              </tr>
              <tr>
                <td>ความจุถังน้ำมัน:</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>ระบบเบรก (หน้า/หลัง):</td>
                <td>ดิสก์เบรก/ดิสก์เบรก</td>
              </tr>
              <tr>
                <td>ยาง:</td>
                <td>205/50 R17</td>
              </tr>
              <tr>
              </tr>
            </tbody>
          </table>
        </div>
  
        <p class="disclaimer">
          คำแนะนำการใช้ข้อมูล: ข้อมูลที่แสดงเป็นข้อมูลเบื้องต้นสำหรับรุ่น
          สเปคและราคาอาจแตกต่างกันไปในแต่ละรุ่นย่อย โปรดสอบถามรายละเอียดเพิ่มเติมจากผู้จำหน่าย BYD อย่างเป็นทางการ
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carName: "BYD Dolphin",
        carDescription: "รถยนต์ไฟฟ้า 5 ประตูขนาดเล็ก",
        carPrice: " ฿600,000",
        carImages: [
          "https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fnew-dolphin%2Foverview%2Fsolution%2Fexterior%2Fsurge.jpg&w=1080&q=100", // ตัวอย่างภาพ
          "https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fnew-dolphin%2Foverview%2Fsolution%2Fexterior%2Fled-tail-light.jpg&w=1080&q=100",
          "https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fnew-dolphin%2Foverview%2Fsolution%2Fexterior%2Fnfc.jpg&w=1080&q=100",
          "https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fnew-dolphin%2Foverview%2Fsolution%2Fexterior%2Frainproof.jpg&w=1080&q=100",
          "https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fnew-dolphin%2Foverview%2Fsolution%2Fexterior%2Falloy-wheel.jpg&w=1080&q=100"
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
    color: #4caf50;
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