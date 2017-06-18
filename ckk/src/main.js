// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
