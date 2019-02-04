import movementAPI from '@/api/movements'

export const updateStateModalTransfer = ({ commit }, value) => {
  commit('UPDATE_STATE_MODAL_TRANSFER', value)
}

export const getMovements = ({ commit }, payload) => {
  movementAPI
    .get(payload)
    .then(response => {
    //   commit('UPDATE_STATE_LOADING_TABLE',false)
      commit('GET_MOVEMENTS', { movements: response.data.data })
    })
    .catch(() => {
      console.log('Error en la petición de obtener movimientos')
    })
}
export const createMovement = ({ commit, dispatch }, payload) => {
  //   console.log(payload.errors.set());
  movementAPI
    .post(payload)
    .then(() => {
      commit('UPDATE_STATE_MODAL_TRANSFER', false)
      // commit('UPDATE_STATE_LOADING_TABLE',true)
      dispatch('products/getProducts', null, { root: true })

    //    this.$swal("", "El producto ha sido actualizado", "success");
    })
    .catch(() => {
      console.log('Error en la petición')
    })
}
