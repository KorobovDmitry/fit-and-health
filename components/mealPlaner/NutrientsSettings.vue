<template>
  <div class="nutrients-settings">
    <p class="nutrients-settings__block-title">Цель на сегодня</p>

    <meal-planer-calendar />

    <div class="nutrients-settings__nutrients">
      <div class="nutrients-settings__target">
        <div class="nutrients-target__element">
          <p class="element__text">Белки:</p>
          <p class="element__value">1.5</p>
          <p class="element__scale">гр.</p>
          <i class="ti-pencil element__action-btn"></i>
        </div>
        <div class="nutrients-target__element">
          <p class="element__text">Жиры:</p>
          <p class="element__value">0.5</p>
          <p class="element__scale">гр.</p>
          <i class="ti-pencil element__action-btn"></i>
        </div>
        <div class="nutrients-target__element">
          <p class="element__text">Углеводы:</p>
          <p class="element__value">1</p>
          <p class="element__scale">гр.</p>
          <i class="ti-pencil element__action-btn"></i>
        </div>
      </div>
      <div class="nutrients-settings__percents-chart">
        <div class="canvas"></div>
      </div>
    </div>

    <div class="nutrients-settings__weight">
      <div class="nutrients-settings__weight-target">
        <div class="weight-target__element">
          <p class="element__text">Текущий вес:</p>
          <p class="element__value">80</p>
          <p class="element__scale">кг.</p>
          <i class="ti-info-alt element__action-btn"></i>
        </div>
        <div class="weight-target__element">
          <p class="element__text">Желаемый вес:</p>
          <p class="element__value">65</p>
          <p class="element__scale">кг.</p>
          <i class="ti-pencil element__action-btn"></i>
        </div>
      </div>
      <div class="nutrients-settings__weight-chart">
        <div class="canvas">
          график
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MealPlanerCalendar from '@/components/mealPlaner/MealPlanerCalendar'
export default {
  components: {
    MealPlanerCalendar
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients-settings {
  // border: 1px solid red;
  margin-bottom: 20px;
  width: 100%;
  .nutrients-settings__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .nutrients-settings__nutrients {
    display: flex;
    // align-items: center;
    .nutrients-settings__percents-chart {
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .canvas {
        width: 77px;
        height: 77px;
        border: 6px solid rgba(0,0,0,.1);
        border-radius: 50%;
      }
    }
    .nutrients-settings__target {
      flex: 1 1 auto;
      margin-right: 5px;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .nutrients-target__element {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .element__text {
          font-weight: 500;
        }
        .element__value {
          margin-left: auto;
          font-weight: 600;
        }
        .element__scale {
          margin-top: 2px;
          margin-left: 5px;
          font-size: 12px;
          font-weight: 600;
        }
        .element__action-btn {
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .nutrients-target__element:last-child {
        margin-bottom: 0;
      }
    }
  }
  .nutrients-settings__weight {
    margin-top: 5px;
    display: flex;
    .nutrients-settings__weight-chart {
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .canvas {
        width: 77px;
        border: 1px solid rgba(0,0,0,.1);
      }
    }
    .nutrients-settings__weight-target {
      flex: 1 1 auto;
      margin-right: 5px;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .weight-target__element {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .element__text {
          font-weight: 500;
        }
        .element__value {
          margin-left: auto;
          font-weight: 600;
        }
        .element__scale {
          margin-top: 2px;
          margin-left: 5px;
          font-size: 12px;
          font-weight: 600;
        }
        .element__action-btn {
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .weight-target__element:last-child {
        margin-bottom: 0;
      }
    }
  }
  
}

</style>