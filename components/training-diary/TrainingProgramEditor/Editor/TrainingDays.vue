<template>
  <div class="tarining-days">
    <div class="tarining-days__block-title">Тренировочные дни</div>

    <div class="days">
      <div class="day" v-for="(item, index) in 3" :key="index">
        <p class="day__title">День {{ index + 1}}. Ноги и плечи</p>
        <div class="day__last-training">
          <p class="last-training__text">ПОСЛЕДНЯЯ ТРЕНИРОВКА:</p>
          <p class="last-training__value">суббота, 10 декабря 2019</p>
        </div>

        <!-- <div class="chart">
          <p>график прогресса или превью изображение</p>
        </div> -->

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
// import TrainingDayInfo from '@/components/training-diary/TrainingProgramEditor/Editor/TrainingDayInfo'

export default {
  components: {
    // TrainingDayInfo
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.tarining-days {
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .tarining-days__block-title {
    // margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }
  .days {
    display: flex;
    margin-top: 10px;
    // padding: 10px 0;
    // border-bottom: 1px dashed $blockBorder;
    .day {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      padding: 10px;
      width: 100%;
      max-width: 300px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      transition: $tr-02;
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
      // .chart {
      //   margin-top: 20px;
      //   height: 150px;
      //   background: rgba(0,0,0,0.02);
      //   border: 1px solid $blockBorder;
      //   border-radius: 6px;
      // }
      .day__overview {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px dashed $blockBorder;
        .overview__element {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          border-right: 1px solid $blockBorder;
          .element__icon {}
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
    .day:hover {
      box-shadow: $btnHoverShadow;
    }
  }
}

</style>