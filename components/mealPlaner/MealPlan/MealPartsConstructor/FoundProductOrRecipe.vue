<template>
  <div class="found-product">
    <div class="found-product__element">
      <i class="ti-heart"></i>
    </div>
    <div class="found-product__element">
      <p class="element__value">Гречка</p>
    </div>
    <!-- <div class="found-product__element">
      <p class="element__title">Вес</p>
      <div class="element__input-wrapper">
        <input class="element__weight-input" type="text" value="100" />
        <span class="element__weight-scale">гр.</span>
      </div>
    </div> -->
    <div class="found-product__element">
      <p class="element__title">Белки</p>
      <p class="element__value">0</p>
    </div>
    <div class="found-product__element">
      <p class="element__title">Жиры</p>
      <p class="element__value">0</p>
    </div>
    <div class="found-product__element">
      <p class="element__title">Углеводы</p>
      <p class="element__value">0</p>
    </div>
    <div class="found-product__element">
      <p class="element__title">Ккал</p>
      <p class="element__value">0</p>
    </div>
    <div class="found-product__element">
      <div class="element__actions">
        <i class="ti-plus action-btn"></i>
        <i class="ti-pin-alt action-btn"></i>
        <!-- <i class="ti-pin2 action-btn"></i> -->
        <i class="ti-new-window action-btn"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.found-product {
  display: flex;
  // padding: 0 10px;
  border-bottom: 1px dashed $blockBorder;
  transition: $tr-02;
  .found-product__element {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    margin: 5px 0;
    padding: 5px 10px;
    width: 100%;
    max-width: 150px;
    text-align: center;
    border-right: 1px solid $black10;
    .element__title {
      margin-bottom: 5px;
      text-transform: uppercase;
      font-size: 8px;
      font-weight: 500;
    }
    .element__value {
      font-size: 16px;
    }
    // .element__weight-input {
    //   margin-top: -3px;
    //   padding: 0;
    //   width: 60px;
    //   min-width: 50px;
    //   max-width: 50px;
    //   outline: none;
    //   border: none;
    //   border-bottom: 1px solid $blockBorder;
    //   text-align: center;
    //   color: $green;
    //   font-family: $fontMontserrat;
    //   font-weight: 500;
    // }
    // .element__weight-input::selection {
    //   color: $white;
    //   background: $green;
    // }
    // .element__weight-scale {
    //   margin-top: 5px;
    //   font-size: 12px;
    // }
    .element__actions {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 5px;
    }
  }
  .found-product__element:nth-child(1) {
    max-width: 50px;
    cursor: pointer;
  }
  .found-product__element:nth-child(2) {
    min-width: 250px;
    max-width: 100%;
    .element__value {
      text-align: left;
      font-weight: 500;
    }
  }
  .found-product__element:last-child {
    width: auto;
    border-right: none;
    .action-btn {
      margin-right: 20px;
    }
    .action-btn:last-child {
      margin-right: 0;
    }
  }
}
.found-product:last-child {
  border-right: none;
  border-bottom: none;
}
.found-product:last-child:hover {
  border-bottom: none;
}
.found-product:hover {
  background: $black10;
  border-bottom: 1px dashed transparent;
}

</style>
