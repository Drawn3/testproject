export const state = () => ({
    user: null
})

export const mutations = {
    setUser(state, data) {
        state.user = data
    },
    clearUser(state) {
        state.user = null
    }
}

export const actions = {
    nuxtServerInit({dispatch}) {
        console.log('nuxtServerInit')
    },
    login({commit}, data) {
        commit('setUser', data)
    },
    logout({commit}) {
        commit('clearUser')
    }
}
