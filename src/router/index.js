import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompteurView from '@/views/CompteurView.vue'
import CategoryView from '@/views/BigCategory.vue'
import ProductView from '@/views/ListeProduit.vue'
import PanierView from '@/views/PanierView.vue'
import SideCategoryView from '@/views/SideCategory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/compteur',
      name: 'compteur',
      component: CompteurView,
    },
    {
      path: '/selectCategory',
      name: 'SelectCategory',
      component: CategoryView,
    },
    {
      path: '/sideCategory',
      name: 'Category',
      component: SideCategoryView,
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductView,
    },
    {
      path: '/panier',
      name: 'Panier',
      component: PanierView,
    },
  ],
})

export default router
