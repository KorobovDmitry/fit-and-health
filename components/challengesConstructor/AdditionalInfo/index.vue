<template>
  <div class="additional-info">
    <app-block-title>Дополнительная информация</app-block-title>
    <div class="additional-info__content">
      <p>График смещения акцента вызова (сила, выносливость, кардио, растяжка)</p>
      <app-button>Сохранить</app-button>
      <app-button>Удалить</app-button>
      <app-button>Поиск</app-button>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.additional-info {
  // border: 1px solid red;
  margin-bottom: 20px;
  .additional-info__content {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $boxShadow;
  }
}
</style>
