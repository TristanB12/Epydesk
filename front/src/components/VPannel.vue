<template>
    <div class="pannel">
        <div class="title-container">
            <h3>{{ infos.title }}</h3>
            <img src="@/assets/see_more_icon.png" v-if="canAccessDetails" @click="$router.push({name: 'RoadblockDetails', params: {id: infos.title}})" />
        </div>
        <div class="needed-container">
            <h3>{{ infos.needed }}</h3>
            <span>{{ infos.unitText }}</span>
        </div>
        <VProgressBar
            :needed="infos.needed"
            :validated="infos.validated"
            :inProgress="infos.inProgress"
        />
        <VPannelInfos
            :validated="infos.validated"
            :inProgress="infos.inProgress"
            :failed="infos.failed"
        />
    </div>
</template>

<script>
import VButton from '@/components/VButton.vue'
import VPannelInfos from '@/components/VPannelInfos.vue';
import VProgressBar from '@/components/VProgressBar.vue';
    export default {
        components: {
            VProgressBar,
            VPannelInfos,
            VButton
        },
        props: {
            infos: {
                type: Object,
                default: undefined
            },
            canAccessDetails: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            unitText() {
                return this.infos.needed + ' requis';
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
    margin: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        padding: 8px 10px;
        font-size: 20px;
        font-weight: 400;
    }
    img {
        max-width: 25px;
        cursor: pointer;
        transition-duration: 200ms;

        &:hover {
            max-width: 30px;
        }
    }
}
.needed-container {
    text-align: center;
}
</style>