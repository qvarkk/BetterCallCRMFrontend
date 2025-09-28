import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue');
const Products = () => import('@/views/Products.vue');
const Deals = () => import('@/views/Deals.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/products',
      component: Products,
    },
    {
      path: '/deals',
      component: Deals,
    },
  ],
});

export default router
