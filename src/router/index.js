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


import News_1 from '@/components/NewsPage/News_1.vue';
import News_2 from '@/components/NewsPage/News_2.vue';
import News_3 from '@/components/NewsPage/News_3.vue';

import ElectricCar1 from '@/components/DetailElectricCar/ElectricCar1.vue';
import ElectricCar2 from '@/components/DetailElectricCar/ElectricCar2.vue';
import ElectricCar3 from '@/components/DetailElectricCar/ElectricCar3.vue';
import ElectricCar4 from '@/components/DetailElectricCar/ElectricCar4.vue';
import ElectricCar5 from '@/components/DetailElectricCar/ElectricCar5.vue';
import ElectricCar6 from '@/components/DetailElectricCar/ElectricCar6.vue';


import NewCar1 from '@/components/DetailNewCar/NewCar1.vue';
import NewCar2 from '@/components/DetailNewCar/NewCar2.vue';
import NewCar3 from '@/components/DetailNewCar/NewCar3.vue';
import NewCar4 from '@/components/DetailNewCar/NewCar4.vue';
import NewCar5 from '@/components/DetailNewCar/NewCar5.vue';
import NewCar6 from '@/components/DetailNewCar/NewCar6.vue';

import PopularrCar1 from '@/components/DetailPopularCar.vue/PopularrCar1.vue';
import PopularrCar2 from '@/components/DetailPopularCar.vue/PopularrCar2.vue';
import PopularrCar3 from '@/components/DetailPopularCar.vue/PopularrCar3.vue';
import PopularrCar4 from '@/components/DetailPopularCar.vue/PopularrCar4.vue';
import PopularrCar5 from '@/components/DetailPopularCar.vue/PopularrCar5.vue';
import PopularrCar6 from '@/components/DetailPopularCar.vue/PopularrCar6.vue';


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
    { path: '/news1', component: News_1 },
    { path: '/news2', component: News_2 },
    { path: '/news3', component: News_3 },
    
    { path: '/car-detail/ElectricCar/1', component: ElectricCar1 },
    { path: '/car-detail/ElectricCar/2', component: ElectricCar2 },
    { path: '/car-detail/ElectricCar/3', component: ElectricCar3 },
    { path: '/car-detail/ElectricCar/4', component: ElectricCar4 },
    { path: '/car-detail/ElectricCar/5', component: ElectricCar5 },
    { path: '/car-detail/ElectricCar/6', component: ElectricCar6 },

    { path: '/car-detail/DetailNewCar/1', component: NewCar1 },
    { path: '/car-detail/DetailNewCar/2', component: NewCar2 },
    { path: '/car-detail/DetailNewCar/3', component: NewCar3 },
    { path: '/car-detail/DetailNewCar/4', component: NewCar4 },
    { path: '/car-detail/DetailNewCar/5' , component: NewCar5 },
    { path: '/car-detail/DetailNewCar/6', component: NewCar6 },

    { path: '/car-detail/PopularCar/1', component: PopularrCar1 },
    { path: '/car-detail/PopularCar/2', component: PopularrCar2 },
    { path: '/car-detail/PopularCar/3', component: PopularrCar3 },
    { path: '/car-detail/PopularCar/4', component: PopularrCar4 },
    { path: '/car-detail/PopularCar/5', component: PopularrCar5 },
    { path: '/car-detail/PopularCar/6', component: PopularrCar6 },


    { path: '/brand/:brandName', component: BrandPage, props: true },


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
