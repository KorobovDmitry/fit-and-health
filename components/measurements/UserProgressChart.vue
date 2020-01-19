<template>
  <div class="user-progress-chart">
    <app-block-title>График прогресса</app-block-title>
    <div class="linear-chart">
      linear-chart
    </div>
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

.user-progress-chart {
  // border: 1px solid red;
  margin-bottom: 20px;
  .linear-chart {
    border: 1px solid red;
    height: 500px;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>
