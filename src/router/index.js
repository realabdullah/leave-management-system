import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/employees',
    name: 'Employee',
    component: () => import('../views/Employees.vue')
  },
  {
    path: '/departments',
    name: 'Departments',
    component: () => import('../views/Departments.vue')
  },
  {
    path: '/leaves',
    name: 'Leaves',
    component: () => import('../views/Leaves.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
