import Vue from 'vue'
import Vuex from 'vuex'
import brandAPI from '@/api/brands';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalOpenCreate:false,
    modalOpenEdit:false,
    brands:[],
    brand:''
  },
  mutations: {
    UPDATE_STATE_MODAL_EDIT(state,value){
        state.modalOpenEdit=value
    },
    UPDATE_STATE_MODAL_CREATE(state,value){
        state.modalOpenCreate=value
    },
    GET_BRANDS(state, { brands }) {
        state.brands = brands
    },
    GET_BRAND(state,{brand}){
        // console.log(brand);
        state.brand=brand
    }

  },

  getters:{
      getModalCreate:state=>{
          return state.modalOpenCreate
      },
      getModalEdit:state=>{
        return state.modalOpenEdit
        },
    getBrand:state=>{
        return state.brand
    }
  },
  actions: {
      updateStateModal({commit},value){
          commit('UPDATE_STATE_MODAL_CREATE',value)
      },
      updateStateModalEdit({commit},value){
        commit('UPDATE_STATE_MODAL_EDIT',value)
      },
      getBrands({commit},payload){
        brandAPI
        .get(payload)
        .then(response => {
        
          commit('GET_BRANDS', { brands: response.data.data });
        })
        .catch(() => {
            console.log('Error en la petición 2');
        })
      },
      createBrand({commit,dispatch},payload){
        brandAPI
        .post(payload)
        .then(response => {
            commit('UPDATE_STATE_MODAL_CREATE',false)
          dispatch("getBrands");
        })
        .catch(() => {
            console.log('Error en la petición');
        })
      },

      getDetailBrand({ commit }, payload) {
        return new Promise((resolve, reject) => {
          brandAPI
            .getDetail(payload)
            .then(response => {
                console.log(response.data);
              commit('GET_BRAND',{brand:response.data} )
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        })
    },

    deleteBrand({ commit,dispatch }, payload) {
        return new Promise((resolve, reject) => {
          brandAPI
            .delete(payload)
            .then(response => {
            commit('UPDATE_STATE_MODAL_CREATE',false)
            dispatch("getBrands");
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        })
      },
    
      updateBrand({ commit,dispatch }, payload) {
        return new Promise((resolve, reject) => {
          brandAPI
            .update(payload)
            .then(response => {
                commit('UPDATE_STATE_MODAL_EDIT',false)
                dispatch("getBrands");
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        })
    },


    }
})
