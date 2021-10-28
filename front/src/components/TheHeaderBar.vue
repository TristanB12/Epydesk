<template>
    <header>
        <span class="logout" @click="logout">logout</span>
        <h1>Epydesk</h1>
        <span class="email">{{ userEmail }}</span>
    </header>
</template>

<script>
    export default {
        computed: {
            userEmail() {
                return this.$store.state.user.userName
            }
        },
        methods: {
            logout() {
                this.$msal.signOut();
            }
        },
    }
</script>

<style lang="scss" scoped>
header {
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0px 2px 5px rgba($color: black, $alpha: 0.50);
}
.email {
    position: absolute;
    right: 10%;
}
.logout {
    position: absolute;
    left: 10%;
    color: #00A3FF;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}
h1 {
    color: #464646;
    font-weight: 500;
}

@media screen and (max-width: 768px) {
    h1 {
        display: none;
    }
}
</style>