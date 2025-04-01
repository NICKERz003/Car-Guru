<template>
  <section id="box">
    <h2>คำนวณการผ่อนชำระ</h2>
    <div class="loan-calculator-container">
      <div class="left-section">
        <label for="brand">เลือกแบรนด์รถ:</label>
        <div class="dropdown-container">
          <select v-model="selectedBrand" @change="filterModels">
            <option value="" disabled>เลือกแบรนด์</option>
            <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
          </select>
        </div>

        <label for="model">เลือกรุ่นรถ:</label>
        <div class="dropdown-container">
          <select v-model="selectedModel" :disabled="!selectedBrand" @change="setCarDetails">
            <option v-for="model in filteredModels" :key="model.model" :value="model.model">{{ model.model }}</option>
          </select>
        </div>

        <div v-if="selectedCar">
          <h3>รายละเอียดรถ</h3>
        <img :src="selectedCar.image" alt="Car Image" width="200" />
          <p><strong>แบรนด์:</strong> {{ selectedCar.brand }}</p>
          <p><strong>รุ่น:</strong> {{ selectedCar.model }}</p>
          <p><strong>ราคา:</strong> ฿{{ selectedCar.price ? selectedCar.price.toLocaleString() : '' }}</p> <!-- การตรวจสอบก่อนใช้ toLocaleString() -->
        </div>
      </div>

      <div class="right-section">
        <form @submit.prevent="calculateLoan">
          <div>
            <label for="downpayment">เงินดาวน์:</label>
            <input type="number" v-model="downpayment" required placeholder="กรอกเงินดาวน์" />
          </div>
          <button type="submit">คำนวณ</button>
        </form>
        
        <div v-if="monthlyPayments.length > 0">
          <h3>ตารางการผ่อนชำระ</h3>
          <table>
            <thead>
              <tr>
                <th>ระยะเวลา</th>
                <th>ยอดผ่อนชำระต่อเดือน (บาท)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ยอดจัด</td>
                <td>{{ loanAmount.toLocaleString('th-TH') }}</td>
              </tr>
              <tr v-for="(payment, index) in monthlyPayments" :key="index">
                <td>{{ payment.term.toLocaleString('th-TH') }} งวด ({{ payment.interest }}%)</td>
                <td>{{ payment.amount.toLocaleString('th-TH') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> 
  </section>
</template>

<script>
import axios from 'axios';  // นำเข้า axios

export default {
  
  data() {
    return {
      brands: [],
      filteredModels: [],
      selectedBrand: null,
      selectedModel: null,
      selectedCar: null,
      downpayment: 0,
      loanAmount: 0,
      monthlyPayments: [],
      interestRates: {
        48: 3.69, // อัตราดอกเบี้ย 48 งวด
        60: 4.15, // อัตราดอกเบี้ย 60 งวด
        72: 4.39, // อัตราดอกเบี้ย 72 งวด
        84: 4.8,  // อัตราดอกเบี้ย 84 งวด
      }
    };
  },
  methods: {
    async fetchBrands() {
      try {
        const response = await axios.get('http://localhost:8000/cars/brands');
        this.brands = response.data.map(brand => brand.brand);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
    async filterModels() {
      if (!this.selectedBrand) return;
      try {
        const response = await axios.get(`http://localhost:8000/cars/models/${this.selectedBrand}`);
        this.filteredModels = response.data;  // รับข้อมูลรุ่นจาก API
        console.log('Fetched Models:', response.data); // ตรวจสอบข้อมูลที่ดึงมาจาก API
        this.selectedModel = null;  // รีเซ็ตรุ่นเมื่อเปลี่ยนแบรนด์
        this.selectedCar = null;    // รีเซ็ตรรายละเอียดรถ
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    },
    setCarDetails() {
      const car = this.filteredModels.find(model => model.model === this.selectedModel);
      if (car) {
        this.selectedCar = {
          brand: this.selectedBrand,
          model: this.selectedModel, 
          price: car.price.toLocaleString(), // ใช้ราคาและรูปภาพจากข้อมูลรถที่เลือก
          image: car.image_url 
          };
           console.log('Selected Car:', this.selectedCar);
      }
    },
    calculateLoan() {
      // ตรวจสอบว่า selectedCar มีข้อมูลราคาหรือไม่
    if (!this.selectedCar || !this.selectedCar.price) {
    console.error('No car selected or price not available');
    return; // ถ้าไม่มีข้อมูลรถหรือราคาก็ไม่คำนวณ
  }
      const loanAmount = this.selectedCar.price - this.downpayment;
      this.loanAmount = loanAmount;
      this.monthlyPayments = [];

      // คำนวณเงินผ่อนสำหรับแต่ละระยะเวลา
      const terms = [48, 60, 72, 84];
      terms.forEach(term => {
        const interestRate = this.interestRates[term] / 100 / 12; // ใช้อัตราดอกเบี้ยตามงวด
        const months = term;
        const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -months));
        this.monthlyPayments.push({
          term: term,
          interest: this.interestRates[term], // แสดงอัตราดอกเบี้ย
          amount: monthlyPayment.toLocaleString(),
        });
      });
    },
  },
  created() {
    this.fetchBrands();
  }
};
</script>


<style scoped>
#box {
  text-align: center;
  height: auto;
}
.loan-calculator-container {
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  gap: 20px;
}

.left-section {
  border-radius: 20px;  
  width: 20%;
  padding: 10px;
  box-shadow: 2px 2px 5px gray;
}

.right-section {
  border-radius: 20px;  
  width: 20%;
  padding: 10px;
  box-shadow: 2px 2px 5px gray;
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  background-color: #45a049;
}

input[type="number"] {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 60%;
}

select {
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

table th, table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

table th {
  background-color: #f4f4f4;
}

.error-message {
  color: red;
  font-size: 14px;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}
</style>
