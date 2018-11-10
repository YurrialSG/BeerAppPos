import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BeerDetail from './views/BeerDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () =>
        import( /* webpackChunkName: "Checkout" */ './views/Checkout.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: BeerDetail
    }
  ]
})
