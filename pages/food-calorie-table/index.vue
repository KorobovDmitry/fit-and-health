<template>
  <div class="food-calorie-table">
    <div class="food-calorie-table__content">

      <p class="food-calorie-table__page-title">Таблица калорийности продуктов</p>

      <page-info />

      <div class="food-calorie-table__filters-and-table">
        <!-- <sorting-filters /> -->
        <product-table />
      </div>

    </div>
  </div>
</template>

<script>
import PageInfo from '@/components/foodCalorieTable/PageInfo'
import SortingFilters from '@/components/foodCalorieTable/SortingFilters'
import ProductTable from '@/components/foodCalorieTable/ProductTable'
export default {
  components: {
    PageInfo,
    SortingFilters,
    ProductTable
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
  margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .food-calorie-table__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .food-calorie-table__page-title {
      margin-bottom: 40px;
      text-align: center;
      font-size: 28px;
    }
    .food-calorie-table__filters-and-table {
      display: flex;
    }
  }
}

</style>
