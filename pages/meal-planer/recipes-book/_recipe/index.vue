<template>
  <div class="recipe">
    <app-page-title>Рецепт название</app-page-title>
    <div class="recipe__content">
      <recipe-overview />
      <recipe-author />
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle";
import RecipeOverview from '@/components/recipe/RecipeOverview/index'
import RecipeAuthor from '@/components/recipe/RecipeAuthor/index'

export default {
  // async fetch ({ store }) {
  //   await store.dispatch('recipe/fetchRecipe')
  // },
  components: {
    AppPageTitle,
    RecipeOverview,
    RecipeAuthor
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.recipe {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .recipe__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
