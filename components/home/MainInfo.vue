<template>
  <div class="main-info">
    <div class="trainings-stats">
      <div class="trainings-stats__block-title">
        <p class="trainings-stats__title">Статистика за все время</p>
        <!-- <i class="ti-reload trainings-stats__refresh-btn"></i> -->
      </div>
      <div class="trainings-stats__elements-wrapper">
        <div class="trainings-stats__element">
          <i class="ti-calendar element__icon"></i>
          <p class="element__title">Завершено<br />тренеровок</p>
          <p class="element__value">308</p>
        </div>
        <div class="trainings-stats__element">
          <i class="ti-timer element__icon"></i>
          <p class="element__title">Длительность<br />тренеровок</p>
          <p class="element__value">
            1 785
            <span class="element__value-scale">часов</span>
          </p>
        </div>
        <div class="trainings-stats__element">
          <i class="ti-map-alt element__icon"></i>
          <p class="element__title">Пройденная<br />дистанция</p>
          <p class="element__value">1 862 <span class="element__value-scale">км</span></p>
        </div>
        <div class="trainings-stats__element">
          <i class="ti-cup element__icon"></i>
          <p class="element__title">Принято<br />вызовов</p>
          <p class="element__value">463</p>
        </div>
      </div>
    </div>

    <div class="nutrition-info">
      <div class="nutrition-info__block-title">
        <p class="nutrition-info__title">Содержание БЖУ в рационе</p>
        <!-- <i class="ti-reload nutrition-info__refresh-btn"></i> -->
      </div>
      <div class="nutrition-info__bottom-block">
        <div class="nutrition-info__percent">
          <div class="percent__chart">
            <div class="percent__kkal">
              <p class="percent__kkal-value">1873</p>
              <p class="percent__kkal-scale">ккал</p>
            </div>
          </div>
          <div class="percent__nutriets">
            <div class="percent__nutriets-item">
              <p class="nutriets-item__indicator nutriets-item__indicator-protein"></p>
              <p class="nutriets-item__text">Белки:</p>
              <p class="nutriets-item__value">28%</p>
            </div>
            <div class="percent__nutriets-item">
              <p class="nutriets-item__indicator nutriets-item__indicator-fats"></p>
              <p class="nutriets-item__text">Жиры:</p>
              <p class="nutriets-item__value">32%</p>
            </div>
            <div class="percent__nutriets-item">
              <p class="nutriets-item__indicator nutriets-item__indicator-carb"></p>
              <p class="nutriets-item__text">Углеводы:</p>
              <p class="nutriets-item__value">40%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.main-info {
  display: flex;
  flex-direction: column;
  // margin-left: 40px;
  min-width: 400px;
  max-width: 400px;
  .trainings-stats {
    // border: 1px solid red;
    margin-bottom: 20px;
    .trainings-stats__block-title {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0px 20px 10px 20px;
      padding: 2px 5px;
      border-bottom: 2px solid transparent;
      .trainings-stats__title {
        font-size: 18px;
        font-weight: 500;
      }
      .trainings-stats__refresh-btn {
        font-size: 12px;
        cursor: pointer;
        transition: $tr-02;
      }
      .trainings-stats__refresh-btn:hover {
        color: $green;
      }
    }
    .trainings-stats__elements-wrapper {
      // border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
      .trainings-stats__element {
        flex: 1 1 auto;
        // border: 1px solid red;
        text-align: center;
        margin-right: 5px;
        padding: 20px 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .element__icon {
          font-size: 28px;
        }
        .element__title {
          margin-top: 10px;
          font-size: 14px;
        }
        .element__value {
          margin-top: 5px;
          color: $green;
          font-size: 18px;
          font-weight: 600;
          .element__value-scale {
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
      .trainings-stats__element:nth-child(3) {
        margin-right: 0;
      }
      .trainings-stats__element:last-child {
        margin-top: 5px;
        margin-right: 0;
        // width: 100%;
      }
    }
  }

  .nutrition-info {
    // border: 1px solid red;
    margin-bottom: 20px;
    .nutrition-info__block-title {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0px 20px 10px 20px;
      padding: 2px 5px;
      border-bottom: 2px solid transparent;
      .nutrition-info__title {
        font-size: 18px;
        font-weight: 500;
      }
      .nutrition-info__refresh-btn {
        font-size: 12px;
        cursor: pointer;
        transition: $tr-02;
      }
      .nutrition-info__refresh-btn:hover {
        color: $green;
      }
    }
    .nutrition-info__bottom-block {
      display: flex;
      .nutrition-info__percent {
        display: flex;
        width: 100%;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .percent__nutriets {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1 1 auto;
          .percent__nutriets-item {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            .nutriets-item__indicator {
              margin: 0 10px 0 20px;
              width: 20px;
              height: 6px;
              border-radius: 6px;
            }
            .nutriets-item__indicator-protein {
              background: $blue;
            }
            .nutriets-item__indicator-fats {
              background: $yellow;
            }
            .nutriets-item__indicator-carb {
              background: $red;
            }
            .nutriets-item__text {
              min-width: 100px;
              font-size: 14px;
            }
            .nutriets-item__value {
              margin-right: 20px;
              color: $green;
              font-size: 18px;
              font-weight: 600;
            }
          }
        }
        .percent__chart {
          // flex: 1 1 auto;
          // align-self: center;
          margin: 20px 0;
          padding: 0px 30px;
          border-right: 1px dashed $blockBorder;
          .percent__kkal {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 120px;
            border: 6px solid $blockBorder;
            border-radius: 50%;
            .percent__kkal-value {
              margin-top: 5px;
              color: $green;
              font-size: 24px;
              font-weight: 700;
            }
            .percent__kkal-scale {
              margin-top: -5px;
              color: $green;
              font-size: 14px;
              font-weight: 500;
            }
          }
        }
      }
      .nutrition-info__weight-chart {
        margin-left: 10px;
        width: 100%;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }
  }
}
</style>
