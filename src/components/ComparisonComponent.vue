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
      Reset Comparison
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

    <!-- เปรียบเทียบตาราง -->
    <div v-if="showComparisonTable" class="comparison-table">
      <h3>Comparison Table</h3>
      <table>
        <thead>
          <tr>
            <th>รายละเอียด</th>
            <th v-for="car in selectedCars" :key="car.id">{{ car.brand }} {{ car.model }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>แบรนด์</td>
            <td v-for="car in selectedCars" :key="car.id">{{ car.brand }}</td>
          </tr>
          <tr>
            <td>รุ่น</td>
            <td v-for="car in selectedCars" :key="car.id">{{ car.model }}</td>
          </tr>
          <tr>
            <td>ราคา</td>
            <td v-for="car in selectedCars" :key="car.id">{{ car.price }} บาท</td>
          </tr>
          <tr>
            <td>ปีที่เปิดตัว</td>
            <td v-for="car in selectedCars" :key="car.id">{{ car.year }}</td>
          </tr>
          <!-- เพิ่มข้อมูลการเปรียบเทียบเพิ่มเติมได้ -->
        </tbody>
      </table>
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
