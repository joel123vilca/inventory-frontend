import axios from 'axios'

const HOST = 'http://localhost:8000/api'

export default {
 
    get() {
        return new Promise((resolve, reject) => {
          axios
            .get(`${HOST}/brands`)
            .then(response => {
                resolve(response)})
            .catch(error => reject(error))
        })
    },
    post(payload = {}) {
        // const vForm = payload.vForm || {}
    
        return new Promise((resolve, reject) => {
          axios({
            url: `${HOST}/brands`,
            method: 'post',
            data: payload
          })
            .then(response => resolve(response))
            .catch(error => {
            //   vForm.errors.set(vForm.extractErrors(error.response))
              reject(error)
            })
        })
    },

    getDetail(payload = {}) {
        const brandId = payload || {}
        console.log(brandId);
        return new Promise((resolve, reject) => {
          axios
            .get(`${HOST}/brands/${brandId}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
    },
    update(payload = {}) {
        const brandId = payload.id || {}
        // const vForm = payload.vForm || {}

        return new Promise((resolve, reject) => {
          axios({
            url: `${HOST}/brands/${brandId}`,
            method: 'put',
            data: payload
          })
            .then(response => resolve(response))
            .catch(error => {
            //   vForm.errors.set(vForm.extractErrors(error.response))
              reject(error)
            })
        })
    },
    
    delete(payload = {}) {
        const brandId = payload || {}
    
        return new Promise((resolve, reject) => {
          axios({
            url: `${HOST}/brands/${brandId}`,
            method: 'delete'
          })
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
    }
  
}