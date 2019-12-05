export const state = () => ({
    fullPath: '/'
})

export const mutations = {
    CHANGE_FULLPATH(state, data) {
        state.fullPath = data
    }
}
