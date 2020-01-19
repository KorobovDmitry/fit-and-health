<template>
  <div class="sorting-filters">

    <p class="sorting-filters__block-title">Фильтры</p>

    <!-- {{ filters }} -->

    <filter-radio-group
      headerTitle="Сортировать по ..."
      :valueList="sotringOptions"
      :defaultValue="sotringDefault"
      @inputGroupValueChanged="filters.sorting = $event"
    />

    <filter-checkbox-group
      headerTitle="Время приема пищи"
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

    <filter-checkbox-group
      headerTitle="Сложность приготовления"
      :valueList="cookingDifficultyOptions"
      :defaultValue="cookingDifficultyOptions"
    />

    <filter-checkbox-group
      headerTitle="Доп. предпочтения"
      :valueList="preferenceOptions"
      :defaultValue="[]"
    />

    <filter-checkbox-group
      headerTitle="Содержит продукты"
      :valueList="productsOptions"
      :defaultValue="[]"
    />

  </div>
</template>

<script>
import FilterRadioGroup from '@/components/basic/FilterRadioGroup'
import FilterCheckboxGroup from '@/components/basic/FilterCheckboxGroup'
import FilterLimitGroup from '@/components/recipesBook/SortingFilters/FilterLimitGroup'
export default {
  components: {
    FilterRadioGroup,
    FilterCheckboxGroup,
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
