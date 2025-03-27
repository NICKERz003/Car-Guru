<template>
  <div class="register-container">
    <h1>สมัครสมาชิก</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="email">อีเมล:</label>
        <input type="email" id="email" v-model="email" required placeholder="กรุณากรอกอีเมล" />
      </div>
      <div class="input-group">
        <label for="username">ชื่อผู้ใช้:</label>
        <input type="text" id="username" v-model="username" required placeholder="กรุณากรอกชื่อผู้ใช้" />
      </div>
      <div class="input-group">
        <label for="password">รหัสผ่าน:</label>
        <input type="password" id="password" v-model="password" required placeholder="กรุณากรอกรหัสผ่าน" />
      </div>
      <div class="input-group">
        <label for="confirmPassword">ยืนยันรหัสผ่าน:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required placeholder="กรุณายืนยันรหัสผ่าน" />
      </div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button type="submit">สมัครสมาชิก</button>
    </form>
    <p>มีบัญชีอยู่แล้ว? <router-link to="/login-page">เข้าสู่ระบบ</router-link></p>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: '', // ใช้สำหรับแสดงข้อความผิดพลาด
    };
  },
//   methods: {
//     // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม "สมัครสมาชิก"
//     async handleSubmit() {
//       // ตรวจสอบว่ารหัสผ่านและยืนยันรหัสผ่านตรงกันหรือไม่
//       if (this.password !== this.confirmPassword) {
//         this.errorMessage = 'รหัสผ่านไม่ตรงกัน';
//         return;
//       }

//       try {
//         // ส่งคำขอลงทะเบียนไปที่ API
//         const response = await axios.post('/api/register', {
//           email: this.email,
//           username: this.username,
//           password: this.password,
//         });

//         // หากสมัครสมาชิกสำเร็จ, เปลี่ยนเส้นทางไปที่หน้า login
//         this.$router.push('/login');
//       } catch (error) {
//         // หากเกิดข้อผิดพลาดจากเซิร์ฟเวอร์
//         if (error.response && error.response.data) {
//           this.errorMessage = error.response.data.message || 'การลงทะเบียนล้มเหลว';
//         } else {
//           this.errorMessage = 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้';
//         }
//       }
//     },
//   },
};
</script>

<style scoped>
.register-container {
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
