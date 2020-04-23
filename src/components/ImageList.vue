<template>
    <div v-if="isLoggedIn" class="image-container">
        <img v-for="image in allImages" :src="image.link" :key="image.id" />
    </div>
    <div v-else>
        <h3>Please Login</h3>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "ImageList",
    created() {
        this.fetchImages();
    },
    methods: {
        ...mapActions([
            'fetchImages'
        ]),
    },
    computed: {
        ...mapGetters([
            'allImages',
            'isLoggedIn',
        ]),
    }
}
</script>

<style scoped>
    .image-container {
        column-count: 3;
        column-gap: 0;
    }
    img {
        max-width: 100%;
        padding: 5px;
    }

</style>