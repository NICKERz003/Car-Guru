<template>
  <div class="login-container">
    <h1>เข้าสู่ระบบ</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="email">อีเมล:</label>
        <input type="email" id="email" v-model="email" required placeholder="กรุณากรอกอีเมล" />
      </div>
      <div class="input-group">
        <label for="password">รหัสผ่าน:</label>
        <input type="password" id="password" v-model="password" required placeholder="กรุณากรอกรหัสผ่าน" />
      </div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button type="submit">เข้าสู่ระบบ</button>
    </form>
    <p>ยังไม่มีบัญชี? <router-link to="/register">สมัครสมาชิก</router-link></p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '', // ใช้สำหรับแสดงข้อความผิดพลาด
    };
  },
  methods: {
    // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม "เข้าสู่ระบบ"
    async handleSubmit() {
      try {
        // รีเซ็ตข้อความผิดพลาดก่อนส่งคำขอ
        this.errorMessage = '';
        
        // ส่งคำขอล็อกอินไปที่ API
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });

        // หากล็อกอินสำเร็จ, เก็บข้อมูลที่ได้รับจากเซิร์ฟเวอร์ (เช่น token)
        localStorage.setItem('authToken', response.data.token);
        
        // เปลี่ยนเส้นทางไปยังหน้า Dashboard
        this.$router.push('/dashboard');
      } catch (error) {
        // หากเกิดข้อผิดพลาด, แสดงข้อความผิดพลาด
        if (error.response && error.response.data) {
          this.errorMessage = error.response.data.message || 'การเข้าสู่ระบบล้มเหลว';
        } else {
          this.errorMessage = 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้';
        }
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}
</style>