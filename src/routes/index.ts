import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/collection/:collectionName',
    component: () => import('@/views/Collection.vue'),
  },
  // {
  //   path: '/kit',
  //   component: () => import('@/views/Kit.vue'),
  // },
] as RouteRecordRaw[]
