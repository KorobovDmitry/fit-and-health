<template>
  <div class="food-parts__wrapper">

    <div
      v-for="(element, index) in mealParts" :key="index"
      class="food-part"
    >
      <meal-part-overview :element="element" />
      <meal-part-product-list :element="element" />
    </div>

    <app-button size16px uppercase fillArea>Добавить прием пищи в рацион на сегодня</app-button>

    <meal-part-modal/>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
import MealPartOverview from '@/components/nutritionDiary/MealPlaner/MealParts/MealPartOverview.vue'
import MealPartProductList from '@/components/nutritionDiary/MealPlaner/MealParts/MealPartProductList.vue'
import MealPartModal from '@/components/nutritionDiary/MealPlaner/MealParts/MealPartModal'
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
  .meal-part__modal-content {
    // border: 1px solid red;
    .meal-part__modal-section-title {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
