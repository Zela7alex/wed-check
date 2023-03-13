import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import HelpersList from '../views/HelpersList.vue'
import MaterialsList from '../views/MaterialsList.vue'
import TasksCreate from '../views/TasksCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage,
  },
  {
    path: '/helpers',
    name: 'helpers',
    component: HelpersList,
  },
  {
    path: '/materials',
    name: 'materials',
    component: MaterialsList,
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksCreate,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
