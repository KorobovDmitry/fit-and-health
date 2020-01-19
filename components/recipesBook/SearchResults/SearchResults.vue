<template>
  <div class="search-results">

    <app-block-title>Поиск рецептов</app-block-title>

    <app-search-block />

    <div class="filter-by">
      <p class="filter-by__value">Все</p>
      <p class="filter-by__value filter-by__value--active">Фото</p>
      <p class="filter-by__value">Видео</p>
      <p class="filter-by__divider">|</p>
      <p class="filter-by__value">Все</p>
      <p class="filter-by__value">Еда</p>
      <p class="filter-by__value filter-by__value--active">Напитки</p>
      <p class="filter-by__divider">|</p>
      <p class="filter-by__value">Все</p>
      <p class="filter-by__value filter-by__value--active">Мои рецепты</p>
    </div>

    <div class="found-recipes">
      <found-recipe v-for="(item, index) in 9" :key="index" />
    </div>

    <app-button sizeSM uppercase center>Загрузить еще</app-button>

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FoundRecipe from '@/components/recipesBook/SearchResults/FoundRecipe'
export default {
  components: {
    AppBlockTitle,
    AppButton,
    AppSearchBlock,
    FoundRecipe
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.search-results {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .filter-by {
    // border: 1px solid red;
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    .filter-by__value {
      // border: 1px solid red;
      margin: 0 10px;
      text-transform: uppercase;
      font-size: 14px;
      border-top: 2px solid transparent;
    }
    .filter-by__value--active {
      color: $green;
      font-weight: 600;
      border-bottom: 2px solid $green;
    }
    .filter-by__divider {
      // border: 1px solid red;
      margin: 0 20px;
      color: rgba(0,0,0,.2);
    }
  }
  .found-recipes {
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
  }
}

</style>
