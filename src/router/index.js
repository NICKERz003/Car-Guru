import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue'; // หน้า 'หน้าแรก'
import CarSearch from '../components/CarSearch.vue'; // หน้า 'ค้นหารถยนต์'
import CarComparison from '../components/CarComparison.vue'; // หน้า 'เปรียบเทียบรถยนต์'
import LoanCalculator from '../components/LoanCalculator.vue'; // หน้า 'คำนวณการผ่อนชำระ'
import CarDetail from '../components/CarDetail.vue'; // หน้า 'รายละเอียดรถยนต์'
import LoginPage from '@/components/LoginPage.vue'; // หน้า 'เข้าสู่ระบบ'
import Navbar from '@/components/Navbar.vue';
import Advertising_space from '@/components/Advertising_space.vue';
import Content from '@/components/Content.vue';
import FooterDetail from '@/components/FooterKub.vue';
import UpdateNews from '@/components/UpdateNews.vue';
import Carlist from '@/components/Carlist.vue';
import Register from '@/components/Register.vue';


const routes = [
    { path: '/car-search', component: CarSearch },
    { path: '/car-comparison', component: CarComparison },
    { path: '/loan-calculator', component: LoanCalculator },
    { path: '/car-detail/:id', component: CarDetail, props: true },
    { path: '/login-page', component: LoginPage, meta: { noHeader: true, noFooter: true } },
    { path: '/navbar', component: Navbar },
    { path: '/advertising_space', component: Advertising_space },
    { path: '/content', component: Content },
    { path: '/footer', component: FooterDetail },
    { path: '/', component: Home },
    { path: '/UpdateNews', component: UpdateNews },
    { path: '/car-list', component: Carlist },
    { path: '/register-page', component: Register, meta: { noHeader: true, noFooter: true } }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
