<template>
  <div class="meal-plan">
    <app-block-title>Рацион на сутки</app-block-title>

    <meal-plan-overview />
    <nutrients-calculate />
    <div class="overview__action-btn">
      <app-button size16px uppercase class="action-btn">Очистить план питания на сегодня</app-button>

      <router-link tag="a" to="training-diary/training-program-editor">
        <app-button size16px uppercase class="action-btn">Редактировать</app-button>
      </router-link>

      <router-link tag="a" to="training-diary/training-in-progress?training-programm=4-day-split">
        <app-button size16px uppercase class="action-btn">Сохранить как...</app-button>
      </router-link>
    </div>

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
import AppButton from "@/components/basic/AppButton.vue"

export default {
  components: {
    AppBlockTitle,
    MealPlanOverview,
    NutrientsCalculate,
    MealParts,
    MealEditor,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  .overview__action-btn {
    // border: 1px solid red;
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    min-width: 300px;
    .action-btn:first-child {
      margin-right: auto;
    }
    .action-btn:last-child {
      margin-left: 10px;
    }
  }
}

</style>