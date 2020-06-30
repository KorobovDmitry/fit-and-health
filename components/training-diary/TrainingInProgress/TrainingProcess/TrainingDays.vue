<template>
  <div class="training-days">
    <div class="training-days__title-block">
      <p class="title-block__text">Тренировочные дни</p>
      <i class="ti-angle-double-down"></i>
    </div>

    <div class="days">
      <div class="day day--active">
        <p class="day__title">День 1. Ноги и плечи</p>
        <div class="day__last-training">
          <p class="last-training__text">ПОСЛЕДНЯЯ ТРЕНИРОВКА:</p>
          <p class="last-training__value">суббота, 10 декабря 2019</p>
        </div>
        <div class="chart">
          <p>график прогресса или превью изображение</p>
        </div>
        <div class="day__overview">
          <div class="overview__element">
            <i class="ti-rocket element__icon"></i>
            <p class="element__count">5</p>
            <p class="element__text">упражнений</p>
          </div>
          <div class="overview__element">
            <i class="ti-pencil-alt element__icon"></i>
            <p class="element__count">49</p>
            <p class="element__text">завершено тренировок</p>
          </div>
        </div>
      </div>
      <div class="day">
        <p class="day__title">День 1. Ноги и плечи</p>
        <div class="day__last-training">
          <p class="last-training__text">ПОСЛЕДНЯЯ ТРЕНИРОВКА:</p>
          <p class="last-training__value">суббота, 10 декабря 2019</p>
        </div>
        <div class="chart">
          <p>график прогресса или превью изображение</p>
        </div>
        <div class="day__overview">
          <div class="overview__element">
            <i class="ti-rocket element__icon"></i>
            <p class="element__count">5</p>
            <p class="element__text">упражнений</p>
          </div>
          <div class="overview__element">
            <i class="ti-pencil-alt element__icon"></i>
            <p class="element__count">49</p>
            <p class="element__text">завершено тренировок</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-days {
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .training-days__title-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 10px 10px;
    border-bottom: 1px dashed $blockBorder;
    cursor: pointer;
    .title-block__text {
      font-weight: 500;
    }
  }
  .days {
    display: flex;
    margin-top: 10px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: $insetBoxShadow;
    border-radius: 6px;
    .day {
      margin-right: 10px;
      padding: 10px;
      max-width: 300px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      cursor: pointer;
      .day__title {
        padding: 10px 10px 5px 10px;
        font-weight: 500;
      }
      .day__last-training {
        padding: 0 10px;
        .last-training__text {
          text-transform: uppercase;
          font-size: 12px;
        }
        .last-training__value {
          font-size: 12px;
        }
      }
      .chart {
        margin-top: 20px;
        height: 150px;
        background: rgba(0, 0, 0, 0.02);
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 6px;
      }
      .day__overview {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px dashed rgba(0, 0, 0, 0.2);
        .overview__element {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          border-right: 1px solid rgba(0, 0, 0, 0.2);
          .element__icon {
          }
          .element__count {
            margin-left: 10px;
            font-size: 14px;
            font-weight: 500;
          }
          .element__text {
            margin-top: 5px;
            width: 100%;
            text-align: center;
            font-size: 12px;
            white-space: nowrap;
          }
        }
        .overview__element:last-child {
          border-right: none;
        }
      }
    }
    .day--active {
      border: 2px solid $green;
    }
  }
}

</style>
