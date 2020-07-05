<template>
  <div class="meal-plan-editor">
    <app-page-title>Редактор рациона</app-page-title>
    <div class="meal-plan-editor__content">

      <meal-plan-constructor />
      <base-settings />

    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import MealPlanConstructor from '@/components/mealPlanEditor/MealPlanConstructor/index'
import BaseSettings from '@/components/mealPlanEditor/BaseSettings/index'


export default {
  components: {
    AppPageTitle,
    MealPlanConstructor,
    BaseSettings
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
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

</style>