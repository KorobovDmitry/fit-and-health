<template>
  <div class="meal-planer">
    <app-page-title>Дневник питания</app-page-title>
    <div class="meal-planer__content">
      <meal-plan />
      <meal-planer-settings />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import MealPlan from '@/components/mealPlaner/MealPlan/index'
import MealPlanerSettings from '@/components/mealPlaner/MealPlanerSettings/index'

export default {
  head: {
    title: 'Fit and Heath - Дневник питания'
  },
  // middleware: ['userAuth'],
  async fetch ({isDev, route, store, env, params, query, req, res, redirect, error}) {
    await store.dispatch('mealPlaner/fetchMealPlanerInfo', query)
  },
  components: {
    AppPageTitle,
    MealPlan,
    MealPlanerSettings
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
  }
}

</style>
