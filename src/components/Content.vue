<template>
  <section id="content">
    <Image_slide1></Image_slide1>
    <Image_slide2></Image_slide2>
    <Image_slide3></Image_slide3>
    <BrandCar></BrandCar>
    <NewsCard></NewsCard>
  </section>
</template>

<script>
import Image_slide1 from './Homepage/Image_slide1.vue';
import Image_slide2 from './Homepage/Image_slide2.vue';
import Image_slide3 from './Homepage/Image_slide3.vue';
import BrandCar from './Homepage/ฺBrandCar.vue';
import NewsCard from './NewsCard.vue';

export default {
  name: 'ContentPart',
  components:{
  Image_slide1,
  Image_slide2,
  Image_slide3,
  BrandCar,
  NewsCard
  },
  
};
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 40px auto;
  padding: 10px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}
</style>
