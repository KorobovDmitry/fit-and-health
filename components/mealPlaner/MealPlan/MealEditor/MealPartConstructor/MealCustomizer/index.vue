<template>
  <div class="meal-customizer">
    <div class="meal-customizer__block-title">
      <p class="block-title__text">Продукты и рецепты</p>
    </div>
    <ul class="meal-customizer__meal-list">
      <recipe-item />
      <product-item v-for="(item, index) in 2" :key="index" />
    </ul>
  </div>
</template>

<script>
import RecipeItem from '@/components/mealPlaner/MealPlan/MealEditor/MealPartConstructor/MealCustomizer/RecipeItem'
import ProductItem from '@/components/mealPlaner/MealPlan/MealEditor/MealPartConstructor/MealCustomizer/ProductItem'

export default {
  components: {
    RecipeItem,
    ProductItem
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.meal-customizer {
  // border: 1px solid red;
  .meal-customizer__block-title {
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    // border-top-left-radius: 6px;
    // border-top-right-radius: 6px;
    .block-title__text {
      text-align: center;
      font-weight: 500;
    }
  }
  .meal-customizer__meal-list {
    margin-top: 10px;
    padding: 10px;
    height: 480px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    // border-bottom-left-radius: 6px;
    // border-bottom-right-radius: 6px;
  }
}

</style>