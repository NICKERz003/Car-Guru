<template>
  <section class="compare-cars">
    <h2>Car Comparison</h2>
    <div class="car-selection">
      <div class="car-card" v-for="(car, index) in selectedCars" :key="index">
        <div class="car-info">
          <img :src="car.image" alt="Car" />
          <p>{{ car.brand }} | {{ car.model }}</p>
          <button @click="removeCar(index)" class="remove-car-btn">Remove</button>
        </div>
      </div>
      <div v-if="selectedCars.length < 3" class="car-card empty" @click="openModal">
        <span>+</span>
        <p>Select Car</p>
      </div>
    </div>

    <!-- Compare Button -->
    <button :disabled="selectedCars.length < 2" @click="compareCars" class="compare-btn">
      Compare Cars
    </button>

    <!-- Reset Button -->
    <button @click="resetComparison" class="reset-btn">
      Reset
    </button>

    <!-- Modal for Selecting Cars -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <!-- ปุ่มปิดหน้าต่าง -->
        <button @click="closeModal" class="close-btn">X</button>
        <h3>Select Brand and Model</h3>
        <div>
          <select v-model="selectedBrand" @change="filterModels">
            <option disabled value="">Select Brand</option>
            <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
          </select>

          <select v-model="selectedModel" :disabled="!selectedBrand">
            <option disabled value="">Select Model</option>
            <option v-for="model in filteredModels" :key="model" :value="model">{{ model }}</option>
          </select>
        </div>

        <button @click="addCar" :disabled="!selectedModel" class="add-car-btn">
          Add Car
        </button>
      </div>
    </div>

<div v-if="showComparisonTable" class="comparison-table">
    <h3>รายละเอียดเบื้องต้น</h3>
    <div class="Detail_table">
      <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
           <span>แบรนด์</span>
            <h4>{{ car.brand }}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ประเภท</span>
            <h4>{{ car.type}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ราคา</span>
            <h4>{{car.price}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ปีที่เปิดตัว</span>
            <h4>{{car.year}}</h4>
          </td>
        </tr>
      </table>

    </div>

    <h3>จุดเด่น</h3>
    <div class="Detail_table">
       <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
            {{car.advantages}}
          </td>
        </tr>
      </table>

    </div>

    <h3>สเปค</h3>
    <div class="Detail_table" >
      <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
           <span>เครื่องยนต์</span>
            <h4>{{car.engine}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ขนาดเครื่องยนต์</span>
            <h4>{{car.cc}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>กำลังเครื่องยนต์ (แรงม้า)</span>
            <h4>{{car.engine_power}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ระบบเกียร์</span>
            <h4>{{car.gear_system}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>รูปแบบเกียร์</span>
            <h4>{{car.gear_form}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ประเภทน้ำมันเชื้อเพลิง</span>
            <h4>{{car.Fuel_type}}</h4>
          </td>
        </tr>
      </table>

    </div>

    <h3>ดีไซน์</h3>
    <div class="Detail_table" >
      <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
            <p>ภายใน:</p>{{car.interior_design }}
            <p>ภายนอก:</p>{{car.exterior_design }}

          </td>
        </tr>
      </table>
    </div>

    <h3>ระบบความปลอดภัย</h3>
    <div class="Detail_table" >
      <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
            {{car.security }}
          </td>
        </tr>
      </table>
    </div>
</div>
  </section>
</template>

<script>
export default {
  name: 'ComparisonComponent',
  data() {
    return {
      selectedCars: [],
      selectedBrand: '',
      selectedModel: '',
      brands: ['Toyota', 'Honda', 'Ford', 'BMW'],
      carsData: {
        Toyota: ['Corolla', 'Camry', 'Hilux'],
        Honda: ['Civic', 'Accord', 'HR-V'],
        Ford: ['Mustang', 'Fiesta'],
        BMW: ['X5', '3 Series', 'M4']
      },
      filteredModels: [],
      isModalOpen: false,
      showComparisonTable: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    filterModels() {
      this.filteredModels = this.carsData[this.selectedBrand] || [];
    },
    addCar() {
      const newCar = {
        brand: this.selectedBrand,
        model: this.selectedModel,
        price: '100,000', // เพิ่มราคาจากข้อมูลจริง
        year: '2022', // เพิ่มปีจากข้อมูลจริง
        type: 'SUV', // ประเภท
        advantages: 'Lorem ipsum dolor sit amet consectetur.', // จุดเด่น
        engine: 'DOHC 4 สูบ 16 วาล์ว i-VTEC', // เครื่องยนต์
        cc: '1,498', // ขนาดเครื่องยนต์
        engine_power: '121', // กำลังเครื่องยนต์
        gear_system: 'เกียร์ออโต้แบบ CVT', // ระบบเกียร์
        gear_form: 'N/A', // รูปแบบเกียร์
        Fuel_type: 'เบนซิน 95', // ประเภทน้ำมัน
        interior_design: 'สีทูโทน', // ดีไซน์ภายใน
        exterior_design: 'สปอร์ต', // ดีไซน์ภายนอก
        security: 'ระบบเบรก ABS, ระบบควบคุมการทรงตัว', // ระบบความปลอดภัย
        image: `https://via.placeholder.com/150?text=${this.selectedBrand}+${this.selectedModel}`,
        id: this.selectedCars.length + 1
      };
      if (this.selectedCars.length < 3) {
        this.selectedCars.push(newCar);
      }
      this.selectedBrand = '';
      this.selectedModel = '';
      this.closeModal();
    },
    removeCar(index) {
      this.selectedCars.splice(index, 1);
    },
    compareCars() {
      if (this.selectedCars.length < 2) {
        alert("กรุณาเลือกอย่างน้อย 2 คัน!");
        return;
      }
      this.showComparisonTable = true; // แสดงตารางเมื่อกดปุ่มเปรียบเทียบ
    },
    resetComparison() {
      this.selectedCars = [];
      this.showComparisonTable = false; // รีเซ็ตการแสดงตาราง
    }
  }
};
</script>

<style scoped>

.Detail_table{
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
}
.compare-cars {
  padding: 20px;
}

h2 {
  text-align: center;
}

.car-selection {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.car-card {
  width: 200px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.car-card.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.remove-car-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}

.compare-btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
}

.compare-btn:disabled {
  background-color: gray;
  cursor: not-allowed;
}

.reset-btn {
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  position: relative; /* ทำให้ปุ่ม "X" อยู่ในมุมขวาบน */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.add-car-btn {
    width: 100%;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}

select {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
}

.comparison-table {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th, table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

table th {
  background-color: #f4f4f4;
}
</style>
