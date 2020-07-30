<template>
  <div class="ingredients">
    <p class="ingredients__block-title">Ингридиенты</p>

    <ul class="ingredients__list">
      <li class="product">
        <p class="product__element">Гречка</p>
        <div class="product__element">
          <p class="element__title">Вес</p>
          <p class="element__amount">100</p>
        </div>
        <div class="product__element">
          <p class="element__title">Белки</p>
          <p class="element__amount">12</p>
        </div>
        <div class="product__element">
          <p class="element__title">Жиры</p>
          <p class="element__amount">12</p>
        </div>
        <div class="product__element">
          <p class="element__title">Углеводы</p>
          <p class="element__amount">12</p>
        </div>
        <div class="product__element">
          <p class="element__title">Ккал</p>
          <p class="element__amount">12</p>
        </div>
      </li>
    </ul>

    <div class="ingredients__actions mt-10">
      <!-- <app-button size12px uppercase >Сохранить как...</app-button> -->
      <app-button class="ml-auto" size12px uppercase >Добавить продукт</app-button>
    </div>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.ingredients {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  .ingredients__block-title {
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }
  .ingredients__list {
    flex: 1 1 auto;
    padding: 10px;
    background: $insetBlockBG;
    box-shadow: $insetBoxShadow;
    border-radius: 6px;
    min-height: 350px;
    .product {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .product__element {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-width: 100px;
        max-width: 140px;
        .element__title {
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 500;
        }
        .element__amount {
          margin-top: 5px;
        }
      }
      .product__element:nth-child(1) {
        align-items:flex-start;
        // justify-content: flex-start;
        max-width: 100%;
        font-weight: 500;
      }
    }
  }
  .ingredients__actions {
    display: flex;
  }
}

</style>
