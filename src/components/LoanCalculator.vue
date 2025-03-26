<template>
  <div>
    <h2>คำนวณการผ่อนชำระ</h2>
    <form @submit.prevent="calculateLoan">
      <div>
        <label for="price">ราคารถยนต์</label>
        <input type="number" v-model="price" id="price" placeholder="กรอกราคารถยนต์" />
      </div>
      <div>
        <label for="downpayment">เงินดาวน์</label>
        <input type="number" v-model="downpayment" id="downpayment" placeholder="กรอกเงินดาวน์" />
      </div>
      <div>
        <label for="term">ระยะเวลาผ่อนชำระ (ปี)</label>
        <input type="number" v-model="term" id="term" placeholder="กรอกระยะเวลาผ่อน" />
      </div>
      <div>
        <label for="interest">อัตราดอกเบี้ย (%)</label>
        <input type="number" v-model="interest" id="interest" placeholder="กรอกอัตราดอกเบี้ย" />
      </div>
      <button type="submit">คำนวณ</button>
    </form>

    <div v-if="monthlyPayment">
      <h3>ยอดผ่อนชำระรายเดือน</h3>
      <p>{{ formattedMonthlyPayment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      downpayment: 0,
      term: 0,
      interest: 0,
      monthlyPayment: null,
    };
  },
  methods: {
    calculateLoan() {
      const loanAmount = this.price - this.downpayment;
      const interestRate = this.interest / 100 / 12;
      const months = this.term * 12;

      const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -months));
      this.monthlyPayment = monthlyPayment.toFixed(2);
    },
  },
  computed: {
    formattedMonthlyPayment() {
      if (this.monthlyPayment) {
        return `฿ ${parseFloat(this.monthlyPayment).toLocaleString()}`;
      }
      return '';
    }
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 20px;
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
}
button:hover {
  background-color: #45a049;
}
</style>
