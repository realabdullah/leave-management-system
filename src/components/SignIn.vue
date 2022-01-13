<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://lasu.edu.ng/exams-and-records/new/er-includes/assets/images/logo.png" alt="LASU" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Don't have an account?
          {{ ' ' }}
          <a href="/signup" class="font-medium text-indigo-600 hover:text-indigo-500">
            Create one now.
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="signIn">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <a href="#" class="font-medium text-red-600 hover:text-red-500">
              {{ loginError }}
            </a>
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm text-bold font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            <div v-if="!loading">Sign In</div>
            <div class="svg" v-else>
              <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"/>    
                </circle>
                <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite" 
                    begin="0.2"/>       
                </circle>
                <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite" 
                    begin="0.3"/>     
                </circle>
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

export default {
  components: {
    LockClosedIcon,
  },
  setup () {
    const email = ref('')
    const password = ref('')
    const userM = ref('')
    const loginError = ref('')
    const loading = ref(false)
    const userRoles = ref([])
    const userType = ref('')

    const router = useRouter()

    const signIn = async () => {
      try {
        loading.value = true
        const { user, error } = await supabase.auth.signIn(
          {
            email: email.value,
            password: password.value
          }
        )
        if (error) {
          loginError.value = error.message
          // console.log(error)
          loading.value = false
        } else {
          userM.value = user
          // console.log(userM.value)
          await getRole()
          loading.value = false
        }
      }
      catch (error) {
        // console.log(error)
      }
    }

    const getRole = async () => {
      const { data: user_roles, error } = await supabase
      .from('user_roles')
      .select('role')
      userRoles.value = user_roles
      userType.value = userRoles.value[0].role
      // console.log(userType.value)
      if (userType.value == 'staff') {
        router.push({
          path: '/staff'
        })
      } else if (userType.value == 'mod') {
        router.push({
          path: '/head-of-unit'
        })
      } else if (userType.value == 'admin') {
        router.push({
          path: '/admin'
        })
      }
    }

    return {
      email,
      password,
      loginError,
      loading,
      signIn
    }
  }
}
</script>

<style>
.svg{
  width: 20px;
  height: 20px;
}
</style>