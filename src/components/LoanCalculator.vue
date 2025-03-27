<template>
  <h2>คำนวณการผ่อนชำระ</h2>
  <div class="loan-calculator-container">
    <div class="left-section">
      <label for="brand">เลือกแบรนด์รถ:</label>
      <div class="dropdown-container">
        <select v-model="selectedBrand" @change="filterModels">
          <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
        </select>
      </div>

      <label for="model">เลือกรุ่นรถ:</label>
      <div class="dropdown-container">
        <select v-model="selectedModel" :disabled="!selectedBrand" @change="setCarDetails">
          <option v-for="model in filteredModels" :key="model" :value="model">{{ model }}</option>
        </select>
      </div>

      <div v-if="selectedCar">
        <h3>รายละเอียดรถ</h3>
        <p><strong>แบรนด์:</strong> {{ selectedCar.brand }}</p>
        <p><strong>รุ่น:</strong> {{ selectedCar.model }}</p>
        <p><strong>ราคา:</strong> ฿{{ selectedCar.price.toLocaleString() }}</p>
        <img :src="selectedCar.image" alt="Car Image" width="200" />
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
              <td>{{ loanAmount.toLocaleString() }}</td>
            </tr>
            <tr v-for="(payment, index) in monthlyPayments" :key="index">
              <td>{{ payment.term }} งวด ({{ payment.interest }}%)</td>
              <td>{{ payment.amount.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: ['Toyota', 'Honda', 'Nissan'], // รายชื่อแบรนด์
      models: {
        Toyota: {
          Corolla: { price: 800000, image: 'https://via.placeholder.com/200?text=Toyota+Corolla' },
          Camry: { price: 1200000, image: 'https://via.placeholder.com/200?text=Toyota+Camry' },
        },
        Honda: {
          Civic: { price: 900000, image: 'https://via.placeholder.com/200?text=Honda+Civic' },
          Accord: { price: 1300000, image: 'https://via.placeholder.com/200?text=Honda+Accord' },
        },
        Nissan: {
          Altima: { price: 850000, image: 'https://via.placeholder.com/200?text=Nissan+Altima' },
          Maxima: { price: 1300000, image: 'https://via.placeholder.com/200?text=Nissan+Maxima' },
        },
      },
      selectedBrand: null,
      selectedModel: null,
      filteredModels: [],
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
    // ฟังก์ชันกรองรุ่นรถตามแบรนด์
    filterModels() {
      this.filteredModels = Object.keys(this.models[this.selectedBrand] || {});
      this.selectedModel = null;
    },
    // ฟังก์ชันที่ตั้งค่ารายละเอียดของรถที่เลือก
    setCarDetails() {
      if (this.selectedBrand && this.selectedModel) {
        this.selectedCar = {
          brand: this.selectedBrand,
          model: this.selectedModel,
          price: this.models[this.selectedBrand][this.selectedModel].price,
          image: this.models[this.selectedBrand][this.selectedModel].image,
        };
      }
    },
    // ฟังก์ชันคำนวณเงินผ่อน
    calculateLoan() {
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
          amount: monthlyPayment.toFixed(2),
        });
      });
    },
  },
};
</script>

<style scoped>
.loan-calculator-container {
  border: 1px solid;
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
  border: 1px solid ;
}

.right-section {
  border-radius: 20px;  
  width: 20%;
  padding: 10px;
  border: 1px solid  ;
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
}

select {
  padding: 12px; /* เพิ่มการปรับขนาด select */
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%; /* ทำให้ select ยาวเต็มความกว้าง */
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
