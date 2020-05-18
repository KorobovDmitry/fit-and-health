<template>
  <div class="notifications">
    <ul class="notifications-list">
      <app-notice
        v-for="(item, index) in notifications"
        :key="index"
        :notice="item"
      />
    </ul>
  </div>
</template>

<script>
import AppNotice from '@/components/basic/AppNotice'

export default {
  props: {
    notifications: Array
  },
  components: {
    AppNotice
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.notifications {
  // border: 1px solid red;
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  z-index: 9999;
  overflow: hidden;
}

</style>