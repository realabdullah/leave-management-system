<template>
  <div class="min-h-full">
    <StaffNav />
    <StaffOverview />
  </div>
</template>

<script>
import StaffNav from '../components/StaffNav.vue'
import StaffOverview from '../components/StaffOverview.vue'

export default {
  components: {
    StaffNav,
    StaffOverview
  }
}
</script>

<style>

</style>