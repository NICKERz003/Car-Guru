<template>
  <div>
    <router-link to="/Profile-Page">
      <button class="button"> <i class="fas fa-user"></i></button>
    </router-link>
  </div>
</template>

<script>
export default{
    name: 'ProfileBtn'
}
</script>

<style scoped>
.button{
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button:hover {
  background-color: #4caf50;
  color: white;
  border: 1px solid #555555;
  box-shadow: 2px 4px 4px #c7c7c7;
}
</style>