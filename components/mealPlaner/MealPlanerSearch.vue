<template>
  <div class="products-and-recipes">
    <p class="products-and-recipes__block-title">Поиск</p>
    <div class="products-and-recipes__search-tabs">
      <div class="search-tabs__tabs-wrapper">
        <div class="tab tab--active">Продукты</div>
        <div class="tab">Рецепты</div>
        <div class="tab">Рационы</div>
      </div>
      <div class="search-tabs__content-wrapper">
        <app-search-block small />
        <ul class="products-list">
          <li v-for="(item, index) in 5" :key="index" class="product-item">
            <div class="top">
              <!-- <i class="ti-arrow-down"></i> -->
              <p class="title">Гречка</p>
              <i class="ti-more"></i>
            </div>
            <div class="bottom">
              <div class="nutrients">
                <div class="nutrients__element">
                  <p class="element__text">Белки:</p>
                  <p class="element__value">20.1</p>
                </div>
                <div class="nutrients__element">
                  <p class="element__text">Жиры:</p>
                  <p class="element__value">0.55</p>
                </div>
                <div class="nutrients__element">
                  <p class="element__text">Углеводы:</p>
                  <p class="element__value">78.48</p>
                </div>
                <div class="nutrients__element">
                  <p class="element__text">Калорийность:</p>
                  <p class="element__value">1878.48</p>
                </div>
              </div>
              <div class="product__img-wrapper">
                <img class="product__img" src="https://cs5.pikabu.ru/post_img/big/2014/12/31/8/1420033076_58397623.jpg" alt="img">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AppSearchBlock from '@/components/basic/AppSearchBlock'
export default {
  components: {
    AppSearchBlock
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.products-and-recipes {
  // border: 1px solid red;
  margin-right: 40px;
  min-width: 400px;
  max-width: 400px;
  .products-and-recipes__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .products-and-recipes__search-tabs {
    // border: 1px solid red;
    .search-tabs__tabs-wrapper {
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      .tab {
        margin-left: 6px;
        padding: 10px 20px;
        background: $gray-light;
        color: $gray-dark;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        transition: $tr-02;
        cursor: pointer;
      }
      .tab:first-child {
        margin-left: 0;
        border-bottom: none;
      }
      .tab:hover {
        background: rgba(0,0,0,.1);
        color: $black;
      }
      .tab--active {
        color: $black;
        background: $white;
        border: 1px solid $blockBorder;
        border-bottom: none;
        z-index: 2;
      }
      .tab--active:hover {
        background: $white;
      }
    }
    .search-tabs__content-wrapper {
      // border: 1px solid red;
      position: relative;
      z-index: 1;
      margin-top: -1px;
      padding: 10px;
      // height: 500px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .products-list {
        margin-top: 10px;
        padding: 10px;
        // background: $app-background;
        border-radius: 6px;
        height: 500px;
        box-shadow: inset 0 0px 3px 0px rgba(0,0,0,.4);
        overflow: auto;
        .product-item {
          // border: 1px solid red;
          margin-bottom: 10px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          position: relative;
          z-index: -1;
          .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px 10px 10px;
            border-bottom: 1px dashed $blockBorder;
            .title {
              // padding-bottom: 10px;
              font-weight: 500;
            }
          }
          .bottom {
            display: flex;
            align-items: center;
            // justify-content: space-between;
            .nutrients {
              // border: 1px solid red;
              width: 100%;
              padding: 10px 20px 0 10px;
              .nutrients__element {
                // border: 1px solid red;
                display: flex;
                align-items: center;
                font-size: 12px;
                .element__text {
                  // width: 120px;
                  // margin-right: 60px;
                  // font-weight: 500;
                }
                .element__value {
                  margin-left: auto;
                  color: $green;
                  font-weight: 600;
                }
              }
            }
            .product__img-wrapper {
              margin: 10px 10px 0px 0px;
              padding: 10px;
              border: 1px solid $blockBorder;
              border-radius: 6px;
              width: 100px;
              min-width: 100px;
              max-width: 100px;
              height: 60px;
              min-height: 60px;
              max-height: 60px;
              overflow: hidden;
              .product__img {
                margin-top: -10px;
              }
            }
          }
        }
        .product-item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

</style>
