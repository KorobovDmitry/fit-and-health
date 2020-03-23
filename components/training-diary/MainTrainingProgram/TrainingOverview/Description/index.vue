<template>
  <div class="description">
    <div class="description__title">
      <p class="title">BATMAN workout</p>
    </div>
    <div class="description__info">
      <div class="description__left-block">
        <additional-info />
        <training-description />
      </div>
      <div class="description__right-block">
        <added-marks />
      </div>
    </div>
    <charts />
  </div>
</template>

<script>
import AdditionalInfo from "@/components/training-diary/MainTrainingProgram/TrainingOverview/Description/AdditionalInfo"
import TrainingDescription from "@/components/training-diary/MainTrainingProgram/TrainingOverview/Description/TrainingDescription"
import AddedMarks from "@/components/training-diary/MainTrainingProgram/TrainingOverview/Description/AddedMarks"
import Charts from "@/components/training-diary/MainTrainingProgram/TrainingOverview/Description/Charts/index"

export default {
  components: {
    AdditionalInfo,
    TrainingDescription,
    AddedMarks,
    Charts
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.description {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .description__title {
    margin-left: 5px;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .title {
      flex: 1 1 auto;
      text-align: center;
      font-weight: 500;
    }
  }
  .description__info {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    .description__left-block {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
    }
    .description__right-block {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
    }
  }
}

</style>