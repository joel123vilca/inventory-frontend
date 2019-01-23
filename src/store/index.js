import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalOpen:false,
    brands:[]
  },
  mutations: {
    UPDATE_STATE_MODAL(state,value){
        state.modalOpen=value
    },
  },

  getters:{
      getModal:state=>{
          return state.modalOpen
      }
  },
  actions: {
      updateStateModal({commit},value){
          commit('UPDATE_STATE_MODAL',value)
      }
  }
})
