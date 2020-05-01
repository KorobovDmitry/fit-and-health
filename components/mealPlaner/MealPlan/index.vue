<template>
  <div class="meal-plan">
    <app-block-title>Рацион на сутки</app-block-title>

    <div class="meal-plan__content-wrapper">
      <meal-plan-overview />
      <nutrients-calculate />
    </div>

    <div class="overview__action-btn">
      <app-button size16px uppercase class="action-btn">Очистить план питания на сегодня</app-button>

      <router-link tag="a" to="meal-planer/meal-plan-editor">
        <app-button size16px uppercase class="action-btn">Редактировать</app-button>
      </router-link>

      <router-link tag="a" to="meal-planer">
        <app-button size16px uppercase class="action-btn">Добавить в избранное</app-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MealPlanOverview from '@/components/mealPlaner/MealPlan/MealPlanOverview/index'
import NutrientsCalculate from '@/components/mealPlaner/MealPlan/MealPlanOverview/NutrientsCalculate'
import AppButton from "@/components/basic/AppButton.vue"

export default {
  components: {
    AppBlockTitle,
    MealPlanOverview,
    NutrientsCalculate,
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
  .meal-plan__content-wrapper {
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
  }
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