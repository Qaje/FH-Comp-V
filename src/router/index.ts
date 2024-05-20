import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '@/shared/views/HomeView.vue'

import { pokemonRoute } from '@/pokemons/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/HelloWorld.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../shared/views/AboutView.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/counter/views/CounterView.vue')
    },
    {
      ...pokemonRoute,
      path: '/pokemons'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        console.log('la ruta no existe')
        return { name: 'home' }
      }
    }
  ]
})
export default router
