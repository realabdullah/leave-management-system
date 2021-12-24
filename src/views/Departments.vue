<template>
  <div class="min-h-full">
    <AdminNav />
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Department />
    </div>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import Department from '../components/Department.vue'

export default {
  components: {
    AdminNav,
    Department
  }
}
</script>

<style>

</style>