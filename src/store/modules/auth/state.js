// const user = JSON.parse(localStorage.getItem('user'))
const user = localStorage.getItem('token')
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null }

export default initialState
