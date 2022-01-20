<template>
  <div v-if="loading" class="wrapper">
    <span class="loader"><span class="loader-inner"></span></span>
  </div>
  <div v-else class="card-pack">
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
    const allLeaves = ref([])
    const approvedLeaves = ref([])
    const pendingLeaves = ref([])
    const userId = ref('')
    const loading = ref(false)

    const all = async () => {
      try {
        const { data: leaves, error } = await supabase
        .from('leaves')
        .select('*')
        .eq('user_id', userId.value)
        allLeaves.value = leaves
        // console.log(allLeaves.value)
        if(error) {
          // console.log(error)
        }
      } catch (error) {
        
      }
    }

    const pending = async () => {
      try {
        const { data: leaves, error } = await supabase
        .from('leaves')
        .select('status')
        .eq('user_id', userId.value)
        .eq('status', 'Pending')
        pendingLeaves.value = leaves
        // console.log(pendingLeaves.value)
        if(error) {
          // console.log(error)
        }
      } catch (error) {
        
      }
    }

    const approved = async () => {
      try {
        const { data: leaves, error } = await supabase
        .from('leaves')
        .select('status')
        .eq('user_id', userId.value)
        .eq('status', 'Approved')
        approvedLeaves.value = leaves
        // console.log(approvedLeaves.value)
        if(error) {
          // console.log(error)
        } else {
          loading.value = false
        }
      } catch (error) {
        
      }
    }

    onBeforeMount(() => {
      loading.value = true
      userId.value = supabase.auth.user().id
      all()
      pending()
      approved()
    })

    return {
      loading,
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