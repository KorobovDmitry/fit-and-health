<template>
  <div class="food-calorie-table">
    <app-page-title>Таблица калорийности продуктов</app-page-title>
    <div class="food-calorie-table__content">
      <page-info />
      <div class="food-calorie-table__filters-and-table">
        <sorting-filters />
        <product-table />
      </div>
    </div>
    <app-notifications />
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import PageInfo from '@/components/foodCalorieTable/PageInfo'
import SortingFilters from '@/components/foodCalorieTable/SortingFilters'
import ProductTable from '@/components/foodCalorieTable/ProductTable'

import AppNotifications from '@/components/basic/AppNotifications'

export default {
  async fetch ({ store }) {
    await store.dispatch('foodCalorieTable/getAllProducts')
  },
  components: {
    AppPageTitle,
    PageInfo,
    SortingFilters,
    ProductTable,
    AppNotifications
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
  margin-left: 80px;
  padding: 40px;
  .food-calorie-table__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .food-calorie-table__filters-and-table {
      display: flex;
    }
  }
}

</style>
