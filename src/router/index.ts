import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Main from '@/views/Main.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/main',
    name: 'About',
    component: Main,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
