<template>
  <div class="training-days">
    <app-block-title>Тренировочные дни</app-block-title>

    <div class="training-days__content">
      <ul class="days">
        <li class="day day--active">
          <p class="day__title">День 1. Ноги и плечи</p>
          <div class="day__last-training">
            <p class="last-training__text">Последняя тренировка:</p>
            <p class="last-training__value">24.06.2020</p>
          </div>
          <div class="chart">
            график прогресса
          </div>
          <div class="overview">
            <div class="overview__item">
              <i class="ti-rocket item__icon"></i>
              <p class="item__value">6</p>
              <p class="item__text">Название</p>
            </div>
            <div class="overview__item">
              <i class="ti-pencil item__icon"></i>
              <p class="item__value">6</p>
              <p class="item__text">Название</p>
            </div>
          </div>
        </li>
        <li class="day">
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

.training-days {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .training-days__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
    .days {
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
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
        .chart {
          border: 1px solid $blockBorder;
          margin-top: 10px;
          height: 150px;
        }
        .overview {
          display: flex;
          margin-top: 10px;
          .overview__item {
            flex: 1 1 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .item__icon {
              margin-right: 10px;
            }
            .item__value {
              font-weight: 500;
            }
            .item__text {
              text-align: center;
              width: 100%;
            }
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
}
</style>
