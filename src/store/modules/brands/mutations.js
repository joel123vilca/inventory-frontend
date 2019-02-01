export const UPDATE_STATE_MODAL_EDIT = (state, value) => {
  state.modalOpenEdit = value
}
export const UPDATE_STATE_MODAL_CREATE = (state, value) => {
  state.modalOpenCreate = value
}

export const UPDATE_STATE_LOADING_TABLE = (state, value) => {
  state.loadingTable = value
}

export const GET_BRANDS = (state, { brands }) => {
  state.brands = brands
}
export const GET_BRAND = (state, { brand }) => {
  state.brand = brand
}
