<template>
  <div class="training-program-full-view">

    <div class="training-program-full-view__content">
      <p class="training-program-full-view__title">Название программы тренировок</p>
      <overview-current-training />
      <div class="exercises">
        <exercises-list />
        <current-training-exercises />
      </div>
    </div>

  </div>
</template>

<script>
import ExercisesList from '@/components/training-diary/TrainingProgramEditor/ExercisesList.vue'
import CurrentTrainingExercises from '@/components/training-diary/TrainingProgramEditor/CurrentTrainingExercises.vue'
import OverviewCurrentTraining from '@/components/training-diary/TrainingProgramEditor/OverviewCurrentTraining.vue'
export default {
  // middleware: ['userAuth'],
  components: {
    ExercisesList,
    CurrentTrainingExercises,
    OverviewCurrentTraining
  },
  data () {
    return {
      programName: this.$route.params['name']
    }
  },
  watch: {
    $route (toR) {
      this.programName = toR.params['name']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-program-full-view {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .training-program-full-view__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .training-program-full-view__title {
      text-align: center;
      font-size: 26px;
    }
  }
}

.exercises {
  display: flex;
}

</style>
