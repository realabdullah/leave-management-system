<template>
  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
    <!--Main Col-->
    <div v-for="profile in staffData" id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
      <div class="p-4 md:p-12 text-center lg:text-left">
        <!-- Image for mobile view-->
        <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('https://source.unsplash.com/MP0IUfwrn0A')"></div>
        
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{ profile.name }}</h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">{{ profile.department }}</p>
        <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">{{ profile.email }}</p>
        <p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

        <div class="pt-12 pb-8">
          <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
            <router-link to="apply-for-leave">
              Apply for leave
            </router-link>
          </button> 
        </div>
        <!-- Use https://simpleicons.org/ to find the svg for your preferred product --> 
      </div>
    </div>
    <!--Img Col-->
    <div class="w-full lg:w-2/5">
      <!-- Big profile image for side bar (desktop) -->
      <img src="https://source.unsplash.com/MP0IUfwrn0A" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
      <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { supabase } from '../supabase'

export default {
  setup () {
    const staffData = ref([])
    const staffId = ref('')

    const getStaff = async () => {
      try {
        const { data: employees, error } = await supabase
        .from('employees')
        .select('*')
        .eq('employee_id', staffId.value)
        staffData.value = employees
        if(error) {
          // console.log(error)
        } else {
          // console.log(staffData.value)
        }
      }
      catch(error) {
        //
      }
    }

    onBeforeMount(() => {
      staffId.value = supabase.auth.user().id
      getStaff()
    })

    return {
      staffData
    }
  }
}
</script>

<style>

</style>