import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as StreamBlur from "vue-stream-mask"

Vue.use(StreamBlur)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
