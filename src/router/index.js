import { createRouter, createWebHistory } from 'vue-router';
import CarSearch from '../components/CarSearch.vue'; // หน้า 'ค้นหารถยนต์'
import CarComparison from '../components/CarComparison.vue'; // หน้า 'เปรียบเทียบรถยนต์'
import LoanCalculator from '../components/LoanCalculator.vue'; // หน้า 'คำนวณการผ่อนชำระ'
import CarDetail from '../components/CarDetail.vue'; // หน้า 'รายละเอียดรถยนต์'
import LoginPage from '@/components/LoginPage.vue';

const routes = [
    { path: '/car-search', component: CarSearch },
    { path: '/car-comparison', component: CarComparison },
    { path: '/loan-calculator', component: LoanCalculator },
    { path: '/car-detail/:id', component: CarDetail },
    { path: '/login-page', component: LoginPage }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
