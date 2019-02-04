export const getAllRequest = (state) => {
  state.all = { loading: true }
}

export const getAllSuccess = (state, users) => {
  state.all = { items: users }
}

export const getAllFailure = (state, error) => {
  state.all = { error }
}
