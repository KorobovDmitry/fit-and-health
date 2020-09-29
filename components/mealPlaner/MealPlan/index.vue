<template>
  <div class="meal-plan">
    <app-block-title>Рацион на сутки</app-block-title>
    <meal-plan-overview />
    <div class="meal-plan__action-btns">
      <app-button class="mr-auto" size16px uppercase >Очистить план питания</app-button>
      <app-button size16px uppercase >Сохранить как...</app-button>
      <nuxt-link to="meal-planer/meal-plan-editor" class="ml-10">
        <app-button size16px uppercase >Редактировать</app-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'
import MealPlanOverview from '@/components/mealPlaner/MealPlan/MealPlanOverview/index'

export default {
  components: {
    AppBlockTitle,
    AppButton,
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
  flex: 1 1 auto;
  .meal-plan__action-btns {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
}

</style>