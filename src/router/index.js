import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "mypage" */ '../views/HomeView.vue')

  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import(/* webpackChunkName: "mypage" */ '../views/MyPageView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
