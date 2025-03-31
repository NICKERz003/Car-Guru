<template>
  <section id="news-section">
    <h2>ข่าวและรีวิวเกี่ยวกับยานยนต์</h2>
    <div class="news-container">
      <div class="news-card" v-for="(news, index) in newsItems" :key="index">
        <div class="news-image">
          <img :src="news.image" alt="News image" />
        </div>
        <div class="news-details">
          <h3>{{ news.title }}</h3>
          <p class="news-description">{{ news.description }}</p>
          <router-link :to="'/news' + news.id">
            <button class="read-more-btn">อ่านเพิ่มเติม</button>
          </router-link>
        </div>
      </div>
    </div>
    <router-link to ="/Update-News" ><button class="view-more-btn">ดูทั้งหมด</button></router-link>
  </section>
</template>

<script>
export default {
  name: "NewsCard",
  data() {
    return {
      // ข้อมูลข่าว
      newsItems: [
        {
          id: 1,
          image: "https://static.thairath.co.th/media/Dtbezn3nNUxytg04avetJwEQoVObPK2bfdBtDekTznl4ww.webp",
          title: "เปิดหล่อในมอเตอร์โชว์ MAZDA 6e เข้าไทย เร็วๆนี้",
          description: "Mazda 6e รถซีดานพลังงานไฟฟ้า การร่วมมือกับแบรนด์จีนอย่าง ChangAn ถูกนำมาโชว์ตัวภายในงานมอเตอร์โชว์...",
        },
        {
          id: 2,
          image: "https://autolifethailand.tv/wp-content/uploads/2025/03/MG4_1.jpg",
          title: "All NEW MG4 ลดทอนความดิบลงทั้งดีไซน์และสมรรถนะ แต่ตัวโตขึ้นและเบาลง",
          description: "MG4 รุ่นปัจจุบัน เป็นหนึ่งในรุ่นที่ได้รับผลตอบรับดีจากหลายตลาด แต่ไม่ใช่กับในบ้านเกิด เนื่องจาก ...",
        },
        {
          id: 3,
          image: "https://autolifethailand.tv/wp-content/uploads/2025/03/Lexus-RZ_1.jpg",
          title: "Lexus RZ เปิดตัวแล้ว ขับได้ไกลขึ้น 20% พร้อมเสริมทัพ RZ500e F SPORT แต่งพิเศษและทรงพลังกว่า",
          description: "Lexus RZ รุ่นล่าสุดเปิดตัวแล้วที่เบลเยี่ยม โดยปรับเปลี่ยนใหม่ในหลายจุด ซึ่งเน้นไปที่คุณภาพการขับขี่ให้สนุกมากขึ้น รวมถึงการ...",
        },
        

      ],
    };
  },
};
</script>

<style scoped>
#news-section {
  margin: auto;
  padding: 20px;
  text-align: center;
  width: 60%;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px groove;
}

.news-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.news-card {
  background-color: #fff;
  border-radius: 10px;
  width: 220px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: scale(1.05);
}

.news-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.news-details {
  padding: 10px;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
}

.news-description {
  font-size: 14px;
  color: #888;
  margin: 10px 0;
}

.read-more-btn {
  background-color: #4caf50;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.read-more-btn:hover {
  background-color: #45a049;
}

.view-more-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-top: 20px;
  
}

.view-more-btn:hover {
  background-color: #45a049;
}
</style>
