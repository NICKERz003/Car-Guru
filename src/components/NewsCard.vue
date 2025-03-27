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
          <router-link :to="'/news/' + news.id">
            <button class="read-more-btn">อ่านเพิ่มเติม</button>
          </router-link>
        </div>
      </div>
    </div>
    <button class="view-more-btn">ดูทั้งหมด</button>
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
          image: "https://via.placeholder.com/200x150?text=News+1",
          title: "เผยโฉม Bentley 2024 Ducati Diavel",
          description: "กรุงเทพฯ: เบนท์ลีย์เผยรถยนต์รุ่นใหม่ล่าสุด อิเล็กทริค Ducati และบริดจ์สโตน...",
        },
        {
          id: 2,
          image: "https://via.placeholder.com/200x150?text=News+2",
          title: "Yamaha Motors พัฒนาล่าสุด",
          description: "BANGKOK: งาน Bangkok Motor Show ครั้งที่ 37 เปิดตัวจักรยานยนต์รุ่นใหม่ล่าสุด...",
        },
        {
          id: 3,
          image: "https://via.placeholder.com/200x150?text=News+3",
          title: "พบกับจักรยานยนต์ในงาน Bangkok Motor Show",
          description: "BANGKOK: โลกทั้งใบกลายเป็นที่รวมตัวของยานพาหนะ...",
        },
        

      ],
    };
  },
};
</script>

<style scoped>
#news-section {
  margin: 20px;
  text-align: center;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
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
