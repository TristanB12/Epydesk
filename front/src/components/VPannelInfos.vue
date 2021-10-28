<template>
    <div class="pannel-infos">
        <div>
            <p>Aquis</p>
            <div>
                <span>{{ validated }}</span>
                <div class="circle green"></div>
            </div>
        </div>
        <div>
            <p>En cours</p>
            <div>
                <span>{{ inProgress }}</span>
                <div class="circle orange"></div>
            </div>
        </div>
        <div>
            <p>En échec</p>
            <div>
                <span>{{ failed }}</span>
                <div class="circle red"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
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
    }
</script>

<style lang="scss" scoped>
.pannel-infos {
    width: 80%;
    height: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > div {
            display: flex;
            justify-content: space-between;
        }
    }
}
p {
    color: #969696;
}
span {
    font-weight: 600;
}
.circle {
    width: 15px;
    height: 15px;
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
</style>