import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
  base: '/CKK'
})
