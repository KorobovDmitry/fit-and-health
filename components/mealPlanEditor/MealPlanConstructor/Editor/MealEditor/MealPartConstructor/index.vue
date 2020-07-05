<template>
  <div class="meal-part-constructor">
    <app-block-title>Редактор приема пищи</app-block-title>

    <!-- <main-settings /> -->
    <meal-customizer />

    <div class="meal-part-constructor__action-btn">
      <app-button size14px uppercase class="mt10" >Очистить список продуктов и рецептов</app-button>
      <app-button size14px uppercase class="mt10 ml10" >Сохранить изменения</app-button>
    </div>

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MainSettings from '@/components/mealPlaner/MealPlan/MealEditor/MealPartConstructor/MainSettings'
import MealCustomizer from '@/components/mealPlaner/MealPlan/MealEditor/MealPartConstructor/MealCustomizer/index'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    MainSettings,
    MealCustomizer,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-part-constructor {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 100%;
  .meal-part-constructor__action-btn {
    display: flex;
    justify-content: flex-end;
  }
}

</style>
