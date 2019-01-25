import areaAPI from '@/api/areas';

export const updateStateModal = ({commit},value) => {
    commit('UPDATE_STATE_MODAL_CREATE',value)
}
export const updateStateModalEdit = ({commit},value) => {
  commit('UPDATE_STATE_MODAL_EDIT',value)
}
export const getAreas = ({commit},payload) => {
  areaAPI
  .get(payload)
  .then(response => {
      
    commit('GET_AREAS', { areas: response.data.data });
  })
  .catch(() => {
      console.log('Error en la petición 2');
  })
}
export const createArea = ({commit,dispatch},payload) => {
  areaAPI
  .post(payload)
  .then(response => {
      commit('UPDATE_STATE_MODAL_CREATE',false)
    dispatch("getAreas");
  })
  .catch(() => {
      console.log('Error en la petición');
  })
}

export const getDetailArea = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    areaAPI
      .getDetail(payload)
      .then(response => {
          console.log(response.data);
        commit('GET_AREA',{area:response.data} )
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const deleteArea = ({ commit,dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    areaAPI
      .delete(payload)
      .then(response => {
      commit('UPDATE_STATE_MODAL_CREATE',false)
      dispatch("getAreas");
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const updateArea = ({ commit,dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    areaAPI
      .update(payload)
      .then(response => {
          commit('UPDATE_STATE_MODAL_EDIT',false)
          dispatch("getAreas");
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
