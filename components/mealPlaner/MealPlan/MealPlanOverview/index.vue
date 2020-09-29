<template>
  <div class="meal-plan__overview">

    <div class="title">
      <p class="title__text">Название рациона:</p>
      <app-input-text value="Низкоуглеводное меню для снижения веса" />
    </div>

    <div class="settings-and-description">
      <div class="settings">
        <nutrients-settings />
        <!-- <social-btns class="mt-5" :btnsInfo="{like: 5, dislike: 2, share: 16}" /> -->
      </div>

      <div class="description">
        <div class="meal-plan__info">
          <div class="info__element">
            <i class="ti-timer element__icon"></i>
            <p class="element__amount">4</p>
            <p class="element__text">приема пищи</p>
          </div>
          <div class="info__element">
            <i class="ti-receipt element__icon"></i>
            <p class="element__amount">3</p>
            <p class="element__text">блюда</p>
          </div>
          <div class="info__element">
            <i class="ti-pie-chart element__icon"></i>
            <p class="element__amount">8</p>
            <p class="element__text">продуктов</p>
          </div>
        </div>

        <div class="text-overview">
          <p class="text-overview__title">Описание</p>
          <app-textarea class="mt-10 fill-area" value="Низкоуглеводный рацион на сутки для снижения веса. Увеличенное содержание белка для поддержания мышечной массы. Содержит глютен и может вызывать аллергическую реакцию на арахис." />
        </div>
      </div>

      <app-add-marks-form
        class="mt-5"
        :marks="[1,2]"
        @addMark="addMark($event)"
        @removeMark="removeMark($event)"
      />
    </div>

    <div class="nutrients-calculations">
      nutrients-calculations
    </div>

    <div class="constructor">
      constructor
      <div class="info-and-image">
        <div class="info">info</div>
        <div class="image">image</div>
      </div>
      <div class="quick-search-and-added-products">
        <div class="quick-search">quick-search</div>
        <div class="added-products">added-products</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'
import NutrientsSettings from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsSettings'
import AppAddMarksForm from '@/components/basic/AppAddMarksForm'
// import SocialBtns from '@/components/basic/SocialBtns'

export default {
  components: {
    AppInputText,
    AppTextarea,
    NutrientsSettings,
    AppAddMarksForm,
    // SocialBtns
  },
  data() {
    return {}
  },
  methods: {
    addMark ($event) {
      console.log($event)
    },
    removeMark ($event) {
      console.log($event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan__overview {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: $hiddenBlockBG;
  border-radius: 6px;
  box-shadow: $btnHoverShadow;

  .title {
    display: flex;
    align-items: center;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .title__text {
      padding: 0 10px;
      font-weight: 500;
      white-space: nowrap;
    }
  }

  .settings-and-description {
    // border: 1px solid red;
    display: flex;
    .settings {
      width: 100%;
      min-width: 300px;
      max-width: 300px;
    }

    .description {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      .meal-plan__info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .info__element {
          // border: 1px solid red;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid $blockBorder;
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
        .info__element:last-child {
          border-right: none;
        }
      }
      .text-overview {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .text-overview__title {
          text-align: center;
          font-weight: 500;
        }
      }
    }
  }

  .nutrients-calculations {
    margin-top: 5px;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }

  .constructor {
    margin-top: 5px;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .info-and-image {
      display: flex;
      height: 250px;
      .info {
        flex: 1 1 auto;
      }
      .image {
        width: 400px;
        padding: 10px;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }
    .quick-search-and-added-products {
      display: flex;
      margin-top: 20px;
      .quick-search {
        padding: 10px;
        width: 400px;
        height: 500px;
        background: rgba(0, 0, 0, 0.025);
        box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
      }
      .added-products {
        flex: 1 1 auto;
        margin-left: 10px;
        padding: 10px;
        // width: 400px;
        height: 500px;
        background: rgba(0, 0, 0, 0.025);
        box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
      }
    }
  }
}

</style>
