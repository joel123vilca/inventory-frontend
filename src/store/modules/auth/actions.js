import { userService } from '@/api/user.js'

export const login = ({ commit, dispatch }, payload) => {
  console.log(payload)
  commit('loginRequest', payload.username)

  return new Promise((resolve, reject) => {
    userService
      .login(payload)
      .then(user => {
        commit('loginSuccess', user)

        console.log('asdasdasdasasd')
        resolve(user)
      })
      .catch((error) => {
        console.log(error.response.data.errors.username)
        console.log(error.response.data.errors)
        commit('loginFailure', error)

        // dispatch('alerts/error', error.response.data.errors.username, { root: true })Ñ
        dispatch('users/getAllErrors2', error.response.data.errors, { root: true })
        //
        // this.submitErrors = error.response.data.errors || {}
        reject(error)
      })
  })
}

export const logout = ({ commit }) => {
  userService
    .logout()
    .then(() => {
      console.log('intentando hacer')
      commit('logout')
      //   resolve(response)
    })
    .catch(() => {
      console.log('Error en la petición de salir sesión')
      // reject(error)
    })
}
