<template>
  <div class="training-info">
    <app-block-title>Тренировочные дни</app-block-title>

    <div class="training-info__content">
      <div class="training-days">
        <div class="training-days__title-block">
          <div class="title-block__text">Тренировочные дни</div>
          <i class="ti-angle-double-down"></i>
        </div>
        <ul class="days">
          <li class="day">
            <p class="day__title">День 1. Ноги и плечи</p>
            <div class="day__last-training">
              <p class="last-training__text">Последняя тренировка:</p>
              <p class="last-training__value">24.06.2020</p>
            </div>
          </li>
          <li class="day day--active">
            <p class="day__title">День 2. Спина и трицепс</p>
            <div class="day__last-training">
              <p class="last-training__text">Последняя тренировка:</p>
              <p class="last-training__value">21.06.2020</p>
            </div>
          </li>
          <li class="day">
            <p class="day__title">День 3. Ноги и плечи</p>
            <div class="day__last-training">
              <p class="last-training__text">Последняя тренировка:</p>
              <p class="last-training__value">20.06.2020</p>
            </div>
          </li>
          <li class="day">
            <p class="day__title">День 4. Грудь и бицепс</p>
            <div class="day__last-training">
              <p class="last-training__text">Последняя тренировка:</p>
              <p class="last-training__value">18.06.2020</p>
            </div>
          </li>
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
          .day__title {
            font-weight: 500;
          }
          .day__last-training {
            margin-top: 5px;
            .last-training__text {
              text-transform: uppercase;
              font-size: 12px;
            }
            .last-training__value {
              font-size: 14px;
            }
          }
        }
        .day:hover {
          color: $green;
        }
        .day:last-child {
          margin-bottom: 0;
        }
        .day--active {
          border: 2px solid $green;
          color: $green;
          font-weight: 500;
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
