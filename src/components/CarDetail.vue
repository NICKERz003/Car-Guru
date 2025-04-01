<template>
  <section id="car-detail">
    <h1 v-if="car" >{{ car.brand }} {{ car.model }}</h1>
    <h2 v-if="car" class="car-price">฿ {{car.price}}</h2>
    <div v-if="car" class="car-detail-container">
      
      <div class="CssImg">
        <img :src="car.image_url" :alt="car.model" class="main-image" />
      </div>
    </div>

    <div v-else>
      ไม่พบข้อมูล
    </div>

    <!-- Table for Car Specifications -->
    <div v-if="car" class="car-article">
      <h2>{{ car.brand }} {{ car.model }} Specifications</h2>

      <div class="table-section">
        <div class="table-header">
          <h3>รายละเอียดเบื้องต้น</h3>
        </div>
        <table class="special-table">
          <tbody>
            <tr>
              <td>แบรนด์</td>
              <td>{{ car.brand }}</td>
            </tr>
            <tr>
              <td>รุ่น</td>
              <td>{{ car.model }}</td>
            </tr>
            <tr>
              <td>ประเภท</td>
              <td>{{ car.type }}</td>
            </tr>
            <tr>
              <td>ปีที่เปิดตัว</td>
              <td>{{ car.year }}</td>
            </tr>
            <tr>
              <td>ราคา</td>
              <td>{{ car.price }}</td>
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
              <td>เครื่องยนต์</td>
              <td>{{ car.engine }}</td>
            </tr>
            <tr>
              <td>ระบบเกียร์</td>
              <td>{{ car.gear_system }}</td>
            </tr>
            <tr>
              <td>ขนาดเครื่องยนต์ (CC)</td>
              <td>{{ car.cc }}</td>
            </tr>
            <tr>
              <td>ระบบขับเคลื่อน</td>
              <td>{{ car.drive_system }}</td>
            </tr>
            <tr>
              <td>น้ำหนัก</td>
              <td>{{ car.weight }} กก.</td>
            </tr>
            <tr>
              <td>ยาง</td>
              <td>{{ car.tires }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p v-if="car" class="disclaimer">
        ข้อมูลอาจมีการเปลี่ยนแปลง โปรดตรวจสอบกับตัวแทนจำหน่าย {{ car.brand }} สำหรับข้อมูลล่าสุดและรายละเอียดที่ถูกต้อง
      </p>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CarDetailPage',
  props: ['brand', 'model'], // รับ brand และ model จาก URL
  data() {
    return {
      car: null,  // ใช้เก็บข้อมูลของรถที่ดึงมาจาก API
      currentImage: 0,  // ใช้สำหรับการเปลี่ยนรูปภาพ
    };
  },
  created() {
    // ดึงข้อมูลจาก API
    this.fetchCarDetails();
  },
  methods: {
    async fetchCarDetails() {
      try {
        const response = await axios.get('http://localhost:8000/cars/models', {
          params: { brand: this.brand, model: this.model }  // ส่งค่า brand และ model ไปที่ API
        });
        if (response.data && response.data.length > 0) {
          this.car = response.data[0];  // สมมติว่า API ส่งข้อมูลของรถยนต์ใน array
        } else {
          console.error("ไม่พบข้อมูลของรถยนต์ที่เลือก");
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.car.image_gallery.length;
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.car.image_gallery.length) % this.car.image_gallery.length;
    },
  },
};
</script>
<style scoped>
.disclaimer {
  font-size: 0.9rem;
  color: #95a5a6;
  margin-top: 30px;
  font-style: italic;
  border-top: 1px solid #ecf0f1;
  padding-top: 20px;
  line-height: 1.6;
}

#car-detail {
  padding: 20px;
  text-align: center;
}

.car-detail-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
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
  max-height: 400px;
  object-fit: cover;
  box-shadow: 2px 2px 10px gray;
}


.car-details {
  text-align: left;
}

.car-price {
  color: #45a049;
  font-weight: bold;
  font-size: 1.8rem;
  margin: 15px 0;
  background-color: white;
  padding: 10px 20px;
  border-radius: 30px;
  display: inline-block;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.car-description {
  font-size: 1rem;
  color: #888;
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
  color: #45a049;
  margin-bottom: 20px;
  font-size: 1.6rem;
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
}

.special-table {
  width: 72%;
  margin: 0 auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  margin-bottom: 30px;
}

.special-table th,
.special-table td {
  padding: 10px;
  text-align: left;
  font-size: 1rem;
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
}

.table-header {
  width: 70%;
  padding:20px;
  margin: auto;
  background-color: #45a049;
  border-radius: 10px 10px 0 0;
  margin-bottom: 0;
}

.table-header h3 {
  color: white;
  margin: 0;
  font-size: 1.3rem;
}


@media (max-width: 768px) {
  .car-detail-container {
    flex-direction: column;
    align-items: center;
  }

  .main-image {
    max-height: 450px;
  }

  .special-table {
    width: 70%;
  }

  .car-price {
    font-size: 1.2rem;
  }
  
  .car-article h2 {
    font-size: 1.5rem;
  }

  .special-table td:first-child {
    width: 70%;
  }
}

</style>

