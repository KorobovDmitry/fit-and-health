<template>
  <div class="overview-trainings">
    <div class="overview-top-block">
      <div class="info-block">
        <p class="info-block__text">Тренировочных дней</p>
        <p class="info-block__value">4</p>
      </div>
      <div class="info-block">
        <p class="info-block__text">Завершенных тренировок</p>
        <p class="info-block__value">26</p>
      </div>
      <div class="info-block">
        <p class="info-block__text">Среднее время тренировки</p>
        <p class="info-block__value">84 мин.</p>
      </div>
      <div class="info-block">
        <p class="info-block__text">Средний тоннаж тренировки</p>
        <p class="info-block__value">1 248</p>
      </div>
    </div>

    <div class="overview-bottom-block">
      <div class="training-info__block-wrapper">
        <div class="chart-block">
          <p>график тоннажа или продолжительности тренировок</p>
        </div>
        <div class="training-info">
          <!-- <div class="training-info__element">
            <p class="training-info__element-data">4</p>
            <p class="training-info__element-text">Кол-во тренировочных дней:</p>
          </div>
          <div class="training-info__element">
            <p class="training-info__element-data">1 час 45 мин.</p>
            <p class="training-info__element-text">Время последней тренировки:</p>
          </div>
          <div class="training-info__element">
            <p class="training-info__element-data">2 845</p>
            <p class="training-info__element-text">Тоннаж последней тренировки:</p>
          </div> -->
        </div>
      </div>
      <div class="training__action-btn-wrapper">
        <div class="last-training__date">
          <p class="last-training__date-text">Последняя тренировка:</p>
          <p class="last-training__date-data">вторник, 14 декабря 2019</p>
        </div>
        <!-- <div class="last-training__date">
          <p class="last-training__date-text">Время последней тренировки:</p>
          <p class="last-training__date-data">1 час 45 мин.</p>
        </div> -->
        <!-- <div class="last-training__date">
          <p class="last-training__date-text">Тоннаж последней тренировки:</p>
          <p class="last-training__date-data">2 845</p>
        </div> -->
        <!-- <nuxt-link tag="div" to="/trainings/training-in-progress?training-programm=4-day-split" class="training__action-btn">
          <app-button size16px uppercase fillArea @click.native="startTraining()">Начать тренировку</app-button>
        </nuxt-link> -->
        <app-button size16px uppercase fillArea mb10 @click.native="startTraining()">Начать тренировку</app-button>
        <app-button class="training__action-btn" size16px uppercase fillArea @click.native="saveChanges()">Сохранить изменения</app-button>
        <app-button class="training__action-btn" size16px uppercase fillArea @click.native="setCurrent()">Сделать основной</app-button>
      </div>
    </div>

    <app-button size16px uppercase left @click.native="removeTrainingProgram()">Удалить тренировочную программу</app-button>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
export default {
  components: {
    AppButton
  },
  methods: {
    startTraining () {
      this.$router.push('/training-diary/training-in-progress?training-programm=4-day-split')
    },
    saveChanges () {},
    setCurrent () {},
    removeTrainingProgram () {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.overview-trainings {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  .overview-top-block {
    display: flex;
    align-items: center;
    width: 100%;
    .info-block {
      // border: 1px solid red;
      padding: 0px 20px;
      width: 100%;
      text-align: center;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      .info-block__text {
        font-size: 18px;
      }
      .info-block__value {
        margin-top: 10px;
        color: $green;
        font-size: 32px;
        font-weight: 600;
      }
    }
    .info-block:first-child {
      padding-left: 0px;
    }
    .info-block:nth-child(4) {
      border-right: none;
    }
  }
  .overview-bottom-block {
    display: flex;
    margin-top: 40px;
    margin-bottom: 10px;
    .training-info__block-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      // height: 400px;
      background: $green;
      color: $white;
      border-radius: 6px;
      .chart-block {
        // border: 1px solid red;
        height: 400px;
      }
      .training-info {
        display: flex;
        margin: 20px;
        .training-info__element {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 10px;
          padding: 10px;
          width: 100%;
          text-align: center;
          border: 1px solid $white;
          border-radius: 6px;
        }
        .training-info__element:last-child {
          margin-right: 0;
        }
        .training-info__element-text {
          margin-top: 10px;
          font-size: 14px;
        }
        .training-info__element-data {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
    .training__action-btn-wrapper {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      min-width: 400px;
      .last-training__date {
        margin-bottom: 10px;
        padding: 20px;
        background: $white;
        text-align: center;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .last-training__date-text {
          font-size: 18px;
        }
        .last-training__date-data {
          margin-top: 10px;
          color: $green;
          font-weight: 600;
        }
      }
      .training__action-btn {
        margin-bottom: 10px;
      }
      .training__action-btn:last-child {
        margin-bottom: 0;
        margin-top: auto;
      }
    }
  }
}

</style>
