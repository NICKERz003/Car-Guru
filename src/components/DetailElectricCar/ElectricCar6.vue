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
.car-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 900px;
  margin: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.car-info-header {
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.car-info-header h1 {
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 2.2rem;
  font-weight: 700;
}

.car-info-header .car-description {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-top: 5px;
}

.car-info-header .car-price {
  color: #e74c3c;
  font-weight: bold;
  font-size: 1.8rem;
  margin: 15px 0;
  background-color: white;
  padding: 10px 20px;
  border-radius: 30px;
  display: inline-block;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.main-image-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.main-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.main-image:hover {
  transform: scale(1.02);
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prev-button:hover,
.next-button:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: translateY(-50%) scale(1.1);
}

.prev-button {
  left: 20px;
}

.next-button {
  right: 20px;
}

.chevron {
  width: 28px;
  height: 28px;
}

.thumbnail-gallery {
  display: flex;
  gap: 15px;
  margin: 20px 0;
  overflow-x: auto;
  padding-bottom: 15px;
  width: 100%;
}

.thumbnail-item {
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid transparent;
  flex-shrink: 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.thumbnail-item:hover {
  opacity: 0.9;
  transform: translateY(-5px);
}

.thumbnail-item.active {
  opacity: 1;
  border-color: #e74c3c;
  transform: translateY(-5px);
}

.thumbnail {
  width: 120px;
  height: 90px;
  object-fit: cover;
  display: block;
}

.car-article {
  margin-top: 30px;
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
  background-color: #f8f9fa;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
}

.car-article h2 {
  color: #e74c3c;
  margin-bottom: 20px;
  font-size: 1.8rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 10px;
}

.car-article p {
  margin-bottom: 20px;
  line-height: 1.7;
  color: #34495e;
  font-size: 1.05rem;
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
  padding: 15px 20px;
  background-color: #e74c3c;
  border-radius: 10px 10px 0 0;
  margin-bottom: 0;
}

.table-header h3 {
  color: white;
  margin: 0;
  font-size: 1.3rem;
}

.special-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
}

.special-table th,
.special-table td {
  padding: 15px 20px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.special-table tbody tr:last-of-type td {
  border-bottom: none;
}

.special-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.special-table tbody tr:hover {
  background-color: #f1f1f1;
}

.special-table td:first-child {
  font-weight: 600;
  width: 40%;
  background-color: #f3f3f3;
  color: #2c3e50;
}

.features-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.features-list li {
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  position: relative;
  padding-left: 35px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  color: #34495e;
  font-weight: 500;
}

.features-list li:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.features-list li::before {
  content: "✓";
  color: #e74c3c;
  position: absolute;
  left: 15px;
  font-weight: bold;
  font-size: 1.1rem;
}

.disclaimer {
  font-size: 0.9rem;
  color: #95a5a6;
  margin-top: 30px;
  font-style: italic;
  border-top: 1px solid #ecf0f1;
  padding-top: 20px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .car-container {
    padding: 15px;
  }
  
  .car-info-header h1 {
    font-size: 1.8rem;
  }
  
  .car-price {
    font-size: 1.5rem;
  }
  
  .thumbnail {
    width: 90px;
    height: 70px;
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
  
  .special-table td:first-child {
    width: 50%;
  }
}
</style>