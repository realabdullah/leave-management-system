import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { supabase } from '../supabase'
import { ref } from 'vue'
// const userRoles = ref([])
// const userType = ref('')

// const getRole = async () => {
//   const { data: user_roles, error } = await supabase
//   .from('user_roles')
//   .select('role')
//   userRoles.value = user_roles
//   userType.value = userRoles.value[0].role
//   console.log(userType.value)
//   if(userType.value === 'staff') {
//     await router.push({
//       path: '/'
//     })
//   }
// }

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
    path: '/head-of-unit',
    name: 'HOU',
    component: () => import('../views/Hou.vue'),
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
    path: '/unit-leaves',
    name: 'Unit Leaves',
    component: () => import('../views/DeptLeaves.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/apply-for-leave',
    name: 'Apply-for-leave',
    component: () => import('../views/LeaveApp.vue'),
  },
  {
    path: '/user-requests',
    name: 'User-requests',
    component: () => import('../views/UserRequests.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/leave-action/:id',
    name: 'Leave-action',
    component: () => import('../views/LeaveAction.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/hou-leave-action/:id',
    name: 'HOU Leave Action',
    component: () => import('../views/HouAction.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/request-action/:id',
    name: 'Request-action',
    component: () => import('../views/RequestAction.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/assign-role/:id',
    name: 'Assign Role',
    component: () => import('../views/AssignRole.vue'),
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
      // getRole().then(r => {})
      next()
    }
  } else {
    // getRole().then(r => {})
    next()
  }
})

export default router
