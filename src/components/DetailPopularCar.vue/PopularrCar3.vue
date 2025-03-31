<template>
    <div class="car-container">
      <div class="car-info-header">
        <h1>{{ carName }}</h1>
        <p class="car-price">ราคา: ฿550,000</p>
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
          {{ carDescription }} เป็นรถยนต์ซีดานขนาดเล็กยอดนิยมในประเทศไทย ที่ได้รับการยอมรับในด้านความประหยัด
          ความคล่องตัว และความสะดวกสบาย เหมาะสำหรับการใช้งานในเมืองเป็นหลัก
        </p>
        <p>
          {{ carName }} มาพร้อมกับเครื่องยนต์เบนซินขนาด 1.2 ลิตร ให้การขับขี่ที่นุ่มนวลและประหยัดน้ำมัน
          พร้อมระบบส่งกำลังอัตโนมัติ ตอบโจทย์การใช้งานในชีวิตประจำวันได้อย่างลงตัว
        </p>
        <p>
          ภายในห้องโดยสารของ {{ carName }} ออกแบบมาเพื่อความสะดวกสบายของผู้ขับขี่และผู้โดยสาร
          พร้อมอุปกรณ์อำนวยความสะดวกและระบบความปลอดภัยที่จำเป็น
        </p>
  
        <div class="table-section">
          <div class="table-header">
            <h3>รายละเอียดเบื้องต้น</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>แบรนด์</td>
                <td>Toyota</td>
              </tr>
              <tr>
                <td>รุ่น</td>
                <td>{{ carName }}</td>
              </tr>
              <tr>
                <td>ประเภทรถ</td>
                <td>รถยนต์ซีดาน</td>
              </tr>
              <tr>
                <td>ปีที่เปิดตัว</td>
                <td>2022 (รุ่นปัจจุบัน)</td>
              </tr>
              <tr>
                <td>ราคา</td>
                <td>฿550,000</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div class="table-section">
          <div class="table-header">
            <h3>สเปค</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>ระบบขับเคลื่อน:</td>
                <td>ขับเคลื่อนล้อหน้า (FWD)</td>
              </tr>
              <tr>
                <td>เครื่องยนต์:</td>
                <td>1.2 ลิตร</td>
              </tr>
              <tr>
                <td>ความจุเครื่องยนต์ (CC):</td>
                <td>1,197</td>
              </tr>
              <tr>
                <td>มอเตอร์ไฟฟ้า:</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>กำลังมอเตอร์ไฟฟ้าสูงสุด:</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>แรงบิดมอเตอร์ไฟฟ้าสูงสุด:</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>ระบบเกียร์:</td>
                <td>อัตโนมัติ</td>
              </tr>
              <tr>
                <td>ขนาด (ยาว x กว้าง x สูง):</td>
                <td>4,425 x 1,740 x 1,480 มม.</td>
              </tr>
              <tr>
                <td>ความจุถังน้ำมัน:</td>
                <td>40 ลิตร</td>
              </tr>
              <tr>
                <td>ระบบเบรก (หน้า/หลัง):</td>
                <td>ดิสก์เบรก/ดรัมเบรก</td>
              </tr>
              <tr>
                <td>ยาง:</td>
                <td>185/60 R16</td>
              </tr>
              <tr>
              </tr>
            </tbody>
          </table>
        </div>
  
        <p class="disclaimer">
          คำแนะนำการใช้ข้อมูล: ข้อมูลที่แสดงเป็นข้อมูลเบื้องต้น
          สเปคและราคาอาจแตกต่างกันไปในแต่ละรุ่นย่อย โปรดสอบถามรายละเอียดเพิ่มเติมจากผู้จำหน่าย Toyota อย่างเป็นทางการ
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carName: "Toyota Yaris ATIV",
        carDescription: "รถยนต์ซีดานขนาดเล็กยอดนิยม",
        carPrice: "เริ่มต้น ฿539,000",
        carImages: [
          "https://www.toyota.co.th/media/product/series/banners/v/yarisativ/25/lead/005c9bca8ec8b0e3de4044d88b6d01a9635ff59e8a1cd682d21ee73fc963f8a2.webp", // ตัวอย่างภาพ
          "https://www.toyota.co.th/media/product/series/banners/v/yarisativ/25/lead/ddfe4e656e8dc69becc7bc58c345837e16913c4ea48c79dd4a52098b304d28e6.webp",
          "https://www.toyota.co.th/media/product/series/banners/v/yarisativ/25/lead/bf7e1270339ea791e5290c26bfe8584ae3eb4bb1902bb5cda7a61c8e880b9a41.webp",
          "https://www.toyota.co.th/media/product/series/banners/v/yarisativ/25/lead/22616f45deb5523a72eb245aa4c228e1017f5f2afde008184c658a9c44bea409.webp",
          "https://www.toyota.co.th/media/product/series/banners/v/yarisativ/25/accessories/c7667822c0add830429f9cfa109347f8f287fe75f41bbbf9e70d64c6c3f6c0af.webp"
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