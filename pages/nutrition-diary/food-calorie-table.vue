<template>
  <div class="food-calorie-table">
    <div class="food-calorie-table__content-wrapper">
      <p class="food-calorie-table__page-title">Таблица калорийности продуктов</p>
      <div class="food-calorie-table__content">
        <overview-products-info />
        <sorting-filters />
        <product-table />
      </div>
    </div>
  </div>
</template>

<script>
import OverviewProductsInfo from '@/components/nutritionDiary/FoodCalorieTable/OverviewProductsInfo.vue'
import SortingFilters from '@/components/nutritionDiary/FoodCalorieTable/SortingFilters/SortingFilters.vue'
import ProductTable from '@/components/nutritionDiary/FoodCalorieTable/ProductTable/ProductTable.vue'
export default {
  middleware: ['user-auth'],
  components: {
    OverviewProductsInfo,
    SortingFilters,
    ProductTable
  },
  async fetch ({ store }) {
    await store.dispatch('foodCalorieTable/getAllProducts')
  },
  beforeMount: function () {
    this.$store.commit('nutritionDiary/openSidebar')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.food-calorie-table {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .food-calorie-table__content-wrapper {
    // border: 1px solid red;
    margin-top: 60px;
    padding: 40px 40px 20px 40px;
    width: 100%;
    max-width: 1400px;
  }
  .food-calorie-table__page-title {
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    font-size: 26px;
  }
  .food-calorie-table__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
}

</style>
