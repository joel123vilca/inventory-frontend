export const success = ({commit},message) => {
    commit('success', message);
}
export const error = ({commit,dispatch},message) => {
    commit('error', message);
}

export const getDetailArea = ({ commit }, message) => {
    commit('success', message);
}

