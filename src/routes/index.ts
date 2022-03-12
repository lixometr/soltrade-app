import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/collection/:collectionName',
    component: () => import('@/views/Collection.vue'),
    name: 'Collection',
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
    name: 'About',
  },
  {
    path: '/faq',
    component: () => import('@/views/Faq.vue'),
    name: 'Faq',
  },
  // {
  //   path: '/kit',
  //   component: () => import('@/views/Kit.vue'),
  // },
] as RouteRecordRaw[]
