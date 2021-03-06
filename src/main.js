import Vue from 'vue';
import ElementUI from 'element-ui';
import router from './router' 
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,       //这里挂载了router
  render: h => h(App)
});