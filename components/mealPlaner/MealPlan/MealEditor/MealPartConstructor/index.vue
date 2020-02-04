<template>
  <div class="meal-part-constructor">
    <app-block-title>Редактор приема пищи</app-block-title>

    <div class="meal-part-constructor__header">
      <p class="header__element">Название</p>
      <p class="header__element">Масса</p>
      <p class="header__element">Белки</p>
      <p class="header__element">Жиры</p>
      <p class="header__element">Углеводы</p>
      <p class="header__element">Ккал</p>
      <p class="header__element">
        <i class="ti-pencil"></i>
      </p>
    </div>
    <div class="meal-part-constructor__footer">
      <div v-for="(item, index) in 5" :key="index" class="product-in-constructor">
        <p class="product-in-constructor__element">Гречка</p>
        <p class="product-in-constructor__element">100 гр.</p>
        <p class="product-in-constructor__element">12</p>
        <p class="product-in-constructor__element">4</p>
        <p class="product-in-constructor__element">85</p>
        <p class="product-in-constructor__element">382</p>
        <p class="product-in-constructor__element">
          <i class="ti-more"></i>
        </p>
      </div>
      <div class="recipe-in-constructor">
        рецепт
        <p>продукт в рецепте</p>
      </div>
    </div>
    <div class="meal-part-constructor__action-btn">
      <app-button size14px uppercase class="mt10" >Очистить список</app-button>
      <app-button size14px uppercase class="mt10 ml10" >Сохранить изменения</app-button>
    </div>

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-part-constructor {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    width: 100%;
    height: 545px;
    .meal-part-constructor__header {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      .header__element {
        // border: 1px solid red;
        flex: 1 1 auto;
        min-width: 80px;
        padding: 2px 10px;
        border-right: 1px solid $blockBorder;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
      }
      .header__element:first-child {
        min-width: 200px;
      }
      .header__element:nth-child(5) {
        min-width: 100px;
      }
      .header__element:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: -10px;
        width: 50px;
        min-width: 50px;
        max-width: 50px;
        border: none;
      }
    }
    .meal-part-constructor__footer {
      flex: 1 1 auto;
      padding: 10px;
      background: $hiddenBlockBG;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      .product-in-constructor {
        display: flex;
        padding: 10px 5px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        margin-bottom: 5px;
        .product-in-constructor__element {
          color: $green;
          font-size: 14px;
          padding: 0 10px;
          flex: 1 1 auto;
          min-width: 80px;
          border-right: 1px solid $blockBorder;
          text-align: center;
          font-weight: 500;
        }
        .product-in-constructor__element:first-child {
          flex: 1 1 auto;
          min-width: 195px;
          // text-transform: uppercase;
          text-align: center;
          color: $black;
          // font-weight: 500;
          cursor: pointer;
        }
        .product-in-constructor__element:nth-child(5) {
          min-width: 100px;
        }
        .product-in-constructor__element:last-child {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: -5px;
          width: 40px;
          min-width: 40px;
          max-width: 40px;
          border: none;
          font-size: 10px;
          cursor: pointer;
        }
      }
      .recipe-in-constructor {
        // display: flex;
        padding: 10px 5px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        margin-bottom: 5px;
      }
    }
    .meal-part-constructor__action-btn {
      display: flex;
      justify-content: flex-end;
    }
  }

</style>
