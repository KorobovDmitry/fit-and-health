<template>
  <div class="meal-planer">
    <div class="meal-planer__content-wrapper">
      <p class="meal-planer__page-title">Планировщик рациона</p>
      <div class="meal-planer__content">
        <nutritients />
        <date-selection />
        <meal-parts />
      </div>
    </div>
  </div>
</template>

<script>
import Nutritients from '@/components/nutritionDiary/MealPlaner/Nutritients.vue'
import DateSelection from '@/components/nutritionDiary/MealPlaner/DateSelection.vue'
import MealParts from '@/components/nutritionDiary/MealPlaner/MealParts/MealParts.vue'
export default {
  middleware: ['user-auth'],
  async fetch ({ store }) {
    await store.dispatch('mealPlaner/getCurrentDayMealPlanerInfo')
  },
  components: {
    Nutritients,
    DateSelection,
    MealParts
  },
  beforeMount: function () {
    this.$store.commit('nutritionDiary/openSidebar')
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
  padding: 100px 40px 40px 40px;
  .meal-planer__content-wrapper {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1800px;
    .meal-planer__page-title {
      text-align: center;
      font-size: 26px;
    }
    .meal-planer__content {
      display: flex;
      flex-direction: column;
    }
  }
}

</style>
