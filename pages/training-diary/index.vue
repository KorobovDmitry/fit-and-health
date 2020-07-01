<template>
  <div class="training-diary">
    <app-page-title>Дневник тренировок</app-page-title>

    <div class="training-diary__content">
      <div class="center">
        <main-training-program />
      </div>

      <div class="right">
        <app-block-title>Календарь тренировок</app-block-title>
        <meal-planer-calendar />

        <div class="useful-pages">
          <app-block-title>Полезные страницы</app-block-title>
          <div class="useful-pages__elements">
            <nuxt-link tag="a" to="/training-diary/training-programs" class="element">
              <i class="ti-clipboard element__icon"></i>
              <p class="element__text">Тренировочные<br>программы</p>
            </nuxt-link>
            <nuxt-link tag="a" to="/training-diary/exercise-guide" class="element">
              <i class="ti-book element__icon"></i>
              <p class="element__text">Справочник<br>по упражнениям</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle"
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import MainTrainingProgram from "@/components/training-diary/MainTrainingProgram/index"
import MealPlanerCalendar from "@/components/mealPlaner/MealPlanerSettings/MealPlanerCalendar"

export default {
  components: {
    AppPageTitle,
    AppBlockTitle,
    MainTrainingProgram,
    MealPlanerCalendar
  },
  fetch () {
    this.$store.dispatch('trainingDiary/fetchMainTrainingProgram')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-diary {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .training-diary__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
    .left {
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
