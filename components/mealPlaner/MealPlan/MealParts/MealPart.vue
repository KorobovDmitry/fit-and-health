<template>
  <div class="meal-part meal-part--active">
    <div class="meal-part__header">
      <p class="header__title">Title</p>
      <i class="ti-more"></i>
    </div>
    <div class="meal-part__overview">
      <img class="overview__img" src="https://s1.1zoom.me/big0/727/Bread_Tomatoes_Juice_Meat_products_Fried_egg_Plate_554159_1280x872.jpg" alt="">
      <div class="overview__nutrients">
        <p class="nutrients__title">Содержание БЖУК:</p>
        <div class="nutrients__item">
          <p class="item__title">Белки:</p>
          <p class="item__value">12,1</p>
        </div>
        <div class="nutrients__item">
          <p class="item__title">Жиры:</p>
          <p class="item__value">5,3</p>
        </div>
        <div class="nutrients__item">
          <p class="item__title">Углеводы:</p>
          <p class="item__value">78,2</p>
        </div>
        <div class="nutrients__item">
          <p class="item__title">Ккал:</p>
          <p class="item__value">321,2</p>
        </div>
      </div>
    </div>
    <div class="meal-part__footer">
      <div class="footer__element">
        <p class="element__time">09 : 00</p>
      </div>
      <div class="footer__element">
        <i class="ti-receipt element__icon"></i>
        <p class="element__text"><span class="text__value">2</span>рецепта</p>
      </div>
      <div class="footer__element">
        <i class="ti-pie-chart element__icon"></i>
        <p class="element__text"><span class="text__value">12</span>продуктов</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.meal-part {
  margin-right: 10px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .meal-part__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-bottom: 10px;
    padding: 0 10px 10px 10px;
    border-bottom: 1px dashed $blockBorder;
    .header__title {
      font-weight: 500;
    }
  }
  .meal-part__overview {
    display: flex;
    padding: 10px;
    .overview__img {
      margin-right: 20px;
      width: 150px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .overview__nutrients {
      // border: 1px solid red;
      .nutrients__title {
        margin-bottom: 5px;
        white-space: nowrap;
        font-size: 14px;
        font-weight: 500;
      }
      .nutrients__item {
        display: flex;
        .item__title {
          font-size: 14px;
        }
        .item__value {
          margin-left: auto;
          color: $green;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
  .meal-part__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px dashed $blockBorder;
    padding-top: 10px;
    .footer__element {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid $blockBorder;
      .element__time {
        // color: $green;
        font-weight: 600;
      }
      .element__icon {
        margin-right: 10px;
      }
      .element__text {
        font-size: 12px;
        font-weight: 500;
        .text__value {
          font-size: 14px;
          margin-right: 5px;
          font-weight: 600;
        }
      }
    }
    .footer__element:last-child {
      border: none;
    }
  }
}
.meal-part--active {
  border: 2px solid $green;
}

</style>
