<template>
  <div class="training-days">
    <app-block-title>Тренировочные дни</app-block-title>
    <div class="training-days__elements">
      <div v-for="(item, index) in 4" :key="index" class="element">
        <p class="element__title">День 1. Ноги и плечи</p>
        <div class="element__last-training">
          <p class="last-training__text">Последняя тренировка:</p>
          <p class="last-training__date">суббота, 10 декабря 2019</p>
        </div>
      </div>
    </div>
    <app-button size16px uppercase fillArea>Добавить тренировочный день</app-button>
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

.training-days {
  // border: 1px solid red;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .training-days__elements {
    // border: 1px solid red;
    margin-bottom: 20px;
    .element {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .element__title {
        font-size: 18px;
        font-weight: 500;
      }
      .element__last-training {
        .last-training__text {
          margin-top: 5px;
          text-transform: uppercase;
          font-size: 12px;
        }
        .last-training__date {
          font-size: 12px;
        }
      }
    }
    .element:last-child {
      margin-bottom: 0;
    }
  }
}

</style>