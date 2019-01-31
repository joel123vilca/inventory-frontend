import axios from 'axios'
import { authHeader } from '../_helpers';
const HOST = 'http://localhost:8000/api'


export const userService = {
    login,
    logout,
    getAll
};

function login(user={}){
    return new Promise((resolve, reject) => {
      axios({url: `${HOST}/login`, data: user, method: 'POST' })
      .then(resp => {
        const token = resp.data.token
        const user = resp.data.user
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)
        axios.defaults.headers.common['Authorization'] = `Bearer${token}`
        resolve(resp)
      })
      .catch(err => {
        //   console.log(err.response.data.errors.username);
        // commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
    })
}

// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }

function logout({commit}){
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${HOST}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}