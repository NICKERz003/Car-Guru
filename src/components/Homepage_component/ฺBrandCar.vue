<template>
  <section id="brand-section">
    <h1>Popular Brands</h1>
    <div class="brand-container">
      <div class="brand-card" v-for="(brand, index) in brands" :key="index">
        <a :href="brand.link" target="_blank" >
          <img :src="brand.image" :alt="brand.name" class="brand-logo" /> 
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BrandCar",
  data() {
    return {
      // ข้อมูลแบรนด์รถ
      brands: [
        { link:"https://www.toyota.co.th/en", name: "Toyota", image: "https://www.car250.com/wp-content/uploads/2020/07/toyota-europe-pulls-a-nike-with-new-logo-redesign-loses-the-wordmark_2.jpg" },
        { link:"https://truck.isuzu-tis.com/?utm_campaign=isuzu_brand_truck&utm_source=sem&utm_medium=cpc&utm_campaign_id=1841666372&utm_adgroup_id=175361515163&utm_ad_id=735379871192&gad_source=1&gclid=Cj0KCQjw16O_BhDNARIsAC3i2GBSwzIkkkSUrGdCOQVqpsya659f3ho0NpR60pVncDIYlGk9HlZF4ygaAplkEALw_wcB", name: "Isuzu", image: "https://f.ptcdn.info/631/002/000/1361962664-3005111201-o.jpg" },
        { link:"https://www.honda.co.th/",  name: "Honda", image: "https://i.pinimg.com/736x/9b/7f/54/9b7f5424304b1c16995ea112e3f255ca.jpg" },
        { link:"https://www.isuzu-tis.com/",  name: "Mitsubishi", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mitsubishi_motors_new_logo.svg" },
        { link:"https://www.ford.co.th/",  name: "Ford", image: "https://images.seeklogo.com/logo-png/5/2/ford-logo-png_seeklogo-56584.png" },
        { link:"https://www.mazda.co.th/th",  name: "Mazda", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFX_FFzg7a3F0AYu3K8gSNSY2cMDtEnLHpw&s" },
        { link:"https://www.mgcars.com/th",  name: "MG", image: "https://e7.pngegg.com/pngimages/1014/612/png-clipart-mg-6-car-saic-motor-mg-gs-car-emblem-trademark-thumbnail.png" },
        { link:"https://www.nissan.co.th/",  name: "Nissan", image: "https://www.headlightmag.com/hlmwp/wp-content/uploads/2020/03/Nissan-Logo-Main.jpg" },
        { link:"https://www.suzuki.co.th/",  name: "Suzuki", image: "https://download.logo.wine/logo/Suzuki/Suzuki-Logo.wine.png" },
        { link:"https://www.gwm.co.th/",  name: "GWM", image: "https://seeklogo.com/images/G/gwm-group-logo-BD9F40480D-seeklogo.com.png"},
        { link:"https://www.porsche.com/pap/_thailand_/",  name: "Porsche", image: "https://www.popticles.com/wp-content/uploads/2024/10/Porsche-Logo.png"},
        { link:"https://www.bmw.co.th/th/home.html",  name: "BMW", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rgQKlGikvOmGqgykkIJ448mmEyLqRdK5EQ&s"},
        { link:"https://www.audi.co.th/en/",  name: "Audi", image: "https://images.seeklogo.com/logo-png/21/2/audi-logo-png_seeklogo-218270.png"},
        { link:"https://www.ferrari.com/en-TH",  name: "Ferrari", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZEFdF2tl48xabmd4uXzDwbGXKjbPUMfVpg&s"},
        { link:"https://www.mercedes-benz.co.th/th",  name: "Mercedes-Benz", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3wNSrk8yvyjej9L6VoBxaVoFefiUJP3Esg&s"}
      ],
    };
  },
};
</script>

<style scoped>
#brand-section {
  text-align: center;
  margin: 20px;
}


.brand-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.brand-card {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  box-shadow: 3px 3px 10px rgb(204, 204, 204);
  border-radius: 8px;
  background-color: #f9f9f9;
}

.brand-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  
}

</style>
