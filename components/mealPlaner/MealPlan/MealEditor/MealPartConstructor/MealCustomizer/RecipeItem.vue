<template>
  <li class="recipe-item">

    <div class="recipe-item__overview">
      <div class="product-item__drag-and-drop-btn">
        <i class="ti-exchange-vertical"></i>
        <i class="ti-angle-right"></i>
      </div>
      <p class="product-item__title">Название рецепта</p>
      <img
        class="product-item__img"
        src="https://ic.pics.livejournal.com/palsanovich/25623435/954433/954433_1000.jpg"
      />
      <div class="product-item__weight">
        <p class="weight__title">Масса</p>
        <p class="weight__value">100</p>
      </div>
      <div class="product-item__nutrient">
        <p class="nutrient__title">Белки</p>
        <p class="nutrient__value">16.5</p>
      </div>
      <div class="product-item__nutrient">
        <p class="nutrient__title">Жиры</p>
        <p class="nutrient__value">4.2</p>
      </div>
      <div class="product-item__nutrient">
        <p class="nutrient__title">Углеводы</p>
        <p class="nutrient__value">87.3</p>
      </div>
      <div class="product-item__nutrient">
        <p class="nutrient__title">Ккал</p>
        <p class="nutrient__value">452.6</p>
      </div>
      <div class="product-item__action-btn">
        <app-button-with-actions
          :actions="[
            {
              title: 'Удалить',
              doFunc: removeRecipe
            },
            {
              title: 'Открыть в новом окне',
              doFunc: openRecipe
            }
          ]"
        />
      </div>
    </div>

    <ul class="recipe-item__product-list">
      <li v-for="(item, index) in 4" :key="index" class="product-list__item">
        <i class="ti-exchange-vertical item__action-btn"></i>
        <p class="item__title">Продукт {{ item }}</p>
        <img
          class="item__img"
          src="https://ic.pics.livejournal.com/palsanovich/25623435/954433/954433_1000.jpg"
          alt
        />
        <div class="item__nutrient">
          <p class="nutrient__tite">Масса</p>
          <p class="nutrient__value">48.7</p>
        </div>
        <div class="item__nutrient">
          <p class="nutrient__tite">Белки</p>
          <p class="nutrient__value">16.5</p>
        </div>
        <div class="item__nutrient">
          <p class="nutrient__tite">Жиры</p>
          <p class="nutrient__value">8.4</p>
        </div>
        <div class="item__nutrient">
          <p class="nutrient__tite">Углеводы</p>
          <p class="nutrient__value">56.7</p>
        </div>
        <div class="item__nutrient">
          <p class="nutrient__tite">Ккал</p>
          <p class="nutrient__value">284.9</p>
        </div>
        <i class="ti-close item__action-btn"></i>
      </li>
    </ul>

  </li>
</template>

<script>
import AppButtonWithActions from '@/components/basic/AppButtonWithActions'
export default {
  components: {
    AppButtonWithActions
  },
  methods: {
    removeRecipe () {
      console.log('Удалить рецепт')
    },
    openRecipe () {
      console.log('Открыть рецепт')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.recipe-item {
  margin-bottom: 5px;
  .recipe-item__overview {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2px;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .product-item__title {
      font-weight: 500;
    }
    .product-item__img {
      max-width: 80px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .product-item__weight {
      .weight__title {
        margin-bottom: 5px;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
      }
      .weight__value {
        text-align: center;
        color: $green;
        font-size: 18px;
        font-weight: 500;
        .weight__scale {
          font-size: 14px;
        }
      }
    }
    .product-item__nutrient {
      .nutrient__title {
        margin-bottom: 5px;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
      }
      .nutrient__value {
        text-align: center;
        color: $green;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
  .recipe-item__product-list {
    .product-list__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 50px;
      // margin-right: 10px;
      margin-bottom: 2px;
      padding: 5px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .item__action-btn {
        font-size: 14px;
      }
      .item__title {
        // font-size: 14px;
        font-weight: 500;
      }
      .item__img {
        width: 50px;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
      .item__nutrient {
        text-align: center;
        .nutrient__tite {
          margin-bottom: 2px;
          font-size: 12px;
          // font-weight: 500;
        }
        .nutrient__value {
          color: $green;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
    .product-list__item:last-child {
      // border: none;
      margin-bottom: 0;
    }
  }
}

</style>
