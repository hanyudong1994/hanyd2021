import Vue from 'vue'
import VueRouter from 'vue-router';
import test1 from '@/view/test1.vue'
import test2 from '@/view/test2.vue';


Vue.use(VueRouter)

const routes = [
  {
      path:"/test1",
      component: test1
  },
  {
      path: "/test2",
      component: test2
  }
]

var router =  new VueRouter({
  routes
})
export default router;