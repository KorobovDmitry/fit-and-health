<template>
  <div class="nutrients__wrapper">
    <nutritients-settings />
    <nutritients-charts />
  </div>
</template>

<script>
import NutritientsSettings from '@/components/nutritionDiary/MealPlaner/NutritientsSettings.vue'
import NutritientsCharts from '@/components/nutritionDiary/MealPlaner/NutritientsCharts.vue'
export default {
  components: {
    NutritientsSettings,
    NutritientsCharts
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients__wrapper {
  // border: 1px solid red;
  display: flex;
}
</style>
