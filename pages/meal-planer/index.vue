<template>
  <div class="meal-planer">
    <div class="meal-planer__content">
      <!-- <div class="content__left">
        <meal-planer-search />
      </div> -->

      <div class="content__center">
        <meal-plan-overview />
        <!-- <meal-part /> -->
      </div>

      <div class="content__right">
        <!-- <meal-planer-search /> -->
        <nutrients-settings />
        <useful-pages />
        <!-- <nutrients-overview /> -->
      </div>

    </div>
  </div>
</template>

<script>
// import MealPart from '@/components/mealPlaner/MealPart'
import NutrientsSettings from '@/components/mealPlaner/NutrientsSettings'
import NutrientsOverview from '@/components/mealPlaner/NutrientsOverview'
import UsefulPages from '@/components/mealPlaner/UsefulPages'
import MealPlanOverview from '@/components/mealPlaner/MealPlanOverview/index'
import MealPlanerSearch from '@/components/mealPlaner/MealPlanerSearch'
export default {
  middleware: ['user-auth'],
  async fetch ({ store }) {
    // await store.dispatch('mealPlaner/getCurrentDayMealPlanerInfo')
  },
  components: {
    // MealPart,
    NutrientsSettings,
    NutrientsOverview,
    UsefulPages,
    MealPlanOverview,
    MealPlanerSearch
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
  margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .meal-planer__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
    .content__left {
      display: flex;
      flex-direction: column;
      width: 400px;
      max-width: 400px;
      min-width: 400px;
    }
    .content__center {
      // margin: 0 40px;
      margin-right: 40px;
      flex: 1 1 auto;
      // width: 100%;
      .meal-planer__search-and-meal-part {
        display: flex;
      }
    }
    .content__right {
      display: flex;
      flex-direction: column;
      width: 400px;
      max-width: 400px;
      min-width: 400px;
    }
  }
}

</style>
