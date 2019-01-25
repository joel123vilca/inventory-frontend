export const UPDATE_STATE_MODAL_EDIT = (state,value) => {
    state.modalOpenEdit=value
}

export const UPDATE_STATE_MODAL_CREATE = (state,value) => {
    state.modalOpenCreate=value
}

export const GET_AREAS = (state, { areas }) => {
    state.areas = areas
}

export const GET_AREA = (state, {area}) => {
    state.area = area
}
