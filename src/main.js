import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as VueStreamMask from "vue-stream-mask"

Vue.use(VueStreamMask)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
