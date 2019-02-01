import axios from 'axios'

// const HOST = 'http://localhost:8000/api'
import { HOST } from '@/api/host.js'

export default {
  get (payload = {}) {
    const areaId = payload || {}
    console.log(areaId)
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/areas/${areaId}/checks`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }
}
