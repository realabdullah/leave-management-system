<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="min-h-full">
    <AdminNav />
    <div v-if="loading" class="wrapper">
      <span class="loader"><span class="loader-inner"></span></span>
    </div>
    <div v-else class="bg-white m-5 shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          User Information
        </h3>
      </div>
      <div class="border-t border-gray-200">
        <dl v-for="details in requestDetails">
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.name }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Email Address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.email }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Department</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.department }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Phone</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.phone }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Gender</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.gender }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Staus</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ details.status }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Admin Action</dt>
            <dd class="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <button
                @click="approve"
                class="
                  group
                  relative
                  mr-3
                  py-2
                  px-4
                  border border-transparent
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <div v-if="!approving">Approve</div>
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
                @click="reject"
                class="
                  group
                  relative
                  py-2
                  px-4
                  border border-transparent
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-red-600
                  hover:bg-red-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-red-500
                "
              >
                <div v-if="!rejecting">Reject</div>
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
    const requestDetails = ref();
    const approving = ref(false);
    const rejecting = ref(false);
    const email = ref("");
    const password = ref('')
    const newId = ref('')
    const

    const getRequestDetails = async () => {
      try {
        const { data: preusers, error } = await supabase
          .from("preusers")
          .select("*")
          .eq("id", userId.value);
        requestDetails.value = preusers;
        email.value = requestDetails.value[0].email;
        password.value = requestDetails.value[0].password
        if (error) {
          // console.log(error)
        } else {
          // console.log(requestDetails.value)
        }
      } catch (error) {}
    }

    const signUp = async () => {
      try {
        const { user, error } = await supabase.auth.signUp(
          {
            email: email.value,
            password: password.value
          }
        )
        newId.value = user.id
        await addNewInfo()
        await signUser()
        router.push({
          path: "/user-requests",
        });
      }
      catch(error) {
        // console.log('Error signing up!')
      }
    }

    const signUser = async () => {
      try {
        const { user, error } = await supabase.auth.signIn({
          email: email.value
        });
        if (error) {
          // console.log(error)
        }
      } catch (error) {}
    };

    const addNewInfo = async () => {
      try {
        const { data, error } = await supabase
        .from('employees')
        .insert([
          {
            name: requestDetails.value[0].name, 
            email: requestDetails.value[0].email,
            phone: requestDetails.value[0].phone, 
            gender: requestDetails.value[0].gender, 
            department: requestDetails.value[0].department,
            employee_id: newId.value
          },
        ])
      }
      catch (error) {}
    }

    const approve = async () => {
      try {
        approving.value = true;
        const { error } = await supabase
          .from("preusers")
          .update({ status: "Approved" })
          .eq("id", userId.value);
        if (error) {
          // console.log(error)
          approving.value = false;
        } else {
          await signUp();
          // console.log(data)
          approving.value = false;
        }
      } catch (error) {}
    };

    const reject = async () => {
      try {
        rejecting.value = true;
        const { error } = await supabase
          .from("preusers")
          .update({ status: "Declined" })
          .eq("id", userId.value);
        if (error) {
          // console.log(error)
          rejecting.value = false;
        } else {
          // console.log(data)
          router.push({
            path: "/user-requests",
          });
          rejecting.value = false;
        }
      } catch (error) {}
    };

    onBeforeMount(() => {
      getRequestDetails();
    });

    return {
      requestDetails,
      approve,
      reject,
      approving,
      rejecting,
    };
  },
};
</script>
