<template>
  <div class="exercises">
    <div class="exercises__title-block">
      <!-- <p class="title-block__text">Тренировка</p> -->

      <!-- <div class="timer">0 : 0 : 0</div> -->

      <div class="title-block__action-btns">
        <app-button size14px uppercase>
          <i class="ti-control-stop"></i>
        </app-button>
        
        <app-button class="ml-5" size14px uppercase>
          <i class="ti-control-pause"></i>
        </app-button>

        <app-button class="ml-5" size14px uppercase>
          <i class="ti-control-play"></i>
        </app-button>
      </div>

      <div class="timer">00 : 00 : 00</div>
    </div>

    <ul class="exercises-list">
      <li class="exercise">
        <div class="exercise__header">
          <div class="header__drag-drop-btn">
            <i class="ti-exchange-vertical"></i>
          </div>
          <p class="header__title">Гиперэкстензия</p>
          <div class="header__parameter">
            <p class="parameter__text">Подходы</p>
            <p class="parameter__value">4</p>
          </div>
          <div class="header__parameter">
            <p class="parameter__text">Повторений</p>
            <p class="parameter__value">10 - 15</p>
          </div>
          <div class="header__parameter">
            <p class="parameter__text">Отягощение</p>
            <p class="parameter__value">5 кг.</p>
          </div>
          <div class="header__accrodion-btn">
            <i class="ti-angle-double-down"></i>
          </div>
        </div>
        <ul class="exercise__steps">
          <li v-for="(item, index) in 4" :key="index" class="step">
            <div class="step__number">
              <p class="number__title">Подход {{ index }}</p>
            </div>
            <div class="step__element">
              <p class="element__text">Повторений</p>
              <p class="element__value">15</p>
            </div>
            <div class="step__element">
              <p class="element__text">Отягощение</p>
              <p class="element__value">5 кг.</p>
            </div>
            <div class="step__element">
              <p class="element__text">Время выполнения</p>
              <p class="element__value">00 : 02 : 32</p>
            </div>
            <div class="step__element">
              <p class="element__text">Время отдыха</p>
              <p class="element__value">00 : 01 : 12</p>
            </div>
            <div class="step__btn">
              <i class="ti-pencil"></i>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercises {
  // margin-top: 10px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .exercises__title-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 10px 10px;
    border-bottom: 1px dashed $blockBorder;
    .title-block__text {
      font-weight: 500;
    }
    .title-block__action-btns {
      display: flex;
    }
  }
  .exercises-list {
    margin-top: 10px;
    // padding: 10px;
    // background: rgba(0, 0, 0, 0.025);
    // box-shadow: $insetBoxShadow;
    // border-radius: 6px;
    .exercise {
      margin-bottom: 5px;
      // padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .exercise__header {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid $blockBorder;
        .header__drag-drop-btn {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }
        .header__title {
          flex: 1 1 auto;
          padding: 0 10px;
          font-weight: 500;
        }
        .header__parameter {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 200px;
          .parameter__text {
            text-transform: uppercase;
            font-size: 12px;
          }
          .parameter__value {
            margin-top: 5px;
            font-weight: 500;
          }
        }
        .header__accrodion-btn {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }
      }
      .exercise__steps {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        .step {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          padding: 10px;
          background: $white;
          border-bottom: 1px dashed $blockBorder;
          // border-radius: 6px;
          .step__number {
            margin-right: auto;
            // padding: 0 10px;
            .number__title {
              font-weight: 500;
            }
          }
          .step__element {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 10px;
            width: 100%;
            max-width: 200px;
            .element__text {
              text-transform: uppercase;
              font-size: 12px;
            }
            .element__value {
              margin-top: 5px;
              font-weight: 500;
            }
          }
          .step__btn {
            // border: 1px solid red;
            padding: 10px;
          }
        }
        .step:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

</style>
