<template>
  <div class="training-program-editor">
    <app-page-title>Редактор тренировочной программы</app-page-title>
    <div class="training-program-editor__content">
      <editor />
      <additional-info />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import Editor from '@/components/training-diary/TrainingProgramEditor/Editor/index'
import AdditionalInfo from '@/components/training-diary/TrainingProgramEditor/AdditionalInfo/index'

export default {
  // middleware: ['userAuth'],
  components: {
    AppPageTitle,
    Editor,
    AdditionalInfo
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-program-editor {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .training-program-editor__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
