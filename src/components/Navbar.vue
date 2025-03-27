<template>
<section id="nav-bar">
  <div>
    <router-link to ="/"><button class="nav-button" >หน้าหลัก</button></router-link>

  <div class="dropdown">
    <router-link to ="/car-list"><button class="nav-button">รถยนต์</button></router-link>
    <div class="dropdown-content">
      <button @click="navigateTo('/electric-cars')" class="dropdown-item">รถยนต์ไฟฟ้า</button>
        <button @click="navigateTo('/new-cars')" class="dropdown-item">รถยนต์ใหม่</button>
        <button @click="navigateTo('/link3')" class="dropdown-item">link3</button>
        <button @click="navigateTo('/link4')" class="dropdown-item">link4</button>
        <button @click="navigateTo('/link5')" class="dropdown-item">link5</button>
    </div>
  </div>

    <router-link to ="/car-comparison"><button class="nav-button" >เปรียบเทียบรถยนต์</button></router-link>
    <router-link to ="/loan-calculator"><button class="nav-button" >คำนวณการผ่อนชำระ</button></router-link>
    <router-link to ="/Update-News"><button class="nav-button" >ข่าวสาร</button></router-link>
  </div>
 </section>
</template>

<script>
export default {
  name: 'NavbarComponent'
};
</script>
<style scoped>
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
  color: white;
  background-color: #2c3e50;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #2c3e50;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content button {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  border: none;
  background: transparent;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
}

.dropdown-content button:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>