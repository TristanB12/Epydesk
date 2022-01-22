<template>
    <div class="hub">
        <h2>HUB</h2>
        <section>
            <TheHUBAside @get-experimentations="getHUB(true)" />
            <VPannel
                v-if="hub"
                :infos="hub"
                :canAccessDetails="false"
                roadblockType="xps"
            />
            <VPannelSkeleton v-else />
        </section>
    </div>
</template>

<script>
import VPannelSkeleton from '@/components/VPannelSkeleton.vue';
import VPannel from '@/components/VPannel.vue';
import TheHUBAside from '@/components/TheHUBAside.vue';
import { axiosGet } from '../plugins/axiosWrapper'
    export default {
        components: {
            TheHUBAside,
            VPannel,
            VPannelSkeleton
        },
        data() {
            return {
                hub: undefined
            }
        },
        created () {
            this.getHUB(false);
        },
        methods: {
            async getHUB(getExperiences) {
                if (!this.$store.state.autologin)
                    return;
                this.hub = undefined;
                let options = {
                    params: {
                        user_email: this.$store.state.user.userName,
                        autologin: this.$store.state.autologin,
                        ...(getExperiences && { getExperiences: true }),
                    }
                }
                let res = await axiosGet('/hub', options);

                if (res[0]) {
                    this.hub = {
                     ...res[0].data
                    };
                    this.hub.title = "Hub"
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.hub {
    width: 40%;
}
section {
    margin-top: 20px;
}

@media screen and (max-width: 768px) {
    .hub {
        margin-top: 50px;
        width: 100%;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>