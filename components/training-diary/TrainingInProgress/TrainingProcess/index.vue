<template>
  <div class="training-process">
    <app-block-title>Процесс тренировки</app-block-title>

    <div class="training-process__content">
      <exercises />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import Exercises from '@/components/training-diary/TrainingInProgress/TrainingProcess/Exercises'

export default {
  components: {
    AppBlockTitle,
    Exercises
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-process {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  .training-process__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
  }
}

</style>
