<template>
    <div class="car-container">
      <div class="car-info-header">
        <h1>{{ carName }}</h1>
        <p class="car-price">{{ carPrice }}</p>
        <p class="car-description">{{ carDescription }}</p>
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
          {{ carName }} เป็นรถยนต์ไฟฟ้ารุ่นใหม่จาก BYD ที่ผสมผสานระหว่างดีไซน์โมเดิร์นกับเทคโนโลยีล้ำสมัย 
          พร้อมให้ประสบการณ์การขับขี่ที่สมบูรณ์แบบสำหรับครอบครัว
        </p>
        <p>
          ด้วยระบบขับเคลื่อนไฟฟ้าทั้งหมด {{ carName }} ให้สมรรถนะการขับขี่ที่ราบรื่น 
          และเป็นมิตรกับสิ่งแวดล้อม พร้อมระยะทางการขับขี่ที่ยาวไกลในหนึ่งการชาร์จ
        </p>
        <p>
          ภายในห้องโดยสารของ {{ carName }} ออกแบบมาเพื่อความสะดวกสบายสูงสุด 
          พร้อมเทคโนโลยีครบครันและพื้นที่กว้างขวางสำหรับผู้โดยสารทุกคน
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
                <td>รถยนต์ไฟฟ้า (EV)</td>
              </tr>
              <tr>
                <td>รูปแบบ</td>
                <td>SUV ไฟฟ้า</td>
              </tr>
              <tr>
                <td>ราคา</td>
                <td>{{ carPrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div class="table-section">
          <div class="table-header">
            <h3>สเปคเทคนิค</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>ระบบขับเคลื่อน:</td>
                <td>ไฟฟ้า 100%</td>
              </tr>
              <tr>
                <td>ประเภทแบตเตอรี่:</td>
                <td>Lithium Iron Phosphate (LFP)</td>
              </tr>
              <tr>
                <td>กำลังมอเตอร์:</td>
                <td>204 แรงม้า</td>
              </tr>
              <tr>
                <td>แรงบิดสูงสุด:</td>
                <td>310 นิวตัน-เมตร</td>
              </tr>
              <tr>
                <td>ระยะทางต่อการชาร์จ:</td>
                <td>มากกว่า 500 กม. (WLTP)</td>
              </tr>
              <tr>
                <td>ระบบชาร์จเร็ว:</td>
                <td>รองรับ DC Fast Charging</td>
              </tr>
              <tr>
                <td>ความจุแบตเตอรี่:</td>
                <td>60.48 kWh</td>
              </tr>
              <tr>
                <td>ระบบเกียร์:</td>
                <td>อัตโนมัติ 1 สปีด</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div class="features-section">
          <div class="table-header">
            <h3>ฟีเจอร์สำคัญ</h3>
          </div>
          <ul class="features-list">
            <li>ระบบ BYD DiPilot ขับช่วยอัตโนมัติ</li>
            <li>หน้าจอสัมผัสขนาด 15.6 นิ้ว</li>
            <li>ระบบเสียงดิจิตอล</li>
            <li>ไฟหน้า LED อัจฉริยะ</li>
            <li>ระบบควบคุมอุณหภูมิ 2 โซน</li>
            <li>กล้องรอบคันรถ 360 องศา</li>
            <li>ระบบช่วยถอยหลังอัตโนมัติ</li>
          </ul>
        </div>
  
        <p class="disclaimer">
          ข้อมูลอาจมีการเปลี่ยนแปลง โปรดตรวจสอบกับตัวแทนจำหน่าย BYD สำหรับข้อมูลล่าสุดและรายละเอียดที่ถูกต้อง
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carName: "BYD IM6",
        carDescription: "รถไฟฟ้า SUV ระดับพรีเมียม",
        carPrice: "฿1,299,000",
        carImages: [
          "https://www.headlightmag.com/hlmwp/wp-content/uploads/2025/03/MG-IM6-Performance-AWD-Exterior-1.jpg", 
          "https://mpics.mgronline.com/pics/Images/568000002632601.JPEG",
          "https://www.headlightmag.com/hlmwp/wp-content/uploads/2025/03/MG-IM6-Interior-7.jpg",
          "https://www.headlightmag.com/hlmwp/wp-content/uploads/2025/03/MG-IM6-Interior-12.jpg",
          "https://www.headlightmag.com/hlmwp/wp-content/uploads/2025/03/MG-IM6-Central-Display-4.jpg"
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
    font-size: 2rem;
  }
  
  .car-info-header .car-description {
    color: #757575;
    font-size: 16px;
    margin-top: 5px;
  }
  
  .car-info-header .car-price {
    color: #4caf50;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 10px 0;
  }
  
  .main-image-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
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
    transition: background 0.3s;
  }
  
  .prev-button:hover,
  .next-button:hover {
    background: rgba(0, 0, 0, 0.8);
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
    padding-bottom: 10px;
  }
  
  .thumbnail-item {
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid transparent;
    flex-shrink: 0;
  }
  
  .thumbnail-item:hover {
    opacity: 0.9;
  }
  
  .thumbnail-item.active {
    opacity: 1;
    border-color: #4caf50;
  }
  
  .thumbnail {
    width: 100px;
    height: 75px;
    object-fit: cover;
    border-radius: 3px;
    display: block;
  }
  
  .car-article {
    margin-top: 30px;
    text-align: left;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .car-article h2 {
    color: #4caf50;
    margin-bottom: 15px;
    font-size: 1.8rem;
  }
  
  .car-article p {
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  .table-section {
    margin-top: 30px;
    width: 100%;
    padding-bottom: 30px;
  }
  
  .features-section {
    margin-top: 30px;
    width: 100%;
  }
  
  .table-header {
    padding: 12px 15px;
    background-color: #f2f2f2;
    border-radius: 8px 8px 0 0;
    margin-bottom: 0;
  }
  
  .table-header h3 {
    color: #4caf50;
    margin: 0;
    font-size: 1.2rem;
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
    border-bottom: none;
  }
  
  .special-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .special-table td:first-child {
    font-weight: bold;
    width: 40%;
    background-color: #f3f3f3;
  }
  
  .features-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
  }
  
  .features-list li {
    padding: 10px 15px;
    background-color: #f9f9f9;
    border-radius: 5px;
    position: relative;
    padding-left: 25px;
  }
  
  .features-list li::before {
    content: "✓";
    color: #4caf50;
    position: absolute;
    left: 10px;
  }
  
  .disclaimer {
    font-size: 14px;
    color: #9e9e9e;
    margin-top: 30px;
    font-style: italic;
    border-top: 1px solid #eee;
    padding-top: 15px;
  }
  </style>