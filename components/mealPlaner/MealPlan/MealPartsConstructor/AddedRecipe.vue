<template>
  <div class="added-recipe">
    <div class="added-recipe__description">
      <div class="description__move-btn">
        <i class="ti-exchange-vertical"></i>
      </div>
      <p class="description__title">Плов классический</p>
      <div class="description__actions">
        <i class="ti-save-alt"></i>
        <i class="ti-share"></i>
        <i class="ti-heart"></i>
        <i class="ti-marker-alt"></i>
        <i class="ti-new-window"></i>
        <i class="ti-trash"></i>
      </div>
    </div>
    <div class="added-recipe__products">
      <div class="product" v-for="(item, index) in 5" :key="index">
        <div class="item__element">
          <i class="ti-exchange-vertical"></i>
        </div>
        <div class="item__element">
          <p class="element__value">Название продукта</p>
        </div>
        <div class="item__element">
          <!-- <p class="element__title">Вес</p> -->
          <div class="element__input-wrapper">
            <input class="element__weight-input" type="text" value="100" />
            <span class="element__weight-scale">гр.</span>
          </div>
        </div>
        <div class="item__element">
          <!-- <p class="element__title">Белки</p> -->
          <p class="element__value">100</p>
        </div>
        <div class="item__element">
          <!-- <p class="element__title">Жиры</p> -->
          <p class="element__value">0</p>
        </div>
        <div class="item__element">
          <!-- <p class="element__title">Углеводы</p> -->
          <p class="element__value">0</p>
        </div>
        <div class="item__element">
          <!-- <p class="element__title">Ккал</p> -->
          <p class="element__value">0</p>
        </div>
        <div class="item__element">
          <i class="ti-close"></i>
        </div>
      </div>
    </div>
    <!-- <div class="added-recipe__info">
      <div class="info__element">
        <i class="ti-timer element__icon"></i>
        <span class="element__text">25 мин.</span>
      </div>
      <div class="info__element">
        <i class="ti-pie-chart element__icon"></i>
        <span class="element__text">5 продуктов</span>
      </div>
      <div class="info__element">
        <app-rating :rating="2" />
      </div>
    </div> -->

  </div>
</template>

<script>
import AppRating from '@/components/basic/AppRating'
export default {
  components: {
    AppRating
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.added-recipe {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .added-recipe__description {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid $blockBorder;
    .description__move-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      width: 100%;
      min-width: 50px;
      max-width: 50px;
      border-right: 1px solid rgba(0,0,0,.1);
    }
    .description__title {
      margin-right: auto;
      padding: 0 10px;
      font-weight: 500;
    }
    .description__actions {
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        margin-right: 5px;
        padding: 10px;
      }
    }
  }
  .added-recipe__products {
    display: flex;
    flex-direction: column;
    .product {
      display: flex;
      padding: 10px 0px;
      border-bottom: 1px dashed $blockBorder;
      .item__element {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px 10px;
        width: 100%;
        max-width: 150px;
        text-align: center;
        border-right: 1px solid $inputBorder;
        .element__value {
          font-size: 16px;
        }
        .element__weight-input {
          margin-top: -3px;
          padding: 0;
          width: 60px;
          min-width: 50px;
          max-width: 50px;
          outline: none;
          border: none;
          border-bottom: 1px solid $blockBorder;
          text-align: center;
          color: $green;
          font-family: $fontMontserrat;
          font-weight: 500;
        }
        .element__weight-input::selection {
          color: $white;
          background: $green;
        }
        .element__weight-scale {
          margin-top: 5px;
          font-size: 12px;
        }
      }
      .item__element:nth-child(1) {
        max-width: 50px;
        cursor: pointer;
      }
      .item__element:nth-child(2) {
        min-width: 250px;
        max-width: 100%;
        .element__value {
          text-align: left;
          font-weight: 500;
        }
      }
      .item__element:last-child {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
        border: none;
        cursor: pointer;
      }
    }
    .product:last-child {
      border-bottom: none;
    }
  }
  .added-recipe__info {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid $blockBorder;
    .info__element {
      flex: 1 1 auto;
      padding: 0 10px;
      text-align: center;
      border-right: 1px solid $blockBorder;
      .element__icon {
        margin-right: 5px;
      }
      .element__text {
        font-size: 14px;
        font-weight: 500;
      }
    }
    .info__element:last-child {
      border-right: none;
    }
  }
}

</style>
