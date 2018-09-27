import Vue from 'vue'
import Router from 'vue-router'
import Clients from './views/Clients.vue'
import CaseList from './views/CaseList.vue'
import DocumentList from './views/DocumentList.vue'
import DateList from './views/DateList.vue'
import ContactList from './views/ContactList.vue'
import RecentCases from './views/RecentCases.vue'
import Timer from './views/Timer.vue'
import Timesheet from './views/Timesheet.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/clients' },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        noToolbar: true
      }
    },
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
      path: '/cases/:id/documents',
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
    },
    {
      path: '/cases/:id/calendar',
      name: 'cases',
      props: true,
      component: DateList,
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
    },
    {
      path: '/cases/:id/contacts',
      name: 'cases',
      props: true,
      component: ContactList,
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
    },
    {
      path: '/recent-cases',
      name: 'recent',
      component: RecentCases,
      meta: {
        title: 'Recent Cases',
        value: 'recent'
      }
    },
    { path: '/time', redirect: '/time/timer' },
    {
      path: '/time/timer',
      name: 'time',
      component: Timer,
      meta: {
        title: 'Time',
        value: 'time',
        more: [
          'timesheet',
          'timer'
        ]
      }
    },
    { path: '/timesheet', redirect: '/time/timesheet' },
    {
      path: '/time/timesheet',
      name: 'timesheet',
      component: Timesheet,
      meta: {
        title: 'Timesheet',
        value: 'time',
        more: [
          'timesheet',
          'timer'
        ]
      }
    }
  ]
})
