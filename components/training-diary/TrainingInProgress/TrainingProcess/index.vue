<template>
  <div class="training-process">
    <app-block-title>Процесс тренировки</app-block-title>

    <div class="training-process__content">
      <div class="training-control">
        <div class="date">
          <p class="training-date__text">Дата тренировки:</p>
          <p class="training-date__value">четверг, 18 декабря 2019</p>
        </div>

        <div class="top-block__action-btns">
          <app-button size14px uppercase>
            <i class="ti-control-stop"></i>
          </app-button>

          <app-button class="ml-5" size14px uppercase>
            <i class="ti-control-pause"></i>
          </app-button>

          <app-button class="ml-5" size14px uppercase>
            <i class="ti-control-play"></i>
          </app-button>
        </div>
      </div>


      <exercises />


      <div class="main-stats">
        <div class="main-stats__overview">
          <div class="overview__element">
            <p class="element__title">Продолжительность тренировки</p>
            <p class="element__value">00 : 00 : 00</p>
          </div>

          <div class="overview__element">
            <p class="element__title">Общий тоннаж тренировки</p>
            <p class="element__value">0 кг.</p>
          </div>

          <div class="overview__element">
            <p class="element__title">Среднее время отдыха</p>
            <p class="element__value">00 : 00</p>
          </div>

          <div class="overview__element">
            <p class="element__title">Среднее время выполнения упражнения</p>
            <p class="element__value">00 : 00</p>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import Exercises from '@/components/training-diary/TrainingInProgress/TrainingProcess/Exercises'

export default {
  components: {
    AppBlockTitle,
    Exercises
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-process {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  .training-process__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
  }
}

.training-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .date {
    .date__text {
      font-weight: 500;
    }
    .date__value {
      margin-top: 5px;
      font-size: 14px;
    }
  }
  .timer {
    font-size: 18px;
    font-weight: 500;
  }
}

.main-stats {
      margin-top: 5px;
      padding: 10px 0;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .main-stats__overview {
        display: flex;
        flex-wrap: wrap;
        .overview__element {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          padding: 10px;
          border-right: 1px solid $blockBorder;
          .element__title {
            margin-bottom: 5px;
            text-transform: uppercase;
            text-align: center;
            font-size: 12px;
            font-weight: 500;
          }
          .element__value {
            margin-top: auto;
            text-align: center;
            font-size: 18px;
            font-weight: 500;
          }
        }
        .overview__element:last-child {
          border-right: none;
        }
      }
    }

</style>
