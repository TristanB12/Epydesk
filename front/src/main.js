import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import msal from 'vue-msal'

Vue.use(msal, {
    auth: {
      clientId: process.env.VUE_APP_CLIENT_ID,
      tenantId: process.env.VUE_APP_TENANT_ID,
      redirectUri: 'https://ancient-island-68039.herokuapp.com/',
    }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')