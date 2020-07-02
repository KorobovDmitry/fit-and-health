<template>
  <div class="exercises">

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
            <div class="step__intensity">
              <div class="intensity"></div>
            </div>
            <div class="step__number">
              <p class="number__title">Подход {{ index + 1 }}</p>
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
              <i class="ti-more"></i>
            </div>
          </li>
        </ul>
        <div class="exercise__control">
          <div class="control">
            <i class="ti-plus control__icon"></i>
          </div>
          <div class="control">
            <i class="ti-control-stop control__icon"></i>
          </div>
          <div class="control">
            <i class="ti-control-pause control__icon"></i>
          </div>
          <div class="control">
            <i class="ti-control-play control__icon"></i>
          </div>
        </div>
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
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;

  .exercises-list {
    flex: 1 1 auto;
    padding: 10px;
    background: rgba(0,0,0,.025);
    box-shadow: $insetBoxShadow;
    border-radius: 6px;
    min-height: 600px;
    .exercise {
      margin-bottom: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .exercise__header {
        display: flex;
        align-items: center;
        padding: 10px;
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
          font-weight: 600;
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
        // background: rgba(0,0,0,.025);
        border-top: 1px solid $blockBorder;
        .step {
          display: flex;
          align-items: center;
          padding: 10px;
          border-bottom: 1px dashed $blockBorder;
          .step__intensity {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 50px;
            .intensity {
              width: 16px;
              height: 16px;
              background: $red;
              border-radius: 50%;
            }
          }
          .step__number {
            margin-left: 10px;
            margin-right: auto;
            .number__title {
              font-weight: 500;
              white-space: nowrap;
            }
          }
          .step__element {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 10px;
            width: 100%;
            max-width: 150px;
            .element__text {
              text-transform: uppercase;
              font-size: 10px;
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
      .exercise__control {
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-top: 1px solid $blockBorder;
        .control {
          // border: 1px solid red;
          margin-left: 10px;
          padding: 10px;
          cursor: pointer;
          .control__icon {
            font-size: 20px;
            transition: $tr-02;
          }
        }
        .control:first-child {
          margin-left: 0;
          margin-right: auto;
        }
        .control:hover {
          .control__icon {
            color: $green;
          }
        }
      }
    }
    .exercise:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
