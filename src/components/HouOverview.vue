<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <HouStats />
      <HouLeaves />
      <StaffProfile />
      <!-- /End replace -->
    </div>
  </main>
</template>

<script>
import HouStats from "../components/HouStats.vue";
import HouLeaves from "../components/HouLeaves.vue";
import StaffProfile from "../components/StaffProfile.vue";

export default {
  components: {
    HouStats,
    HouLeaves,
    StaffProfile,
  },
};
</script>

<style>
</style>