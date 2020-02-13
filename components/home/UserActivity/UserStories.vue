<template>
  <div class="user-stories">
    <app-block-title>Истории</app-block-title>
    <div class="user-stories__story-block">story</div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.user-stories {
  margin-bottom: 40px;
  .user-stories__story-block {
    width: 100px;
    height: 100px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>