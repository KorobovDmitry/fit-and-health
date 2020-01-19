<template>
  <div class="meal-plan-search">

    <app-block-title>Поиск рациона</app-block-title>

    <app-search-block small filters >
      <template v-slot:searchFilters>
        <div>
          filters
        </div>
      </template>
    </app-search-block>

    <div class="found-meal-plans">

      <div class="found-meal-plan found-meal-plan--active">

        <p class="found-meal-plan__title">Название рациона на сутки</p>

        <div class="found-meal-plan__overview">
          <div class="overview__img-wrapper">
            <img class="overview__img" src="https://s1.1zoom.me/big3/131/Baking_Powidl_492158.jpg" alt="">
          </div>
          <div class="found-meal-plan__nutrients">
            <p class="nutrients__block-title">Содержание БЖУК</p>
            <p class="nutrient__element">Белки: <span class="element__amount">78,4</span> гр.</p>
            <p class="nutrient__element">Жиры: <span class="element__amount">26,5</span> гр.</p>
            <p class="nutrient__element">Углеводы: <span class="element__amount">145,2</span> гр.</p>
            <p class="nutrient__element">Калорийность: <span class="element__amount">2145</span> ккал.</p>
          </div>
        </div>

        <div class="found-meal-plan__info">
          <div class="info__item">
            <i class="ti-timer item__icon"></i>
            <span class="item__amount">4</span>
            <span class="item__text">приемов пищи</span>
          </div>
          <div class="info__item">
            <i class="ti-receipt item__icon"></i>
            <span class="item__amount">3</span>
            <span class="item__text">блюда</span>
          </div>
          <div class="info__item">
            <i class="ti-pie-chart item__icon"></i>
            <span class="item__amount">8</span>
            <span class="item__text">продуктов</span>
          </div>
        </div>

        <!-- <div class="found-meal-plan__added-marks">
          <p class="added-marks__item">Низкоуглеводное</p>
          <p class="added-marks__item">Для похудения</p>
          <p class="added-marks__item">Без ГМО</p>
        </div> -->

      </div>

      <div class="found-meal-plan">
        <p class="found-meal-plan__title">Название рациона на сутки</p>
        <div class="found-meal-plan__overview">
          <div class="overview__img-wrapper">
            <img class="overview__img" src="https://s1.1zoom.me/big3/131/Baking_Powidl_492158.jpg" alt="">
          </div>
          <div class="found-meal-plan__nutrients">
            <p class="nutrients__block-title">Содержание БЖУК</p>
            <p class="nutrient__element">Белки: <span class="element__amount">78,4</span> гр.</p>
            <p class="nutrient__element">Жиры: <span class="element__amount">26,5</span> гр.</p>
            <p class="nutrient__element">Углеводы: <span class="element__amount">145,2</span> гр.</p>
            <p class="nutrient__element">Калорийность: <span class="element__amount">2145</span> ккал.</p>
          </div>
        </div>
        <div class="found-meal-plan__info">
          <div class="info__item">
            <i class="ti-timer item__icon"></i>
            <span class="item__amount">4</span>
            <span class="item__text">приемов пищи</span>
          </div>
          <div class="info__item">
            <i class="ti-receipt item__icon"></i>
            <span class="item__amount">3</span>
            <span class="item__text">блюда</span>
          </div>
          <div class="info__item">
            <i class="ti-pie-chart item__icon"></i>
            <span class="item__amount">8</span>
            <span class="item__text">продуктов</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
export default {
  components: {
    AppBlockTitle,
    AppSearchBlock
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan-search {
  // border: 1px solid red;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .found-meal-plans {
    margin-top: 20px;
    .found-meal-plan {
      margin-bottom: 10px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      cursor: pointer;
      transition: $tr-02;
      .found-meal-plan__title {
        text-align: center;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .found-meal-plan__overview {
        display: flex;
        margin-bottom: 10px;
        padding-top: 10px;
        border-top: 1px dashed $blockBorder;
        .overview__img-wrapper {
          width: 140px;
          min-width: 140px;
          max-width: 140px;
          .overview__img {
            border: 1px solid $blockBorder;
            border-radius: 6px;
          }
        }
        .found-meal-plan__nutrients {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
          .nutrients__block-title {
            margin-top: 5px;
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: 500;
          }
          .nutrient__element {
            font-size: 12px;
            .element__amount {
              color: $green;
              font-weight: 600;
            }
          }
        }
      }
      .found-meal-plan__info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px dashed $blockBorder;
        .info__item {
          flex: 1 1 auto;
          text-align: center;
          font-size: 14px;
          border-right: 1px solid $blockBorder;
          .item__icon {
            margin-left: 5px;
          }
          .item__amount {
            margin-left: 5px;
            font-weight: 500;
          }
          .item__text {
            font-size: 12px;
          }
        }
        .info__item:last-child {
          border: none
        }
      }
      .found-meal-plan__added-marks {
        display: flex;
        flex-wrap: wrap;
        padding-top: 5px;
        border-top: 1px dashed $blockBorder;
        .added-marks__item {
          margin-right: 5px;
          margin-top: 5px;
          padding: 5px 10px;
          background: $gray-light;
          border-radius: 6px;
          font-size: 12px;
          white-space: nowrap;
        }
      }
    }
    .found-meal-plan:last-child {
      margin-bottom: 0;
    }
    .found-meal-plan:hover {
      box-shadow: $btnHoverShadow;
    }
    .found-meal-plan--active {
      border: 2px solid $green;
    }
    .found-meal-plan--active:hover {
      box-shadow: none;
    }
  }
}

</style>
