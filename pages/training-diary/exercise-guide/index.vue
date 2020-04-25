<template>
  <div class="exercise-guide">
    <app-page-title>Справочник по упражнениям</app-page-title>
    <exercise-description />
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import ExerciseDescription from '@/components/training-diary/ExerciseGuide/ExerciseDescription/index'

export default {
  components: {
    AppPageTitle,
    ExerciseDescription
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercise-guide {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
}

</style>