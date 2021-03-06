import axios from 'axios'

// const HOST = 'http://localhost:8000/api'
import { HOST } from '@/api/host.js'

export default {
  get (payload = {}) {
    const areaId = payload || {}
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/areas/${areaId}/checks`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  post (payload = {}) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/areas/${payload.idarea}/checks`,
        method: 'post',
        data: payload
      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          payload.errors.set(payload.extraErrors(error.response))
          reject(error)
        })
    })
  },
  getProducts (payload = {}) {
    const areaId = payload || {}
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/areas/${areaId}/products`)
        .then(response => {
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  postDetail (payload = {}) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/checks/${payload.check_id}/details`,
        method: 'post',
        data: payload
      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          payload.errors.set(payload.extraErrors(error.response))
          reject(error)
        })
    })
  },
  getDetails (payload = {}) {
    const checkId = payload || {}
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/checks/${checkId}`)
        .then(response => {
          resolve(response)
        })
        .catch(error => reject(error))
    })
  }
}
