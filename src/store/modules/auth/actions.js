import { userService } from '@/_services/user.service.js';

export const login = ({commit,dispatch},payload)=>{
    console.log(payload);
    commit('loginRequest', payload.username );
            userService.login(payload)
                .then(
                    user => {
                        commit('loginSuccess', user);
                    },
                    error => {
                        console.log(error.response.data.errors.username);
                        commit('loginFailure', error);
                        dispatch('alerts/error', error.response.data.errors.username, { root: true });
                    }
                );
}


export const logout = ({commit})=>{
   
    return new Promise((resolve, reject) => {
        userService
        .logout()
        .then(response => {
          commit('logout');
          resolve(response)
        })
        .catch((error) => {
            console.log('Error en la petición de salir sesión');
            reject(error)
        })
      })
}
