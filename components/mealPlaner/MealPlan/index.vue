<template>
  <div class="meal-plan">
    <app-block-title>Рацион на сутки</app-block-title>
    <meal-plan-overview />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MealPlanOverview from '@/components/mealPlaner/MealPlan/MealPlanOverview/index'

export default {
  components: {
    AppBlockTitle,
    MealPlanOverview
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan {
  // margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

</style>