export const UPDATE_STATE_MODAL_EDIT = (state,value)=>{
    state.modalOpenEdit=value
}
export const UPDATE_STATE_MODAL_CREATE = (state,value)=>{
    state.modalOpenCreate=value
}
export const GET_PRODUCTS = (state, { products }) =>{
    state.products = products
}
export const GET_PRODUCT = (state,{product})=>{
    state.product=product
}