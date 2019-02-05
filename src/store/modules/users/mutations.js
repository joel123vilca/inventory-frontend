export const getAllRequest = (state) => {
  state.all = { loading: true }
}

export const getAllSuccess = (state, users) => {
  state.all = { items: users }
}

export const getAllFailure = (state, error) => {
  state.all = { error }
}

export const getAllErrors = (state, error) => {
  state.submitErrorsLogin = error
  // this.submitErrors = error.response.data.errors || {}
}

export const clearAllErrors = (state) => {
  state.submitErrorsLogin = undefined
  state.submitErrorsLogin = {}
}

export const clearError = (state, nameError) => {
  state.submitErrorsLogin[nameError] = undefined
  delete state.submitErrorsLogin[nameError]
}
