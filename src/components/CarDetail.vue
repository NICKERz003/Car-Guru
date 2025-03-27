<template>
  <section id="car-detail">
    <h1>{{ car.brand }} {{ car.model }}</h1>
    <div class="car-detail-container">
      <div class="car-image">
        <img :src="car.image" alt="Car image" />
      </div>
      <div class="car-details">
        <p class="car-price">฿{{ car.price.toLocaleString() }}</p>
        <p class="car-description">{{ car.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CarDetailPage',
  props: ['id'], // รับค่า id จาก URL
  data() {
    return {
      cars: [
        { id: 1, image: 'https://via.placeholder.com/200x150?text=Car+1', brand: 'Mercedes', model: 'G-Class Electric', price: 949900, description: 'พบกับราคานี้ในประเทศไทย' },
        { id: 2, image: 'https://via.placeholder.com/200x150?text=Car+2', brand: 'BYD', model: 'S5 EV', price: 849900, description: 'รถไฟฟ้าราคาเยี่ยม' },
        { id: 3, image: 'https://via.placeholder.com/200x150?text=Car+3', brand: 'BYD', model: 'IM6', price: 1799000, description: 'รถไฟฟ้า สำหรับคนรักสิ่งแวดล้อม' },
        { id: 4, image: 'https://via.placeholder.com/200x150?text=Car+4', brand: 'Geely', model: 'EX5', price: 1599000, description: 'พร้อมราคาสุดคุ้ม' },
        { id: 5, image: 'https://via.placeholder.com/200x150?text=Car+3', brand: 'Porsche', model: 'Panamera 4 E-Hybrid', price: 7990000, description: 'รถสปอร์ตสุดหรู' },
        { id: 6, image: 'https://via.placeholder.com/200x150?text=Car+4', brand: 'BMW', model: 'M3 Competition Sedan', price: 14899000, description: 'พร้อมราคาสุดคุ้ม' },
      ],
      car: null,
    };
  },
  created() {
    // ค้นหาข้อมูลของรถที่เลือกตาม id
    const carId = parseInt(this.id);
    this.car = this.cars.find(car => car.id === carId);
  },
};
</script>

<style scoped>
#car-detail {
  padding: 20px;
  text-align: center;
}

.car-detail-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.car-image img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

.car-details {
  max-width: 500px;
  text-align: left;
}

.car-price {
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
}

.car-description {
  font-size: 16px;
  color: #888;
}
</style>
