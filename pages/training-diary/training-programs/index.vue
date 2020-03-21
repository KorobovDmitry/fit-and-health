<template>
  <div class="training-programs">
    <app-page-title>Тренировочные программы</app-page-title>
    <div class="training-programs__content">
      <training-programs-list />
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle"
import TrainingProgramsList from "@/components/training-diary/TrainingProgramsList.vue"

export default {
  components: {
    TrainingProgramsList,
    AppPageTitle
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
  margin-left: 80px;
  padding: 40px;
  .training-programs__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
