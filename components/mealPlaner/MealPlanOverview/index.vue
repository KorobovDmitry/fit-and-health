<template>
  <div class="meal-plan-overview">
    <p class="right-block__block-title">Рацион на сутки</p>
    <p class="meal-plan__title">Низкоуглеводное меню для снижения веса</p>
    <div class="right-block__meal-plan-desc-content">
      <!-- <added-marks /> -->
      <div class="meal-plan-desc-content__description">
        <div class="description__img-wrapper">
          <img class="description__img" src="https://s1.1zoom.me/big3/131/Baking_Powidl_492158.jpg" alt="meal-plan-img">
        </div>
        <div class="description__text-wrapper">
          <p class="description__title">Описание</p>
          <textarea class="description__textarea">Не рекомендуется для ежедневного рациона. Использовать - 3 раза в неделю. Содержит большое количество белка.</textarea>
        </div>
      </div>

      <added-marks />
    </div>

    <div class="right-block__social-btn-wrapper">
      <div class="left">
        <i class="ti-heart"></i>
        <i class="ti-heart-broken"></i>
        <i class="ti-share"></i>
      </div>
      <div class="right">
        <p>Комментарии</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
import AddedMarks from '@/components/mealPlaner/MealPlanOverview/AddedMarks'
export default {
  components: {
    AppButton,
    AddedMarks
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan-overview {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
    .right-block__block-title {
      margin: 0 20px 14px 20px;
      padding: 0 5px;
      font-size: 18px;
      font-weight: 500;
    }
    .meal-plan__title {
      margin-bottom: 5px;
      padding: 10px 20px;
      text-align: center;
      // font-size: 18px;
      font-weight: 500;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .right-block__meal-plan-desc-content {
      // border: 1px solid red;
      display: flex;
      margin-bottom: 5px;
      flex: 1 1 auto;
      .meal-plan-desc-content__description {
        display: flex;
        flex-direction: column;
        margin-right: 5px;
        width: 500px;
        // margin-left: 5px;
        // padding: 10px;
        // width: 100%;
        // background: $white;
        // border: 1px solid $blockBorder;
        // border-radius: 6px;
        .description__img-wrapper {
          margin-bottom: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .description__img {
            width: 100%;
            height: auto;
            border-radius: 6px;
          }
        }
        
        .description__text-wrapper {
        // margin-bottom: 5px;
        padding: 10px;
        width: 100%;
        height: 200px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .description__title {
          // margin-bottom: 10px;
          padding: 0 10px 10px 10px;
          text-align: center;
          font-weight: 500;
          // border-bottom: 1px dashed $blockBorder;
          white-space: nowrap;
        }
        .description__textarea {
          // border: 1px solid red;
          margin-bottom: 5px;
          padding: 10px;
          width: 100%;
          height: calc(100% - 30px);
          background: $white;
          color: $black;
          font-family: $fontMontserrat;
          font-size: 14px;
          resize: unset;
          outline: none;
          border: none;
          // border: 1px solid $blockBorder;
          border-radius: 6px;
          box-shadow: inset 0 0px 4px rgba(0,0,0,.4);
        }
      }
      }
    }
    .right-block__social-btn-wrapper {
      display: flex;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-right: 5px;
        padding: 10px 20px;
        width: 100%;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        i {
          cursor: pointer;
        }
      }
      .right {
        min-width: 350px;
        padding: 10px 20px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;
      }
    }
  // }
}

</style>