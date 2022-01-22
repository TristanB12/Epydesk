<template>
    <div class="header">
        <div
            :class="'item ' + (filter.id == active ? 'active':  '')"
            v-for="filter in filters"
            :key="filter.id"
            @click="changeActive(filter.id)"
        >
            <div :class="{'alone' : !filter.color}" >
                <span class="title">{{ filter.title }}</span>
                <div :class="'circle ' + filter.color" v-if="filter.color"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                filters: [
                    {
                        id: 0,
                        title: 'Tous',
                        color: null
                    },
                    {
                        id: 1,
                        title: 'Aquis',
                        color: 'green'
                    },
                    {
                        id: 2,
                        title: 'En cours',
                        color: 'orange'
                    },
                    {
                        id: 3,
                        title: 'En échec',
                        color: 'red'
                    },
                    {
                        id: 4,
                        title: 'Non inscrit',
                        color: 'grey'
                    },
                ],
                active: 0
            }
        },
        methods: {
            changeActive(newActive) {
                this.active = newActive;
                this.$emit('filter-change', newActive);
            }
        },
    }
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    box-shadow: 1px 1.5px 4px rgba(0, 0, 0, 0.25);
}
.title {
    font-size: 16px;
    text-align: center;
}
.item {
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid #E5E5E5;
    cursor: pointer;

    > div {
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .alone {
        justify-content: center;
    }
}
.circle {
    width: 12px;
    height: 12px;
    border-radius: 100%;
}
.green {
    background-color: #26DE81;
}
.orange {
    background-color: #F7B731;
}
.red {
    background-color: #FC5C65;
}
.grey {
    background-color: #969696;
}
.active {
    border-bottom: 3px solid #00A3FF;

    .title {
        font-weight: 500;
    }
}
</style>