<template>
  <div class="layout-default">
    <!-- <app-header /> -->
    <app-navbar />
    <nuxt />
    <app-notifications />
  </div>
</template>

<script>
// import AppHeader from '@/components/navigation/AppHeader'
import AppNavbar from '@/components/navigation/AppNavbar'
import AppNotifications from '@/components/basic/AppNotifications'

export default {
  components: {
    // AppHeader,
    AppNavbar,
    AppNotifications
  }
}
</script>
