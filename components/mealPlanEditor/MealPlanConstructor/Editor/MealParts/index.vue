<template>
  <div class="meal-parts">

    <app-block-title>Приемы пищи</app-block-title>

    <div class="meal-parts__wrapper">
      <meal-part />
      <create-meal-part />
    </div>

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MealPart from '@/components/mealPlanEditor/MealPlanConstructor/Editor/MealParts/MealPart'
import CreateMealPart from '@/components/mealPlanEditor/MealPlanConstructor/Editor/MealParts/CreateMealPart'



export default {
  components: {
    AppBlockTitle,
    MealPart,
    CreateMealPart
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-parts {
  margin-bottom: 20px;
  .meal-parts__wrapper {
    display: flex;
    padding: 10px;
    background: $white;
    border-radius: 6px;
    border: 1px solid $blockBorder;
    // box-shadow: 0 1px 4px 0px rgba(52, 40, 104, 0.4);
  }
}

</style>