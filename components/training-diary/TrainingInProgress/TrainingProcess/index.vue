<template>
  <div class="training-process">
    <app-block-title>Процесс тренировки</app-block-title>
    <div class="training-process__content">
      <main-stats />
      <div class="video-and-timer">
        <div class="video">video</div>
        <timer />
      </div>
      <exercises />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MainStats from '@/components/training-diary/TrainingInProgress/TrainingProcess/MainStats'
import Timer from '@/components/training-diary/TrainingInProgress/TrainingProcess/Timer'
import Exercises from '@/components/training-diary/TrainingInProgress/TrainingProcess/Exercises'

export default {
  components: {
    AppBlockTitle,
    MainStats,
    Timer,
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
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    .video-and-timer {
      display: flex;
      margin-top: 5px;
      .video {
        flex: 1 1 auto;
        padding: 10px;
        height: 500px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }
  }
}

</style>
