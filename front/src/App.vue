<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.getAutologinFromLocalStorage();
    this.storeUserInfos();
  },
  methods: {
    getAutologinFromLocalStorage() {
      const autologin = localStorage.getItem("autologin");

      if (autologin)
        this.$store.dispatch('setAutologin', autologin);
    },
    storeUserInfos() {
      if (this.$msal.isAuthenticated())
        this.$router.push({name: 'Login'});
      this.$store.dispatch('setUser', this.$msal.data.user);
    }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
}
h1 {
  font-size: 36px;
  font-weight: 400;
}
</style>
