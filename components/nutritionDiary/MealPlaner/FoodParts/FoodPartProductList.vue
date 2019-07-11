<template>
  <div class="food-part__product-list">
    <ul class="food-part__top-list">
      <li class="food-part__top-list-item">Название</li>
      <li class="food-part__top-list-item">Масса</li>
      <li class="food-part__top-list-item">белки</li>
      <li class="food-part__top-list-item">жиры</li>
      <li class="food-part__top-list-item">углеводы</li>
      <li class="food-part__top-list-item">Ккал</li>
      <li class="food-part__top-list-item">
        <i class="ti-pencil"></i>
      </li>
    </ul>

    <div class="scroll__wrapper">
      <ul class="food-part__meal-list">
        <li class="food-part__meal-list-item">Творог</li>
        <li class="food-part__meal-list-item">
          <input class="food-part__meal-list-item-input" type="text" value="150">
        </li>
        <li class="food-part__meal-list-item">85.4</li>
        <li class="food-part__meal-list-item">15.6</li>
        <li class="food-part__meal-list-item">10.5</li>
        <li class="food-part__meal-list-item">306.45</li>
        <li class="food-part__meal-list-item">
          <i class="food-part__meal-icon ti-close"></i>
        </li>
      </ul>
      <ul class="food-part__meal-list">
        <li class="food-part__meal-list-item">Киви</li>
        <li class="food-part__meal-list-item">
          <input class="food-part__meal-list-item-input" type="text" value="250">
        </li>
        <li class="food-part__meal-list-item">250</li>
        <li class="food-part__meal-list-item">250</li>
        <li class="food-part__meal-list-item">250</li>
        <li class="food-part__meal-list-item">250</li>
        <li class="food-part__meal-list-item">
          <i class="food-part__meal-icon ti-close"></i>
        </li>
      </ul>
    </div>

    <div class="food-part__btn-wrapper">
      <app-button class="food-part__btn" size14px uppercase>+ Добавить продукт или рецепт</app-button>
      <app-button size14px uppercase>Удалить все</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
export default {
  components: {
    AppButton
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.food-part__product-list {
  // border: 1px solid red;
  position: relative;
  width: 100%;
  .food-part__top-list {
    // border: 1px solid red;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    background: $green;
    // background: rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    .food-part__top-list-item {
      // border: 1px solid red;
      // width: 100%;
      min-width: 100px;
      text-transform: uppercase;
      text-align: center;
      color: $white;
      font-size: 12px;
      font-weight: 600;
      padding: 10px 0;
      border-left: 1px solid rgba($white, .3);
      user-select: none;
    }
    .food-part__top-list-item:first-child {
      // border: 1px solid red;
      min-width: 200px;
      width: 100%;
      border-left: none;
      padding-left: 16px;
    }
    .food-part__top-list-item:last-child {
      // border: 1px solid red;
      width: 40px;
      min-width: 40px;
    }
  }

  .scroll__wrapper {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin-top: 34px;
  }

  .food-part__meal-list {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    margin-top: 10px;
    background: $white;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    user-select: none;
    .food-part__meal-list-item {
      // border: 1px solid red;
      position: relative;
      min-width: 100px;
      height: 35px;
      text-align: center;
      // color: $gray-dark;
      font-size: 14px;
      // font-weight: 600;
      padding: 8px 0;
      // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      // border-left: 1px solid transparent;
      .food-part__meal-list-item-input {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        // margin-top: 2px;
        padding: 5px 10px;
        max-width: 100px;
        background: none;
        text-align: center;
        // color: $gray-dark;
        font-family: $fontMontserrat;
        font-size: 16px;
        font-weight: 600;
        outline: none;
        border: none;
        border-top: 3px solid transparent;
        border-bottom: 2px solid transparent;
        transition: $tr-02;
      }
      .food-part__meal-list-item-input:focus {
        border-bottom: 2px solid $green;
        transition: $tr-02;
      }
      .food-part__meal-list-item-input::selection {
        background: $green;
        color: $white;
      }
      .food-part__meal-icon {
        // border: 1px solid $gray-dark;
        // border-radius: 50%;
        font-family: $fontThemify;
        margin: 2px 4px;
        padding: 4px;
        font-size: 10px;
        cursor: pointer;
        transition: $tr-02;
      }
      // .food-part__meal-icon:hover {
      //   color: $green;
      //   transition: $tr-02;
      // }
    }
    .food-part__meal-list-item:first-child {
      // border: 1px solid red;
      padding: 8px 20px;
      min-width: 200px;
      width: 100%;
      text-align: left;
      // color: $green;
      font-size: 16px;
      font-weight: 500;
      line-height: 18px;
      border-left: none;
    }
    .food-part__meal-list-item:last-child {
      // background: red;
      // border-left: 1px solid rgba(0,0,0,.1);
      width: 40px;
      min-width: 40px;
    }
  }

  .food-part__btn-wrapper {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    .food-part__btn {
      margin-right: 10px;
    }
  }
}
</style>
