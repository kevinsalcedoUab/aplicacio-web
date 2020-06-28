import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import * as VueGoogleMaps from 'vue2-google-maps'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCgagO8OAw1oMqd1rPlUncR9aluOHOAVIU',
    libraries: 'places, directions', // This is required if you use the Autocomplete plugin
  },
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
