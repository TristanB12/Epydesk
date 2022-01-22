<template>
    <div class="details">
        <TheHeaderBar />
        <main>
            <div class="header">
                <VButton
                    @click.native="$router.push({name: 'Home'})"
                    iconName="arrow_back_icon.png"
                />
                <h2>{{ $route.params.id }}</h2>
            </div>
            <div class="content">
                <VPannel
                    v-if="infos"
                    :infos="infos"
                    :canAccessDetails="false"
                />
                <VPannelSkeleton v-else />
                <RoadblockDetailsPannel v-if="infos" :modules="infos.modules" />
            </div>
        </main>
    </div>
</template>

<script>
import VButton from '@/components/VButton.vue';
import RoadblockDetailsPannel from '@/components/RoadblockDetailsPannel.vue';
import VPannelSkeleton from '@/components/VPannelSkeleton.vue';
import { axiosGet } from '../plugins/axiosWrapper'
import VPannel from '@/components/VPannel.vue'
import TheHeaderBar from '@/components/TheHeaderBar.vue';
export default {
    components: {
        TheHeaderBar,
        VPannel,
        VPannelSkeleton,
        RoadblockDetailsPannel,
        VButton
    },
    data() {
        return {
            infos: undefined,
        }
    },
    mounted() {
        this.getRoadblocks();
    },
    methods: {
        async getRoadblocks() {
            let options = {
                params: {
                    user_email: this.$store.state.user.userName,
                    autologin: this.$store.state.autologin
                }
            }
            let res = await axiosGet('/roadblocks', options);

            if (res[0]) {
                this.setInfos(res[0].data);
            }
        },
        setInfos(roadblocks) {
            for (let item of roadblocks) {
                if( item.title == this.$route.params.id) {
                    this.infos = item;
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
main {
    width: 70%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;

    .content {
        margin-top: 5vh;
        display: flex;
        justify-content: space-between;
    }
}
.header {
    display: flex;
    align-items: center;

    button {
        margin-right: 10px;
    }
}

@media screen and (max-width: 1100px) {
    .content {
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 768px) {
    main {
        width: 80%;
    }
}
</style>