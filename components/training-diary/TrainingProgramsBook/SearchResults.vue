<template>
  <div class="search-results">
    <app-block-title>Тренировочные программы</app-block-title>
    <app-search-block />

    <div class="filter-by">
      <filter-radio-text-group
        :valueList="['Все', 'Фото', 'Видео']"
        :defaultValue="filters.media"
        uppercase
        size14px
        @inputGroupValueChanged="filters.media = $event"
      />
      <p class="filter-by__divider">|</p>
      <filter-radio-text-group
        :valueList="['Все', 'Домашние', 'Спортзал']"
        :defaultValue="filters.foodOrDrink"
        uppercase
        size14px
        @inputGroupValueChanged="filters.foodOrDrink = $event"
      />
      <p class="filter-by__divider">|</p>
      <filter-radio-text-group
        :valueList="['Все', 'Мои программы']"
        :defaultValue="filters.type"
        uppercase
        size14px
        @inputGroupValueChanged="filters.type = $event"
      />
    </div>

    <div class="found-programs">
      <found-program v-for="(item, index) in 5" :key="index" />
    </div>

    <!-- <div class="training-programs-list__wrapper">
      <div class="training-programs-list__overview">
        <div class="training-programs-list__training-info">
          <p class="training-programs-list__program-title">Crossfit</p>
          <p class="training-programs-list__date-text">Последняя тренировка:</p>
          <p class="training-programs-list__date">вторник, 14 декабря 2019</p>
        </div>
        <div class="training-programs-list__statistics">
          <div class="training-programs-list__statistics-element">
            <p class="training-programs-list__statistics-value">3</p>
            <p class="training-programs-list__statistics-text">Тренировочных дней в программе</p>
          </div>
          <div class="training-programs-list__statistics-element">
            <p class="training-programs-list__statistics-value">7</p>
            <p class="training-programs-list__statistics-text">Завершенных тренировок</p>
          </div>

          <div class="training-programs-list__statistics-element">
            <p class="training-programs-list__statistics-value">
              0<span class="training-programs-list__statistics-value-scale"> час</span>
              35<span class="training-programs-list__statistics-value-scale"> мин.</span>
            </p>
            <p class="training-programs-list__statistics-text">Продолжительность тренировок</p>
          </div>

          <div class="training-programs-list__statistics-element">
            <p class="training-programs-list__statistics-value">
              1 541<span class="training-programs-list__statistics-value-scale"> кг.</span>
            </p>
            <p class="training-programs-list__statistics-text">Средний тоннаж тренировок</p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="training-programs-list__btn-wrapper">
      <app-button class="training-programs-list__btn" size16px uppercase fillArea>Удалить тренировочную программу</app-button>
      <app-button class="training-programs-list__btn" size16px uppercase fillArea>Сделать основной</app-button>
      <app-button class="training-programs-list__btn" size16px uppercase fillArea>Редактировать</app-button>
      <app-button class="training-programs-list__btn" size16px uppercase fillArea>Начать тренировку</app-button>
    </div> -->

    <app-pagination />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton.vue'
import AppSearchBlock from '@/components/basic/AppSearchBlock.vue'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'
import FoundProgram from '@/components/training-diary/TrainingProgramsBook/FoundProgram'
import AppPagination from '@/components/basic/AppPagination.vue'

export default {
  components: {
    AppBlockTitle,
    AppButton,
    AppSearchBlock,
    FilterRadioTextGroup,
    FoundProgram,
    AppPagination
  },
  data () {
    return {
      filters: {
        media: 'Все',
        foodOrDrink: 'Все',
        type: 'Все'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.search-results {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .filter-by {
    // border: 1px solid red;
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    .filter-by__divider {
      // border: 1px solid red;
      margin: 0 20px;
      color: rgba(0,0,0,.2);
      user-select: none;
    }
  }
  .found-programs {
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
  }



  // Требуется рефакторинг классов и структуры
  .training-programs-list__wrapper {
    display: flex;
    // flex-direction: column;
    margin-top: 20px;
    .training-programs-list__overview {
      display: flex;
      align-items: center;
      // flex-direction: column;
      padding: 20px;
      width: 100%;
      background: $green;
      color: $white;
      border-radius: 6px;
      .training-programs-list__training-info {
        display: flex;
        flex-direction: column;
        margin-right: auto;
        .training-programs-list__program-title {
          font-size: 24px;
          font-weight: 600;
        }
        .training-programs-list__date-text {
          margin-top: 5px;
          text-transform: uppercase;
          font-size: 12px;
        }
        .training-programs-list__date {
          font-size: 12px;
        }
      }
      .training-programs-list__statistics {
        // border: 1px solid red;
        display: flex;
        overflow: hidden;
        .training-programs-list__statistics-element {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0px 10px 0 0;
          padding: 10px;
          width: 180px;
          border: 1px solid $white;
          border-radius: 6px;
          .training-programs-list__statistics-value {
            font-size: 20px;
            font-weight: 500;
            .training-programs-list__statistics-value-scale {
              font-size: 16px;
            }
          }
          .training-programs-list__statistics-text {
            margin-top: 10px;
            text-align: center;
            text-transform: uppercase;
            font-size: 10px;
            font-weight: 500;
          }
        }
        .training-programs-list__statistics-element:first-child {
          margin-left: 10px;
        }
        .training-programs-list__statistics-element:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .training-programs-list__wrapper:nth-child(3) {
    padding-top: 0;
    border: none;
  }
  .training-programs-list__btn-wrapper {
    display: flex;
    margin-top: 10px;
    .training-programs-list__btn {
      margin-right: 10px;
      width: 100%;
      white-space: nowrap;
    }
    .training-programs-list__btn:last-child {
      margin-right: 0;
    }
  }
}

</style>