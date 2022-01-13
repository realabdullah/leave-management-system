<template>
  <div class="min-h-full">
    <HouNav />
    <HouOverview />
  </div>
</template>

<script>
import HouNav from '../components/HouNav.vue'
import HouOverview from '../components/HouOverview.vue'

export default {
  components: {
    HouNav,
    HouOverview
  }
}
</script>

<style>

</style>