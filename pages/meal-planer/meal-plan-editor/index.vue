<template>
  <div class="meal-plan-editor">
    <app-page-title>Редактор рациона</app-page-title>
    <div class="meal-plan-editor__content">

meal-plan-editor

<nutrients-settings />
<nutrients-calculate />
<br>
<br>
<br>

    <meal-parts />
    <meal-editor />

    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import NutrientsSettings from '@/components/mealPlaner/MealPlanerSettings/NutrientsSettings'
import MealParts from '@/components/mealPlaner/MealPlan/MealParts/index'
import MealEditor from '@/components/mealPlaner/MealPlan/MealEditor/index'
import NutrientsCalculate from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsCalculate'

export default {
  components: {
    AppPageTitle,
    MealParts,
    MealEditor,
    NutrientsSettings,
    NutrientsCalculate
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan-editor {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .meal-plan-editor__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
  }
}

</style>