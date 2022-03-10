<template>
  <div class="min-h-full">
    <AdminNav />
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
        <dl v-for="user in employeeData" :key="user.id">
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ user.name }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Email Address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ user.email }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Department</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ user.department }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Gender</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ user.gender }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Telephone</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ user.phone }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Role</dt>
            <dd v-for="role in userDetails" :key="role.id" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ role.role }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Assign New Role</dt>
            <dd class="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <button
                @click="assignAdmin"
                class="group relative mr-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <div v-if="!assigningAdmin">Admin</div>
                <div class="svg" v-else>
                  <svg
                    version="1.1"
                    id="L4"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 0 0"
                    xml:space="preserve"
                  >
                    <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"
                      />
                    </circle>
                    <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.2"
                      />
                    </circle>
                    <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.3"
                      />
                    </circle>
                  </svg>
                </div>
              </button>
              <button
                @click="assignHou"
                class="group relative mr-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <div v-if="!assigningHou">HOU</div>
                <div class="svg" v-else>
                  <svg
                    version="1.1"
                    id="L4"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 0 0"
                    xml:space="preserve"
                  >
                    <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"
                      />
                    </circle>
                    <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.2"
                      />
                    </circle>
                    <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.3"
                      />
                    </circle>
                  </svg>
                </div>
              </button>
              <button
                @click="assignStaff"
                class="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <div v-if="!assigningStaff">Staff</div>
                <div class="svg" v-else>
                  <svg
                    version="1.1"
                    id="L4"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 0 0"
                    xml:space="preserve"
                  >
                    <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"
                      />
                    </circle>
                    <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.2"
                      />
                    </circle>
                    <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.3"
                      />
                    </circle>
                  </svg>
                </div>
              </button>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import { PaperClipIcon } from "@heroicons/vue/solid";
import { ref, computed, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { supabase } from "../supabase";

export default {
  components: {
    AdminNav,
    PaperClipIcon,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const userId = computed(() => route.params.id);
    const userDetails = ref();
    const employeeData = ref()
    const admin = ref('admin')
    const hou = ref('mod')
    const staff = ref('staff')
    const loading = ref(false);
    const assigningAdmin = ref(false);
    const assigningHou = ref(false);
    const assigningStaff = ref(false);

    const getUserDetails = async () => {
      loading.value = true;
      try {
        const { data: user_roles, error } = await supabase
        .from("user_roles")
        .select('*')
        .eq('user_id', userId.value)
        userDetails.value = user_roles;
        if (error) {
          console.log(error);
        } else {
          console.log(userDetails.value);
          loading.value = false;
        }
      } catch (error) {}
    };

    const getEmployee = async () => {
      try {
        const { data: employees, error } = await supabase
        .from('employees')
        .select('*')
        .eq('employee_id', userId.value)
        employeeData.value = employees
        console.log(employeeData.value)
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

    const assignAdmin = async () => {
      assigningAdmin.value = true
      try {
        const { data, error } = await supabase
        .from('user_roles')
        .update(
          {
            role: 'admin'
          }
        )
        .eq('user_id', userId.value)
        if (error) {
          assigningAdmin.value = false
          console.log(error)
        }
        console.log(data)
        router.push({
          path: '/employees'
        })
        assigningAdmin.value = false
      } catch (error) {

      }
    }

    const assignHou = async () => {
      assigningHou.value = true
      try {
        const { data, error } = await supabase
        .from('user_roles')
        .update({ role: 'mod' })
        .eq('user_id', userId.value)
        if (error) {
          assigningHou.value = false
          console.log(error)
        }
        console.log(data)
        router.push({
          path: '/employees'
        })
        assigningHou.value = false
      } catch (error) {
          console.log(error)
      }
    }

    const assignStaff = async () => {
      assigningStaff.value = true
      try {
        const { data, error } = await supabase
        .from('user_roles')
        .update(
          {
            role: 'staff'
          }
        )
        .eq('user_id', userId.value)
        if (error) {
          assigningStaff.value = false
          console.log(error)
        }
        console.log(data)
        router.push({
          path: '/employees'
        })
        assigningStaff.value = false
      } catch (error) {

      }
    }


    onBeforeMount(() => {
      getUserDetails();
      getEmployee()
    });

    return {
      assigningAdmin,
      assigningHou,
      assigningStaff,
      loading,
      userDetails,
      employeeData,
      assignAdmin,
      assignHou,
      assignStaff
    };
  },
};
</script>

<style>
</style>