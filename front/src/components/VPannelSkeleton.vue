<template>
    <div class="pannel-skeleton">
        <div class="title-container">
            <VueSkeletonLoader
                type="rect"
                :width="100"
                :height="16"
                :rounded="true"
            />
        </div>
        <div class="needed">
            <VueSkeletonLoader
                type="circle"
                :size="20"
                :rounded="true"
            />
            <VueSkeletonLoader
                type="rect"
                :width="100"
                :height="16"
                :rounded="true"
            />
        </div>
        <VueSkeletonLoader
            type="rect"
            :width="250"
            :height="20"
            :rounded="true"
        />
        <div class="infos">
            <VueSkeletonLoader
                type="rect"
                :width="50"
                :height="16"
                :rounded="true"
            />
            <VueSkeletonLoader
                type="rect"
                :width="250"
                :height="16"
                :rounded="true"
            />
        </div>
        <div class="infos">
            <VueSkeletonLoader
                type="rect"
                :width="50"
                :height="16"
                :rounded="true"
            />
            <VueSkeletonLoader
                type="rect"
                :width="250"
                :height="16"
                :rounded="true"
            />
        </div>
        <div class="infos">
            <VueSkeletonLoader
                type="rect"
                :width="50"
                :height="16"
                :rounded="true"
            />
            <VueSkeletonLoader
                type="rect"
                :width="250"
                :height="16"
                :rounded="true"
            />
        </div>
    </div>
</template>

<script>
import VueSkeletonLoader from 'skeleton-loader-vue';
    export default {
        components: {
            VueSkeletonLoader,
        },
    }
</script>

<style lang="scss" scoped>
.pannel-skeleton {
    width: 300px;
    height: 350px;
    box-shadow: 0px 1px 4px rgba($color: black, $alpha: 0.25);
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.title-container {
    width: 100%;
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 5%;
    padding: 8px 10px;
}
.needed {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        margin: 5px 0;
    }
}
.infos div {
    margin: 5px 0;
}
</style>