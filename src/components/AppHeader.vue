<template>
    <div class="ui secondary pointing menu">
        <router-link class="active item" to="/">
            Image Gallery
        </router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class='horizontal'>
                <router-link class="item" to="/">
                Galleries
                </router-link>
                <router-link class="item" to="upload">
                Upload
                </router-link>
                <a class="item" @click="logout">
                Logout
                </a>
            </div>
            <a class="item" @click="login" v-else>Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
    name: "AppHeader",
    computed: {
        ...mapGetters([
            'isLoggedIn',
        ]),
    },
    methods: {
        ...mapActions([
            'login',
            'logout',
        ]),
    }

}
</script>

<style scoped>
    .horizontal {
        display: flex;
        flex-direction: row;
    }


</style>