<template>
  <div class="layout-default">
    <app-navbar />
    <nutrition-diary-sidebar :sidebarActive="this.$store.getters['nutritionDiary/getSidebarActive']" />
    <nuxt />
  </div>
</template>

<script>
import AppNavbar from '@/components/header/Navbar'
import NutritionDiarySidebar from '@/components/nutritionDiary/Sidebar.vue'
export default {
  components: {
    AppNavbar,
    NutritionDiarySidebar
  }
}
</script>

<style lang="scss" scoped>

// .layout-default {}

</style>
