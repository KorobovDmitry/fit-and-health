<template>
  <div class="sorting-filters">

    <app-block-title>Фильтры</app-block-title>

    <div class="sorting-filters__elements">

      <filter-radio-group
        :filterGroupOpened="true"
        headerTitle="Сортировать по ..."
        :valueList="sortingBy"
        defaultValue="Названию"
        @applyFunc="applyFilters"
        @inputGroupValueChanged="applyFilters($event, 'sortingBy')"
      />

      <filter-radio-group
        :filterGroupOpened="true"
        headerTitle="Продукты"
        :valueList="productType"
        defaultValue="Все продукты"
        @applyFunc="applyFilters"
        @inputGroupValueChanged="applyFilters($event, 'productType')"
      />

      <filter-checkbox-group
        :filterGroupOpened="true"
        headerTitle="Категории"
        :valueList="productCategory"
        :defaultValue="selectedProductCategory"
        @applyFunc="applyFilters"
        @inputGroupValueChanged="applyFilters($event, 'productCategory')"
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
      selectedFilters: {
        sortingBy: 'Названию',
        productType: 'Все продукты',
        productCategory: this.$store.getters['foodCalorieTable/getProductCategories']
      },
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
      productCategory: this.$store.getters['foodCalorieTable/getProductCategories'],
      selectedProductCategory: this.$store.getters['foodCalorieTable/getProductCategories']
    }
  },
  methods: {
    applyFilters ($event, filterGroup) {
      switch (filterGroup) {
        case 'sortingBy':
          this.selectedFilters.sortingBy = $event
          break
        case 'productType':
          this.selectedFilters.productType = $event
          break
        case 'productCategory':
          this.selectedFilters.productCategory = $event
          break
        default:
          break
      }
      // отфильтровать продукты в store и перерендорить страницу
      this.$store.commit('foodCalorieTable/sortProducts', this.selectedFilters)
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
