<template>
  <div class="exercise-overview">
    <app-block-title>Описание упражения</app-block-title>

    <div class="exercise-overview__content">
      <p class="exercise__title">{{ exerciseInfo.title }}</p>

      <div class="exercise__main-info">
        <div class="main-info__left-block">
          <exercise-technique :techniqueDescription="exerciseInfo.techniqueDescription" />
          <div class="info-and-focus">
            <exercise-info />
            <exercise-focus />
          </div>
          <user-best-result />
        </div>
        <div class="main-info__right-block">
          <visual-example />
          <div class="actions">
            <p class="btn">добавить в избранное</p>
            <p class="btn">редактировать</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import ExerciseTechnique from '@/components/training-diary/ExerciseGuide/ExerciseOverview/ExerciseTechnique'
import VisualExample from '@/components/training-diary/ExerciseGuide/ExerciseOverview/VisualExample'
import ExerciseInfo from '@/components/training-diary/ExerciseGuide/ExerciseOverview/ExerciseInfo'
import ExerciseFocus from '@/components/training-diary/ExerciseGuide/ExerciseOverview/ExerciseFocus'
import UserBestResult from '@/components/training-diary/ExerciseGuide/ExerciseOverview/UserBestResult'

export default {
  components: {
    AppBlockTitle,
    ExerciseTechnique,
    VisualExample,
    ExerciseInfo,
    ExerciseFocus,
    UserBestResult,
  },
  computed: {
    exerciseInfo () {
      return this.$store.getters['exercises/getExerciseInfo']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercise-overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .exercise-overview__content {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
    .exercise__title {
      text-align: center;
      font-weight: 500;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .exercise__main-info {
      flex: 1 1 auto;
      display: flex;
      .main-info__left-block {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        .info-and-focus {
          display: flex;
          margin-top: 5px;
        }
      }
      .main-info__right-block {
        .actions {
          display: flex;
          .btn {
            flex: 1 1 auto;
            margin-top: 5px;
            margin-left: 5px;
            padding: 10px 20px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
          }
        }
      }
    }
  }
}

</style>