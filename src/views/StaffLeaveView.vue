<template>
  <div class="min-h-full">
    <StaffNav />
    <div v-if="loading" class="wrapper">
      <span class="loader"><span class="loader-inner"></span></span>
    </div>
    <div v-else class="bg-white m-5 shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Leave Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div class="border-t border-gray-200">
        <dl v-for="details in leaveDetails" :key="details.id">
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Full name
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.name }}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Email Address
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.email }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Department
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.department }}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Marital Status
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.marital_status }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Last Leave Date
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.last_leave_date }}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Last Leave Type
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.last_leave_taken }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Leave Applying For
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.leave_type }}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Start Date
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.from_date }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              End Date
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.to_date }}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Comment
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.comment }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { PaperClipIcon } from '@heroicons/vue/solid'
import { ref, computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../supabase'
import StaffNav from "../components/StaffNav";

export default {
  components: {
    StaffNav,
    PaperClipIcon
  },
  setup () {
    const route = useRoute()
    const userId = computed(() => route.params.id)
    const leaveDetails = ref()
    const loading = ref(false)

    const getLeaveDetails = async () => {
      try {
        const { data: leaves, error } = await supabase
        .from('leaves')
        .select('*')
        .eq('id', userId.value)
        leaveDetails.value = leaves
        if(error) {
          // console.log(error)
        } else {
          // console.log(leaveDetails.value)
          loading.value = false
        }
      } catch (error) {
        
      }
    }

    onBeforeMount(() => {
      loading.value = true
      getLeaveDetails()
    })

    return {
      loading,
      leaveDetails
    }
  }
}
</script>

<style>

</style>