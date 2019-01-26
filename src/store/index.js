import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import areas from './modules/areas'
import brands from './modules/brands'
import products from './modules/products'

export default new Vuex.Store({
  modules: {
    areas,
    brands,
    products
  }
})
