import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/shared/views/HomeView.vue'
import CounterView from '@/counter/views/CounterView.vue'
//import PokeLayout from '@/pokemons/layouts/PokemonLayout.vue'
import { pokemonRoute } from '@/pokemons/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../shared/views/AboutView.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
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
