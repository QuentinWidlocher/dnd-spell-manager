import { createWebHistory, createRouter } from 'vue-router'

import CardList from './pages/CardList.vue'
import Settings from './pages/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'CardList',
    component: CardList,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
