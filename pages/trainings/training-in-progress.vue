<template>
  <div class="training-in-progress">
    <div class="training-in-progress__content-wrapper">
      <p class="training-in-progress__title">Новая тренировка</p>
      <current-training-overview />
      <div class="training-in-progress__main-data">
        <current-training-info />
        <current-training-day-exercises />
      </div>
    </div>
  </div>
</template>

<script>
import CurrentTrainingOverview from '@/components/trainings/TrainingInProgress/CurrentTrainingOverview.vue'
import CurrentTrainingInfo from '@/components/trainings/TrainingInProgress/CurrentTrainingInfo.vue'
import CurrentTrainingDayExercises from '@/components/trainings/TrainingInProgress/CurrentTrainingDayExercises.vue'
export default {
  middleware: ['user-auth'],
  components: {
    CurrentTrainingOverview,
    CurrentTrainingInfo,
    CurrentTrainingDayExercises
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
  .training-in-progress__content-wrapper {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    padding: 40px;
    width: 100%;
    max-width: 1400px;
    .training-in-progress__title {
      text-align: center;
      font-size: 26px;
    }
    .training-in-progress__main-data {
      display: flex;
    }
  }
}

</style>
