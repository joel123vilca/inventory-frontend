import checksApi from '@/api/checks';

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