export const success=(state, message)=> {
    state.type = 'alert-success';
    state.message = message;
}
export const error=(state, message)=> {
    state.type = 'alert-danger';
    state.message = message;
}
export const clear=(state)=> {
    state.type = null;
    state.message = null;
}