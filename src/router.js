import Vue from 'vue'
import Router from 'vue-router'
import Clients from './views/Clients.vue'
import CaseList from './views/CaseList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/clients' },
    {
      path: '/clients',
      name: 'clients',
      component: Clients,
      meta: {
        title: 'Clients',
        value: 'clients'
      }
    },
    {
      path: '/clients/:id',
      name: 'client_cases',
      props: true,
      component: CaseList,
      meta: {
        title: ':id',
        value: 'clients',
        back: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
