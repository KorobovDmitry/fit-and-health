<template>
  <div class="meal-planer">
    <div class="meal-planer__content">

      <div class="content__left-block">
        <meal-plan />
      </div>

      <div class="content__right-block">
        <nutrients-settings />
        <useful-pages />
      </div>

    </div>
  </div>
</template>

<script>
import MealPlan from '@/components/mealPlaner/MealPlan/index'
import NutrientsSettings from '@/components/mealPlaner/NutrientsSettings'
import UsefulPages from '@/components/mealPlaner/UsefulPages'
export default {
  middleware: ['user-auth'],
  async fetch ({ store }) {
    // await store.dispatch('mealPlaner/getCurrentDayMealPlanerInfo')
  },
  components: {
    MealPlan,
    NutrientsSettings,
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
  margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .meal-planer__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
    .content__left-block {
      margin-right: 40px;
      flex: 1 1 auto;
    }
    .content__right-block {
      display: flex;
      flex-direction: column;
      width: 400px;
      max-width: 400px;
      min-width: 400px;
    }
  }
}

</style>
