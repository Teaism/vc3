import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Shop from '@/views/Shop.vue'
import Mine from '@/views/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
      // component: () => import('./views/Shop.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
      // component: () => import('./views/Mine.vue')
    }
  ]
})
