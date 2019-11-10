<template>
  <div class="sorting-filters">

    <p class="sorting-filters__block-title">Фильтры</p>

    <filter-radio-group
      groupTitle="Сортировка по"
      :valueList="sotringOptions"
      :defaultValue="sotringDefault"
      @inputGroupValueChanged="filters.sorting = $event"
    />

    <filter-check-group
      groupTitle="Время приема пищи"
      :valueList="mealtimeOptions"
      :defaultValue="mealtimeOptions"
      @inputGroupValueChanged="filters.mealtime = $event"
    />

    <filter-limit-group
      groupTitle="Калорийность на 100 гр."
      :startValue="0" :endValue="99999"
      @limitValueChanged="filters.kkalLimit = $event"
    />

    <filter-limit-group
      groupTitle="Время приготовления, мин."
      :startValue="0"
      :endValue="9999"
      @limitValueChanged="filters.cookingTimeLimit = $event"
    />

    <filter-check-group
      groupTitle="Сложность приготовления"
      :valueList="cookingDifficultyOptions"
      :defaultValue="cookingDifficultyOptions"
    />

    <filter-check-group
      groupTitle="Доп. предпочтения"
      :valueList="preferenceOptions"
      :defaultValue="[]"
    />

    <filter-check-group
      groupTitle="Содержит продукты"
      :valueList="productsOptions"
      :defaultValue="[]"
    />

    {{ filters }}

  </div>
</template>

<script>
import FilterRadioGroup from '@/components/recipesBook/SortingFilters/FilterRadioGroup'
import FilterCheckGroup from '@/components/recipesBook/SortingFilters/FilterCheckGroup'
// import FilterRangeGroup from '@/components/recipesBook/SortingFilters/FilterRangeGroup'
import FilterLimitGroup from '@/components/recipesBook/SortingFilters/FilterLimitGroup'
export default {
  components: {
    FilterRadioGroup,
    FilterCheckGroup,
    // FilterRangeGroup
    FilterLimitGroup
  },
  data () {
    return {
      filters: {
        sorting: '',
        mealtime: [],
        cookingTimeLimit: {},
        kkalLimit: {}
      },
      sotringOptions: ['Названию (от А до Я)', 'Названию (от Я до А)', 'Просмотрам', 'Времени приготовления', 'Лайкам', 'Калорийности'],
      sotringDefault: 'Названию (от А до Я)',
      mealtimeOptions: ['Завтрак', 'Обед', 'Ланч', 'Ужин', 'Перекус'],
      cookingDifficultyOptions: ['Легкая', 'Средняя', 'Высокая', 'Очень высокая'],
      preferenceOptions: ['Низкокалорийние', 'Веганские', 'Вегетариантские'],
      productsOptions: ['Рыба', 'Гречка', 'Курица', 'Яйцо', 'Свинина', 'Фрукты']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.sorting-filters {
  // border: 1px solid red;
  // margin-top: 40px;
  // margin-bottom: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .sorting-filters__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
}

</style>
