import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store/index';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', //  use browser router
    routes: [
        {
            path: "/oauth2/auth",
            component: AuthHandler
        },
        {
            path: "/",
            component: ImageList,
        }
    ],
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
