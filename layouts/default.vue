<template>
  <div class="layout-default">
    <app-navbar />
    <nuxt />
  </div>
</template>

<script>
import AppNavbar from '@/components/navigation/AppNavbar'
export default {
  components: {
    AppNavbar
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

</style>
