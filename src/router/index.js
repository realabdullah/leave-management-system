import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { supabase } from '../supabase'
import { ref } from 'vue'
const userRoles = ref([])
const userType = ref('')

// const user = supabase.auth.user()
// if (user) {
//   const isAuthenticated = true
// } else {
//   const isAuthenticated = false
// }

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
    meta: { requiresAuth: true }
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import('../views/Staff.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/employees',
    name: 'Employee',
    component: () => import('../views/Employees.vue'),
  },
  {
    path: '/departments',
    name: 'Departments',
    component: () => import('../views/Departments.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/leaves',
    name: 'Leaves',
    component: () => import('../views/Leaves.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/apply-for-leave',
    name: 'Apply-for-leave',
    component: () => import('../views/LeaveApp.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user-requests',
    name: 'User-requests',
    component: () => import('../views/UserRequests.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/leave-action/:id',
    name: 'Leave-action',
    component: () => import('../views/LeaveAction.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/request-action/:id',
    name: 'Request-action',
    component: () => import('../views/RequestAction.vue'),
    meta: { requiresAuth: true }
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = supabase.auth.user()
    if (user == null) {
      next({
        name: 'Login'
      })
    } else {
      getRole()
      next()
    }
  } else {
    getRole()
    next()
  }
})

export default router
