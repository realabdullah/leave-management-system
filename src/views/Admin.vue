<template>
  <div class="min-h-full">
    <AdminNav />
    <AdminOverview />
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import AdminOverview from '../components/AdminOverview.vue'

export default {
  components: {
    AdminNav,
    AdminOverview
  }
}
</script>

<style>

</style>