import axios from 'axios'

import { HOST } from '@/api/host.js'

export default {

  get () {
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/areas`)
        .then(response => {
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  post (payload = {}) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/areas`,
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

  getDetail (payload = {}) {
    const areaId = payload || {}
    console.log(areaId)
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/areas/${areaId}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  update (payload = {}) {
    const areaId = payload.id || {}
    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/areas/${areaId}`,
        method: 'put',
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

  delete (payload = {}) {
    const areaId = payload || {}

    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/areas/${areaId}`,
        method: 'delete'
      })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }

}
