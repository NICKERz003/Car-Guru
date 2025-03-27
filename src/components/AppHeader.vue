<!-- Header.vue -->
<template>
<section id="header">
    <div class="logo">
      <img src="@/assets/logo_car-guru.png" alt="Car Guru Logo" width="80" height="80">
    </div>
      <div class="search-box">
      <form action="/action_page.php">
        <input type="text" placeholder="Search..." name="search" >
        <button  type="submit">Search</button>
      </form>
    </div>
    <div class="box-right">
      <LoginBtn></LoginBtn>
    </div>
 </section>
</template>

<script>
import LoginBtn from './LoginBtn.vue';
export default {
  name: 'AppHeader',
  components:{
    LoginBtn
  }
}
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

.logo {
  align-items: center;
  padding: 10px;
  /* border: 1px solid #ccc; */
}

.search-box {
  width: 100%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 60px;
}

.search-box input{
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

.search-box button{
  background: #e7e7e7;
  border: 0;
  padding: 10px 25px;
  font-size: 20px;
  color: black;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.2s;
}

.search-box button:hover{
  background: #bbbbbb;
}

.box-right{
  padding: 10px;
  /* border: 1px solid #ccc; */
}

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
