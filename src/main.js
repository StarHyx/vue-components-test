import Vue from 'vue'
import App from './App.vue'
import IdeEditor from 'tiny-python-ide/packages/index.js'

Vue.config.productionTip = false
Vue.use(IdeEditor)

new Vue({
  render: h => h(App),
}).$mount('#app')
