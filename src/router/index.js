import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue'; // หน้า 'หน้าแรก'
import CarComparison from '../components/CarComparison.vue'; // หน้า 'เปรียบเทียบรถยนต์'
import LoanCalculator from '../components/LoanCalculator.vue'; // หน้า 'คำนวณการผ่อนชำระ'
import CarDetail from '../components/CarDetail.vue'; // หน้า 'รายละเอียดรถยนต์'
import LoginPage from '@/components/LoginPage.vue'; // หน้า 'เข้าสู่ระบบ'
import UpdateNews from '@/components/UpdateNews.vue';
import Register from '@/components/Register.vue';
import BrandPage from '@/components/BrandPage.vue';
import CarlistPage from '@/components/Carlist.vue';
import ProfileEditPage from '@/components/ProfileEditPage.vue';
import ElectricCar from '@/components/ElectricCar.vue';
import PopularCar from '@/components/PopularCar.vue';
import NewCar from '@/components/ฺNewCar.vue';
import News_1 from '@/components/NewsPage/News_1.vue';
import News_2 from '@/components/NewsPage/News_2.vue';
import News_3 from '@/components/NewsPage/News_3.vue';




const routes = [
    // path หน้า link ต่างๆ
    { path: '/', component: Home },
    { path: '/car-list', component: CarlistPage },
    { path: '/car-comparison', component: CarComparison },
    { path: '/loan-calculator', component: LoanCalculator },
    { path: '/Update-News', component: UpdateNews },
    { path: '/Profile-Page', component: ProfileEditPage },
    // path หน้า login
    { path: '/login-page', component: LoginPage, meta: { noHeader: true, noFooter: true } },
    { path: '/register-page', component: Register, meta: { noHeader: true, noFooter: true } },

    { path: '/car-detail/:id', component: CarDetail, props: true },
    { path: '/car-detail/ElectricCar/:id', component: ElectricCar, props: true },
    { path: '/car-detail/PopularCar/:id', component: PopularCar, props: true },
    { path: '/car-detail/DetailNewCar/:id', component: NewCar, props: true },
    { path: '/news1', component: News_1 },
    { path: '/news2', component: News_2 },
    { path: '/news3', component: News_3 },


    { path: '/brand/:brandName', component: BrandPage, props: true },


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
