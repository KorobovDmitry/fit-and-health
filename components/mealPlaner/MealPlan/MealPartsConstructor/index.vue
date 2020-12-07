<template>
  <div class="meal-parts-constructor">
    <p class="meal-parts-constructor__title">Редактор рациона</p>
    <div class="meal-parts-and-actions">
      <div class="meal-parts">
        <div class="meal-part meal-part--active">
          <p class="meal-part__title">Завтрак</p>
        </div>
        <div class="meal-part">
          <p class="meal-part__title">Обед</p>
        </div>
        <div class="meal-part">
          <p class="meal-part__title">Перекус</p>
        </div>
        <div class="meal-part">
          <p class="meal-part__title">Ужин</p>
        </div>
        <div class="meal-part">
          <i class="ti-plus"></i>
        </div>
      </div>
      <div class="actions">
        <!-- <i class="ti-plus"></i> -->
        <i class="ti-marker-alt"></i>
        <nuxt-link to="/meal-planer/meal-plan-editor">
          <i class="ti-save-alt"></i>
        </nuxt-link>
        <!-- <i class="ti-trash"></i> -->
      </div>
    </div>
    <!-- <div class="meal-part-settings">
      <div class="info">
        <div class="title-and-time">
          <app-input-text value="Завтрак" />
          <app-input-text class="ml-10" value="08 : 00" />
        </div>
        <app-textarea class="mt-10 fill-area" value="Небольшое описание" />
      </div>
      <div class="meal-part-nutrients">
        <div class="nutrients-stats">
          <div class="nutrients-stats__item">
            <div class="item__indicator"></div>
            <p class="item__title">Белки</p>
            <p class="item__value">30%</p>
          </div>
          <div class="nutrients-stats__item">
            <div class="item__indicator"></div>
            <p class="item__title">Жиры</p>
            <p class="item__value">20%</p>
          </div>
          <div class="nutrients-stats__item">
            <div class="item__indicator"></div>
            <p class="item__title">Углеводы</p>
            <p class="item__value">50%</p>
          </div>
        </div>
        <div class="chart">1768<br />ккал</div>
      </div>
    </div> -->
    <div class="quick-search-and-added-products">
      <!-- <div class="quick-search">
        <div class="quick-search__tabs">
          <div class="tab tab--active">
            <p class="tab__title">Продукты</p>
          </div>
          <div class="tab">
            <p class="tab__title">Рецепты</p>
          </div>
          <div class="tab">
            <i class="ti-filter"></i>
          </div>
        </div>
        <div class="quick-search__content">
          <app-search-block small />
          <quick-search-product />
          <quick-search-recipe />
        </div>
      </div> -->
      <div class="added-products">
        <!-- <div class="added-products__tabs">
          <div class="tab tab--active">
            <p class="tab__title">Добавленное в рацион</p>
          </div>
          <div class="tab">
            <p class="tab__title">Продукты</p>
          </div>
          <div class="tab">
            <p class="tab__title">Рецепты</p>
          </div>
        </div> -->
        <div class="added-products__content">

          <app-search-block small class="mb-20"/>

          <!-- <app-search-block small class="mb-10"/>

          <quick-search-product />
          <quick-search-recipe /> -->

          <added-product />
          <added-recipe />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import QuickSearchProduct from '@/components/mealPlaner/MealPlan/MealPartsConstructor/QuickSearchProduct'
import QuickSearchRecipe from '@/components/mealPlaner/MealPlan/MealPartsConstructor/QuickSearchRecipe'
import AddedProduct from '@/components/mealPlaner/MealPlan/MealPartsConstructor/AddedProduct'
import AddedRecipe from '@/components/mealPlaner/MealPlan/MealPartsConstructor/AddedRecipe'

export default {
  components: {
    AppInputText,
    AppTextarea,
    AppSearchBlock,
    QuickSearchProduct,
    QuickSearchRecipe,
    AddedProduct,
    AddedRecipe
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-parts-constructor {
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  overflow: hidden;
  .meal-parts-constructor__title {
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }
  .meal-parts-and-actions {
    display: flex;
    // border-top: 1px solid $blockBorder;
    // border-bottom: 1px solid $blockBorder;
    .meal-parts {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      padding: 0 10px;
      .meal-part {
        // flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-right: 5px;
        padding: 10px 20px;
        max-width: 200px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border: 1px solid $blockBorder;
        border-bottom: none;
        cursor: pointer;
        .meal-part__title {
          text-transform: uppercase;
          font-size: 14px;
          text-align: center;
          font-weight: 500;
        }
      }
      .meal-part--active {
        background: $green;
        color: $white;
        border: $green;
        .meal-part__title {
          font-weight: 600;
        }
      }
    }
    .actions {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      padding: 0 5px;
      i {
        margin: 0 5px;
        padding: 5px;
        font-size: 18px;
        transition: $tr-02;
        cursor: pointer;
      }
      i:hover {
        background: $green;
        color: $white;
        border-radius: 6px;
      }
    }
  }
  
  .meal-part-settings {
    // border: 1px solid red;
    display: flex;
    padding: 20px 10px;
    // border-bottom: 1px dashed $blockBorder;
    .info {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      .title-and-time {
        display: flex;
      }
    }
    .meal-part-nutrients {
      display: flex;
      margin-left: 10px;
      padding: 10px 20px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .chart {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 150px;
        border: 6px solid $blue;
        border-radius: 50%;
      }
      .nutrients-stats {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 20px;
        padding-right: 20px;
        border-right: 1px dashed $blockBorder;
        .nutrients-stats__item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          .item__indicator {
            width: 10px;
            height: 10px;
            background: $green;
            border-radius: 50%;
          }
          .item__title {
            margin: 0 20px 0 10px;
            // font-size: 14px;
          }
          .item__value {
            margin-left: auto;
            // font-size: 18px;
            font-weight: 500;
          }
        }
        .nutrients-stats__item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .quick-search-and-added-products {
    // display: flex;
    // padding: 10px 10px 20px 10px;
    // .quick-search {
    //   .quick-search__tabs {
    //     // border: 1px solid red;
    //     display: flex;
    //     margin: 0 10px;
    //     // margin: 10px 10px 0 10px;
    //     .tab {
    //       margin-right: 5px;
    //       padding: 10px 20px;
    //       border: 1px solid $blockBorder;
    //       border-bottom: none;
    //       border-top-left-radius: 6px;
    //       border-top-right-radius: 6px;
    //       user-select: none;
    //       cursor: pointer;
    //     }
    //     .tab:last-child {
    //       margin-left: auto;
    //       margin-right: 0;
    //     }
    //     .tab--active {
    //       background: $green;
    //       color: $white;
    //       border: 1px solid $green;
    //       border-bottom: none;
    //     }
    //   }
    //   .quick-search__content {
    //     display: flex;
    //     flex-direction: column;
    //     padding: 10px;
    //     width: 400px;
    //     height: 500px;
    //     background: rgba(0, 0, 0, 0.025);
    //     box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
    //     border-radius: 6px;
    //   }
    // }
    .added-products {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      // margin-left: 10px;
      .added-products__tabs {
        // border: 1px solid red;
        display: flex;
        margin: 0 10px;
        // margin: 10px 10px 0 10px;
        .tab {
          margin-right: 5px;
          padding: 10px 20px;
          border: 1px solid $blockBorder;
          border-bottom: none;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          user-select: none;
          cursor: pointer;
        }
        .tab:nth-child(2) {
          margin-left: auto;
        }
        .tab:last-child {
          margin-right: 0;
        }
        .tab--active {
          background: $green;
          color: $white;
          border: 1px solid $green;
          border-bottom: none;
        }
      }
      .added-products__content {
        flex: 1 1 auto;
        padding: 10px;
        background: rgba(0, 0, 0, 0.025);
        box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
      }
    }
  }
}

</style>
