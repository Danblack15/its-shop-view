import { createRouter, createWebHistory } from 'vue-router'

import ProductsPage from '@/views/ProductsPage/ProductsPage'
import NotFoundPage from '@/views/NotFoundPage/NotFoundPage'

const routes = [
  {
    path: '/its-shop-view/',
    name: 'home',
    component: ProductsPage
  },
  {
    path: '/its-shop-view/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
