<template>
  <div class="meal-planer">
    <app-page-title>Дневник питания</app-page-title>
    <div class="meal-planer__content">
      <meal-plan />
      <div class="calendar-and-useful-pages">
        <app-block-title>Календарь</app-block-title>
        <meal-planer-calendar />
        <useful-pages />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import MealPlan from '@/components/mealPlaner/MealPlan/index'
import MealPlanerCalendar from '@/components/mealPlaner/MealPlanerCalendar'
import UsefulPages from '@/components/mealPlaner/UsefulPages'

export default {
  head: {
    title: 'Fit and Health - Дневник питания'
  },
  // middleware: ['userAuth'],
  async fetch ({isDev, route, store, env, params, query, req, res, redirect, error}) {
    await store.dispatch('mealPlaner/fetchMealPlanerInfo', query)
  },
  components: {
    AppPageTitle,
    AppBlockTitle,
    MealPlan,
    MealPlanerCalendar,
    UsefulPages
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vars.scss";

.meal-planer {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .meal-planer__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
    .calendar-and-useful-pages {
      // border: 1px solid red;
      margin-left: 40px;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
    }
  }
}

</style>
