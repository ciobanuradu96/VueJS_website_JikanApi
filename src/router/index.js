import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import SearchResult from '../views/SearchResult.vue'
import AnimePage from '../views/AnimePage.vue'
import CharactherPage from '../views/CharactherPage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:type/:searchValue',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/anime/:animeId',
    name: 'AnimePage',
    component: AnimePage
  },
  {
    path: '/characther/:charactherId',
    name: 'CharactherPage',
    component: CharactherPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
