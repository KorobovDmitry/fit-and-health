<template>
  <div class="training-programs">
    <app-page-title>Тренировочные программы</app-page-title>
    <div class="training-programs__content">
      <page-info />
      <main-training-program />
      <training-programs-list />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import PageInfo from '@/components/trainings/PageInfo'
import MainTrainingProgram from '@/components/trainings/TrainingPrograms/MainTrainingProgram.vue'
import TrainingProgramsList from '@/components/trainings/TrainingPrograms/TrainingProgramsList.vue'
export default {
  components: {
    AppPageTitle,
    PageInfo,
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
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .training-programs__content {
    // border: 1px solid red;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
