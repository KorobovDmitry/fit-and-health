<template>
  <div class="meal-part">
    <p class="meal-part__block-title">Приемы пищи</p>

    <div class="meal-part__elements">
      <div class="meal-part__element meal-part__element--active">
        <p class="element__title">Завтрак</p>
        <p class="element__time">09 : 00</p>
        <img class="element__img" src="https://s1.1zoom.me/big0/727/Bread_Tomatoes_Juice_Meat_products_Fried_egg_Plate_554159_1280x872.jpg" alt="">
        <p class="element__desc">Без описания</p>
      </div>

      <div class="meal-part__element">
        <p class="element__title">Перекус</p>
        <p class="element__time">11 : 00</p>
        <img class="element__img" src="https://img4.goodfon.ru/original/1920x1242/1/27/buterbrod-miaso-pomidor-salat.jpg" alt="">
        <p class="element__desc">Бутерброды с колбасой</p>
      </div>

      <div class="meal-part__element">
        <p class="element__title">Обед</p>
        <p class="element__time">13 : 00</p>
        <img class="element__img" src="http://www.князь-пюрешкин.рф/upload/resize_cache/iblock/d4b/1000_1000_0/d4b816bcb83d7aa668bad7d8c4bf0665.jpg" alt="">
        <p class="element__desc">Каша гречневая</p>
      </div>

      <div class="meal-part__element">
        <p class="element__title">Перекус</p>
        <p class="element__time">15 : 00</p>
        <img class="element__img" src="" alt="">
        <p class="element__desc">Бутерброды с колбасой</p>
      </div>

      <div class="meal-part__element">
        <p class="element__title">Ужин</p>
        <p class="element__time">18 : 00</p>
        <img class="element__img" src="https://worldpodium.ru/sites/default/files/spagetti.jpg" alt="">
        <p class="element__desc">Макароны по флотски</p>
      </div>

      <div class="meal-part__element meal-part__new-element">
        <p class="element__title">Название</p>
        <p class="element__time">-- : --</p>
        <img class="element__img" src="" alt="">
        <p class="element__desc">Описание</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-part {
  // display: flex;
  // align-items: flex-start;
  margin-bottom: 20px;
  // padding: 10px 20px;
  // background: $white;
  // border: 1px solid $blockBorder;
  // border-radius: 6px;
  .meal-part__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .meal-part__elements {
    display: flex;
    .meal-part__element {
      margin-right: 10px;
      padding: 10px;
      max-width: 160px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      cursor: pointer;
      .element__title {
        margin: 0px 10px 0px 10px;
        // margin-left: 10px;
        // margin-bottom: 5px;
        // font-size: 18px;
        font-weight: 500;
      }
      .element__time {
        margin-left: 10px;
        margin-bottom: 5px;
        // color: $green;
        font-size: 12px;
        font-weight: 500;
      }
      .element__img {
        margin-bottom: 5px;
        min-width: 138px;
        min-height: 100px;
        background: $gray-light;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
      .element__desc {
        padding: 0 10px;
        font-size: 14px;
      }
    }
    .meal-part__element--active {
      border: 2px solid $green;
      color: $green;
    }
    .meal-part__new-element {
      // margin-left: 30px;
      background: $gray-light;
      border: 1px dashed transparent;
      color: $gray-dark;
      .element__img {
        background: $white;
        // background: transparent;
        border: 1px dashed transparent;
        // border: 1px dashed $blockBorder;
      }
    }
    .meal-part__new-element:hover {
      border: 1px dashed $blockBorder;
    }
  }
}

</style>