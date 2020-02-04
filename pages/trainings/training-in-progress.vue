<template>
  <div class="training-in-progress">
    <div class="training-in-progress__content">
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
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .training-in-progress__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
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
