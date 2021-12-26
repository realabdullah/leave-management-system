<template>
  <form @submit.prevent="addLeave" v-if="!applied">
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p class="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                  <input v-model="staffName" type="text" name="name" id="name" autocomplete="given-name" class="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                  <input v-model="email" type="email" name="email" id="email" autocomplete="family-name" class="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="department" class="block text-sm font-medium text-gray-700">Department</label>
                  <input v-model="department" type="text" name="department" id="department" autocomplete="department" class="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="marital-status" class="block text-sm font-medium text-gray-700">Marital Status</label>
                  <select v-model="maritalStatus" id="marital-status" name="marital-status" autocomplete="status" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value=""></option>
                    <option value="Single">Single</option>
                    <option value="Married">Married Leave</option>
                    <option value="Divorced">Divorced Leave</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Leave Details</h3>
            <p class="mt-1 text-sm text-gray-600">
              Information on the last leave you took and one you're about to take.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid gap-6">
                <div class="col-span-6">
                  <label for="last-leave" class="block text-sm font-medium text-gray-700">Last Leave Date</label>
                  <input v-model="lastLeavedate" type="date" name="last-leave" id="last-leave" class="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="leave-type" class="block text-sm font-medium text-gray-700">Last Leave Type</label>
                  <select v-model="lastLeaveType" id="leave-type" name="leave-type" autocomplete="leave" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value=""></option>
                    <option value="Annual Leave">Annual Leave</option>
                    <option value="Paternity Leave">Paternity Leave</option>
                    <option value="Maternity Leave">Maternity Leave</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="leave-type" class="block text-sm font-medium text-gray-700">Leave Type (Now)</label>
                  <select v-model="leaveType" id="leave-type" name="leave-type" autocomplete="leave" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value=""></option>
                    <option value="Annual Leave">Annual Leave</option>
                    <option value="Paternity Leave">Paternity Leave</option>
                    <option value="Maternity Leave">Maternity Leave</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label for="from-date" class="block text-sm font-medium text-gray-700">From</label>
                  <input v-model="leaveFrom" type="date" name="from-date" id="from-date" class="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="to-date" class="block text-sm font-medium text-gray-700">To</label>
                  <input v-model="leaveTo" type="date" name="to-date" id="to-date" class="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div>
                  <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    <div v-if="!loading">Sign Up</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  <!--modal content-->
  <div v-else class="relative top-20 mx-auto mb-10 p-5 border w-96 shadow-lg rounded-md bg-white">
    <div class="mt-3 text-center">
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
        <svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
          </path>
        </svg>
      </div>
      <h3 class="mt-3 text-lg leading-6 font-medium text-gray-900">Success!</h3>
      <div class="mt-2 px-7 py-3">
        <p class="text-sm text-gray-500">
          You have successfully apply for a leave.
        </p>
      </div>
      <div class="items-center px-4 py-3">
        <router-link to="/staff">
          <button
            class="px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >            
            Okay
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'
import { ref, onBeforeMount } from 'vue'
import { supabase } from '../supabase'

export default {
  components: {
    LockClosedIcon
  },
  setup() {
    const staffPre = ref([])
    const userId = ref('')
    const staffName = ref('')
    const email = ref('')
    const department = ref('')
    const maritalStatus = ref('')
    const lastLeavedate = ref('')
    const lastLeaveType = ref('')
    const leaveType = ref('')
    const leaveFrom = ref('')
    const leaveTo = ref('')
    const status = ref('Pending')
    const loading = ref(false)
    const applied = ref(false)

    const getStaffData = async () => {
      try {
        const { data: employees, error } = await supabase
        .from('employees')
        .select('*')
        .eq('employee_id', userId.value)
        staffPre.value = employees
        staffName.value = staffPre.value[0].name
        email.value = staffPre.value[0].email
        department.value = staffPre.value[0].department
        if(error) {
          console.log(error)
        } else {
          //
        }
      }
      catch(error) {

      }
    }

    const addLeave = async () => {
      try {
        loading.value = true
        const { data, error } = await supabase
        .from('leaves')
        .insert([
          {
            name: staffName.value,
            email: email.value,
            department: department.value,
            marital_status: maritalStatus.value,
            last_leave_date: lastLeavedate.value,
            last_leave_taken: lastLeaveType.value,
            leave_type: leaveType.value,
            from_date: leaveFrom.value,
            to_date: leaveTo.value,
            status: status.value,
            user_id: userId.value
          }
        ])
        if(error) {
          console.log(error)
          loading.value = false
          applied.value = false
        } else {
          console.log(data)
          loading.value = false
          applied.value = true
        }
      }
      catch(error) {
        
      }
    }

    onBeforeMount(() => {
      userId.value = supabase.auth.user().id
      console.log(userId.value)
      getStaffData()
    })

    return {
      staffName,
      email,
      department,
      maritalStatus,
      lastLeavedate,
      lastLeaveType,
      leaveType,
      leaveFrom,
      leaveTo,
      loading,
      addLeave,
      applied
    }
  }
}
</script>