<template>
  <div v-if="loading" class="wrapper">
    <span class="loader"><span class="loader-inner"></span></span>
  </div>
  <div v-else class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Registered
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  View & Assign Role
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="employee in employeesData" :key="employee.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ employee.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ employee.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ employee.department }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ dateTime(employee.created_at) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    <router-link :to="`/assign-role/${employee.employee_id}`" class="text-indigo-600 hover:text-indigo-900">
                      View & Assign
                    </router-link>
                  </div>
                </td>
              </tr>              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { supabase } from '@/supabase'
import moment from 'moment'

export default {
  setup () {
    const employeesData = ref([])
    const id = ref()
    const role = ref()
    const roles = ref()
    const loading = ref(false)
    const searchQuery = ref('admin')

    const getRoles = async () => {
      try {
        const { data: user_roles, error} = await supabase
        .from('user_roles')
        .select('role')
        // .eq('user_id', id.value)
        roles.value = user_roles
        // console.log('yeah')
        // console.log(roles.value)
        if (error) {
          // console.log(error)
        }
      }
      catch (error) {

      }
    }

    const getEmployees = async () => {
      try {
        const { data: employees, error } = await supabase
        .from('employees')
        .select('*')
        employeesData.value = employees
        // console.log(employeesData.value)
        if (error) {
          // console.log(error)
        } else {
          loading.value = false
          for(let i = 0; i <= employeesData.value.length; i++) {
            id.value = employeesData.value[i].employee_id
            // console.log(id.value)
          }
          getRoles()
        }
      }
      catch (error) {
        // console.log(error)
      }
    }

    const assignRole = async () => {
      try {
        const { data, error } = await supabase
        .from('employees')
        .update(
          { 
            rolee: role.value
          }
        )
        .eq('id', userId.value)
        if (error) {
          // console.log(error)
        } else {
          // console.log(data)
        }
      }
      catch (error) {

      }
    }

    function dateTime(value) {
      return moment(value).format('llll')
    }

    onBeforeMount(() => {
      loading.value = true
      const user = supabase.auth.user()
      getEmployees()
      // console.log(user)
    })

    return {
      role,
      loading,
      employeesData,
      assignRole,
      dateTime,
      getRoles,
      roles
    }
  }
}
</script>

<style>

</style>
