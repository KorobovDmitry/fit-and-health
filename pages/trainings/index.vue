<template>
  <div class="training-programs">
    <div class="training-programs__content-wrapper">
      <p class="training-programs__title">
        Тренировочные программы
      </p>
      <overview-trainings />
      <main-training-program />
      <training-programs-list />
    </div>
  </div>
</template>

<script>
import OverviewTrainings from '@/components/trainings/TrainingPrograms/OverviewTrainings.vue'
import MainTrainingProgram from '@/components/trainings/TrainingPrograms/MainTrainingProgram.vue'
import TrainingProgramsList from '@/components/trainings/TrainingPrograms/TrainingProgramsList.vue'
export default {
  middleware: ['user-auth'],
  components: {
    OverviewTrainings,
    MainTrainingProgram,
    TrainingProgramsList
  },
  beforeCreate () {
    this.$store.commit('nutritionDiary/closeSidebar')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-programs {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .training-programs__content-wrapper {
    // border: 1px solid red;
    margin-top: 60px;
    padding: 40px 40px 20px 40px;
    width: 100%;
    max-width: 1400px;
    .training-programs__title {
      // border: 1px solid red;
      text-align: center;
      font-size: 26px;
    }
  }
}

</style>
