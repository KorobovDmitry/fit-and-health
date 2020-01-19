<template>
  <div class="layout-default">

    <app-navbar />
    <!-- <app-header /> -->

    <nuxt />

  </div>
</template>

<script>
import AppHeader from '@/components/navigation/AppHeader'
import AppNavbar from '@/components/navigation/AppNavbar'
export default {
  components: {
    AppNavbar,
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

</style>
