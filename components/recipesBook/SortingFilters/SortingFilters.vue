<template>
  <div class="sorting-filters">

    <app-block-title>Фильтры</app-block-title>

    <!-- {{ filters }} -->

    <filter-radio-group
      headerTitle="Сортировать по ..."
      :valueList="sotringOptions"
      :defaultValue="sotringDefault"
      :filterGroupOpened="true"
      @inputGroupValueChanged="filters.sorting = $event"
    />

    <filter-checkbox-group
      headerTitle="Время приема пищи"
      :valueList="mealtimeOptions"
      :defaultValue="mealtimeOptions"
      :filterGroupOpened="true"
      @inputGroupValueChanged="filters.mealtime = $event"
    />

    <filter-limit-group
      groupTitle="Калорийность на 100 гр."
      :startValue="0"
      :endValue="99999"
      :filterGroupOpened="true"
      @limitValueChanged="filters.kkalLimit = $event"
    />

    <filter-limit-group
      groupTitle="Время приготовления, мин."
      :startValue="0"
      :endValue="9999"
      :filterGroupOpened="true"
      @limitValueChanged="filters.cookingTimeLimit = $event"
    />

    <filter-checkbox-group
      headerTitle="Сложность приготовления"
      :valueList="cookingDifficultyOptions"
      :defaultValue="cookingDifficultyOptions"
      :filterGroupOpened="true"
    />

    <filter-checkbox-group
      headerTitle="Доп. предпочтения"
      :valueList="preferenceOptions"
      :defaultValue="[]"
      :filterGroupOpened="true"
    />

    <filter-checkbox-group
      headerTitle="Содержит продукты"
      :valueList="productsOptions"
      :defaultValue="[]"
      :filterGroupOpened="true"
    />

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import FilterRadioGroup from '@/components/basic/FilterRadioGroup'
import FilterCheckboxGroup from '@/components/basic/FilterCheckboxGroup'
import FilterLimitGroup from '@/components/basic/FilterLimitGroup'

export default {
  components: {
    AppBlockTitle,
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
      sotringOptions: ['Названию', 'Просмотрам', 'Времени приготовления', 'Лайкам', 'Калорийности'],
      sotringDefault: 'Названию',
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
