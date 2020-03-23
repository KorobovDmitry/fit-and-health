<template>
  <div class="training-programs">
    <app-page-title>Тренировочные программы</app-page-title>
    <div class="training-programs__content">
      <training-programs />
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle"
import TrainingPrograms from "@/components/training-diary/TrainingPrograms/index"

export default {
  components: {
    TrainingPrograms,
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
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
