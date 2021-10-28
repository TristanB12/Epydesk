<template>
  <div class="home">
    <TheHeaderBar />
    <main>
      <TheRoadblocks />
      <TheHUB />
    </main>
  </div>
</template>

<script>
import TheHUB from '@/components/TheHUB.vue';
import TheRoadblocks from '@/components/TheRoadblocks.vue';
import TheHeaderBar from '@/components/TheHeaderBar.vue';
export default {
  name: 'Home',
  components: {
    TheRoadblocks,
    TheHeaderBar,
    TheHUB
  },
  created() {
    this.redirectIfNotLoggedIn();
    this.storeUserInfos();
    this.redirectIfNoAutologin();
  },
  methods: {
    redirectIfNoAutologin() {
      if (!this.$store.state.autologin && this.$msal.isAuthenticated())
        this.$router.push({name: 'Autologin'});
    },
    redirectIfNotLoggedIn() {
      if (!this.$msal.isAuthenticated())
        this.$router.push({name: 'Login'});
    },
    storeUserInfos() {
      this.$store.dispatch('setUser', this.$msal.data.user);
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  background-color: #F3F5F8;
}
main {
  width: 70%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  main {
    flex-direction: column;
  }
}
</style>