export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        app.store.commit('CHANGE_FULLPATH', from.path)
        next()
    })
}
