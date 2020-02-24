import Vue from 'vue'
import App from './App.vue'
import global from "./components/global.js"
// import install from "./js/install";
// import * as custom from "./js/filters"
// 过滤器自动全局注册
// Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))

Vue.config.productionTip = false

// Vue.config.performance = true

// Vue.config.errorHandler = function(err, vm , info){
//   console.log(err, vm , info)
// }

// 开发时，挂载个log函数
Vue.prototype.$log = window.console.log;

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log(Vue.version)