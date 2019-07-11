<template>
  <div class="filters">

    <div class="filters__title-block">
      <p class="filters__title">Фильтры</p>
      <i class="filters__title-icon ti-pencil-alt"></i>
    </div>

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
import FilterRadioGroup from '@/components/nutritionDiary/Recipes/Filters/FilterRadioGroup.vue'
import FilterCheckGroup from '@/components/nutritionDiary/Recipes/Filters/FilterCheckGroup.vue'
// import FilterRangeGroup from '@/components/nutritionDiary/Recipes/Filters/FilterRangeGroup.vue'
import FilterLimitGroup from '@/components/nutritionDiary/Recipes/Filters/FilterLimitGroup.vue'
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

.filters {
  // border: 1px solid red;
  margin-top: 40px;
  margin-bottom: 40px;
  min-width: 300px;
  max-width: 300px;
  .filters__title-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 6px;
    margin-bottom: 20px;
    border-bottom: 1px dashed rgba(0,0,0,.2);
    .filters__title {
      // border: 1px solid red;
      font-size: 24px;
      // font-weight: 600;
    }
    .filters__title-icon {
      font-size: 18px;
    }
  }
}

</style>
