export const success = ({ commit }, message) => {
  commit('success', message)
}
export const error = ({ commit }, message) => {
  commit('error', message)
}

export const clear = ({ commit }, message) => {
  commit('success', message)
}
