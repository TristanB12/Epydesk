<template>
    <div class="roadblocks">
        <h2>roadblocks</h2>
        <section v-if="roadblocks">
            <VPannel
                v-for="item in roadblocks"
                :key="item.title"
                :infos="item"
            />
        </section>
        <section v-else>
            <VPannelSkeleton
                v-for="item in skeletonRoadblocks"
                :key="item"
            />
        </section>
    </div>
</template>

<script>
import VPannelSkeleton from '@/components/VPannelSkeleton.vue';
import { axiosGet } from '../plugins/axiosWrapper'
import VPannel from '@/components/VPannel.vue';
    export default {
        components: {
            VPannel,
            VPannelSkeleton
        },
        data() {
            return {
                roadblocks: undefined,
                skeletonRoadblocks: [
                    1, 2, 3, 4
                ],
            }
        },
        created () {
            this.getRoadblocks();
        },
        methods: {
            async getRoadblocks() {
                if (!this.$store.state.autologin)
                    return;
                let options = {
                    params: {
                        user_email: this.$store.state.user.userName,
                        autologin: this.$store.state.autologin
                    }
                }
                let res = await axiosGet('/roadblocks', options);

                if (res[0])
                    this.roadblocks = res[0].data;
            }
        },
    }
</script>

<style lang="scss" scoped>
.roadblocks {
    width: 50%;
}
section {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

@media screen and (max-width: 768px) {
    .roadblocks {
        width: 100%;
    }
}
</style>