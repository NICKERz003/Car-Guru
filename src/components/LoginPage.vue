<template>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2>กรุณากรอกข้อมูลการสมัคร</h2>
        <!-- ฟอร์มการสมัคร -->
        <form @submit.prevent="submitForm">
          <div>
            <label for="email">อีเมล:</label>
            <input type="email" v-model="email" id="email" required />
          </div>
          <div>
            <label for="password">รหัสผ่าน:</label>
            <input type="password" v-model="password" id="password" required />
          </div>
          <div>
            <label for="confirmPassword">ยืนยันรหัสผ่าน:</label>
            <input type="password" v-model="confirmPassword" id="confirmPassword" required />
          </div>
          <button type="submit">สมัครสมาชิก</button>
          <button type="button" @click="showModal = false">ปิด</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      showModal: false,
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    submitForm() {
      if (this.password !== this.confirmPassword) {
        alert("รหัสผ่านไม่ตรงกัน");
        return;
      }

      // ทำการสมัครสมาชิกที่นี่
      console.log("สมัครสมาชิกด้วยอีเมล:", this.email);
      this.showModal = false; // ปิด Modal หลังจากการสมัคร
    },
  },
};
</script>

<style scoped>
/* ปรับแต่งสไตล์ของ modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* พื้นหลังมืด */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
}

button[type="button"] {
  background-color: #f44336;
  color: white;
}
</style>
