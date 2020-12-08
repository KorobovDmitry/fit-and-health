<template>
  <div class="meal-plan">
    <app-block-title>Рацион на сутки</app-block-title>

    <div class="meal-plan__overview">
      <overview-title />

      <div class="settings-and-info">
        <nutrients-settings />

        <div class="info">
          <div class="stats-description-marks">
            <div class="stats-and-description">
              <overview-stats />
              <overview-description />
            </div>

            <app-add-marks-form
              class="mt-5"
              :marks="marks"
              @addMark="addMark($event)"
              @removeMark="removeMark($event)"
            />
          </div>
          <nutrients-calculations />
        </div>
      </div>

      <meal-parts-constructor />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppBlockTitle from '@/components/basic/AppBlockTitle'
import OverviewTitle from '@/components/mealPlaner/MealPlan/OverviewTitle'
import NutrientsSettings from '@/components/mealPlaner/MealPlan/NutrientsSettings'
import OverviewStats from '@/components/mealPlaner/MealPlan/OverviewStats'
import OverviewDescription from '@/components/mealPlaner/MealPlan/OverviewDescription'
import AppAddMarksForm from '@/components/basic/AppAddMarksForm'
import NutrientsCalculations from '@/components/mealPlaner/MealPlan/NutrientsCalculations'
import MealPartsConstructor from '@/components/mealPlaner/MealPlan/MealPartsConstructor/index'

export default {
  components: {
    AppBlockTitle,
    OverviewTitle,
    NutrientsSettings,
    OverviewStats,
    OverviewDescription,
    AppAddMarksForm,
    NutrientsCalculations,
    MealPartsConstructor
  },
  computed: {
    ...mapState({
      marks: state => state.mealPlaner.mealPlanerInfo.marks
    })
  },
  methods: {
    addMark ($event) {
      console.log($event)
    },
    removeMark ($event) {
      console.log($event)
    }
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
  .meal-plan__overview {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
    .settings-and-info {
      display: flex;
      .info {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        .stats-description-marks {
          display: flex;
          .stats-and-description {
            flex: 1 1 auto;
          }
        }
      }
    }
    .stats-and-description {
      display: flex;
      flex-direction: column;
    }
  }
}

</style>
