import axios from 'axios'

// const HOST = 'http://localhost:8000/api'
import { HOST } from '@/api/host.js'

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'Authorization': ''}
//   });

var token = localStorage.getItem('token')
console.log(token)
if (token) {
  console.log('aver aver que paso aqui')
  axios.defaults.headers.common['Authorization'] = `Bearer${token}`
}

export default {

  get () {
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/brands`)
        .then(response => {
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  post (payload = {}) {
    // const vForm = payload.vForm || {}
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/brands`,
        method: 'post',
        data: payload
      })
        .then(response => {
          payload.reset(),
          payload.clear(),
          resolve(response)
        }
        )
        .catch(error => {
          console.log(payload.errors)
          console.log(error.response)
          //   payload.errors.set(payload.extractErrors(error.response));
          payload.errors.set(payload.extractErrors(error.response))
          reject(error)
        })
    })
  },

  getDetail (payload = {}) {
    const brandId = payload || {}
    console.log(brandId)
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/brands/${brandId}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  update (payload = {}) {
    console.log(payload.name)
    const brandId = payload.id || {}

    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/brands/${brandId}`,
        method: 'put',
        data: payload
      })
        .then(response => {
          payload.reset(),
          payload.clear(),
          resolve(response)
        })
        .catch(error => {
          // console.log(payload);
          payload.errors.set(payload.extractErrors(error.response))
          reject(error)
        })
    })
  },

  delete (payload = {}) {
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
