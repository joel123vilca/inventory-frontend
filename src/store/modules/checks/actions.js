import checksApi from '@/api/checks'
import { CLIENT_RENEG_LIMIT } from 'tls'

export const getChecks = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    checksApi
      .get(payload)
      .then(response => {
        commit('GET_CHECKS', { checks: response.data })
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const createCheck = ({ commit, dispatch }, payload = {}) => {
  return new Promise((resolve, reject) => {
    checksApi
      .post(payload)
      .then(response => {
        commit('GET_CHECKID', { checkId: response.data })
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const getProducts = ({ commit, dispatch }, payload = {}) => {
  return new Promise((resolve, reject) => {
    checksApi
      .getProducts(payload)
      .then(response => {
        commit('GET_PRODUCTS', { products: response.data.data })
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const saveCheck = ({ commit, dispatch }, payload = {}) => {
  return new Promise((resolve, reject) => {
    checksApi
      .postDetail(payload)
      .then(response => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
        console.log('error')
      })
  })
}

export const getDetails = ({ commit }, payload = {}) => {
  return new Promise((resolve, reject) => {
    checksApi
      .getDetails(payload)
      .then(response => {
        commit('GET_DETAILS', { details: response.data })
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
