<template>
  <div class="min-h-full">
    <HouNav />
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <AllDeptLeave />
    </div>
  </div>
</template>

<script>
import HouNav from '../components/HouNav.vue'
import AllDeptLeave from '../components/AllDeptLeave.vue'

export default {
  components: {
    HouNav,
    AllDeptLeave
  }
}
</script>

<style>

</style>