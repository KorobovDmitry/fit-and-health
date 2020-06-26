<template>
  <div class="editor">
    <overview-current-training />
    <div class="exercises">
      
      <exercises-list />

      <!-- <training-days /> -->
      <current-training-exercises />
      
    </div>
  </div>
</template>

<script>
import OverviewCurrentTraining from '@/components/training-diary/TrainingProgramEditor/TrainingOverview'
import ExercisesList from '@/components/training-diary/TrainingProgramEditor/Editor/ExercisesList/index'
import CurrentTrainingExercises from '@/components/training-diary/TrainingProgramEditor/Editor/CurrentTrainingExercises/index'
import TrainingDays from '@/components/training-diary/TrainingProgramEditor/TrainingDays'

export default {
  components: {
    OverviewCurrentTraining,
    ExercisesList,
    CurrentTrainingExercises,
    TrainingDays
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.editor {
  // border: 1px solid red;
  flex: 1 1 auto;
  .exercises {
    display: flex;
    margin-top: 20px;
  }
}

</style>