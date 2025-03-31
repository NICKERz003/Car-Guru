<template>
    <div class="car-container">
      <div class="car-info-header">
        <h1>GWM ORA Good Cat</h1>
        <p class="car-price">ราคา: ฿899,000</p>
      </div>
  
      <div class="main-image-container">
        <button class="prev-button" @click="prevImage">
          <svg viewBox="0 0 24 24" fill="currentColor" class="chevron">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
        </button>
        <img :src="carImages[currentImage]" alt="GWM ORA Good Cat" class="main-image" />
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
          <img :src="image" alt="GWM ORA Good Cat Thumbnail" class="thumbnail" />
        </div>
      </div>
  
      <div class="car-article">
        <h2>GWM ORA Good Cat</h2>
        <p>
        เป็นรถยนต์แฮทช์แบ็กไฟฟ้าเต็มรูปแบบ ที่มาพร้อมกับการออกแบบสไตล์เรโทร-ฟิวเจอร์ริสติกอันโดดเด่น ซึ่งได้รับความสนใจอย่างมากตั้งแต่เปิดตัว เป็นที่รู้จักจากรูปลักษณ์ที่น่ารัก ฟีเจอร์ที่ครบครัน และความคุ้มค่าในตลาดรถยนต์ไฟฟ้า
        </p>
        <p>
        นำเสนอห้องโดยสารที่สะดวกสบายและติดตั้งอุปกรณ์มาอย่างดี โดยมักจะมีสัมผัสระดับพรีเมียม เช่น เบาะหนังและการเปิดประทุนแบบพาโนรามาในรุ่นที่สูงกว่า ออกแบบมาเพื่อการขับขี่ในเมืองและการใช้งานในชีวิตประจำวัน โดยมีระยะทางวิ่งที่เหมาะสมต่อการชาร์จหนึ่งครั้ง
        </p>
        <p>
        มีให้เลือกหลายรุ่นย่อย ตอบสนองความต้องการและงบประมาณที่แตกต่างกัน ด้วยความจุแบตเตอรี่และคุณสมบัติที่หลากหลาย รุ่น GT เน้นการออกแบบและสมรรถนะที่สปอร์ตยิ่งขึ้น ด้วยมอเตอร์ที่ทรงพลังกว่าและองค์ประกอบภายนอกที่เป็นเอกลักษณ์
        </p>
  
        <div class="table-section">
          <div class="table-header">
            <h3>รายละเอียดเบื้องต้น</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>แบรนด์</td>
                <td>GWM (Great Wall Motors)</td>
              </tr>
              <tr>
                <td>รุ่น</td>
                <td>ORA Good Cat</td>
              </tr>
              <tr>
                <td>ประเภทรถ</td>
                <td>รถยนต์ Hatchback ไฟฟ้า 100%</td>
              </tr>
              <tr>
                <td>ราคา</td>
                <td>฿899,000</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
  
        <div class="table-section">
          <div class="table-header">
            <h3>สเปคเบื้องต้น (รุ่น Pro MY2025 โดยประมาณ)</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>ระบบขับเคลื่อน:</td>
                <td>ล้อหน้า</td>
              </tr>
              <tr>
                <td>มอเตอร์ไฟฟ้า:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>กำลังมอเตอร์ไฟฟ้าสูงสุด:</td>
                <td>105 kW (143 แรงม้า)</td>
              </tr>
              <tr>
                <td>แรงบิดมอเตอร์ไฟฟ้าสูงสุด:</td>
                <td>210 นิวตัน-เมตร</td>
              </tr>
              <tr>
                <td>ความจุแบตเตอรี่:</td>
                <td>47.8 kWh (LiFePO4)</td>
              </tr>
              <tr>
                <td>ระยะทางวิ่งสูงสุด (NEDC):</td>
                <td>400 กม./ชาร์จ</td>
              </tr>
              <tr>
                <td>ระบบเกียร์:</td>
                <td>อัตโนมัติ</td>
              </tr>
              <tr>
                <td>ขนาด (ยาว x กว้าง x สูง):</td>
                <td>4,235 x 1,825 x 1,596 มม.</td>
              </tr>
              <tr>
                <td>ระบบเบรก (หน้า/หลัง):</td>
                <td>ดิสก์เบรก/ดิสก์เบรก</td>
              </tr>
              <tr>
                <td>ยาง:</td>
                <td>205/55 R17</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
  
        <p class="disclaimer">
          คำแนะนำการใช้ข้อมูล: ข้อมูลที่แสดงเป็นข้อมูลเบื้องต้นของ GWM ORA Good Cat MY2025 รุ่น Pro โดยประมาณ
          สเปคและราคาอาจแตกต่างกันไปในแต่ละรุ่นย่อย โปรดตรวจสอบข้อมูลอย่างเป็นทางการจาก GWM Thailand อีกครั้ง
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carName: "GWM ORA Good Cat",
        carImages: [
          "https://newretailwebsite.s3.ap-southeast-1.amazonaws.com/public/images/ora-cat/p3-ora-cat-w04.jpg", 
          "https://newretailwebsite.s3.ap-southeast-1.amazonaws.com/public/images/ora-cat/p3-ora-cat-w03.jpg",
          "https://newretailwebsite.s3.ap-southeast-1.amazonaws.com/public/images/ora-cat/p3-ora-cat-w02.jpg",
          "https://newretailwebsite.s3.ap-southeast-1.amazonaws.com/public/images/ora-cat/p3-ora-cat-w01.jpg",
          "https://newretailwebsite.s3.ap-southeast-1.amazonaws.com/public/images/ora-cat/p6-ora-cat-01.jpg"
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
  /* Styles remain the same as the MG ES example, you can customize further if needed */
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
    color: #4caf50; /* You can adjust the color */
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
    max-height: 500px;
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
    overflow-x: auto;
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
    border-color: #4caf50; /* Adjust color */
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
    margin-bottom: 20px;
  }
  
  .car-article h2 {
    color: #4caf50; /* Adjust color */
    margin-bottom: 10px;
  }
  
  .table-section {
    margin-top: 5%;
    width: 100%;
    padding-bottom: 30px;
  }
  
  .table-header {
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 8px 8px 0 0;
    margin-bottom: 0;
  }
  
  .table-header h3 {
    color: #4caf50; /* Adjust color */
    margin: 0;
    font-size: 1.1em;
  }
  
  .special-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .special-table th,
  .special-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .special-table tbody tr:last-of-type td {
    border-bottom: 1px solid #ccc;
  }
  
  .special-table tbody tr:nth-child(even) {
    background-color: #f3f3f3;
  }
  
  .special-table td:first-child {
    font-weight: bold;
    background-color: #f9f9f9;
  }
  
  .disclaimer {
    font-size: 14px;
    color: #9e9e9e;
    margin-top: 20px;
    font-style: italic;
  }
  </style>