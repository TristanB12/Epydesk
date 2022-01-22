<template>
    <div class="item">
        <span class="name">{{ infos.fullname || infos.title }}</span>
        <span class="credits">{{ creditsString }}</span>
        <div :class="classString"></div>
    </div>
</template>

<script>
    export default {
        props: {
            infos: {
                type: Object,
                default: undefined
            },
        },
        computed: {
            creditsString() {
                let nbCredits = 0;

                if (this.infos.inProgress > 0) {
                    nbCredits = this.infos.inProgress;
                } else {
                    nbCredits = this.infos.validated;
                }
                return `${nbCredits} crédits`
            },
            classString() {
                let classString = "square ";

                if (!this.infos.isSubscribed) {
                    classString += "grey";
                } else {
                    if (this.infos.failed != 0) {
                        classString += "red";
                    } else if (this.infos.validated > 0) {
                        classString += "green"
                    } else {
                        classString += "orange"
                    }
                }
                return classString;
            }
        },
    }
</script>

<style lang="scss" scoped>
.item {
    margin-bottom: 10px;
    height: 60px;
    border-radius: 11px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}
.square {
    width: 60px;
    height: 60px;
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
.name {
    margin-left: 15px;
    flex: 2;
}
.credits {
    flex: 1;
    font-weight: 500;
}
</style>