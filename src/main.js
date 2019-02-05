import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import { HasError, AlertError } from 'vform'
import VueSweetalert2 from 'vue-sweetalert2'
import JsonExcel from 'vue-json-excel'

import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
Vue.use(VueSweetalert2)

Vue.component(HasError.name, HasError)
Vue.component('downloadExcel', JsonExcel)
Vue.component(AlertError.name, AlertError)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
