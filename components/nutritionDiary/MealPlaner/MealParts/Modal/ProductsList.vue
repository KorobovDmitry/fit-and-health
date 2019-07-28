<template>
  <div class="products-list">
    <div class="products-list__scroll-block">
      <div
        v-for="(item, index) in products"
        :key="index"
        class="products-list__item"
      >
        <div class="products-list__item-title-wrapper">
          <p class="products-list__item-title">{{ item.productInfo.title }}</p>
          <!-- <p>Вес: {{ item }}</p> -->
          <i
            v-if="actionBtn.add"
            class="ti-plus products-list__item-action-btn"
            @click="addNewProductToMealPart(item)"
          ></i>
          <i
            v-if="actionBtn.remove"
            class="ti-minus products-list__item-action-btn"
            @click="deleteProductFromMealPart(item)"
          ></i>
        </div>
        <ul class="products-list__item-nutrients">
          <li class="nutrients__element">
            <p class="nutrients__element-title">Белки:</p>
            <p class="nutrients__element-value">{{ item.productInfo.protein }}</p>
          </li>
          <li class="nutrients__element">
            <p class="nutrients__element-title">Жиры:</p>
            <p class="nutrients__element-value">{{ item.productInfo.fats }}</p>
          </li>
          <li class="nutrients__element">
            <p class="nutrients__element-title">Углеводы:</p>
            <p class="nutrients__element-value">{{ item.productInfo.carb }}</p>
          </li>
          <li class="nutrients__element">
            <p class="nutrients__element-title">Ккал:</p>
            <p class="nutrients__element-value">{{ item.productInfo.kkal }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
    actionBtn: Object
  },
  data () {
    return {}
  },
  methods: {
    addNewProductToMealPart (item) {
      this.$store.commit('mealPlaner/setNewProductToMealPart', item)
    },
    deleteProductFromMealPart (item) {
      this.$store.commit('mealPlaner/removeProductFromMealPart', item._id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.products-list {
  margin-top: 10px;
  .products-list__scroll-block {
    padding: 10px;
    min-height: 300px;
    max-height: 300px;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    overflow: auto;
    .products-list__item {
      border: 1px solid $blockBorder;
      border-radius: 6px;
      margin-bottom: 5px;
      user-select: none;
      .products-list__item-title-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 10px;
        padding: 10px;
        border-bottom: 1px dashed $blockBorder;
        .products-list__item-title {
          // border: 1px solid red;
          max-width: 300px;
          font-size: 18px;
          font-weight: 500;
        }
        .products-list__item-action-btn {
          // border: 1px solid red;
          cursor: pointer;
        }
      }
      .products-list__item-nutrients {
        margin: 0 10px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        .nutrients__element {
          // border: 1px solid red;
          display: flex;
          align-items: flex-end;
          // width: 25%;
          .nutrients__element-title {
            margin-right: 5px;
            margin-bottom: 1px;
            font-size: 12px;
          }
          .nutrients__element-value {
            color: $green;
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
    }
    .products-list__item:last-child {
      margin-bottom: 0;
    }
  }
}



</style>
