<template>
  <div class="recipe">
    <app-page-title>Рецепт "{{ productTitle }}"</app-page-title>
    <pre>{{ recipe }}</pre>
    <div class="recipe__content">
      <recipe-overview />
      <additional-info />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppPageTitle from "@/components/basic/AppPageTitle";
import RecipeOverview from '@/components/recipe/RecipeOverview/index'
import AdditionalInfo from '@/components/recipe/AdditionalInfo/index'

export default {
  async fetch ({ store, params }) {
    await store.dispatch('recipe/fetchRecipe', params.recipe)
  },
  computed: {
    ...mapState({
      productTitle: state => state.recipe.recipe.title,
      recipe: state => state.recipe.recipe
    }),
  },
  components: {
    AppPageTitle,
    RecipeOverview,
    AdditionalInfo
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
