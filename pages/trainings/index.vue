<template>
  <div class="training-programs">
    <app-page-title>Дневник тренировок</app-page-title>
    <div class="training-programs__content">
      <!-- <page-info /> -->

      <!-- <div class="left">
        <p>Календарь тренировок</p>
        <meal-planer-calendar />
      </div>-->
      <div class="center">
        <main-training-program />
        <div class="best-results">
          <app-block-title>Лучшие результаты по отслеживаемым упражнениям</app-block-title>
        </div>
      </div>
      <div class="right">
        <app-block-title>Календарь тренировок</app-block-title>
        <meal-planer-calendar />

        <div class="useful-pages">
          <app-block-title>Полезные страницы</app-block-title>
          <div class="useful-pages__elements">
            
            <nuxt-link tag="a" to="/trainings/#" class="element">
              <i class="ti-book element__icon"></i>
              <p class="element__text">Справочник<br>по упражнениям</p>
            </nuxt-link>
            <nuxt-link tag="a" to="/trainings/#" class="element">
              <i class="ti-clipboard element__icon"></i>
              <p class="element__text">Тренировочные<br>программы</p>
            </nuxt-link>
            <nuxt-link tag="a" to="/trainings/#" class="element">
              <i class="ti-pulse element__icon"></i>
              <p class="element__text">Пульс</p>
            </nuxt-link>
          </div>
        </div>
      </div>

      <!-- <training-programs-list /> -->
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle"
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import PageInfo from "@/components/trainings/PageInfo"
import MainTrainingProgram from "@/components/trainings/TrainingPrograms/MainTrainingProgram.vue"
import TrainingProgramsList from "@/components/trainings/TrainingPrograms/TrainingProgramsList.vue"
import MealPlanerCalendar from "@/components/mealPlaner/MealPlanerSettings/MealPlanerCalendar"

export default {
  components: {
    AppPageTitle,
    AppBlockTitle,
    PageInfo,
    MainTrainingProgram,
    TrainingProgramsList,
    MealPlanerCalendar
  },
  beforeCreate() {
    this.$store.commit("nutritionDiary/closeSidebar")
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-programs {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .training-programs__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
    .left {
      // width: 100%;
      margin-right: 40px;
      width: 400px;
    }
    .center {
      width: 100%;
    }
    .right {
      margin-left: 40px;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
    }
  }
}

.best-results {
  margin-top: 20px;
}

.useful-pages {
  margin-top: 20px;
  .useful-pages__elements {
    display: flex;
    flex-wrap: wrap;
    .element {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 5px;
      text-decoration: none;
      color: $black;
      font-family: $fontMontserrat;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      flex: 1 1 auto;
      margin-bottom: 5px;
      padding: 20px;
      cursor: pointer;

      .element__icon {
        font-size: 26px;
        transition: all 0.2s ease-in-out;
      }

      .element__text {
        margin-top: 15px;
        text-align: center;
        font-weight: 500;
        transition: all 0.2s ease-in-out;
      }
    }
    .element:hover {
      .element__icon {
        color: $green;
      }

      .element__text {
        color: $green;
      }
    }
  }
  
}

</style>
