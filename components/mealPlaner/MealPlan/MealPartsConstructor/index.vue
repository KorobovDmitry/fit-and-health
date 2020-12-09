<template>
  <div class="meal-parts-constructor">

    <p class="block-title">Редактор рациона</p>

    <div class="meal-parts">
      <div
        v-for="(item, index) in mealParts"
        :key="index"
        class="meal-part"
        :class="[{'meal-part--active' : index == selectedMealPart ? true : false}]"
        @click="changeSelectedMealPart(index)"
      >
        <p class="meal-part__title">{{ item.mealTime }} - {{ item.title }}</p>
      </div>
      <div class="meal-part">
        <i class="ti-plus"></i>
      </div>
    </div>

    <div class="added-products">
      <div class="settings-and-search">
        <div class="settings">
          <app-input-text :value="mealParts[selectedMealPart].mealTime" class="target-time" />
          <app-input-text :value="mealParts[selectedMealPart].title" />
        </div>
        <app-search-block placeholder="Поиск продуктов и рецептов" small />
        
        <div class="search__results">
          <div class="filters">
            <div class="filter__radio">
              <app-input-radio
                class="mr-10"
                v-for="(item, index) in filterByMarks"
                :key="index"
                v-model="filterByMarksChecked"
                :label="item"
                :value="item"
              />
            </div>

            <div class="filter__checbox">
              <app-input-checkbox
                class="mr-10"
                v-for="(item, index) in filterByType"
                :key="index"
                v-model="filterByTypeChecked"
                :label="item"
                :value="item"
              />
            </div>
          </div>

          <found-product-or-recipe v-for="(item,index) in 5" :key="index" />
        </div>
      </div>

      <added-product />
      <added-recipe />
      <added-product />
      <added-product />
      <added-product />
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppInputText from '@/components/basic/AppInputText'
import AppInputRadio from '@/components/basic/AppInputRadio'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import FoundProductOrRecipe from '@/components/mealPlaner/MealPlan/MealPartsConstructor/FoundProductOrRecipe'
import AddedProduct from '@/components/mealPlaner/MealPlan/MealPartsConstructor/AddedProduct'
import AddedRecipe from '@/components/mealPlaner/MealPlan/MealPartsConstructor/AddedRecipe'

export default {
  components: {
    AppInputText,
    AppInputRadio,
    AppInputCheckbox,
    AppSearchBlock,
    FoundProductOrRecipe,
    AddedProduct,
    AddedRecipe
  },
  data() {
    return {
      selectedMealPart: 0,
      filterByMarks: ['Все совпадения', 'Добавленные мной', 'Избранное'],
      filterByMarksChecked: 'Все совпадения',
      filterByType: ['Продукты', 'Рецепты'],
      filterByTypeChecked: ['Продукты', 'Рецепты'],
    }
  },
  computed: {
    ...mapState({
      mealParts: state => state.mealPlaner.mealPlanerInfo.mealParts
    })
  },
  methods: {
    changeSelectedMealPart(index) {
      this.selectedMealPart = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-parts-constructor {
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  overflow: hidden;
  .block-title {
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }

  .meal-parts {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    padding: 0 10px;
    .meal-part {
      // flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      margin-right: 5px;
      padding: 10px 20px;
      max-width: 200px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      border: 1px solid $blockBorder;
      border-bottom: none;
      cursor: pointer;
      .meal-part__title {
        text-transform: uppercase;
        font-size: 14px;
        text-align: center;
        font-weight: 500;
      }
    }
    .meal-part:last-child {
      margin-left: auto;
      padding: 10px;
      margin-right: 0;
      background: $green;
      color: $white;
      border: $green;
    }
    .meal-part--active {
      background: $green;
      color: $white;
      border: $green;
      .meal-part__title {
        font-weight: 600;
      }
    }
  }

  .added-products {
    flex: 1 1 auto;
    padding: 10px;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    .settings-and-search {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px dashed $blockBorder;
      .settings {
        display: flex;
        margin-bottom: 5px;
        .target-time {
          margin-right: 5px;
          max-width: 100px;
        }
      }
      .search__results {
        margin-top: 5px;
        background: $white;
        border-radius: 6px;
        border: 1px solid $blockBorder;
        .filters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 10px 20px 20px;
          border-bottom: 1px solid $blockBorder;
          .filter__radio {
            // display: flex;
            // align-items: center;
            // justify-content: flex-start;
          }
          .filter__checbox {
            // display: flex;
            // align-items: center;
            // justify-content: flex-start;
          }
        }
      }
    }
  }
}

</style>
