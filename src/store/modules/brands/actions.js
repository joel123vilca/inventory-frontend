import brandAPI from '@/api/brands';

export const updateStateModal = ({commit},value)=>{
    commit('UPDATE_STATE_MODAL_CREATE',value)
}
export const updateStateModalEdit = ({commit},value)=>{
  commit('UPDATE_STATE_MODAL_EDIT',value)
}

export const updateStateLoadingTable = ({commit},value)=>{
    commit('UPDATE_STATE_LOADING_TABLE',value)
  }

export const getBrands = ({commit},payload)=>{
  brandAPI
  .get(payload)
  .then(response => {
    commit('UPDATE_STATE_LOADING_TABLE',false)
    commit('GET_BRANDS', { brands: response.data.data });
  })
  .catch(() => {
      console.log('Error en la petición 2');
  })
}
export const createBrand = ({commit,dispatch},payload)=>{
  //   console.log(payload.errors.set());
  return new Promise((resolve, reject) => {
    brandAPI
    .post(payload)
    .then(response => {
        commit('UPDATE_STATE_MODAL_CREATE',false)
      dispatch("getBrands");
      resolve(response)
    })
    .catch((error) => {
        console.log('Error en la petición');
        reject(error)
    })
  })
  
}

export const getDetailBrand = ({ commit }, payload) =>{
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
}

export const deleteBrand = ({ commit,dispatch }, payload) => {
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
}

export const updateBrand = ({ commit,dispatch }, payload)=> {
  return new Promise((resolve, reject) => {
    brandAPI
      .update(payload)
      .then(response => {
          commit('UPDATE_STATE_MODAL_EDIT',false)
          dispatch("getBrands");
        resolve(response)
      })
      .catch(error => {
        console.log('errorxD');
        reject(error)
      })
  })
}
