<template>
  <div class="main-training-program">
    <app-block-title>Основная тренировочная программа</app-block-title>

    <div class="main-training-program__overview">

      <div class="overview__info">
        <image-and-social />

        <div class="info__description">
          <div class="description__title">
            <p class="title">BATMAN workout</p>
          </div>
          <additional-info />
          <div class="description__text-and-marks">
            <training-description />
            <added-marks />
          </div>
          <charts />
        </div>

      </div>

    </div>

    <last-training-stats />
    <action-btns />

  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import ImageAndSocial from "@/components/training-diary/MainTrainingProgram/TrainingOverview/ImageAndSocial"
import TrainingDescription from "@/components/training-diary/MainTrainingProgram/TrainingOverview/TrainingDescription"
import AddedMarks from "@/components/training-diary/MainTrainingProgram/TrainingOverview/AddedMarks"
import LastTrainingStats from "@/components/training-diary/MainTrainingProgram/TrainingOverview/LastTrainingStats"
import AdditionalInfo from "@/components/training-diary/MainTrainingProgram/TrainingOverview/AdditionalInfo"
import Charts from "@/components/training-diary/MainTrainingProgram/TrainingOverview/Charts/Charts"
import ActionBtns from "@/components/training-diary/MainTrainingProgram/TrainingOverview/ActionBtns"

export default {
  components: {
    AppBlockTitle,
    ImageAndSocial,
    TrainingDescription,
    AddedMarks,
    LastTrainingStats,
    AdditionalInfo,
    Charts,
    ActionBtns
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.main-training-program {
  // border: 1px solid red;
  .main-training-program__overview {
    // border: 1px solid red;
    display: flex;
    .overview__info {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;

      .info__description {
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

        .description__text-and-marks {
          // border: 1px solid red;
          flex: 1 1 auto;
          display: flex;
          margin-top: 5px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
