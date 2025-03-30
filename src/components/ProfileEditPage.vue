<template>
  <div class="profile-container">
    <h1>แก้ไขโปรไฟล์ของคุณ</h1>
    <form @submit.prevent="updateProfile">
      <div class="input-group">
        <label for="username">ชื่อผู้ใช้:</label>
        <input type="text" id="username" v-model="username" required :placeholder="username" />
      </div>
      <div class="input-group">
        <label for="email">อีเมล:</label>
        <input type="email" id="email" v-model="email" required :placeholder="email" />
      </div>
      <div class="input-group">
        <label for="password">รหัสผ่าน:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">บันทึกการเปลี่ยนแปลง</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',  // ชื่อผู้ใช้ที่ดึงมาจาก API
      email: '',
      password: '',
    };
  },
  mounted() {
    // เมื่อโหลดหน้า จะดึงข้อมูลผู้ใช้จาก API และแสดงในฟอร์ม
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        const response = await axios.get('http://localhost:8000/profile');
        const user = response.data.profile;
        this.username = user.username;  // ตั้งค่าชื่อผู้ใช้เริ่มต้น
        this.email = user.email;        // ตั้งค่าอีเมลเริ่มต้น
      } catch (error) {
        console.error('Error fetching user profile', error);
      }
    },
    async updateProfile() {
      const token = localStorage.getItem("authToken"); // ดึง Token จาก localStorage
      if (!token) {
        console.error("No token found! Please log in.");
        return;
      }
      try {
        const response = await axios.put('http://localhost:8000/profile', {
          username: this.username,
          email: this.email,
          password: this.password,
        }, {
          headers: {
            Authorization: `Bearer ${token}` // ใช้ token จาก Vuex store หรือ cookie
          }
        });

        alert(response.data.message); // แสดงข้อความที่ได้จาก API

      } catch (error) {
        console.error('Error updating profile', error);
        alert('เกิดข้อผิดพลาดในการอัปเดตโปรไฟล์');
      }
    },
  },
};
</script>

<style scoped>
/* สไตล์ที่ปรับปรุงให้ดูสวยงาม */
.profile-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #333;
  background-color: #f5f5f5;
  transition: border 0.3s ease;
}

.input-group input:focus {
  border-color: #4caf50;
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button:focus {
  outline: none;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}
</style>
