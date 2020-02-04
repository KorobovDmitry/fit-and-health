<template>
  <div class="meal-plan">
    <app-block-title>Рацион на сутки</app-block-title>

    <meal-plan-overview />
    <nutrients-calculate />

    <meal-parts />
    <meal-editor />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MealPlanOverview from '@/components/mealPlaner/MealPlan/MealPlanOverview/index'
import NutrientsCalculate from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsCalculate'
import MealParts from '@/components/mealPlaner/MealPlan/MealParts/index'
import MealEditor from '@/components/mealPlaner/MealPlan/MealEditor/index'

export default {
  components: {
    AppBlockTitle,
    MealPlanOverview,
    NutrientsCalculate,
    MealParts,
    MealEditor
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

</style>