<template>
  <div v-if="!requested" class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://lasu.edu.ng/exams-and-records/new/er-includes/assets/images/logo.png" alt="LASU" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account.
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="requestSignup">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Full Name</label>
            <input v-model="fname" id="name" name="name" type="text" autocomplete="name" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name" required/>
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" required/>
          </div>
          <div>
            <label for="phone" class="sr-only">Phone Number</label>
            <input v-model="phone" id="phone" name="email" type="telephone" autocomplete="telephone" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
          </div>
          <div>
            <label for="gender" class="sr-only">Gender</label>
            <select v-model="gender" id="gender" name="gender" autocomplete="gender" class="appearance-none rounded-none text-gray-500 relative block w-full px-2 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label for="department" class="sr-only">Department</label>
            <input v-model="department" id="department" name="department" type="text" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Department" required/>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <!-- <div class="flex items-center justify-between" v-if="errMsg">
          <div class="text-sm">
            <p v-if="errMsg.code == '23505'" class="font-medium text-red-600 hover:text-red-500">
              Name or Email has already been submitted.
            </p>
            <p v-else class="font-medium text-red-600 hover:text-red-500">
              {{ errMsg }}
            </p>
          </div>
        </div> -->

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            <div v-if="!loading">Register</div>
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

export default {
  components: {
    LockClosedIcon,
  },
  setup () {
    const router = useRouter()

    const fname = ref('')
    const email = ref('')
    const phone = ref('')
    const gender = ref('')
    const department = ref('')
    const password = ref('')
    const userId = ref('')
    const loading = ref(false)

    // const store = reactive({
    //   user: {}
    // })

    const signUp = async () => {
      try {
        loading.value = true
        const { user, error } = await supabase.auth.signUp(
          {
            email: email.value,
            password: password.value
          }
        )
        // console.log(user)
        // userData.value = user
        userId.value = user.id
        await addData()   
        router.push({
          path: '/login'
        })     
        loading.value = false
      }
      catch(error) {
        // console.log('Error signing up!')
      }
    }

    onMounted(() => {
      const user = supabase.auth.user()
      console.log(user)
    })

    return {
      fname,
      email,
      phone,
      gender,
      department,
      password,
      loading,
      signUp
    }
  }
}
</script>

<style>

</style>