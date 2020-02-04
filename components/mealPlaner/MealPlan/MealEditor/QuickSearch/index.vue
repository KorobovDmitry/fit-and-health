<template>
  <div class="quick-search">
    <app-block-title>Поиск продуктов и рецептов</app-block-title>

    <app-search-block small filters>
      <template v-slot:searchFilters>
        <div>
          <div>
            Показывать
            Продукты
            Рецепты
          </div>
          <p>все продукты</p>
          <p>мои продукты</p>
          <p>избранные</p>
        </div>
      </template>
    </app-search-block>

    <ul class="quick-search__found-items-list">
      <li v-for="(item, index) in 1" :key="index" class="found-items-list__product-list-item">
        <quick-search-product :item="item" />
      </li>

      <li class="found-items-list__recipe-list-item">
        <quick-search-recipe />
      </li>
    </ul>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import QuickSearchProduct from '@/components/mealPlaner/MealPlan/MealEditor/QuickSearch/QuickSearchProduct'
import QuickSearchRecipe from '@/components/mealPlaner/MealPlan/MealEditor/QuickSearch/QuickSearchRecipe'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    QuickSearchProduct,
    QuickSearchRecipe
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.quick-search {
  // border: 1px solid red;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  height: 500px;
  overflow: hidden;
  .quick-search__found-items-list {
    margin-top: 10px;
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
  }
}

</style>
