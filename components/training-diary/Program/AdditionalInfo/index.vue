<template>
  <div class="additional-info">
    <app-block-title>Дополнительная информация</app-block-title>
    <div class="additional-info__content">
      <div class="author">
        Автор программы
      </div>

      <training-focus />

      <div class="action-btns">
        <app-button class="mt-10" uppercase >
          <i class="ti-pencil"></i>
        </app-button>

        <app-button class="ml-5 mt-10" uppercase fillArea >Сделать основной</app-button>
      </div>

      <app-button class="mt-10" uppercase fillArea >Начать тренировку</app-button>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'
import TrainingFocus from '@/components/training-diary/Program/AdditionalInfo/TrainingFocus'

export default {
  components: {
    AppBlockTitle,
    AppButton,
    TrainingFocus
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.additional-info {
  // border: 1px solid red;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .additional-info__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
    .author {
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .action-btns {
      display: flex;
    }
  }
}

</style>
