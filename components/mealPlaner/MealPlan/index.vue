<template>
  <div class="meal-plan">
    <p class="meal-plan__block-title">Рацион на сутки</p>

    <div class="meal-plan__overview">
      <meal-plan-description />
    </div>

    <nutrients-calculate />

    <meal-part />
    <meal-editor />

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
import MealPlanDescription from '@/components/mealPlaner/MealPlan/MealPlanDescription'
import MealPart from '@/components/mealPlaner/MealPlan/MealPart'
import MealEditor from '@/components/mealPlaner/MealPlan/MealEditor'
import NutrientsCalculate from '@/components/mealPlaner/MealPlan/NutrientsCalculate'
export default {
  components: {
    AppButton,
    MealPlanDescription,
    MealPart,
    MealEditor,
    NutrientsCalculate
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  .meal-plan__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .meal-plan__overview {
    // border: 1px solid red;
    display: flex;
    margin-bottom: 5px;
  }
}

</style>