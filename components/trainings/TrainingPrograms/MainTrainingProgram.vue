<template>
  <div class="main-training-program">
    <app-block-title>Основная тренировочная программа</app-block-title>

    <div class="main-training-program__overview">
      <div class="overview__chart">
        <div class="chart__programm">
          <p class="programm__title">Название Тренировочной программы</p>
          <i class="ti-more"></i>
        </div>
        <p>chart</p>
      </div>
      <div class="overview__training-info">
        <div class="training-info__statistics">
          <div class="statistics__elements">
            <div class="element">
              <p class="element__value">14 февраля 2020</p>
              <p class="element__text">Последняя тренировка</p>
            </div>
            <div class="element">
              <p class="element__value">4</p>
              <p class="element__text">Тренировочных дней<br>в программе</p>
            </div>
            <div class="element">
              <p class="element__value">27</p>
              <p class="element__text">Завершенных тренировок</p>
            </div>
            <div class="element">
              <p class="element__value">1<span class="value__scale">час</span>08<span class="value__scale">мин.</span></p>
              <p class="element__text">Продолжительность тренировок</p>
            </div>
            <div class="element">
              <p class="element__value">19 845<span class="value__scale">кг.</span></p>
              <p class="element__text">Средний тоннаж тренировок</p>
            </div>
          </div>
        </div>
        <div class="training-info__actions-btn">
          <app-button
            class="link-btn"
            size16px
            uppercase
            fillArea
          >Начать тренировку</app-button>
          <router-link tag="div" to="trainings/4-day-split">
            <app-button
              class="link-btn"
              size16px
              uppercase
              fillArea
              mt10
            >Редактировать</app-button>
          </router-link>
        </div>
      </div>
    </div>

    <app-button size16px uppercase mt10 >Удалить тренировочную программу</app-button>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton.vue'
export default {
  components: {
    AppBlockTitle,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.main-training-program {
  // border: 1px solid red;
  .main-training-program__overview {
    // border: 1px solid red;
    display: flex;
    .overview__chart {
      // border: 1px solid red;
      flex: 1 1 auto;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .chart__programm {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px 10px 10px;
        border-bottom: 1px dashed $blockBorder;
        .programm__title {
          // font-size: 18px;
          font-weight: 500;
        }
      }
    }
    .overview__training-info {
      // border: 1px solid red;
      margin-left: 5px;
      max-width: 500px;
      .training-info__statistics {
        // border: 1px solid red;
        .statistics__elements {
          display: flex;
          flex-wrap: wrap;
          .element {
            margin-bottom: 5px;
            width: calc(50% - 2.5px);
            padding: 20px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
            .element__value {
              text-align: center;
              color: $green;
              font-size: 20px;
              font-weight: 500;
              .value__scale {
                margin: 0 5px;
                font-size: 14px;
              }
            }
            .element__text {
              margin-top: 10px;
              text-transform: uppercase;
              text-align: center;
              font-size: 14px;
            }
          }
          .element:first-child {
            width: 100%;
          }
          .element:nth-child(2) {
            margin-right: 5px;
          }
          .element:nth-child(4) {
            margin-right: 5px;
          }
        }
      }
      .training-info__actions-btn {
        // border: 1px solid red;
        margin-top: 5px;
      }
    }
  }
}

</style>
