import Vue from 'vue'
import App from './App.vue'
import { DateTime } from "luxon";
import './index.js'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
