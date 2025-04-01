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