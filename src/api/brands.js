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
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .get(`${HOST}/brands`)
    //       .then(response => {
    //           console.log(response),
    //           console.log('holaaaaaaaaaaa'),
    //           resolve(response)
    //         })
    //       .catch(error => {reject(error),
    //         console.log('haoa')})
    //   })
  
}