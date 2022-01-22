<template>
    <div class="details-pannel">
        <RoadblockDetailsHeader @filter-change="changeActiveFilter" />
        <RoadblockDetailsItem
            v-for="item in filteredModules"
            :key="item.title"
            :infos="item"
        />
    </div>
</template>

<script>
import RoadblockDetailsItem from '@/components/RoadblockDetailsItem.vue';
import RoadblockDetailsHeader from '@/components/RoadblockDetailsHeader.vue';
export default {
    components: {
        RoadblockDetailsHeader,
        RoadblockDetailsItem
    },
    props: {
        modules: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            activeFilter: 0
        }
    },
    computed: {
        filteredModules() {
            if (this.activeFilter == 0) {
                return this.modules; 
            }
            if (this.activeFilter == 1) {
                return this.modules.filter((item) => (item.isSubscribed && item.validated > 0))
            }
            if (this.activeFilter == 2) {
                return this.modules.filter((item) => (item.isSubscribed && item.failed == 0 && item.inProgress > 0))
            }
            if (this.activeFilter == 3) {
                return this.modules.filter((item) => (item.isSubscribed && item.failed != 0))
            }
            if (this.activeFilter == 4) {
                return this.modules.filter((item) => (!item.isSubscribed))
            }
        }
    },
    methods: {
        changeActiveFilter(e) {
            this.activeFilter = e;
        }
    },
}
</script>

<style lang="scss">
.details-pannel {
    width: 60%;
}
.header {
    margin-bottom: 30px;
}

@media screen and (max-width: 1100px) {
    .details-pannel {
        margin-top: 50px;
        width: 100%;
    }
}
</style>