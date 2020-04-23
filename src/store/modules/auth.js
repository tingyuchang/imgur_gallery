import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';


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
    finalizeLogin: ( { commit }, hash) => {
        const result = qs.parse(hash.replace('#', ''));
        commit('setToken', result['access_token']);
        window.localStorage.setItem(K_TOKEN, result['access_token']);
        router.push('/');
    },
    login: () => {
        api.login();
    },
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