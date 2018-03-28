import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/login'
import Result from '@/pages/result'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }    
  ]
})
