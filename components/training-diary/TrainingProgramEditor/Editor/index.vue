<template>
  <div class="editor">
    <app-block-title>Информация о тренировочной программе</app-block-title>
    <div class="overview-and-training-days">
      <training-overview />
      <training-days />
      <training-day-settings />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import TrainingOverview from '@/components/training-diary/TrainingProgramEditor/Editor/TrainingOverview/index'
import TrainingDays from '@/components/training-diary/TrainingProgramEditor/Editor/TrainingDays'
import TrainingDaySettings from '@/components/training-diary/TrainingProgramEditor/Editor/TrainingDaySettings/index'

export default {
  components: {
    AppBlockTitle,
    TrainingOverview,
    TrainingDays,
    TrainingDaySettings
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.editor {
  // border: 1px solid red;
  flex: 1 1 auto;
  .overview-and-training-days {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
  }
}

</style>