<template>
  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
    <!--Main Col-->
    <div v-for="profile in houData" id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
      <div class="p-4 md:p-12 text-center lg:text-left">
        
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{ profile.name }}</h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-indigo-500 opacity-25"></div>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">{{ profile.department }}</p>
        <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">{{ profile.email }}</p>
        <p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

        <div class="pt-12 pb-8">
          <button class="bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-bold py-2 px-4 rounded-full">
            <router-link to="apply-for-leave">
              Apply for leave
            </router-link>
          </button> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { supabase } from '../supabase'

export default {
  setup () {
    const houData = ref([])
    const houId = ref('')

    const getHou = async () => {
      try {
        const { data: employees, error } = await supabase
        .from('employees')
        .select('*')
        .eq('employee_id', houId.value)
        houData.value = employees
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
      houId.value = supabase.auth.user().id
      getHou()
    })

    return {
      houData
    }
  }
}
</script>

<style>

</style>