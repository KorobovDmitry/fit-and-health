<template>
  <div class="additional-info">
    <app-block-title>Дополнительная информация</app-block-title>
    <div class="additional-info__content">
      <training-focus />

      <div class="action-btns">
        <app-button class="mt-10" uppercase >
          <i class="ti-trash"></i>
        </app-button>

        <app-button class="ml-5 mt-10" uppercase >
          <i class="ti-save"></i>
        </app-button>

        <app-button class="ml-5 mt-10" uppercase fillArea >Сделать основной</app-button>
      </div>

      <app-button class="mt-10" uppercase fillArea >Начать тренировку</app-button>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton.vue'
import TrainingFocus from '@/components/training-diary/TrainingProgramEditor/AdditionalInfo/TrainingFocus'

export default {
  components: {
    AppBlockTitle,
    AppButton,
    TrainingFocus
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.additional-info {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .additional-info__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
  }
  .action-btns {
    display: flex;
    // flex-direction: column;
  }
}

</style>