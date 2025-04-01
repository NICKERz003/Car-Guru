<template>
  <section id="header">
    <div class="logo">
      <RouterLink to="/"><img src="@/assets/logo_car-guru.png" alt="Car Guru Logo" width="80" height="80"></RouterLink>
    </div>
    <div class="box-right">
      <div v-if="isLoggedIn" class="buttons">
        <ProfileBtn />
        <button @click="logout" class="logout-button"><i class="fas fa-sign-out-alt"></i></button>
      </div>
      <LoginBtn v-else />
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import LoginBtn from './LoginBtn.vue';
import ProfileBtn from './ProfileBtn.vue';

export default {
  name: 'AppHeader',
  components: {
    LoginBtn,
    ProfileBtn
  },
  data() {
    return {
      isLoggedIn: false,
      searchQuery: '',  // ตัวแปรเก็บคำค้นหา
    };
  },
  created() {
    this.checkLoginStatus(); // ตรวจสอบสถานะการล็อกอิน
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem('authToken');
      if (token) {
        axios.get('http://localhost:8000/verifyToken', {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then(() => { this.isLoggedIn = true; })
          .catch(() => { 
            localStorage.removeItem('authToken'); 
            this.isLoggedIn = false; 
          });
      } else {
        this.isLoggedIn = false;
      }
    },
    applySearch() {
      // ส่งคำค้นหานี้ไปที่ parent component
      this.$emit('search', this.searchQuery);
    },
    logout() {
      localStorage.removeItem('authToken');
      this.isLoggedIn = false;
      this.$router.push('/');
    },
    
  }
};
</script>


<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  background-color: #2c3e50;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

img {
  border-radius: 50%;
}

.logo {
  align-items: center;
  padding: 10px;
}

.search-box {
  width: 100%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 60px;
}

.search-box input {
  background: transparent;
  flex: 1;
  border: 0;
  outline: none;
  padding: 15px 20px;
  font-size: 20px;
  color: white;
}

::placeholder {
  color: #cac7ff;
}

.search-box button {
  background: #e7e7e7;
  border: 0;
  padding: 10px 25px;
  font-size: 20px;
  color: black;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.2s;
}

.search-box button:hover {
  background: #bbbbbb;
}

.box-right {
   padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.buttons {
  display: flex; 
  gap: 10px; 
}
.logout-button {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.logout-button:hover {
  background-color: red;
  color: white;
  border: 1px solid #555555;
  box-shadow: 2px 4px 4px #c7c7c7;
}
</style>
