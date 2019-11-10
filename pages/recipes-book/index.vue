<template>
  <div class="recipes-book">
    <div class="recipes-book__content">

      <h1 class="recipes-book__page-title">Рецепты</h1>
      <page-info />

      <div class="recipes-book__filters-and-results">
        <sorting-filters />
        <search-results />
      </div>

    </div>
  </div>
</template>

<script>
import PageInfo from '@/components/recipesBook/PageInfo'
import SortingFilters from '@/components/recipesBook/SortingFilters/SortingFilters'
import SearchResults from '@/components/recipesBook/SearchResults/SearchResults'
export default {
  components: {
    PageInfo,
    SortingFilters,
    SearchResults
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.recipes-book {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .recipes-book__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .recipes-book__page-title {
      margin-bottom: 40px;
      text-align: center;
      font-size: 28px;
    }
    .recipes-book__filters-and-results {
      display: flex;
    }
  }
}

</style>
