<template>
    <div class="pannel">
        <div class="title-container">
            <h3>{{ title }}</h3>
        </div>
        <div class="needed-container">
            <h3>{{ needed }}</h3>
            <span>{{ unitText }}</span>
        </div>
        <VProgressBar
            :needed="needed"
            :validated="validated"
            :inProgress="inProgress"
        />
        <VPannelInfos
            :validated="validated"
            :inProgress="inProgress"
            :failed="failed"
        />
    </div>
</template>

<script>
import VPannelInfos from '@/components/VPannelInfos.vue';
import VProgressBar from '@/components/VProgressBar.vue';
    export default {
        components: {
            VProgressBar,
            VPannelInfos,
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            unit: {
                type: String,
                default: 'crédits'
            },
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
            failed: {
                type: Number,
                default: 0
            },
        },
        computed: {
            unitText() {
                return this.unit + ' requis';
            }
        },
    }
</script>

<style lang="scss" scoped>
.pannel {
    width: 300px;
    height: 350px;
    box-shadow: 0px 1px 4px rgba($color: black, $alpha: 0.25);
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
}
.title-container {
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 5%;

    h3 {
        padding: 8px 10px;
        font-size: 20px;
        font-weight: 400;
    }
}
.needed-container {
    text-align: center;
}
</style>