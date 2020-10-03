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
              :marks="[1,2]"
              @addMark="addMark($event)"
              @removeMark="removeMark($event)"
            />
          </div>
          <nutrients-calculations />
        </div>
      </div>


      <div class="constructor">
        <div class="meal-parts-and-actions">
          <div class="meal-parts">
            <div class="meal-part meal-part--active">
              <p class="meal-part__title">Завтрак</p>
            </div>
            <div class="meal-part">
              <p class="meal-part__title">Обед</p>
            </div>
            <div class="meal-part">
              <p class="meal-part__title">Перекус</p>
            </div>
            <div class="meal-part">
              <p class="meal-part__title">Ужин</p>
            </div>
          </div>
          <div class="actions">
              <i class="ti-plus"></i>
              <i class="ti-marker-alt"></i>
              <nuxt-link to="/meal-planer/meal-plan-editor">
                <i class="ti-save-alt"></i>
              </nuxt-link>
              <i class="ti-trash"></i>
            </div>
        </div>
        <div class="meal-part-settings">
          <div class="info">
            <div class="title-and-time">
              <app-input-text value="Завтрак" />
              <app-input-text class="ml-10" value="08 : 00" />
            </div>
            <app-textarea class="mt-10 fill-area" value="Небольшое описание" />
          </div>
          <div class="meal-part-nutrients">
            <div class="nutrients-stats">
              <div class="nutrients-stats__item">
                <div class="item__indicator"></div>
                <p class="item__title">Белки</p>
                <p class="item__value">30%</p>
              </div>
              <div class="nutrients-stats__item">
                <div class="item__indicator"></div>
                <p class="item__title">Жиры</p>
                <p class="item__value">20%</p>
              </div>
              <div class="nutrients-stats__item">
                <div class="item__indicator"></div>
                <p class="item__title">Углеводы</p>
                <p class="item__value">50%</p>
              </div>
            </div>
            <div class="chart">
              1768<br>ккал
            </div>
          </div>
        </div>
        <div class="quick-search-and-added-products">
          <div class="quick-search">quick-search</div>
          <div class="added-products">added-products</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import OverviewTitle from '@/components/mealPlaner/MealPlan/OverviewTitle'
import NutrientsSettings from '@/components/mealPlaner/MealPlan/NutrientsSettings'
import OverviewStats from '@/components/mealPlaner/MealPlan/OverviewStats'
import OverviewDescription from '@/components/mealPlaner/MealPlan/OverviewDescription'
import AppAddMarksForm from '@/components/basic/AppAddMarksForm'
import NutrientsCalculations from '@/components/mealPlaner/MealPlan/NutrientsCalculations'

import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'

export default {
  components: {
    AppBlockTitle,
    OverviewTitle,
    NutrientsSettings,
    OverviewStats,
    OverviewDescription,
    AppAddMarksForm,
    NutrientsCalculations,

    AppInputText,
    AppTextarea
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

.constructor {
    margin-top: 5px;
    // padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    overflow: hidden;
    .meal-parts-and-actions {
      display: flex;
      border-bottom: 1px solid $blockBorder;
      .meal-parts {
        // border: 1px solid red;
        flex: 1 1 auto;
        display: flex;
        .meal-part {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          padding: 15px 20px;
          max-width: 200px;
          border-right: 1px solid $blockBorder;
          cursor: pointer;
          .meal-part__title {
            text-transform: uppercase;
            font-size: 14px;
            text-align: center;
            font-weight: 500;
          }
        }
        .meal-part--active {
          background: $green;
          color: $white;
          border-right: none;
          .meal-part__title {
            font-weight: 600;
          }
        }
      }
      .actions {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        padding: 0 5px;
        i {
          margin: 0 5px;
          padding: 5px;
          font-size: 18px;
          transition: $tr-02;
          cursor: pointer;
        }
        i:hover {
          background: $green;
          color: $white;
          border-radius: 6px;
        }
      }
    }
    
    .meal-part-settings {
      // border: 1px solid red;
      display: flex;
      padding: 20px 10px;
      border-bottom: 1px dashed $blockBorder;
      .info {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        .title-and-time {
          display: flex;
        }
      }
      .meal-part-nutrients {
        display: flex;
        margin-left: 10px;
        padding: 10px 20px;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .chart {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 150px;
          border: 6px solid $blue;
          border-radius: 50%;
        }
        .nutrients-stats {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 20px;
          padding-right: 20px;
          border-right: 1px dashed $blockBorder;
          .nutrients-stats__item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            .item__indicator {
              width: 10px;
              height: 10px;
              background: $green;
              border-radius: 50%;
            }
            .item__title {
              margin: 0 20px 0 10px;
              // font-size: 14px;
            }
            .item__value {
              margin-left: auto;
              // font-size: 18px;
              font-weight: 500;
            }
          }
          .nutrients-stats__item:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    .quick-search-and-added-products {
      display: flex;
      padding: 20px 10px;
      .quick-search {
        padding: 10px;
        width: 400px;
        height: 500px;
        background: rgba(0, 0, 0, 0.025);
        box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
      }
      .added-products {
        flex: 1 1 auto;
        margin-left: 10px;
        padding: 10px;
        // width: 400px;
        height: 500px;
        background: rgba(0, 0, 0, 0.025);
        box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
      }
    }
  }

</style>
