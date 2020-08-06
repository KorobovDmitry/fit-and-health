<template>
  <div class="layout-default">
    <app-navbar />
    <nuxt />
    <app-notifications />
  </div>
</template>

<script>
import AppNavbar from '@/components/navigation/AppNavbar'
import AppNotifications from '@/components/basic/AppNotifications'

export default {
  components: {
    AppNavbar,
    AppNotifications
  }
}
</script>
