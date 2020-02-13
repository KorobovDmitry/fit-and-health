<template>
  <div class="meal-planer-settings">
    <app-block-title>Цель на сегодня</app-block-title>
    <meal-planer-calendar />
    <nutrients-settings />
    <useful-pages />
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MealPlanerCalendar from '@/components/mealPlaner/MealPlanerSettings/MealPlanerCalendar'
import NutrientsSettings from '@/components/mealPlaner/MealPlanerSettings/NutrientsSettings'
import UsefulPages from '@/components/mealPlaner/MealPlanerSettings/UsefulPages'

export default {
  components: {
    AppBlockTitle,
    MealPlanerCalendar,
    NutrientsSettings,
    UsefulPages
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-planer-settings {
  // border: 1px solid red;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
}

</style>
