<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Dashboard
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <StaffStats />
      <StaffLeaves />
      <StaffProfile />
      <!-- /End replace -->
    </div>
  </main>
</template>

<script>
import StaffStats from '../components/StaffStats.vue'
import StaffLeaves from '../components/StaffLeaves.vue'
import StaffProfile from '../components/StaffProfile.vue'

export default {
  components: {
    StaffStats,
    StaffLeaves,
    StaffProfile
  }
}

</script>

<style>

</style>