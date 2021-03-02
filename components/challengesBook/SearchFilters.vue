<template>
  <div class="search-filters">
    <app-block-title>Фильтры</app-block-title>

    <filter-radio-group
      :filterGroupOpened="true"
      headerTitle="Сортировать по ..."
      :valueList="sortingBy"
      defaultValue="Названию"
      @applyFunc="applyFilters()"
      @inputGroupValueChanged="applyFilters($event, 'sortingBy')"
    />

    <filter-radio-group
      :filterGroupOpened="true"
      headerTitle="Продукты"
      :valueList="productType"
      defaultValue="Все продукты"
      @applyFunc="applyFilters()"
      @inputGroupValueChanged="applyFilters($event, 'productType')"
    />

    <filter-checkbox-group
      :filterGroupOpened="true"
      headerTitle="Категории"
      :valueList="productCategories"
      :defaultValue="defaultProductCategories"
      @applyFunc="applyFilters()"
      @inputGroupValueChanged="applyFilters($event, 'productCategory')"
    >
      <template v-slot:btnWrapper>
        <app-button size14px uppercase>Очистить</app-button>
        <app-button size14px uppercase right>Выбрать все</app-button>
      </template>
    </filter-checkbox-group>

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import FilterRadioGroup from '@/components/basic/FilterRadioGroup'
import FilterCheckboxGroup from '@/components/basic/FilterCheckboxGroup'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    FilterRadioGroup,
    FilterCheckboxGroup,
    AppButton,
  },
  data () {
    return {
      sortingBy: [
        'Названию',
        'Белкам',
        'Жирам',
        'Углеводам',
        'Калорийности'
      ],
      productType: [
        'Все продукты',
        'Мои продукты',
        'Избранное'
      ],
      productCategories: ['тест 1', 'тест 2', 'тест 3', 'тест 4'],
      defaultProductCategories: []
    }
  },
  methods: {
    applyFilters () {
      console.log('Применить фильтр')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.search-filters {
  // border: 1px solid red;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
}
</style>
