<template>
  <div class="training-info">
    <app-block-title>Общая информация</app-block-title>

    <div class="training-info__content">
      <div class="training-days">
        <div class="training-days__title-block">
          <div class="title-block__text">Тренировочные дни</div>
          <i class="ti-angle-double-down"></i>
        </div>
        <ul class="days">
          <li class="day">День 1. Ноги и плечи</li>
          <li class="day day--active">День 2. Спина и трицепс</li>
          <li class="day">День 3. Ноги и плечи</li>
          <li class="day">День 4. Грудь и бицепс</li>
        </ul>
      </div>

      <div class="tabata-timer">
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

      <div class="date">
        <p class="date__text">Дата тренировки:</p>
        <p class="date__value">четверг, 18 декабря 2019</p>
      </div>

      <div class="main-stats">
        <div class="main-stats__overview">
          <div class="overview__element">
            <p class="element__title">Продолжительность тренировки</p>
            <p class="element__value">0 мин.</p>
          </div>

          <div class="overview__element">
            <p class="element__title">Общий тоннаж тренировки</p>
            <p class="element__value">0 кг.</p>
          </div>

          <div class="overview__element">
            <p class="element__title">Среднее время отдыха</p>
            <p class="element__value">0 : 0</p>
          </div>

          <div class="overview__element">
            <p class="element__title">Среднее время выполнения упражнения</p>
            <p class="element__value">0 : 0</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle";

export default {
  components: {
    AppBlockTitle
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-info {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .training-info__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
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
        .title-block__text {
          font-weight: 500;
        }
      }
      .days {
        margin-top: 10px;
        .day {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          transition: $tr-02;
          cursor: pointer;
        }
        .day:hover {
          color: $green;
        }
        .day--active {
          border: 2px solid $green;
          color: $green;
          font-weight: 500;
        }
      }
    }
    
    .date {
      margin-top: 5px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .date__text {
        font-weight: 500;
      }
      .date__value {
        margin-top: 5px;
        font-size: 14px;
      }
    }
    .main-stats {
      margin-top: 5px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      
      .main-stats__overview {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        .overview__element {
          display: flex;
          flex-direction: column;
          padding: 10px;
          width: 50%;
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
        .overview__element:nth-child(1) {
          border-right: 1px solid $blockBorder;
          border-bottom: 1px solid $blockBorder;
        }
        .overview__element:nth-child(2) {
          border-bottom: 1px solid $blockBorder;
        }
        .overview__element:nth-child(3) {
          border-right: 1px solid $blockBorder;
        }
      }
    }
    .tabata-timer {
      margin-top: 5px;
      padding: 20px 10px;
      background: $white;
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
          transition: $tr-02;
        }
        .element__timer-btn:hover {
          color: $green;
        }
      }
    }
  }
}
</style>
