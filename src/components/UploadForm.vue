<template>
    <div class="dragger">
        <input 
            type="file"
            accept="image/*"
            multiple
            @change="uploadImages($event.target.files)"

        />
        <span>Please drag your images here!!!</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "UploadForm",
    methods: {
        ...mapActions([
            'uploadImages',
        ]),
    }
}
</script>

<style scoped>
    .dragger {
        height: 30vh;
        border: 2px dashed black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .dragger:hover {
        background-color: #eee;
    }
    input {
        height: 30vh;
        width: 100%;
        position: absolute;
        opacity: 0;

    }

</style>