<template>
  <div class="meal-plan__overview">
    <!-- <p class="overview__title">Низкоуглеводное меню для снижения веса</p> -->

    <div class="overview__content">
      <div class="img-and-social">
        <div class="img-wrapper">
          <img
            class="img"
            src="https://s1.1zoom.me/big3/131/Baking_Powidl_492158.jpg"
            alt="meal-plan-img"
          />
        </div>
        <social-btns :btnsInfo="{like: 5, dislike: 2, share: 16}" />
      </div>

      <div class="description">
        <p class="overview__title">Низкоуглеводное меню для снижения веса</p>
        <div class="main-info-and-mark">
          <div class="main-info">
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
              <p
                class="description__text"
              >Низкоуглеводный рацион на сутки для снижения веса. Увеличенное содержание белка для поддержания мышечной массы. Содержит глютен и может вызывать аллергическую реакцию на арахис.</p>
            </div>
          </div>
          <added-marks />
        </div>

        <div class="meal-parts-and-nutrients">
          <div class="nutrients">
            <p>круговой график показывающий распределение в процентах БЖУ при наведении видно установленное значение (в курге меняется надпись "Белки 2 гр/кг" или по умолчания Ккал 1928)</p>
          </div>
          <div class="meal-parts">
            <div class="slider">
              <!-- <meal-part /> -->
            </div>
          </div>
        </div>

        <!-- <div class="action-btns">
          <social-btns :btnsInfo="{like: 5, dislike: 2, share: 16}" />
          <social-additional-info :socialAdditionalInfo="{views: 258, comments: 4, addToFavorite: 154}" />
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import AddedMarks from '@/components/mealPlaner/MealPlan/MealPlanOverview/AddedMarks'
// import AppButtonWithActions from '@/components/basic/AppButtonWithActions'
// import MealPart from '@/components/mealPlaner/MealPlan/MealParts/MealPart'
// import SocialAdditionalInfo from '@/components/basic/SocialAdditionalInfo'
import SocialBtns from '@/components/basic/SocialBtns'

export default {
  components: {
    AddedMarks,
    // AppButtonWithActions,
    // MealPart,
    // SocialAdditionalInfo,
    SocialBtns
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan__overview {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  // margin-bottom: 10px;
  padding: 10px;
  background: $hiddenBlockBG;
  border-radius: 6px;
  box-shadow: $btnHoverShadow;

  .overview__title {
    text-align: center;
    font-weight: 500;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }

  .overview__content {
    display: flex;
    margin-top: 5px;
    .img-and-social {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
      height: 620px;
      .img-wrapper {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
        padding: 10px;
        width: 100%;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        overflow: hidden;
        .img {
          flex: 1 1 auto;
          object-fit: cover;
          border-radius: 6px;
        }
      }
      .social-btn-wrapper {
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
    .description {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      margin-left: 5px;
      .overview__title {
        text-align: center;
        font-weight: 500;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
      .main-info-and-mark {
        flex: 1 1 auto;
        display: flex;
        margin-top: 5px;
        .main-info {
          display: flex;
          flex-direction: column;
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
            min-height: 295px;
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

      .meal-parts-and-nutrients {
        display: flex;
        margin-top: 5px;
        .meal-parts {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .slider {
            display: flex;
          }
        }
        .nutrients {
          width: 240px;
          min-width: 240px;
          max-width: 240px;
          // margin-left: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }
      .action-btns {
        display: flex;
        margin-top: 5px;
        box-sizing: border-box;
        .edit-btn {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          margin-left: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>