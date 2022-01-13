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
                  Status
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="leaves in allLeaves">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ leaves.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ leaves.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ leaves.leave_type }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ leaves.date_applied }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ leaves.from_date }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ leaves.to_date }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span v-if="leaves.status == 'Pending'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">
                    {{ leaves.status }}
                  </span>
                  <span v-if="leaves.status == 'Approved'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ leaves.status }}
                  </span>
                  <span v-if="leaves.status == 'Declined'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {{ leaves.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Dec, 15
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <router-link :to="`/leave-action/${leaves.id}`" class="text-indigo-600 hover:text-indigo-900">View</router-link>
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
import { supabase } from '../supabase'

export default {
  setup () {
    const allLeaves = ref([])
    const houData = ref([])
    const houId = ref('')
    const department = ref('')

    const getHou = async () => {
      try {
        const { data: employees, error } = await supabase
        .from('employees')
        .select('*')
        .eq('employee_id', houId.value)
        houData.value = employees
        department.value = houData.value[0].department
        if(error) {
          // console.log(error)
        } else {
          await getAllLeaves()
          // console.log(staffData.value)
        }
      }
      catch(error) {
        //
      }
    }

    const getAllLeaves = async () => {
      try {
        const { data: leaves, error } = await supabase
        .from('leaves')
        .select('*')
        .eq('department', department.value)
        allLeaves.value = leaves
        console.log(allLeaves.value)
        if(error) {
          // console.log(error)
        }
      } catch (error) {
        
      }
    }

    onBeforeMount(() => {
      houId.value = supabase.auth.user().id
      getHou()
    })

    return {
      allLeaves
    }
  }
}
</script>

<style>

</style>