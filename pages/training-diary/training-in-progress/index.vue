<template>
  <div class="training-in-progress">
    <app-page-title>Новая тренировка</app-page-title>

    <div class="training-in-progress__content">
      <training-info />
      <training-process />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import TrainingInfo from '@/components/training-diary/TrainingInProgress/TrainingInfo'
import TrainingProcess from '@/components/training-diary/TrainingInProgress/TrainingProcess/index'

export default {
  // middleware: ['userAuth'],
  components: {
    AppPageTitle,
    TrainingInfo,
    TrainingProcess
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-in-progress {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .training-in-progress__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
