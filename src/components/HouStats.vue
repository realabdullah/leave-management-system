<template>
  <div class="card-pack">
    <div class="hc-card">
      <p>All Leaves</p>
      <h1>{{ allLeaves.length }}</h1>
    </div>
    <div class="hc-card">
      <p>Approved Leaves</p>
      <h1>{{ approvedLeaves.length }}</h1>
    </div>
    <div class="hc-card">
      <p>Pending Leaves</p>
      <h1>{{ pendingLeaves.length }}</h1>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { supabase } from '../supabase'

export default {
  setup () {
    const houDetails = ref([])
    const allLeaves = ref([])
    const approvedLeaves = ref([])
    const pendingLeaves = ref([])
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
          console.log(error)
        } else {
          await all()
          await pending()
          await approved()
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
        allLeaves.value = leaves
        console.log(allLeaves.value)
        if(error) {
          console.log(error)
        }
      } catch (error) {
        
      }
    }

    const pending = async () => {
      try {
        const { data: leaves, error } = await supabase
        .from('leaves')
        .select('status')
        .eq('department', department.value)
        .eq('status', 'Pending')
        pendingLeaves.value = leaves
        // console.log(pendingLeaves.value)
        if(error) {
          console.log(error)
        }
      } catch (error) {
        
      }
    }

    const approved = async () => {
      try {
        const { data: leaves, error } = await supabase
        .from('leaves')
        .select('status')
        .eq('department', department.value)
        .eq('status', 'Approved')
        approvedLeaves.value = leaves
        // console.log(approvedLeaves.value)
        if(error) {
          console.log(error)
        }
      } catch (error) {
        
      }
    }

    onBeforeMount(() => {
      userId.value = supabase.auth.user().id
      getHouDetails()
    })

    return {
      allLeaves,
      pendingLeaves,
      approvedLeaves
    }
  }
}
</script>

<style>
.card-pack {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-block: 30px;
}

.hc-card {
  width: 270px;
  height: 100px;
  border-radius: 20px;
  background-color: #21D4FD;
  background-color: #FF3CAC;
  background-image: linear-gradient(225deg, #FF3CAC 0%, #471573 46%, #133652 100%);
  color: #fff;
  padding: 20px;
  margin: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.hc-card p {
  font-size: 1.2rem;
}

.hc-card h1{
  font-size: 3.2rem;
  font-weight: bold;
}
</style>