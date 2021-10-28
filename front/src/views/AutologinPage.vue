<template>
    <div class="autologin">
        <section>
            <h1>We need your autologin link</h1>
            <span>Get it <a href="https://intra.epitech.eu/admin/autolog" target="_blank">here.</a> Copy past the part after "https://intra.epitech.eu/"</span>
            <div>
                <input type="text" placeholder="auth-123456789" v-model="autologin">
                <VButton
                    @click.native="storeAutologin"
                    text="Send"
                    :textSize="18"
                />
            </div>
        </section>
    </div>
</template>

<script>
import VButton from '@/components/VButton.vue';
    export default {
        components: {
            VButton,
        },
        data() {
            return {
                autologin: ''
            }
        },
        methods: {
            storeAutologin() {
                this.$store.dispatch('setAutologin', this.autologin);
                this.$router.push({name: 'Home'});
            }
        },
    }
</script>
<style lang="scss" scoped>
.autologin {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
section {
    height: 150px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
input {
    margin-right: 15px;
    padding: 5px 10px;
    font-size: 22px;
    border: 1px solid grey;
    border-radius: 5px;
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 32px;
    }
    section {
        height: 250px;
    }
    input {
        font-size: 18px;
    }
}
</style>