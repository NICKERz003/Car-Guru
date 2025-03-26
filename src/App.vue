<template>
<section id="header">
    <div class="logo">
      <img src="./assets/logo_car-guru.png" alt="Car Guru Logo" width="50" height="50">
    </div>
      <div class="search-box">
      <form action="/action_page.php">
        <input type="text" placeholder="Search..." name="search" >
        <button  type="submit">Search</button>
      </form>
    </div>
    <div class="box-right">
      <button a href="#" class="login-button">เข้าสู่ระบบ/สมัครสมาชิก</button>
    </div>
 </section>

 <section id="nav-bar">
  <button class="nav-button">หน้าหลัก</button>
    <div class="dropdown">
    <button class="nav-button">รถยนต์</button>
    <div class="dropdown-content">
      <a href="#">รถยนต์ไฟฟ้า</a>
      <a href="#">รถยนต์ใหม่</a>
      <a href="#">link3</a>
      <a href="#">link4</a>
      <a href="#">link5</a>
    </div>
  </div>
  <button class="nav-button">ข่าวสาร</button>
  <button class="nav-button">คำนวณการผ่อนชำระ</button>
  <button class="nav-button">เกี่ยวกับเรา</button>
 </section>

 <section id="Image">
  <h1>พื้นที่โฆษณา</h1>
 </section>

  <section id="content">
    <h1>เนื้อหา</h1>
  </section>

  <section id="footer">
    <h1>Footer</h1>
  </section>

</template>


<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
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


#nav-bar {
  background-color: #e7e7e7; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 0px solid #ccc; 
}

.nav-button {
  border: 1px solid #e7e7e7;;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.nav-button:hover {
  border: 1px solid #555555;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#Image{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  box-shadow: 5px 5px 5px #c7c7c7;
  background-image: url('https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

#content {
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  height: 500px;
  background-color: #e7e7e7;
}

#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #2c3e50;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

</style>
