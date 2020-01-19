<template>
  <div class="meal-editor">

    <div class="meal-editor__quick-search">
      <app-block-title>Поиск продуктов и рецептов</app-block-title>

      <app-search-block small filters>
        <template v-slot:searchFilters>
          <div>
            <div>
              Показывать
              Продукты
              Рецепты
            </div>
            <p>все продукты</p>
            <p>мои продукты</p>
            <p>избранные</p>
          </div>
        </template>
      </app-search-block>

      <ul class="quick-search__found-items-list">
        <li v-for="(item, index) in 2" :key="index" class="found-items-list__product-list-item">
          <div class="product">
            <div class="product__title-and-action-btn">
              <i class="ti-bookmark product__favorite-icon product__favorite-icon--active"></i>
              <p class="product__title">Гречка</p>
              <i class="ti-more product__action-btn"></i>
            </div>
            <div class="product__nutrients-and-img">
              <div class="product__nutrients">
                <p class="nutrients__block-title">Содержание БЖУК:</p>
                <p class="nutrients__element">Белки: <span class="nutrients__amount">12,1</span> гр.</p>
                <p class="nutrients__element">Жиры: <span class="nutrients__amount">5,3</span> гр.</p>
                <p class="nutrients__element">Углеводы: <span class="nutrients__amount">78,2</span> гр.</p>
                <p class="nutrients__element">Калорийность: <span class="nutrients__amount">321,2</span> ккал.</p>
              </div>
              <img class="product__img" src="https://ic.pics.livejournal.com/palsanovich/25623435/954433/954433_1000.jpg" alt="">
            </div>
          </div>
        </li>
        
        <li class="found-items-list__recipe-list-item">
          <div class="recipe">
            <div class="recipe__title-and-action-btn">
              <!-- <i class="ti-bookmark recipe__favorite-icon"></i> -->
              <p class="recipe__title">Плов классический</p>
              <i class="ti-more recipe__action-btn"></i>
            </div>
            <div class="recipe__nutrients-and-img">
              <img class="recipe__img" src="https://pbs.twimg.com/media/DmFA8-eW4AEcIFH.jpg:large" alt="">
              <div class="recipe__nutrients">
                <p class="nutrients__block-title">Содержание БЖУК:</p>
                <p class="nutrients__element">Белки: <span class="nutrients__amount">12,1</span> гр.</p>
                <p class="nutrients__element">Жиры: <span class="nutrients__amount">5,3</span> гр.</p>
                <p class="nutrients__element">Углеводы: <span class="nutrients__amount">78,2</span> гр.</p>
                <p class="nutrients__element">Калорийность: <span class="nutrients__amount">321,2</span> ккал.</p>
              </div>
            </div>
            <div class="recipe__info">
              <div class="info__element">
                <i class="ti-timer element__icon"></i>
                <span class="element__text">25 мин.</span>
              </div>
              <div class="info__element">
                <i class="ti-pie-chart element__icon"></i>
                <span class="element__text">8 продуктов</span>
              </div>
              <div class="info__element">
                <i class="ti-crown element__cook-skill-icon"></i>
                <i class="ti-crown element__cook-skill-icon"></i>
                <i class="ti-crown element__cook-skill-icon"></i>
                <i class="ti-crown element__cook-skill-icon"></i>
                <i class="ti-crown element__cook-skill-icon"></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="meal-editor__meal-part-constructor">
      <app-block-title>Редактор приема пищи</app-block-title>
      <div class="meal-part-constructor">
        <div class="meal-part-constructor__title">
          <p>Название приема пищи</p>
          <input type="text">
        </div>
         <div class="meal-part-constructor__title">
          <p>Время приема пищи</p>
          <input type="text">
        </div>
        <div class="meal-part-constructor__title">
          <p>Короткое описание</p>
          <textarea>Короткое описание приема пищи</textarea>
        </div>
      </div>
      <div class="meal-part-products-and-recipes">
        <ul class="meal-part-products-and-recipes__list">
          <li class="list__header-item">
            <p class="header-item__element">Название</p>
            <i class="ti-image header-item__element"></i>
            <p class="header-item__element">Масса</p>
            <p class="header-item__element">Белки</p>
            <p class="header-item__element">Жиры</p>
            <p class="header-item__element">Углеводы</p>
            <p class="header-item__element">Ккал</p>
          </li>
        </ul>
      </div>
      <div class="meal-part-nutrients">
        <div class="meal-part-nutrients__element">
          <p class="element__text">Белки</p>
          <p class="element__value">18.4</p>
        </div>
        <div class="meal-part-nutrients__element">
          <p class="element__text">Жиры</p>
          <p class="element__value">5.4</p>
        </div>
        <div class="meal-part-nutrients__element">
          <p class="element__text">Углеводы</p>
          <p class="element__value">45.9</p>
        </div>
        <div class="meal-part-nutrients__element">
          <p class="element__text">Калорийность</p>
          <p class="element__value">286.3</p>
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

.meal-editor {
  display: flex;
  .meal-editor__quick-search {
    // border: 1px solid red;
    width: 400px;
    min-width: 400px;
    max-width: 400px;
    .quick-search__found-items-list {
      margin-top: 10px;
      .found-items-list__product-list-item {
        margin-bottom: 5px;
        .product {
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .product__title-and-action-btn {
            display: flex;
            // justify-content: space-between;
            margin-bottom: 10px;
            .product__favorite-icon {
              margin-top: -12px;
              color: $gray;
              font-size: 30px;
            }
            .product__favorite-icon--active {
              color: $green;
            }
            .product__title {
              flex: 1 1 auto;
              margin-left: 10px;
              font-weight: 500;
            }
            .product__action-btn {
              margin-right: 10px;
              margin-left: auto;
            }
          }
          .product__nutrients-and-img {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 10px;
            border-top: 1px dashed $blockBorder;
            .product__nutrients {
              margin-left: 10px;
              .nutrients__block-title {
                margin-bottom: 5px;
                font-size: 14px;
                font-weight: 500;
              }
              .nutrients__element {
                font-size: 12px;
                .nutrients__amount {
                  color: $green;
                  font-weight: 600;
                }
              }
            }
            .product__img {
              margin-right: 10px;
              width: 150px;
              // height: 60px;
              border: 1px solid $blockBorder;
              border-radius: 6px;
            }
          }
        }
        
      }
      .found-items-list__recipe-list-item {
        margin-bottom: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .recipe {
          .recipe__title-and-action-btn {
            display: flex;
            .recipe__title {
              margin-left: 10px;
              font-weight: 500;
            }
            .recipe__action-btn {
              margin-left: auto;
              margin-right: 10px;
            }
          }
          .recipe__nutrients-and-img {
            display: flex;
            align-items: center;
            margin-top: 10px;
            padding: 10px;
            border-top: 1px dashed $blockBorder;
            .recipe__img {
              width: 150px;
              border: 1px solid $blockBorder;
              border-radius: 6px;
            }
            .recipe__nutrients {
              margin-left: 20px;
              .nutrients__block-title {
                margin-bottom: 5px;
                font-size: 14px;
                font-weight: 500;
              }
              .nutrients__element {
                font-size: 12px;
                .nutrients__amount {
                  color: $green;
                  font-weight: 600;
                }
              }
            }
          }
          .recipe__info {
            display: flex;
            // margin-top: 10px;
            padding-top: 10px;
            border-top: 1px dashed $blockBorder;
            .info__element {
              flex: 1 1 auto;
              text-align: center;
              border-right: 1px solid $blockBorder;
              font-size: 14px;
              .element__icon {
                margin-right: 5px;
              }
              .element__text {
                font-weight: 500;
              }
            }
            .info__element:last-child {
              border: none;
            }
          }
        }
      }
    }
  }
  .meal-editor__meal-part-constructor {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 40px;
    .meal-part-constructor {
      margin-bottom: 5px;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .meal-part-products-and-recipes {
      flex: 1 1 auto;
      margin-bottom: 5px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .meal-part-products-and-recipes__list {
        .list__header-item {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 5px 0;
          background: $green;
          border-radius: 6px;
          color: $white;
          font-size: 14px;
          .header-item__element {
            flex: 1 1 auto;
            border-right: 1px solid $white;
            text-align: center;
          }
          .header-item__element:last-child {
            border: none;
          }
        }
      }
    }
    .meal-part-nutrients {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .meal-part-nutrients__element {
        flex: 1 1 auto;
        border-right: 1px solid $blockBorder;
        text-align: center;
        .element__text {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 5px;
        }
        .element__value {
          color: $green;
          // font-size: 18px;
          font-weight: 600;
        }
      }
      .meal-part-nutrients__element:last-child {
        border: none;
      }
    }
  }
}

</style>