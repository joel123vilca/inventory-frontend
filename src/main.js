import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { Form, HasError, AlertError } from "vform";
import VueSweetalert2 from 'vue-sweetalert2';
 
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI,{locale});
Vue.use(VueSweetalert2);

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
