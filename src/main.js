import Vue from 'vue'
import App from './App.vue'

require('../node_modules/ContentTools/build/content-tools.min.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
