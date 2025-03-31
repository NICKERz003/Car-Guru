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
          {{ carDescription }} เป็นรถยนต์ SUV ไฮบริดรุ่นใหม่ที่ออกแบบมาเพื่อความสะดวกสบายและประหยัดพลังงาน
          มาพร้อมกับดีไซน์ที่ล้ำสมัย ไฟหน้า LED ทรงเหลี่ยมที่ดูดุดัน และกระจังหน้า Dynamic Shield อันเป็นเอกลักษณ์ของ Mitsubishi
        </p>
        <p>
          ระบบขับเคลื่อนของ {{ carName }} ใช้เครื่องยนต์ไฮบริดที่ให้ทั้งสมรรถนะและประหยัดน้ำมัน
          พร้อมระบบขับเคลื่อน 4 ล้อ Super All-Wheel Control (S-AWC) ที่ช่วยให้การขับขี่มีเสถียรภาพมากขึ้น
        </p>
        <p>
          ภายในห้องโดยสารออกแบบให้กว้างขวางและทันสมัย รองรับระบบอินโฟเทนเมนต์ที่ล้ำหน้า หน้าจอสัมผัสขนาด 12.3 นิ้ว
          รองรับ Apple CarPlay และ Android Auto ช่วยให้การเดินทางเป็นเรื่องง่ายและสะดวกสบาย
        </p>
  
        <div class="table-section">
          <div class="table-header">
            <h3>รายละเอียดเบื้องต้น</h3>
          </div>
          <table class="special-table">
            <tbody>
              <tr>
                <td>แบรนด์</td>
                <td>Mitsubishi</td>
              </tr>
              <tr>
                <td>รุ่น</td>
                <td>{{ carName }} 2025</td>
              </tr>
              <tr>
                <td>ประเภทรถ</td>
                <td>รถยนต์ SUV ไฮบริด</td>
              </tr>
              <tr>
                <td>ปีที่เปิดตัว</td>
                <td>2025</td>
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
                <td>ไฮบริด</td>
              </tr>
              <tr>
                <td>เครื่องยนต์:</td>
                <td>เครื่องยนต์ 4 สูบ</td>
              </tr>
              <tr>
                <td>ความจุเครื่องยนต์ (CC):</td>
                <td>1,500 CC</td>
              </tr>
              <tr>
                <td>ระบบเกียร์:</td>
                <td>CVT (Continuous Variable Transmission)</td>
              </tr>
              <tr>
                <td>ระบบขับเคลื่อน:</td>
                <td>4 ล้อ Super All-Wheel Control (S-AWC)</td>
              </tr>
              <tr>
                <td>ขนาด (ยาว x กว้าง x สูง):</td>
                <td>4,430 x 1,810 x 1,690 มม.</td>
              </tr>
              <tr>
                <td>ความจุถังน้ำมัน:</td>
                <td>47 ลิตร</td>
              </tr>
              <tr>
                <td>ระบบเบรก:</td>
                <td>ดิสก์เบรกทั้ง 4 ล้อ พร้อมระบบเบรก ABS</td>
              </tr>
              <tr>
                <td>ยาง:</td>
                <td>ล้อหน้า 225/55 R18, ล้อหลัง 225/55 R18</td>
              </tr>
              <tr>
                <td>น้ำหนักตัวรถ:</td>
                <td>1,650 กก.</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <p class="disclaimer">
          คำแนะนำการใช้ข้อมูล: ภาพที่แสดงเป็นเพียงภาพประกอบ และข้อมูลรวมถึงราคาอาจมีการเปลี่ยนแปลง
          ดังนั้นโปรดสอบถามรายละเอียดของสินค้ากับบริษัทและผู้จำหน่ายทุกครั้งก่อนตัดสินใจ
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carName: "Mitsubishi XFORCE HEV",
        carDescription: "SUV ไฮบริดสุดล้ำ พร้อมเทคโนโลยีประหยัดพลังงาน",
        carPrice: "฿899,000",
        carImages: [
          "https://mpics.mgronline.com/pics/Images/568000002700501.JPEG",
          "https://imgcdn.oto.com/large/gallery/interior/28/2788/mitsubishi-xforce-dashboard-view-736393.jpg",
          "https://imgcdn.oto.com/large/gallery/interior/28/2788/mitsubishi-xforce-front-ac-controls-454072.jpg",
          "https://imgcdn.oto.com/large/gallery/interior/28/2788/mitsubishi-xforce-speakers-view-975189.jpg",
          "https://imgcdn.oto.com/large/gallery/interior/28/2788/mitsubishi-xforce-rear-seats-430161.jpg"
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
    color: #4caf50; /* เปลี่ยนสีหัวข้อเป็นสีเขียวเข้ม */
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