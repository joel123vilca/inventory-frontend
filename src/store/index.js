import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import areas from './modules/areas'
import brands from './modules/brands'
import products from './modules/products'
import checks from './modules/checks'

export default new Vuex.Store({
  modules: {
    areas,
    checks,
    brands,
    products,
    movements
  }
})
