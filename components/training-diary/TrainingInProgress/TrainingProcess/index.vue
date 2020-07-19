<template>
  <div class="training-process">
    <app-block-title>Процесс тренировки</app-block-title>
    <div class="training-process__content">

      <main-stats />

      <div class="video-and-comment">
        <div class="video">video and training comment</div>
        <comment />
      </div>

      <div class="exercise-timer-audio">
        <div class="timer-and-audio">
          <timer />
          <audio-player />
        </div>
        <exercises />
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MainStats from '@/components/training-diary/TrainingInProgress/TrainingProcess/MainStats'
import Timer from '@/components/training-diary/TrainingInProgress/TrainingProcess/Timer'
import Comment from '@/components/training-diary/TrainingInProgress/TrainingProcess/Comment'
import AudioPlayer from '@/components/training-diary/TrainingInProgress/TrainingProcess/AudioPlayer'
import Exercises from '@/components/training-diary/TrainingInProgress/TrainingProcess/Exercises'

export default {
  components: {
    AppBlockTitle,
    MainStats,
    Timer,
    Comment,
    AudioPlayer,
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

    .exercise-timer-audio {
      display: flex;
      .timer-and-audio {
        display: flex;
        flex-direction: column;
      }
    }





    .video-and-comment {
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
