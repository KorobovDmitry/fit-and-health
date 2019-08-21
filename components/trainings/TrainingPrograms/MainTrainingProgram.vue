<template>
  <div class="main-training-program">
    <p class="main-training-program__title">Основная тренировочная программа</p>

    <div class="main-training-program__wrapper">
      <div class="main-training-program__overview">
        <div class="main-training-program__training-info">
          <p class="main-training-program__program-title">Четырехдневный сплит</p>
          <p class="main-training-program__date-text">Последняя тренировка:</p>
          <p class="main-training-program__date">вторник, 14 декабря 2019</p>
          <!-- <p>Добавить в избранное</p> -->
          <!-- <p>В избранном</p> -->
          <!-- <p>Пользовательская программа</p> -->
        </div>
        <div class="main-training-program__chart">график</div>
      </div>

      <div class="main-training-program__statistics">
        <div class="main-training-program__statistics-element-wrapper">
          <div class="main-training-program__statistics-element">
            <p class="main-training-program__statistics-value">4</p>
            <p class="main-training-program__statistics-text">
              Тренировочных дней
              <br>в программе
            </p>
          </div>
          <div class="main-training-program__statistics-element">
            <p class="main-training-program__statistics-value">27</p>
            <p class="main-training-program__statistics-text">Завершенных тренировок</p>
          </div>
          <div class="main-training-program__statistics-element">
            <p class="main-training-program__statistics-value">
              1
              <span class="main-training-program__statistics-value-scale">час</span>
              08
              <span class="main-training-program__statistics-value-scale">мин.</span>
            </p>
            <p class="main-training-program__statistics-text">Продолжительность тренировок</p>
          </div>
          <div class="main-training-program__statistics-element">
            <p class="main-training-program__statistics-value">
              19 845
              <span class="main-training-program__statistics-value-scale">кг.</span>
            </p>
            <p class="main-training-program__statistics-text">Средний тоннаж тренировок</p>
          </div>
        </div>
        <app-button
          class="main-training-program__link-btn"
          size16px
          uppercase
          fillArea
        >Начать тренировку</app-button>
        <router-link tag="div" to="trainings/4-day-split">
          <app-button
            class="main-training-program__link-btn"
            size16px
            uppercase
            fillArea
            mt10
          >Редактировать</app-button>
        </router-link>
      </div>
    </div>

    <app-button
      size16px
      uppercase
      mt10
    >Удалить тренировочную программу</app-button>
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

.main-training-program {
  display: flex;
  flex-direction: column;
  width: 100%;
  .main-training-program__title {
    margin: 0 0 20px 20px;
    color: $green;
    font-size: 24px;
    font-weight: 600;
  }
  .main-training-program__wrapper {
    display: flex;
    .main-training-program__overview {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      width: 100%;
      background: $green;
      color: $white;
      border-radius: 6px;
      .main-training-program__program-title {
        margin: 20px 20px 5px 20px;
        font-size: 24px;
        font-weight: 600;
      }
      .main-training-program__date-text {
        margin: 0 20px;
        text-transform: uppercase;
        font-size: 12px;
      }
      .main-training-program__date {
        margin: 0 20px;
        font-size: 12px;
      }
      // .main-training-program__chart {
      //   border: 1px solid red;
      // }
    }
    .main-training-program__statistics {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .main-training-program__statistics-element-wrapper {
        // border: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        // margin-bottom: 40px;
        max-width: 500px;
        min-width: 500px;
        .main-training-program__statistics-element {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          align-items: center;
          // margin: 0 0 10px 10px;
          // margin-right: 10px;
          margin-bottom: 10px;
          padding: 20px;
          // width: 50%;
          width: calc(50% - 5px);
          background: $white;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          .main-training-program__statistics-value {
            color: $green;
            font-size: 24px;
            font-weight: 500;
            .main-training-program__statistics-value-scale {
              font-size: 16px;
              // font-weight: 500;
            }
          }
          .main-training-program__statistics-text {
            margin-top: 10px;
            text-align: center;
            text-transform: uppercase;
            // color: $green;
            font-size: 14px;
            // font-weight: 500;
          }
        }
        .main-training-program__statistics-element:nth-child(2) {
          margin-left: 10px;
        }
        .main-training-program__statistics-element:nth-child(4) {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
