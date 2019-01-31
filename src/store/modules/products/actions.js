import productAPI from '@/api/products';

export const updateStateModal = ({commit},value)=>{
    commit('UPDATE_STATE_MODAL_CREATE',value)
}

export const updateStateModalShow = ({commit},value)=>{
  commit('UPDATE_STATE_MODAL_SHOW',value)
}

export const updateStateModalEdit = ({commit},value)=>{
  commit('UPDATE_STATE_MODAL_EDIT',value)
}

export const updateStateLoadingTable = ({commit},value)=>{
  commit('UPDATE_STATE_LOADING_TABLE',value)
}

export const getProducts = ({commit},payload)=>{
  productAPI
  .get(payload)
  .then(response => {
    commit('UPDATE_STATE_LOADING_TABLE',false)
    commit('GET_PRODUCTS', { products: response.data.data });
  })
  .catch(() => {
      console.log('Error en la petición 2');
  })
}

export const getProductsByArea = ({commit},payload)=>{
  productAPI
  .getByArea(payload)
  .then(response => {
    // commit('UPDATE_STATE_LOADING_TABLE',false)
    commit('GET_PRODUCTS', { products: response.data.data });
  })
  .catch(() => {
      console.log('Error en la petición 2');
  })
}
export const createProduct = ({commit,dispatch},payload)=>{

  return new Promise((resolve, reject) => {
    productAPI
  .post(payload)
  .then(response => {
      commit('UPDATE_STATE_MODAL_CREATE',false)
      // commit('UPDATE_STATE_LOADING_TABLE',true)
      dispatch("getProducts")
      resolve(response)
      
  })
  .catch((error) => {
      console.log('Error en la petición producto');
      reject(error)
  })
  })
}

export const getDetailProduct = ({ commit }, payload) =>{
  return new Promise((resolve, reject) => {
    productAPI
      .getDetail(payload)
      .then(response => {
          console.log(response.data);
        commit('GET_PRODUCT',{product:response.data.data} )
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const deleteProduct = ({ commit,dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    productAPI
      .delete(payload)
      .then(response => {
      commit('UPDATE_STATE_MODAL_CREATE',false)
      dispatch("getProducts");
     
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const updateProduct = ({ commit,dispatch }, payload)=> {
  return new Promise((resolve, reject) => {
    productAPI
      .update(payload)
      .then(response => {
          commit('UPDATE_STATE_MODAL_EDIT',false)
          dispatch("getProducts");
        resolve(response)
      })
      .catch(error => {
        console.log('errorxD');
        reject(error)
      })
  })
}
