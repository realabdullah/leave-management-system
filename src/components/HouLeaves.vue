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
                  Leave Type
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Applied
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  From
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  To
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Leave Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="leave in leaveData" :key="leave.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ leave.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ leave.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ leave.leave_type }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{{ dateTime(leave.date_applied) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{{ leave.from_date }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ leave.to_date }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <span v-if="leave.status == 'Pending'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">
                    {{ leave.status }}
                  </span>
                  <span v-if="leave.status == 'Approved'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ leave.status }}
                  </span>
                  <span v-if="leave.status == 'Declined'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {{ leave.status }}
                  </span>
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
    const leaveData = ref([])
    const houDetails = ref([])
    const userId = ref('')
    const department = ref('')

    const getHouDetails = async () => {
      try {
        const { data: employees, error } = await supabase
        .from("employees")
        .select("*")
        .eq("employee_id", userId.value);
        houDetails.value = employees;
        department.value = houDetails.value[0].department
        if (error) {
          // console.log(error)
        } else {
          await all()
          // console.log(houDetails.value)
          // console.log(department.value)
        }
      } catch (error) {}
    }

    const all = async () => {
      try {
        const { data: leaves, error } = await supabase
        .from('leaves')
        .select('*')
        .eq('department', department.value)
        leaveData.value = leaves
        // console.log(leaveData.value)
        if(error) {
          // console.log(error)
        }
      } catch (error) {
        
      }
    }

    function dateTime(value) {
      return moment(value).format('llll')
    }

    onBeforeMount(() => {
      userId.value = supabase.auth.user().id
      getHouDetails()
    })

    return {
      leaveData,
      dateTime
    }
  }
}
</script>

<style>

</style>