<template>
  <div class="food-parts__wrapper">

    <div class="food-part">
      <food-part-overview />
      <food-part-product-list />
    </div>
    <div class="food-part">
      <food-part-overview />
      <food-part-product-list />
    </div>
    <div class="food-part">
      <food-part-overview />
      <food-part-product-list />
    </div>

    <app-button size16px uppercase fillArea mt20>Добавить прием пищи в рацион на сегодня</app-button>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
import FoodPartOverview from '@/components/nutritionDiary/MealPlaner/FoodParts/FoodPartOverview.vue'
import FoodPartProductList from '@/components/nutritionDiary/MealPlaner/FoodParts/FoodPartProductList.vue'
export default {
  components: {
    AppButton,
    FoodPartOverview,
    FoodPartProductList
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
  margin-bottom: 20px;
  .food-part {
    // border: 1px solid red;
    display: flex;
    margin-bottom: 20px;
  }
}
</style>
