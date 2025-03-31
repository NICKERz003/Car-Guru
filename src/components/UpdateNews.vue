<template>
    <div class="news-container">
        <div class="news-card" v-for="(article, index) in articles" :key="index">
            <img :src="article.image" :alt="article.title" class="news-image">
            <div class="news-content">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <a :href="article.link" target="_blank" class="read-more">อ่านต่อ</a>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: 'UpdateNews',
    data() {
        return {
            articles: [
                {
                    title: "เปิดหล่อในมอเตอร์โชว์ MAZDA 6e เข้าไทย เร็วๆนี้",
                    description: "Mazda 6e รถซีดานพลังงานไฟฟ้า การร่วมมือกับแบรนด์จีนอย่าง ChangAn ถูกนำมาโชว์ตัวภายในงานมอเตอร์โชว์...",
                    image: "https://static.thairath.co.th/media/Dtbezn3nNUxytg04avetJwEQoVObPK2bfdBtDekTznl4ww.webp",
                    link: "/news1"
                },
                {
                    title: "All NEW MG4 ลดทอนความดิบลงทั้งดีไซน์และสมรรถนะ แต่ตัวโตขึ้นและเบาลง",
                    description: "MG4 รุ่นปัจจุบัน เป็นหนึ่งในรุ่นที่ได้รับผลตอบรับดีจากหลายตลาด แต่ไม่ใช่กับในบ้านเกิด เนื่องจาก ...",
                    image: "https://autolifethailand.tv/wp-content/uploads/2025/03/MG4_1.jpg",
                    link: "/news2"
                },
                {
                    title: "Lexus RZ เปิดตัวแล้ว ขับได้ไกลขึ้น 20% พร้อมเสริมทัพ RZ500e F SPORT แต่งพิเศษและทรงพลังกว่า",
                    description: "Lexus RZ รุ่นล่าสุดเปิดตัวแล้วที่เบลเยี่ยม โดยปรับเปลี่ยนใหม่ในหลายจุด ซึ่งเน้นไปที่คุณภาพการขับขี่ให้สนุกมากขึ้น รวมถึงการ...",
                    image: "https://autolifethailand.tv/wp-content/uploads/2025/03/Lexus-RZ_1.jpg",
                    link: "/news3"
                },
                {
                    title: "รีวิวรถสปอร์ตสุดหรูแห่งปี 2024",
                    description: "มาดูรีวิวรถสปอร์ตสุดหรูที่ได้รับความนิยมมากที่สุดในปีนี้...",
                    image: "https://example.com/sport-car.jpg",
                    link: "/news4"
                }
            ]
        };
    }
};
</script>

<style scoped>
.news-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    margin: auto;
    padding: 20px;
}
.news-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.news-image {
    width: 100%;
    height: auto;
}
.news-content {
    padding: 15px;
}
.news-content h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}
.news-content p {
    font-size: 1rem;
    color: #555;
}
.read-more {
    display: inline-block;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
}
.read-more:hover {
    text-decoration: underline;
}
</style>
