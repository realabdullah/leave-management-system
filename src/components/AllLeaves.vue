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
                  HOU Status
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
              <tr v-for="leaves in allLeaves" :key="leaves.id">
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
                  <div class="text-sm text-gray-900"> {{ dateTime(leaves.date_applied) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ leaves.from_date }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ leaves.to_date }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span v-if="leaves.hou_status == 'Pending'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">
                    {{ leaves.hou_status }}
                  </span>
                  <span v-if="leaves.hou_status == 'Approved'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ leaves.hou_status }}
                  </span>
                  <span v-if="leaves.hou_status == 'Declined'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {{ leaves.hou_status }}
                  </span>
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
import { supabase } from '@/supabase'
import moment from 'moment'

export default {
  setup () {
    const allLeaves = ref([])
    const loading = ref(false)

    const getAllLeaves = async () => {
      loading.value = true
      try {
        const { data: leaves, error } = await supabase
        .from('leaves')
        .select('*')
        allLeaves.value = leaves
        // console.log(allLeaves.value)
        if(error) {
          // console.log(error)
        } else {
          loading.value = false
        }
      } catch (error) {
        
      }
    }

    function dateTime(value) {
      return moment(value).format('llll')
    }

    onBeforeMount(() => {
      getAllLeaves()
    })

    return {
      loading,
      allLeaves,
      dateTime
    }
  }
}
</script>

<style>

</style>