<template>
  <div class="layout-default">

    <app-navbar />
    <app-header />

    <nutrition-diary-sidebar :sidebarActive="this.$store.getters['nutritionDiary/getSidebarActive']" />

    <nuxt />

  </div>
</template>

<script>
import AppHeader from '@/components/navigation/AppHeader'
import AppNavbar from '@/components/navigation/AppNavbar'
import NutritionDiarySidebar from '@/components/nutritionDiary/Sidebar.vue'
export default {
  components: {
    AppNavbar,
    AppHeader,
    NutritionDiarySidebar
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

</style>
