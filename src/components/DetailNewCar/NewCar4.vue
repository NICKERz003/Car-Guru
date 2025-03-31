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
        {{ carDescription }} เป็นรถยนต์ SUV ไฟฟ้าขนาดกลางรุ่นใหม่ล่าสุดที่มาพร้อมกับดีไซน์ล้ำสมัย
        เทคโนโลยีอัจฉริยะ และสมรรถนะที่โดดเด่น มุ่งเน้นมอบประสบการณ์การขับขี่ที่สนุกสนานและเป็นมิตรต่อสิ่งแวดล้อม
      </p>
      <p>
        {{ carName }} ขับเคลื่อนด้วยระบบไฟฟ้า 100% ให้การออกตัวที่รวดเร็วและราบรื่น พร้อมด้วยแบตเตอรี่ที่มีขนาดเหมาะสม
        ทำให้มีระยะทางวิ่งที่เพียงพอต่อการใช้งานในชีวิตประจำวันและการเดินทางต่างจังหวัด
      </p>
      <p>
        ภายในห้องโดยสารของ {{ carName }} ออกแบบเน้นความสะดวกสบายและเทคโนโลยี มีหน้าจอสัมผัสขนาดใหญ่
        ระบบอินโฟเทนเมนต์ที่ทันสมัย และระบบช่วยเหลือการขับขี่ขั้นสูง เพื่อความปลอดภัยและความมั่นใจในทุกเส้นทาง
      </p>

      <div class="table-section">
        <div class="table-header">
          <h3>รายละเอียดเบื้องต้น</h3>
        </div>
        <table class="special-table">
          <tbody>
            <tr>
              <td>แบรนด์</td>
              <td>Deepal</td>
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
              <td>ไฟฟ้า 100% (BEV)</td>
            </tr>
            <tr>
              <td>มอเตอร์ไฟฟ้า:</td>
              <td>{{ carSpec.motorType }}</td>
            </tr>
            <tr>
              <td>กำลังมอเตอร์ไฟฟ้าสูงสุด:</td>
              <td>{{ carSpec.maxPower }}</td>
            </tr>
            <tr>
              <td>แรงบิดสูงสุด:</td>
              <td>{{ carSpec.maxTorque }}</td>
            </tr>
            <tr>
              <td>ระบบเกียร์:</td>
              <td>{{ carSpec.transmission }}</td>
            </tr>
            <tr>
              <td>แบตเตอรี่:</td>
              <td>{{ carSpec.batteryCapacity }}</td>
            </tr>
            <tr>
              <td>ระยะทางวิ่งสูงสุด (โดยประมาณ):</td>
              <td>{{ carSpec.range }}</td>
            </tr>
            <tr>
              <td>อัตราเร่ง 0-100 กม./ชม.:</td>
              <td>{{ carSpec.acceleration }}</td>
            </tr>
            <tr>
              <td>ขนาด (ยาว x กว้าง x สูง):</td>
              <td>{{ carSpec.dimensions }}</td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="disclaimer">
        คำแนะนำการใช้ข้อมูล: ข้อมูลที่แสดงเป็นข้อมูลเบื้องต้นและอาจมีการเปลี่ยนแปลง
        ราคาและสเปคอย่างเป็นทางการจะประกาศเมื่อรถเปิดตัว โปรดสอบถามรายละเอียดเพิ่มเติมจากผู้จำหน่าย
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carName: "Deepal S05",
      carDescription: "SUV ไฟฟ้าดีไซน์ล้ำสมัย",
      carPrice: "฿799,000",
      carImages: [
        "https://autostation.com/wp-content/uploads/2025/03/05-DEEPAL-S05-1-scaled.jpg", // ตัวอย่างภาพ
        "https://global-img.bitauto.com/yhzx/20241203/546/323206854603702.jpeg",
        "https://global-img.bitauto.com/usercenter/yhzx/20241203/390/w1200_yichecar_323206939080320.jpeg.webp",
        "https://global-img.bitauto.com/usercenter/yhzx/20241203/991/w1200_yichecar_323207999176347.png.webp",
        "https://global-img.bitauto.com/usercenter/yhzx/20241203/151/w1200_yichecar_323208315105135.jpeg.webp"
      ],
      currentImage: 0,
      carSpec: {
        motorType: "N/A",
        maxPower: "N/A",
        maxTorque: "N/A",
        transmission: "อัตโนมัติ",
        batteryCapacity: "N/A",
        range: "N/A",
        acceleration: "N/A",
        dimensions: "N/A",
        seats: "5"
      }
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
  color: #4caf50; /* เปลี่ยนสีหัวข้อเป็นสีเขียว */
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