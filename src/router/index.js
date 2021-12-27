import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { supabase } from '../supabase'
import { ref } from 'vue'
const userRoles = ref([])
const userType = ref('')

//auth guard
const requireAuth = (to,from, next) => {
  const user = supabase.auth.user()
  if(user == null) {
    next({
      path: '/login'
    })
  } else {
    getRole()
    next()
  }
}

const getRole = async () => {
  const { data: user_roles, error } = await supabase
  .from('user_roles')
  .select('role')
  userRoles.value = user_roles
  userType.value = userRoles.value[0].role
  // console.log(userType.value)
  if(userType.value == 'staff') {
    router.push({
      path: '/staff'
    })
  } else {
    // router.push({
    //   path: '/admin'
    // })
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
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
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
  },
  {
    path: '/user-requests',
    name: 'User-requests',
    component: () => import('../views/UserRequests.vue')
  },
  {
    path: '/leave-action/:id',
    name: 'Leave-action',
    component: () => import('../views/LeaveAction.vue')
  },
  {
    path: '/request-action/:id',
    name: 'Request-action',
    component: () => import('../views/RequestAction.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
