<template>
  <div class="exercises">
    <div class="exercises__title-block">
      <p class="title-block__text">Тренировка</p>

      <div class="timer">0 : 0 : 0</div>

      <div class="title-block__action-btns">
        <app-button class="mr-5" size14px uppercase>
          <i class="ti-control-stop"></i>
        </app-button>
        
        <app-button class="mr-5" size14px uppercase>
          <i class="ti-control-pause"></i>
        </app-button>

        <app-button size14px uppercase>
          <i class="ti-control-play"></i>
        </app-button>
      </div>
    </div>

    <ul class="exercises-list">
      <li class="exercise">
        <div class="exercise__header">
          <div class="exercises-list-item__element-drag-drop-btn">
            <i class="ti-exchange-vertical"></i>
          </div>
          <p class="exercises-list-item__element-title">Гиперэкстензия</p>
          <div class="exercises-list-item__element-parameter-wrapper">
            <p class="exercises-list-item__element-parameter-text">подходы</p>
            <p class="exercises-list-item__element-parameter-value">4</p>
          </div>
          <div class="exercises-list-item__element-parameter-wrapper">
            <p class="exercises-list-item__element-parameter-text">повторений</p>
            <p class="exercises-list-item__element-parameter-value">10 - 15</p>
          </div>
          <div class="exercises-list-item__element-parameter-wrapper">
            <p class="exercises-list-item__element-parameter-text">Отягощение</p>
            <p class="exercises-list-item__element-parameter-value">5 кг.</p>
          </div>
          <div class="exercises-list-item__element-btn">
            <i class="ti-angle-double-down"></i>
          </div>
        </div>
        <ul class="exercise-steps">
          <li class="step">
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-title">Подход 1</p>
            </div>
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-parameter-text">повторений</p>
              <p class="exercises-step-list-item__element-parameter-value">15</p>
            </div>
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-step-list-item__element-parameter-value">5 кг.</p>
            </div>
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-parameter-text">Время выполнения</p>
              <p class="exercises-step-list-item__element-parameter-value">00 : 02 : 32</p>
            </div>
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-parameter-text">Время отдыха</p>
              <p class="exercises-step-list-item__element-parameter-value">00 : 01 : 12</p>
            </div>
            <div class="exercises-step-list-item__element-btn">
              <i class="ti-pencil"></i>
            </div>
          </li>
          <li class="step">
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-title">Подход 2</p>
            </div>
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-parameter-text">повторений</p>
              <p class="exercises-step-list-item__element-parameter-value">0</p>
            </div>
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-step-list-item__element-parameter-value">0</p>
            </div>
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-parameter-text">Время выполнения</p>
              <p class="exercises-step-list-item__element-parameter-value">00 : 00 : 00</p>
            </div>
            <div class="exercises-step-list-item__element">
              <p class="exercises-step-list-item__element-parameter-text">Время отдыха</p>
              <p class="exercises-step-list-item__element-parameter-value">00 : 00 : 00</p>
            </div>
            <div class="exercises-step-list-item__element-btn">
              <i class="ti-control-play"></i>
            </div>
          </li>
          <li class="step__action-btns">
            <div class="exercises-step-list-item__element-btn">
              <p class="exercises-step-list-item__element-title">Добавить подход</p>
            </div>
            <div class="exercises-step-list-item__element-btn">
              <p class="exercises-step-list-item__element-title">Завершить упражнение</p>
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
    padding: 10px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: $insetBoxShadow;
    border-radius: 6px;
    .exercise {
      margin-bottom: 5px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .exercise__header {
        display: flex;
        padding-bottom: 10px;
        border-bottom: 1px dashed $blockBorder;
      }
      .exercise-steps {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        .step {
          display: flex;
          margin-bottom: 5px;
        }
        .step__action-btns {
          display: flex;
        }
      }
    }
  }
}

</style>
