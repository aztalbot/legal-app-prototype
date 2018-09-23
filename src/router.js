import Vue from 'vue'
import Router from 'vue-router'
import Clients from './views/Clients.vue'
import CaseList from './views/CaseList.vue'
import DocumentList from './views/DocumentList.vue'

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
      path: '/cases/:id',
      name: 'cases',
      props: true,
      component: DocumentList,
      meta: {
        title: ':id',
        value: 'clients',
        back: true,
        more: [
          'documents',
          'contacts',
          'calendar'
        ]
      }
    }
  ]
})
