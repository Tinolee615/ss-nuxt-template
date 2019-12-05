import { queryUserInfo } from '@/api/user'

const state = () => ({
    userInfo: null,
    userId: ''
})
const mutations = {
    SET_USERINFO(state, data) {
        state.userInfo = data
    }
}
const actions = {
    async GetUserInfo({ commit }, data) {
        const response = await queryUserInfo(data)
        commit('SET_USERINFO', response)
        return response
    }
}

export default {
    state,
    mutations,
    actions
}
