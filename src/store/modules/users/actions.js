import { userService } from '@/_services/user.service.js';

export const getAll = ({commit},value)=>{
    commit('getAllRequest');
    userService.getAll()
        .then(
            users => commit('getAllSuccess', users),
            error => commit('getAllFailure', error)
    );
}
