import checksApi from '@/api/checks';
import { CLIENT_RENEG_LIMIT } from 'tls';

export const getChecks = ({commit}, payload) => {
    return new Promise((resolve, reject) => {
        checksApi
        .get(payload)
        .then(response => {
            commit('GET_CHECKS', { checks: response.data });
            resolve(response)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export const createCheck = ({commit,dispatch},payload = {}) => {
    console.log(payload);
    console.log('aqui ');
    checksApi
    .post(payload)
    .then(response => {
        resolve(response)
    })
    .catch(() => {
        console.log('Error al crear check')
    })
}