<template>
  <div class="min-h-full">
    <AdminNav />
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <AllLeaves />
    </div>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import AllLeaves from '../components/AllLeaves.vue'

export default {
  components: {
    AdminNav,
    AllLeaves
  }
}
</script>

<style>

</style>