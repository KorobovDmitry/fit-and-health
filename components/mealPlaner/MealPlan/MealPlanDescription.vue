<template>
  <div class="meal-plan-desc">

      <div class="meal-plan-desc__img-and-social">
        <div class="meal-plan-desc__img-wrapper">
          <img class="meal-plan-desc__img" src="https://s1.1zoom.me/big3/131/Baking_Powidl_492158.jpg" alt="meal-plan-img">
        </div>
        <div class="meal-plan-desc__social-btn-wrapper">
          <div class="social-btn">
            <i class="ti-heart social-btn__icon"></i>
            <p class="social-btn__amount">28</p>
          </div>
          <div class="social-btn">
            <i class="ti-heart-broken"></i>
            <p class="social-btn__amount">8</p>
          </div>
          <div class="social-btn">
            <i class="ti-share"></i>
            <p class="social-btn__amount">56</p>
          </div>
        </div>
      </div>

      <div class="meal-plan-desc__description-and-mark">

        <div class="description__title">
          <p class="block-title__text">Низкоуглеводное меню для снижения веса</p>
          <i class="ti-more block-title__icon"></i>
        </div>

        <div class="description-and-mark">
          <div class="description">
            <div class="description__meal-plan-info">
              <div class="meal-plan-info__element">
                <i class="ti-timer element__icon"></i>
                <p class="element__amount">4</p>
                <p class="element__text">приема пищи</p>
              </div>
              <div class="meal-plan-info__element">
                <i class="ti-receipt element__icon"></i>
                <p class="element__amount">3</p>
                <p class="element__text">блюда</p>
              </div>
              <div class="meal-plan-info__element">
                <i class="ti-pie-chart element__icon"></i>
                <p class="element__amount">8</p>
                <p class="element__text">продуктов</p>
              </div>
            </div>

            <div class="description__text-wrapper">
              <p class="description__text-title">Описание</p>
              <p class="description__text">Низкоуглеводный рацион на сутки для снижения веса. Увеличенное содержание белка для поддержания мышечной массы. Содержит глютен и может вызывать аллергическую реакцию на арахис.</p>
            </div>
          </div>

          <added-marks />
        </div>

      </div>

  </div>
</template>

<script>
import AddedMarks from '@/components/mealPlaner/MealPlan/AddedMarks'
export default {
  components: {
    AddedMarks
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan-desc {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  .meal-plan-desc__img-and-social {
    margin-right: 5px;
    .meal-plan-desc__img-wrapper {
      margin-bottom: 5px;
      padding: 10px;
      width: 400px;
      min-width: 450px;
      max-width: 450px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .meal-plan-desc__img {
        border-radius: 6px;
      }
    }
    .meal-plan-desc__social-btn-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .social-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
        .social-btn__icon {
          font-size: 14px;
        }
        .social-btn__amount {
          margin-left: 10px;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
  .meal-plan-desc__description-and-mark {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    .description__title {
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .block-title__text {
        margin-left: auto;
        font-weight: 500;
      }
      .block-title__icon {
        margin-left: auto;
      }
    }

    .description-and-mark {
      // border: 1px solid red;
      display: flex;
      flex: 1 1 auto;
      .description {
        display: flex;
        flex-direction: column;
        margin-right: 5px;
        .description__meal-plan-info {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .meal-plan-info__element {
            // border: 1px solid red;
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid $blockBorder;
            // .element__icon {}
            .element__amount {
              margin-left: 10px;
              font-size: 14px;
              font-weight: 600;
            }
            .element__text {
              margin-left: 5px;
              font-size: 12px;
              font-weight: 500;
              white-space: nowrap;
            }
          }
          .meal-plan-info__element:last-child {
            border-right: none;
          }
        }
        .description__text-wrapper {
          flex: 1 1 auto;
          // margin-bottom: 45px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .description__text-title {
            margin: 0 10px;
            text-align: center;
            font-weight: 500;
          }
          .description__text {
            margin: 10px 10px 0 10px;
          }
        }
      }
    }
  }
}

</style>