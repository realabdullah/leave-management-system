<template>
  <div class="min-h-full">
    <AdminNav />
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Employee />
    </div>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import Employee from '../components/Employee.vue'

export default {
  components: {
    AdminNav,
    Employee
  }
}
</script>

<style>

</style>