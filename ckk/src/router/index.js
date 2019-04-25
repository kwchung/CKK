import Vue from 'vue'
import Router from 'vue-router'
import Attractions from '@/components/Attractions'
import Weather from '@/components/Weather'
import Wishlist from '@/components/Wishlist'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  }, {
    path: '/',
    name: 'Attractions',
    component: Attractions
  }, {
    path: '/weather',
    name: 'Weather',
    component: Weather
  }, {
    path: '/hello',
    name: 'Hello',
    component: Hello
  }, {
    path: '/*',
    redirect: '/'
  }
  ],
  mode: 'history',
  base: '/TainanFun'
})
