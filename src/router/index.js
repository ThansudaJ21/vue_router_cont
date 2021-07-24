import { createRouter, createWebHistory } from 'vue-router'
import PassengerList from '../views/PassengerList.vue'
import About from '../views/About.vue'
import PassengerDetails from '../views/PassengerDetails.vue'

const routes = [
  {
    path: '/',
    name: 'PassengerList',
    component: PassengerList,
    props: (route) => ({
      page: parseInt(route.query.page) || 0,
      perPage: parseInt(route.query.perPage) || 10
    })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/passenger/:id',
    name: 'PassengerDetails',
    component: PassengerDetails,
    props: true
  }
  // {
  //   path: '/passenger/:id',
  //   name: 'EventLayout',
  //   component: EventLayout,
  //   props: true,
  //   children: [
  //     {
  //       path: '',
  //       name: 'EventDetails',
  //       component: EventDetails
  //     },
  //     {
  //       path: '/event/:id/register',
  //       name: 'EventRegister',
  //       component: EventRegister,
  //       props: true
  //     },
  //     {
  //       path: '/event/:id/edit',
  //       name: 'EventEdit',
  //       component: EventEdit,
  //       props: true
  //     }
  //   ]
  // },
  // {
  //   path: '/404/:resource',
  //   name: '404Resource',
  //   component: NotFound,
  //   props: true
  // },
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'NotFound',
  //   component: NotFound,
  // },
  // {
  //   path: '/network-error',
  //   name: 'NetworkError',
  //   component: NetWorkError,
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
