<template>
    <div class="details">
        <TheHeaderBar />
    </div>
</template>

<script>
import { axiosGet } from '../plugins/axiosWrapper'
import TheHeaderBar from '@/components/TheHeaderBar.vue';
export default {
    components: {
        TheHeaderBar
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

<style>

</style>