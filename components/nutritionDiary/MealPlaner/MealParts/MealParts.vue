<template>
  <div class="food-parts__wrapper">

    <div
      v-for="(element, index) in mealParts" :key="index"
      class="food-part"
    >
      <meal-part-overview :element="element" />
      <meal-part-product-list :element="element" />
    </div>

    <app-button size16px uppercase fillArea @click.native="openModalNewMealPart()">Добавить прием пищи в рацион на сегодня</app-button>

    <meal-part-modal/>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
import MealPartOverview from '@/components/nutritionDiary/MealPlaner/MealParts/MealPartOverview.vue'
import MealPartProductList from '@/components/nutritionDiary/MealPlaner/MealParts/MealPartProductList.vue'
import MealPartModal from '@/components/nutritionDiary/MealPlaner/MealParts/Modal/MealPartModal'
export default {
  components: {
    AppButton,
    MealPartOverview,
    MealPartProductList,
    MealPartModal
  },
  computed: {
    mealParts () {
      return this.$store.getters['mealPlaner/getMealParts']
    }
  },
  methods: {
    openModalNewMealPart () {
      // Формируем объект с данными, которые будут отображены в модальном окне
      const newMealPartModal = {
        modalTitle: 'Новый прием пищи',
        modalSubtitle: 'Заполните форму и нажмите сохранить',
        mealPartNumber: null,
        mealPartTitle: '',
        mealPartSubtitle: '',
        mealPartProducts: []
      }
      this.$store.commit('mealPlaner/setMealPartModalInfo', newMealPartModal)
      this.$store.commit('mealPlaner/setMealPartModalActive')
      // проверяем загружен ли список продуктов из базы
      if (this.$store.getters['products/getAllProducts'].length === 0) {
        // console.log('продукты еще не загружены. нужно выполнить диспатч')
        this.$store.dispatch('products/fetchAllProducts')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.food-parts__wrapper {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  // margin-bottom: 20px;
  .food-part {
    // border: 1px solid red;
    display: flex;
    margin-bottom: 20px;
  }
}
</style>
