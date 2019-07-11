<template>
  <div class="date-selection">

    <div class="selected-day">
      <div class="selected-day__slider">
        <div class="selected-day__arrow-btn">
          <i class="selected-day__arrow-icon ti-angle-left"></i>
        </div>
        <div class="selected-day__date-block">
          <p class="selected-day__date-text">Четверг</p>
          <p class="selected-day__date-value">17 декабря 2019</p>
        </div>
        <div class="selected-day__arrow-btn">
          <i class="selected-day__arrow-icon ti-angle-right"></i>
        </div>
      </div>

      <div class="selected-day__target">
        <div class="selected-day__target-wrapper">
          <p class="selected-day__target-title">
            Цель
            <br>на сегодня
          </p>
        </div>
        <div class="selected-day__target-wrapper">
          <p class="selected-day__target-text">Белки</p>
          <p class="selected-day__target-value">{{ dayTargetProtein }}</p>
        </div>
        <div class="selected-day__target-wrapper">
          <p class="selected-day__target-text">Жиры</p>
          <p class="selected-day__target-value">{{ dayTargetFats }}</p>
        </div>
        <div class="selected-day__target-wrapper">
          <p class="selected-day__target-text">Углеводы</p>
          <p class="selected-day__target-value">{{ dayTargetCarb }}</p>
        </div>
        <div class="selected-day__target-wrapper">
          <p class="selected-day__target-text">Ккал</p>
          <p class="selected-day__target-value">{{ dayTargetKkal }}</p>
        </div>
      </div>
    </div>

    <div class="selected-week">
      <div class="selected-week__arrow">
        <i class="selected-week__arrow-icon ti-angle-double-left"></i>
      </div>
      <div class="selected-week__day-wrapper">
        <p class="selected-week__day-number">14</p>
        <p class="selected-week__day-title">понедельник</p>
      </div>
      <div class="selected-week__day-wrapper">
        <p class="selected-week__day-number">15</p>
        <p class="selected-week__day-title">вторник</p>
      </div>
      <div class="selected-week__day-wrapper">
        <p class="selected-week__day-number">16</p>
        <p class="selected-week__day-title">среда</p>
      </div>
      <div class="selected-week__day-wrapper selected-week__day-wrapper--active">
        <p class="selected-week__day-number">17</p>
        <p class="selected-week__day-title">четверг</p>
      </div>
      <div class="selected-week__day-wrapper">
        <p class="selected-week__day-number">18</p>
        <p class="selected-week__day-title">пятница</p>
      </div>
      <div class="selected-week__day-wrapper">
        <p class="selected-week__day-number">19</p>
        <p class="selected-week__day-title">суббота</p>
      </div>
      <div class="selected-week__day-wrapper">
        <p class="selected-week__day-number">20</p>
        <p class="selected-week__day-title">воскресение</p>
      </div>
      <div class="selected-week__arrow">
        <i class="selected-week__arrow-icon ti-angle-double-right"></i>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    dayTargetProtein () {
      return this.$store.getters['mealPlaner/getDayTargetProtein']
    },
    dayTargetFats () {
      return this.$store.getters['mealPlaner/getDayTargetFats']
    },
    dayTargetCarb () {
      return this.$store.getters['mealPlaner/getDayTargetCarb']
    },
    dayTargetKkal () {
      return this.$store.getters['mealPlaner/getDayTargetKkal']
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.date-selection {
  // border: 1px solid red;
  margin-top: 10px;
  .selected-day {
    display: flex;
    .selected-day__slider {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 10px 10px 0;
      min-width: 300px;
      width: 300px;
      background-color: $green;
      color: $white;
      border-radius: 6px;
      .selected-day__arrow-btn {
        // border: 1px solid blue;
        padding: 33px 10px 30px 10px;
        cursor: pointer;
        transition: $tr-02;
        .selected-day__arrow-icon {
          // border: 1px solid red;
          font-family: $fontThemify;
          font-size: 20px;
        }
      }
      .selected-day__arrow-btn:hover {
        background: rgba($white, 0.2);
        transition: $tr-02;
      }
      .selected-day__date-block {
        // border: 1px solid blue;
        user-select: none;
        .selected-day__date-text {
          text-transform: uppercase;
        }
        .selected-day__date-value {
          margin-top: 4px;
        }
      }
    }

    .selected-day__target {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 0 80px 0 80px;
      width: 100%;
      background: $white;
      border: 1px solid rgba(0,0,0,.2);
      border-radius: 6px;
      .selected-day__target-wrapper {
        // border: 1px solid red;
        text-align: center;
        .selected-day__target-title {
          // border: 1px solid red;
          text-align: left;
          font-size: 18px;
          font-weight: 600;
        }
        .selected-day__target-text {
          font-size: 18px;
        }
        .selected-day__target-value {
          margin-top: 8px;
          color: $green;
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
  .selected-week {
    // border: 1px solid red;
    display: flex;
    padding: 10px 0;
    background: $white;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    .selected-week__arrow {
      padding: 0 12px;
      align-self: center;
      .selected-week__arrow-icon {
        color: $gray-dark;
        font-size: 20px;
      }
    }
    .selected-week__day-wrapper {
      // border: 1px solid red;
      padding: 2px 0;
      width: 100%;
      text-align: center;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      .selected-week__day-number {
        padding: 4px 0;
        font-weight: 600;
      }
      .selected-week__day-title {
        padding: 4px 0;
      }
    }
    .selected-week__day-wrapper--active {
      color: $green;
      .selected-week__day-number {
        font-weight: 700;
      }
      .selected-week__day-title {
        font-weight: 600;
      }
    }
  }
}
</style>
