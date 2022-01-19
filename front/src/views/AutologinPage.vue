<template>
    <div class="autologin">
        <section>
            <h1>Nous avons besoin de votre autologin</h1>
            <span>Obtenez le <a href="https://intra.epitech.eu/admin/autolog" target="_blank">ici.</a> Copiez-collez la partie après "https://intra.epitech.eu/"</span>
            <div>
                <input type="text" placeholder="auth-123456789" v-model="autologin">
                <VButton
                    @click.native="accessApp"
                    text="Send"
                    :textSize="18"
                    :isLoading="isLoading"
                />
            </div>
                <p class="error" v-if="error">{{ error }}</p>
        </section>
    </div>
</template>

<script>
import { axiosGet } from '../plugins/axiosWrapper';
import VButton from '@/components/VButton.vue';
    export default {
        components: {
            VButton,
        },
        data() {
            return {
                autologin: '',
                error: undefined,
                isLoading: false
            }
        },
        methods: {
            async accessApp() {
                let options = {
                    params: {
                        user_email: this.$store.state.user.userName,
                        autologin: this.autologin
                    }
                }

                this.isLoading = true;
                let res = await axiosGet('/roadblocks', options);

                if (res[0]) {
                    this.storeAutologin();
                    this.$router.push({name: 'Home'});
                } else {
                    this.isLoading = false;
                    this.error = "Autologin invalide";
                }
            },
            storeAutologin() {
                this.$store.dispatch('setAutologin', this.autologin);
                localStorage.setItem("autologin", this.autologin);
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
.error {
    color: #FC5C65;
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