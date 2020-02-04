<template>
  <div class="meal-editor">
    <quick-search />
    <meal-part-constructor />
  </div>
</template>

<script>
import QuickSearch from '@/components/mealPlaner/MealPlan/MealEditor/QuickSearch/index'
import MealPartConstructor from '@/components/mealPlaner/MealPlan/MealEditor/MealPartConstructor/index'

export default {
  components: {
    QuickSearch,
    MealPartConstructor
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-editor {
  display: flex;
}

</style>