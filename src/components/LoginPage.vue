<template>
  <div>
    <h1>เข้าสู่ระบบ</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">อีเมล</label>
        <input type="email" v-model="email" placeholder="กรุณากรอกอีเมล" required />
      </div>
      <div>
        <label for="password">รหัสผ่าน</label>
        <input type="password" v-model="password" placeholder="กรุณากรอกรหัสผ่าน" required />
      </div>
      <button type="submit">เข้าสู่ระบบ</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // ฟังก์ชันการเข้าสู่ระบบ
      console.log("เข้าสู่ระบบด้วยอีเมล: " + this.email);
    }
  }
};
</script>

<style scoped>
/* คุณสามารถใส่สไตล์เพิ่มเติมที่นี่ */
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}
input {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>
