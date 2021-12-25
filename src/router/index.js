import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { supabase } from '../supabase'

//auth guard
const requireAuth = (to,from, next) => {
  const user = supabase.auth.user()
  if(user == null) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import('../views/Staff.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/employees',
    name: 'Employee',
    component: () => import('../views/Employees.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/departments',
    name: 'Departments',
    component: () => import('../views/Departments.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/leaves',
    name: 'Leaves',
    component: () => import('../views/Leaves.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/apply-for-leave',
    name: 'Apply-for-leave',
    component: () => import('../views/LeaveApp.vue'),
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
