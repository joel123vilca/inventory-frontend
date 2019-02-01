import { userService } from '@/_services/user.service.js'

export const login = ({ commit, dispatch }, payload) => {
  console.log(payload)
  commit('loginRequest', payload.username)
  // userService.login(payload)
  //     .then(
  //         user => {
  //             commit('loginSuccess', user);
  //         },
  //         error => {
  //             console.log(error.response.data.errors.username);
  //             commit('loginFailure', error);
  //             dispatch('alerts/error', error.response.data.errors.username, { root: true });
  //         }
  //     );

  return new Promise((resolve, reject) => {
    userService
      .login(payload)
      .then(user => {
        commit('loginSuccess', user)
        resolve(user)
      })
      .catch((error) => {
        console.log(error.response.data.errors.username)
        commit('loginFailure', error)
        dispatch('alerts/error', error.response.data.errors.username, { root: true })
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
