<template>
  <div class="flex flex-col">
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
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="employee in employeesData">
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
              </tr>

              <!-- More people... -->
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
    const loading = ref(false)

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
        }
      }
      catch (error) {
        // console.log(error)
      }
    }

    function dateTime(value) {
      return moment(value).format('llll')
    }

    onBeforeMount(() => {
      loading.value = true
      getEmployees()
      const user = supabase.auth.user()
      // console.log(user)
    })

    return {
      loading,
      employeesData,
      dateTime
    }
  }
}
</script>

<style>

</style>
