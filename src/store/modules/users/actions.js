import { userService } from '@/api/user.js'

export const getAll = ({ commit }) => {
  commit('getAllRequest')
  userService.getAll()
    .then(
      users => commit('getAllSuccess', users),
      error => commit('getAllFailure', error)
    )
}
