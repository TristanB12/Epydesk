<template>
    <button :style="`font-size: ${textSize}px;`">
        <img v-if="iconName && !isLoading" :src="imagePath" :alt="iconName">
        <span v-else-if="text && !isLoading">{{ text }} </span>
        <ClipLoader
            v-else
            size="24px"
            color="white"
        />
    </button>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    export default {
        components: {
            ClipLoader,
        },
        props: {
            text: {
                type: String,
                default: null
            },
            textSize: {
                type: Number,
                default: 28
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            iconName: {
                type: String,
                default: null
            },
        },
        computed: {
            imagePath() {
                return require(`../assets/${this.iconName}`);
            }
        },
    }
</script>

<style lang="scss" scoped>
button {
    padding: 5px 20px;
    outline: none;
    background-color: #00A3FF;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba($color: black, $alpha: 0.25);
    cursor: pointer;
    transition-duration: 200ms;

    &:hover {
        background-color: #009af3;
        box-shadow: 2px 4px 6px rgba($color: black, $alpha: 0.25);
    }
}
img {
    max-width: 20px;
}
</style>