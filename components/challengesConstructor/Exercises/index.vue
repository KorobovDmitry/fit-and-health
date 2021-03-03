<template>
  <div class="exercises">
    <app-block-title>Упражнения</app-block-title>
    <div class="exercises__content">
      exercises
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

.exercises {
  // border: 1px solid red;
  .exercises__content {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $boxShadow;
  }
}
</style>