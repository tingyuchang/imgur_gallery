
const K_TOKEN = 'imgur_token';

const state = {
    token: window.localStorage.getItem(K_TOKEN),
};

const getters = {
    isLoggedIn: state => !!state.token,
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
};

const actions = {
    finalizeLogin: () => {},
    login: () => {},
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem(K_TOKEN);
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}