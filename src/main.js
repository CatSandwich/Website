import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import VueHighlightJS from 'vue-highlightjs'
import './main.css'

//import EmptyBase from './views/EmptyBase.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

import Projects from './views/Projects.vue'

Vue.use(VueRouter);
Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
