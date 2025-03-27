<template>
  <div>
    <router-link to="/login-page">
      <button class="login-button">เข้าสู่ระบบ/สมัครสมาชิก</button>
    </router-link>
  </div>
</template>

<script>
export default{
    name: 'LoginBtn'
}
</script>

<style>
.login-button{
  background-color: #e7e7e7;
  border: 1px solid #e7e7e7;
  border-radius: 80px;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.login-button:hover {
  border: 1px solid #555555;
  box-shadow: 2px 4px 4px #c7c7c7;
}
</style>