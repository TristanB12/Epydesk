<template>
    <button :style="`font-size: ${textSize}px;`">
        <span v-if="!isLoading">{{ text }} </span>
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
                default: ""
            },
            textSize: {
                type: Number,
                default: 28
            },
            isLoading: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style lang="scss" scoped>
button {
    padding: 10px 25px;
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
</style>