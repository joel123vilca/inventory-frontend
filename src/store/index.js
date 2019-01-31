import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import areas from './modules/areas'
import brands from './modules/brands'
import products from './modules/products'
import checks from './modules/checks'
import movements from './modules/movements'
import alerts from './modules/alerts'
import auth from './modules/auth'
import users from './modules/users'

export default new Vuex.Store({
  modules: {
    areas,
    checks,
    brands,
    products,
    movements,
    alerts,
    auth,
    users
  }
})
