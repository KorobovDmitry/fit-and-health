<template>
  <div>
    <p>editor</p>

    <meal-parts />
    <meal-editor />
  </div>
</template>

<script>
import MealParts from '@/components/mealPlanEditor/MealPlanConstructor/Editor/MealParts/index'
import MealEditor from '@/components/mealPlanEditor/MealPlanConstructor/Editor/MealEditor/index'

export default {
  components: {
    MealParts,
    MealEditor
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

</style>
