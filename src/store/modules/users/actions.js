import { userService } from '@/api/user.js'

export const getAll = ({ commit }) => {
  commit('getAllRequest')
  userService.getAll()
    .then(
      users => commit('getAllSuccess', users),
      error => commit('getAllFailure', error)
    )
}
export const getAllErrors2 = ({ commit }, value) => {
  // console.log(value)
  commit('getAllErrors', value)
}

export const clearError = ({ commit }, nameError = {}) => {
  if (nameError) {
    commit('clearError', nameError)
    return false
  }

  commit('clearAllError')
}
