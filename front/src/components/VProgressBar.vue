<template>
    <div class="progress-bar">
        <div class="validated" :style="`width: ${validatedWidth}%;`"></div>
        <div class="in-progress" :style="`width: ${inProgressWidth}%;`"></div>
    </div>
</template>

<script>
    export default {
        props: {
            needed: {
                type: Number,
                default: 0
            },
            validated: {
                type: Number,
                default: 0
            },
            inProgress: {
                type: Number,
                default: 0
            },
        },
        computed: {
            validatedWidth() {
                return (this.validated * 100) / this.needed;
            },
            inProgressWidth() {
                return (this.inProgress * 100) / this.needed + this.validatedWidth;
            }
        },
    }
</script>

<style lang="scss" scoped>
.progress-bar {
    width: 80%;
    height: 20px;
    margin: auto;
    background-color: #E5E5E5;
    border-radius: 20px;
    position: relative;
    overflow: hidden;

    div {
        position: absolute;
        height: 20px;
        border-radius: 20px;
    }
}
.validated {
    background-color: #26DE81;
    z-index: 2;
}
.in-progress {
    background-color: #F7B731;
    z-index: 1;
}
</style>