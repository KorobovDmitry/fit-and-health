<template>
  <div class="ingredients">
    <p class="ingredients__block-title">Ингридиенты</p>

    <ul class="ingredients__list">
      <li
        v-for="(item, index) in products"
        :key="index"
        class="product"
      >
        <p class="product__element">{{ item.title }}</p>
        <div class="product__element">
          <p class="element__title">Вес</p>
          <input type="text" class="element__input" :value="item.weight">
        </div>
        <div class="product__element">
          <p class="element__title">Белки</p>
          <p class="element__amount">{{ Math.round((item.protein / 100 * item.weight) * 100) / 100 }}</p>
        </div>
        <div class="product__element">
          <p class="element__title">Жиры</p>
          <p class="element__amount">{{ Math.round((item.fats / 100 * item.weight) * 100) / 100 }}</p>
        </div>
        <div class="product__element">
          <p class="element__title">Углеводы</p>
          <p class="element__amount">{{ Math.round((item.carb / 100 * item.weight) * 100) / 100 }}</p>
        </div>
        <div class="product__element">
          <p class="element__title">Ккал</p>
          <p class="element__amount">{{ Math.round((item.kkal / 100 * item.weight) * 100) / 100 }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      products: state => state.recipe.recipe.products
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.ingredients {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 10px;
  background: white;
  border: 1px solid $blockBorder;
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
      margin-bottom: 5px;
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
          color: $green;
          font-size: 10px;
          font-weight: 500;
        }
        .element__amount {
          margin-top: 5px;
          // font-weight: 500;
        }
        .element__input {
          margin-top: 5px;
          margin-bottom: -3px;
          width: 100%;
          min-width: 80px;
          max-width: 80px;
          text-align: center;
          border: none;
          border-bottom: 2px solid $green;
        }
      }
      .product__element:nth-child(1) {
        align-items:flex-start;
        max-width: 100%;
        font-weight: 500;
      }
    }
    .product:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
