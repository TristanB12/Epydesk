<template>
  <div class="login">
    <section>
      <h1>Epydesk</h1>
      <VButton
      @click.native="login"
        text="Login"
      />
    </section>
  </div>
</template>

<script>
import VButton from '@/components/VButton.vue';
export default {
  components: {
    VButton,
  },
  created () {
    this.redirectIfLoggedIn();
  },
  methods: {
    redirectIfLoggedIn() {
      if (this.$msal.isAuthenticated())
        this.$router.push({name: 'Home'});
    },
    login() {
        this.$msal.signIn();
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
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
}
</style>