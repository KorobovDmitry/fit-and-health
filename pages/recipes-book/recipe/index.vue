<template>
  <div class="recipe">
    <app-page-title>Рецепт "{{ recipeTitle }}"</app-page-title>
    <div class="recipe__content">
      recipe
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import PageInfo from '@/components/recipesBook/PageInfo'
import SortingFilters from '@/components/recipesBook/SortingFilters/SortingFilters'
import SearchResults from '@/components/recipesBook/SearchResults/SearchResults'
export default {
  components: {
    AppPageTitle,
    PageInfo,
    SortingFilters,
    SearchResults
  },
  data () {
    return {
      recipeTitle: 'название рецепта'
    }
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
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .recipe__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
