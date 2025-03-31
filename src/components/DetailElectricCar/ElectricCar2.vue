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
          {{ carName }} เป็นรถยนต์ไฟฟ้าจากแบรนด์ BYD ที่มาพร้อมกับเทคโนโลยีล้ำสมัย 
          และการออกแบบที่ทันสมัย ให้ความรู้สึกหรูหราในราคาที่จับต้องได้
        </p>
        <p>
          {{ carName }} ขับเคลื่อนด้วยมอเตอร์ไฟฟ้าที่ให้สมรรถนะการขับขี่ที่ราบรื่น 
          และเป็นมิตรกับสิ่งแวดล้อม พร้อมระยะทางการขับขี่ที่ยาวไกลในหนึ่งการชาร์จ
        </p>
        <p>
          ภายในห้องโดยสารของ {{ carName }} ออกแบบมาเพื่อความสะดวกสบาย 
          พร้อมด้วยเทคโนโลยีและฟีเจอร์ที่ทันสมัยสำหรับผู้ขับขี่และผู้โดยสาร
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
                <td>ราคา</td>
                <td>{{ carPrice }}</td>
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
                <td>ไฟฟ้า</td>
              </tr>
              <tr>
                <td>มอเตอร์ไฟฟ้า:</td>
                <td>1 ตัว</td>
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
                <td>ระยะทางต่อการชาร์จ:</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>ระบบเบรก (หน้า/หลัง):</td>
                <td>ดิสก์เบรก/ดิสก์เบรก</td>
              </tr>
            </tbody>
          </table>
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
        carName: "BYD S5 EV",
        carDescription: "รถไฟฟ้าวาดาเยี่ยม",
        carPrice: "฿849,900",
        carImages: [
          "https://img.icarcdn.com/autospinn/body/000000235924_4f7bb880_c92a_4391_93c0_a5ab032ed975.jpg", 
          "https://img.icarcdn.com/autospinn/body/000000016755_85821841_e9b0_4402_8f8c_4b21f1963c9b.jpg",
          "https://img.icarcdn.com/autospinn/body/000000279359_70bea3a4_fc7e_4227_af2b_7b8e5710f6c0.jpg",
          "https://img.icarcdn.com/autospinn/body/000000255908_c9c9350f_8d54_445e_80e5_396d7b795eb0.jpg",
          "https://img.icarcdn.com/autospinn/body/000000019175_efe8fa09_f3f8_4647_b589_1aeaa3da3c9e.jpg"
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
    border-color: #4caf50;
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
    color: #4caf50;
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
    color: #4caf50;
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