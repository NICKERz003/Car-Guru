<template>
    <div class="car-container">
      <div class="car-content">
        <img 
          :src="carImage" 
          :alt="carName" 
          class="car-image"
        />
        <div class="car-info">
          <h1>{{ carName }}</h1>
          <p class="car-description">
            {{ carDescription }}
          </p>
          <p class="car-price">ราคา: {{ carPrice }}</p>
        </div>
      </div>
      <div class="car-article">
        <h2>เกี่ยวกับ Mitsubishi XFORCE HEV</h2>
        <p>
          Mitsubishi XFORCE HEV เป็นรถยนต์ SUV ไฮบริดรุ่นใหม่ที่ออกแบบมาเพื่อความสะดวกสบายและประหยัดพลังงาน  
          มาพร้อมกับดีไซน์ที่ล้ำสมัย ไฟหน้า LED ทรงเหลี่ยมที่ดูดุดัน และกระจังหน้า Dynamic Shield อันเป็นเอกลักษณ์ของ Mitsubishi  
        </p>
        <p>
          ระบบขับเคลื่อนของ XFORCE HEV ใช้เครื่องยนต์ไฮบริดที่ให้ทั้งสมรรถนะและประหยัดน้ำมัน  
          พร้อมระบบขับเคลื่อน 4 ล้อ Super All-Wheel Control (S-AWC) ที่ช่วยให้การขับขี่มีเสถียรภาพมากขึ้น  
        </p>
        <p>
          ภายในห้องโดยสารออกแบบให้กว้างขวางและทันสมัย รองรับระบบอินโฟเทนเมนต์ที่ล้ำหน้า หน้าจอสัมผัสขนาด 12.3 นิ้ว  
          รองรับ Apple CarPlay และ Android Auto ช่วยให้การเดินทางเป็นเรื่องง่ายและสะดวกสบาย  
        </p>
  
        <!-- Additional Specifications Section -->
        <h3>รายละเอียดเบื้องต้น</h3>
        <p><strong>แบรนด์:</strong> Mitsubishi</p>
        <p><strong>รุ่น:</strong> Mitsubishi XFORCE HEV 2025</p>
        <p><strong>ประเภทรถ:</strong> รถยนต์ SUV ไฮบริด</p>
        <p><strong>ปีที่เปิดตัว:</strong> 2025</p>
        <p><strong>ราคา:</strong> {{ carPrice }}</p>
  
        <h4>สเปค</h4>
        <p><strong>ระบบขับเคลื่อน:</strong> ไฮบริด</p>
        <p><strong>เครื่องยนต์:</strong> เครื่องยนต์ 4 สูบ</p>
        <p><strong>ความจุเครื่องยนต์ (CC):</strong> 1,500 CC</p>
        <p><strong>ระบบเกียร์:</strong> CVT (Continuous Variable Transmission)</p>
        <p><strong>ระบบขับเคลื่อน:</strong> 4 ล้อ Super All-Wheel Control (S-AWC)</p>
        <p><strong>ขนาด (ยาว x กว้าง x สูง):</strong> 4,430 x 1,810 x 1,690 มม.</p>
        <p><strong>ความจุถังน้ำมัน:</strong> 47 ลิตร</p>
        <p><strong>ระบบเบรก:</strong> ดิสก์เบรกทั้ง 4 ล้อ พร้อมระบบเบรก ABS</p>
        <p><strong>ยาง:</strong> ล้อหน้า 225/55 R18, ล้อหลัง 225/55 R18</p>
        <p><strong>น้ำหนักตัวรถ:</strong> 1,650 กก.</p>
  
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
        carPrice: "฿1,050,000",
        carImage: "https://mpics.mgronline.com/pics/Images/568000002700501.JPEG"
      };
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
  
  .car-content {
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: center;
  }
  
  .car-image {
    width: 50%;
    border-radius: 10px;
  }
  
  .car-info {
    text-align: left;
  }
  
  .car-article {
    margin-top: 20px;
    text-align: left;
  }
  
  .car-article h2 {
    color: #d32f2f;
  }
  
  .car-article h3 {
    color: #1976d2;
    margin-top: 20px;
  }
  
  .car-article h4 {
    color: #0288d1;
  }
  
  .car-article p {
    font-size: 16px;
    line-height: 1.6;
  }
  
  .car-article .disclaimer {
    font-size: 14px;
    color: #757575;
    margin-top: 10px;
  }
  </style>
  