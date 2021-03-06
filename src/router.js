import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "about" */ './views/Registro.vue')
    },
    {
      path: '/',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "about" */ './views/Inicio.vue')
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: () => import(/* webpackChunkName: "about" */ './views/Ingreso.vue')
    }
  ]
})
