<template>
  <div class="current-training-info">
    <p class="current-training-info__block-title">Доп. информация</p>

    <div class="current-training-info__element">
      <p class="element__title">Текущая дата</p>
      <p class="element__text">четверг, 18 декабря 2019</p>
    </div>

    <!-- <div class="current-training-info__">
      <p class="">Тренировочный день:</p>
      <p>День 1. Спина и трицепс</p>
      <p>День 2. Ноги и плечи</p>
      <p>День 3. Грудь и бицепс</p>
      <p>День 4. Ноги и плечи</p>
    </div> -->

    <!-- <app-button class="training-programs-list__btn" size16px uppercase fillArea mb20>Начать тренировку</app-button> -->

    <!-- <div class="current-training-info__element">
      <p class="element__title">Общее время тренировки</p>
      <p class="element__data">0 : 0 : 0</p>
    </div> -->

    <!-- <div class="current-training-info__element">
      <p class="element__title">Время выполнения упражнения</p>
      <p class="element__sub-title">(сумма всех подходов)</p>
      <p class="element__data">0 : 0 : 0</p>
    </div> -->

    <div class="current-training-info__element-timer">
      <p class="element__title">Табата таймер</p>
      <p class="element__data">00 : 00 : 00</p>
      <div class="element__timer-btn-wrapper">
        <i class="element__timer-btn ti-control-backward"></i>
        <i class="element__timer-btn ti-control-play"></i>
        <!-- <i class="element__timer-btn ti-control-record"></i> -->
        <!-- <i class="element__timer-btn ti-control-pause"></i> -->
        <i class="element__timer-btn ti-control-stop"></i>
        <i class="element__timer-btn ti-control-forward"></i>
        <!-- <i class="element__timer-btn ti-volume"></i> -->
      </div>
    </div>

    <!-- <div class="current-training-info__element">
      <p class="element__title">Среднее время выполнения упражнения</p>
      <p class="element__sub-title">(суммарное время всех подходов)</p>
      <p class="element__data">0 : 0 : 0</p>
    </div> -->

    <!-- <div class="current-training-info__element">
      <p class="element__title">Среднее время отдыха</p>
      <p class="element__sub-title">(между подходами)</p>
      <p class="element__data">0 : 0</p>
    </div>
    <div class="current-training-info__element">
      <p class="element__title">Среднее время отдыха</p>
      <p class="element__sub-title">(между упражнениями)</p>
      <p class="element__data">0 : 0</p>
    </div> -->

    <div class="current-training-info__element">
      <p class="element__title">Общий тоннаж тренировки</p>
      <p class="element__data">0 кг.</p>
    </div>

  </div>
</template>

<script>
// import AppButton from '@/components/basic/AppButton.vue'
export default {
  // components: {
  //   AppButton
  // }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.current-training-info {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .current-training-info__block-title {
    margin: 40px 20px 20px 20px;
    color: $green;
    font-size: 24px;
    font-weight: 600;
  }
  .current-training-info__element {
    margin-bottom: 10px;
    padding: 10px 20px;
    text-align: center;
    background: $green;
    color: $white;
    border-radius: 6px;
    .element__title {
      text-transform: uppercase;
      font-size: 14px;
    }
    .element__text {
      margin-top: 5px;
      // font-size: 16px;
      font-weight: 600;
    }
    .element__data {
      margin-top: 5px;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .current-training-info__element-timer {
    margin-bottom: 10px;
    padding: 20px 20px;
    text-align: center;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .element__title {
      text-transform: uppercase;
      // font-size: 12px;
      font-weight: 600;
    }
    .element__data {
      margin: 20px 0;
      color: $green;
      font-size: 32px;
      font-weight: 600;
    }
    .element__timer-btn-wrapper {
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      .element__timer-btn {
        margin: 0 10px;
        font-size: 20px;
        cursor: pointer;
        transition: $tr-01;
      }
      .element__timer-btn:hover {
        color: $green;
      }
    }
  }
}

</style>
