import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'//'../shared/views/HomeView.vue'
import CounterView from '../shared/views/CounterView.vue'
import AboutView from '../shared/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),//import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*',
      //redirecti home
      redirect: () => {
        console.log('ruta no existe')
        return { name: 'home' }
      }
    }
  ]
})

export default router
