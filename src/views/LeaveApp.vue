<template>
  <div class="min-h-full">
    <StaffNav />
    <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Leave Application
      </h1>
    </div>
  </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <LeaveForm />
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
import StaffNav from '../components/StaffNav.vue'
import LeaveForm from '../components/LeaveForm.vue'

export default {
  components: {
    StaffNav,
    LeaveForm
  }
}
</script>

<style>

</style>