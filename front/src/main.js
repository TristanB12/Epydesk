import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import msal from 'vue-msal-2'

Vue.use(msal, {
    auth: {
      clientId: process.env.VUE_APP_CLIENT_ID,
      tenantId: process.env.VUE_APP_TENANT_ID,
    }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
