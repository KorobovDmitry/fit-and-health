<template>
  <div class="meal-plan-contructor">
    <app-block-title>Конструктор</app-block-title>
    <div class="meal-plan-contructor__content">
      <overview />
      <editor />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import Overview from '@/components/mealPlanEditor/MealPlanConstructor/Overview/index'
import Editor from '@/components/mealPlanEditor/MealPlanConstructor/Editor/index'

export default {
  components: {
    AppBlockTitle,
    Overview,
    Editor
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan-contructor {
  // border: 1px solid red;
  flex: 1 1 auto;
  .meal-plan-contructor__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
  }
}


</style>
