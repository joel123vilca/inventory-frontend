import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons'
import locale from 'element-ui/lib/locale/lang/en'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('font-awesome-layers', FontAwesomeLayers)
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


// library.add(faCoffee)
// library.add(faUser)

// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElementUI,{locale});

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
