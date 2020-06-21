<template>
  <div class="create-meal-part">
    <div class="create-meal-part__header">
      <p class="header__title">Название</p>
    </div>
    <div class="create-meal-part__overview">
      <div class="overview__img">
        <i class="ti-plus img__add-icon"></i>
      </div>
      <div class="overview__nutrients">
        <p class="nutrients__title">Содержание БЖУК:</p>
        <div class="nutrients__item">
          <p class="item__title">Белки:</p>
          <p class="item__value">--</p>
        </div>
        <div class="nutrients__item">
          <p class="item__title">Жиры:</p>
          <p class="item__value">--</p>
        </div>
        <div class="nutrients__item">
          <p class="item__title">Углеводы:</p>
          <p class="item__value">--</p>
        </div>
        <div class="nutrients__item">
          <p class="item__title">Ккал:</p>
          <p class="item__value">--</p>
        </div>
      </div>
    </div>
    <div class="create-meal-part__footer">
      <div class="footer__element">
        <p class="element__time">-- : --</p>
      </div>
      <div class="footer__element">
        <i class="ti-receipt element__icon"></i>
        <p class="element__text"><span class="text__value">--</span>рецептов</p>
      </div>
      <div class="footer__element">
        <i class="ti-pie-chart element__icon"></i>
        <p class="element__text"><span class="text__value">--</span>продуктов</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.create-meal-part {
  padding: 10px;
  background: $hiddenBlockBG;
  border: 1px dashed transparent;
  border-radius: 6px;
  color: $gray-dark;
  transition: $tr-02;
  cursor: pointer;
  .create-meal-part__header {
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
  .create-meal-part__overview {
    display: flex;
    padding: 10px;
    .overview__img {
      position: relative;
      margin-right: 20px;
      width: 150px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .img__add-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 10px;
        border-radius: 50%;
        opacity: 0;
        transition: $tr-02;
      }
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
          font-size: 14px;
        }
      }
    }
  }
  .create-meal-part__footer {
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
        font-weight: 500;
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
          font-weight: 500;
        }
      }
    }
    .footer__element:last-child {
      border: none;
    }
  }
}
.create-meal-part:hover {
  // border: 1px dashed $blockBorder;
  box-shadow: $boxShadow;
  .create-meal-part__overview {
    .overview__img {
      .img__add-icon {
        background: $white;
        opacity: 1;
      }
    }
  }
}

</style>
