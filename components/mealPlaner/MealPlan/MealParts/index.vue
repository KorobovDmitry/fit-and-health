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
import MealPart from '@/components/mealPlaner/MealPlan/MealParts/MealPart'
import CreateMealPart from '@/components/mealPlaner/MealPlan/MealParts/CreateMealPart'



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
    // padding: 10px;
    // padding-bottom: 20px;
    // background: $hiddenBlockBG;
    // background: $white;
    // border: 1px solid $blockBorder;
    // border-radius: 6px;
  }
}

</style>