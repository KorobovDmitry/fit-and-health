<template>
  <div class="main-training-program">
    <app-block-title>Основная тренировочная программа</app-block-title>

    <div class="main-training-program__overview">
        <image-and-social />

        <description />
    </div>

    <action-btns />

  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import ImageAndSocial from "@/components/training-diary/MainTrainingProgram/TrainingOverview/ImageAndSocial"
import Description from '@/components/training-diary/MainTrainingProgram/TrainingOverview/Description/index'
import ActionBtns from "@/components/training-diary/MainTrainingProgram/TrainingOverview/ActionBtns"

export default {
  components: {
    AppBlockTitle,
    ImageAndSocial,
    Description,
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
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
  }
}
</style>
