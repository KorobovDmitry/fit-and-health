<template>
  <div class="overview-trainings">
    <div class="info__wrapper">
      <div class="info__element">
        <p class="info__element-text">Тренировочных программ</p>
        <p class="info__element-value">12</p>
      </div>
      <div class="info__element">
        <p class="info__element-text">Избранное</p>
        <p class="info__element-value">0</p>
      </div>
      <div class="info__element">
        <p class="info__element-text">Мои программы</p>
        <p class="info__element-value">2</p>
      </div>
    </div>
    <div class="add-product-btn__wrapper">
      <app-button size16px uppercase right>Добавить тренировочную программу</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
export default {
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.overview-trainings {
  // border: 1px solid red;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  .info__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .info__element {
      // border: 1px solid red;
      padding: 0px 40px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      .info__element-text {
        font-size: 18px;
      }
      .info__element-value {
        color: $green;
        font-size: 32px;
        font-weight: 600;
      }
    }
    .info__element:first-child {
      padding-left: 0px;
    }
    .info__element:nth-child(3) {
      border-right: none;
    }
  }
  .add-product-btn__wrapper {
    // border: 1px solid red;
    display: flex;
    margin-left: auto;
  }
}

</style>
