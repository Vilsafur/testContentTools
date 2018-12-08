import Vue from 'vue'
import App from './App.vue'
import store from '../store/PageStore'

require('../node_modules/ContentTools/build/content-tools.min.css')

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
