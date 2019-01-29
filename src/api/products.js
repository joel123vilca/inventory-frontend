import axios from 'axios'

const HOST = 'http://localhost:8000/api'

export default {
 
    get() {
        return new Promise((resolve, reject) => {
          axios
            .get(`${HOST}/products`)
            .then(response => {
                resolve(response)})
            .catch(error => reject(error))
        })
    },
    
    getByArea(payload={}) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${HOST}/areas/${payload}/products`)
          .then(response => {
              resolve(response)})
          .catch(error => reject(error))
      })
  },
    post(payload = {}) {
        // const vForm = payload.vForm || {}
    console.log(payload);
        return new Promise((resolve, reject) => {
          axios({
            url: `${HOST}/products`,
            method: 'post',
            data: payload
          })
            .then(response => {
              payload.reset(),
              payload.clear(),
              resolve(response)
            })
            .catch(error => {
              payload.errors.set(payload.extractErrors(error.response))
              reject(error)
            })
        })
    },

    getDetail(payload = {}) {
        const productId = payload || {}
        console.log(productId);
        return new Promise((resolve, reject) => {
          axios
            .get(`${HOST}/products/${productId}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
    },
    update(payload = {}) {
        const productId = payload.id || {}
        console.log(payload);
        // const vForm = payload.vForm || {}

        return new Promise((resolve, reject) => {
          axios({
            url: `${HOST}/products/${productId}`,
            method: 'put',
            data: payload
          })
            .then(response => {
              payload.reset(),
                payload.clear(),
                resolve(response)})
            .catch(error => {
              payload.errors.set(payload.extractErrors(error.response))
              reject(error)
            })
        })
    },
    
    delete(payload = {}) {
        const productId = payload || {}
        // console.log(payload);
        return new Promise((resolve, reject) => {
          axios({
            url: `${HOST}/products/${productId}`,
            method: 'delete'
          })
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
    }
  
}