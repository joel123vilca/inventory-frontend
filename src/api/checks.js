import axios from 'axios'

const HOST = 'http://localhost:8000/api'

export default {
    get(payload = {}) {
        const areaId = payload || {}
        console.log(areaId);
            return new Promise((resolve, reject) => {
                axios 
                    .get(`${HOST}/areas/${areaId}/checks`)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
        })
    },
    post(payload = {}) {
        console.log(payload.idarea);
        return new Promise((resolve, reject) => {
            axios({
                url:`${HOST}/areas/${payload.idarea}/checks`,
                method: 'post',
                data: payload
            })
            .then(response => {
                payload.reset(),
                payload.clear(),
                resolve(response)
            })
            .catch(error => {
                payload.errors.set(payload.extraErrors(error.response))
                reject(error)
            })
        })
    }
}
