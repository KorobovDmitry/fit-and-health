<template>
  <div class="food-calorie-table">
    <app-page-title>Таблица калорийности продуктов</app-page-title>
    <div class="food-calorie-table__content">
      <app-page-info
        :infoElements="pageInfoElements"
        btnTitle="Добавить продукт"
        @btnAction="openModal()"
      />
      <div class="food-calorie-table__filters-and-table">
        <sorting-filters />
        <product-table />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppPageInfo from '@/components/basic/AppPageInfo'
import SortingFilters from '@/components/foodCalorieTable/SortingFilters'
import ProductTable from '@/components/foodCalorieTable/ProductTable'

export default {
  async fetch ({ store }) {
    await store.dispatch('foodCalorieTable/getAllProducts')
  },
  components: {
    AppPageTitle,
    AppPageInfo,
    SortingFilters,
    ProductTable
  },
  data () {
    return {
      pageInfoElements: [
        {
          title: 'Всего продуктов',
          value: 235
        },
        {
          title: 'Категорий',
          value: 14
        },
        {
          title: 'Избранное',
          value: 42
        },
        {
          title: 'Мои продукты',
          value: 12
        }
      ]
    }
  },
  methods: {
    openModal () {
      console.log('Открыть модальное окно "Добавить продукт"')
    }
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
