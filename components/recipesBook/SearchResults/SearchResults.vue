<template>
  <div class="search-results">

    <p class="search-results__block-title">Поиск рецептов</p>

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

    <div class="recipes-block__wrapper">
      <div class="small-block">small block</div>
      <div class="big-block">big block</div>
      <div class="big-block">big block</div>
      <div class="small-block">small block</div>
      <div class="small-block">small block</div>
      <div class="big-block">big block</div>
      <div class="big-block">big block</div>
      <div class="small-block">small block</div>
    </div>

    <app-button sizeSM uppercase center>Загрузить еще</app-button>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
import AppSearchBlock from '@/components/basic/AppSearchBlock.vue'
export default {
  components: {
    AppButton,
    AppSearchBlock
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.search-results {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .search-results__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .filter-by {
    // border: 1px solid red;
    display: flex;
    // justify-content: center;
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
  .recipes-block__wrapper {
    display: flex;
    flex-wrap: wrap;
    // margin-bottom: 30px;
    .small-block {
      // margin: 10px;
      background: $white;
      width: calc(35% - 20px);
      height: 440px;
      border: 1px solid rgba(0,0,0,.2);
    }
    .big-block {
      // margin: 10px;
      // margin-left: 0;
      background: $white;
      width: calc(65% - 20px);
      height: 440px;
      border: 1px solid rgba(0,0,0,.2);
    }
  }
}

</style>
