<template>
  <div class="sorting-filters">

    <app-block-title>Фильтры</app-block-title>

    <div class="sorting-filters__elements">

      <filter-radio-group
        :filterGroupOpened="false"
        headerTitle="Сортировать по ..."
        :valueList="sortingBy"
        defaultValue="Названию (от А до Я)"
        @inputGroupValueChanged="test = $event"
      />

      <filter-radio-group
        :filterGroupOpened="false"
        headerTitle="Продукты"
        :valueList="productType"
        defaultValue="Все продукты"
        @inputGroupValueChanged="test = $event"
      />

      <filter-checkbox-group
        :filterGroupOpened="false"
        headerTitle="Категории"
        :valueList="productCategory"
        :defaultValue="selectedProductCategory"
        @inputGroupValueChanged="test = $event"
      >
        <template v-slot:btnWrapper>
          <app-button size14px uppercase>Очистить</app-button>
          <app-button size14px uppercase right>Выбрать все</app-button>
        </template>
      </filter-checkbox-group>

    </div>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import FilterRadioGroup from '@/components/basic/FilterRadioGroup'
import FilterCheckboxGroup from '@/components/basic/FilterCheckboxGroup'
export default {
  components: {
    AppButton,
    AppBlockTitle,
    FilterRadioGroup,
    FilterCheckboxGroup
  },
  data () {
    return {
      test: '',
      sortingBy: [
        'Названию (от А до Я)',
        'Названию (от Я до А)',
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
      productCategory: ['Мясо', 'Рыба', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
      selectedProductCategory: ['Мясо', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.sorting-filters {
  // border: 1px solid red;
  width: 400px;
}

</style>
