<template>
  <div class="meal-parts-constructor">

    <p class="block-title">Редактор рациона</p>

    <div class="meal-parts">
      <div class="meal-part meal-part--active">
        <p class="meal-part__title">09 : 00 - Завтрак</p>
      </div>
      <div class="meal-part">
        <p class="meal-part__title">13 : 00 - Обед</p>
      </div>
      <div class="meal-part">
        <p class="meal-part__title">16 : 00 - Перекус</p>
      </div>
      <div class="meal-part">
        <p class="meal-part__title">20 : 00 - Ужин</p>
      </div>
      <div class="meal-part">
        <i class="ti-plus"></i>
      </div>
    </div>

    <div class="added-products">
      <div class="settings-and-search">
        <div class="settings">
          <app-input-text value="09 : 00" class="target-time" />
          <app-input-text value="Завтрак" />
        </div>
        <app-search-block placeholder="Поиск продуктов и рецептов" small />
      </div>

      <added-product />
      <added-recipe />
      <added-product />
      <added-product />
      <added-product />
    </div>

  </div>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AddedProduct from '@/components/mealPlaner/MealPlan/MealPartsConstructor/AddedProduct'
import AddedRecipe from '@/components/mealPlaner/MealPlan/MealPartsConstructor/AddedRecipe'

export default {
  components: {
    AppInputText,
    AppSearchBlock,
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
  .block-title {
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }

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
    .meal-part:last-child {
      margin-left: auto;
      padding: 10px;
      margin-right: 0;
      background: $green;
      color: $white;
      border: $green;
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

  .added-products {
    flex: 1 1 auto;
    padding: 10px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    .settings-and-search {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px dashed $blockBorder;
      .settings {
        display: flex;
        margin-bottom: 5px;
        .target-time {
          margin-right: 5px;
          max-width: 100px;
        }
      }
    }
  }
}

</style>
