<template>
  <div class="product-table">

    <app-block-title>Продукты</app-block-title>

    <app-search-block :filters="false" />

    <div class="food-table">
      <div class="food-table__header">
        <p class="header__column-title"><i class="ti-heart"></i></p>
        <p class="header__column-title">Название</p>
        <p class="header__column-title">Категория</p>
        <p class="header__column-title">Масса</p>
        <p class="header__column-title">Белки</p>
        <p class="header__column-title">Жиры</p>
        <p class="header__column-title">Углеводы</p>
        <p class="header__column-title">Калорийность</p>
        <p class="header__column-title"><i class="ti-pencil"></i></p>
      </div>
      <ul class="food-table__product-list">
        <li v-for="(item, index) in baseProducts" :key="index" class="product-list__item">
          <div class="item__element">
            <i
              class="ti-heart element__favorite-product"
              :class="[{'element__favorite-product--active': item.favorite}]"
              @click="changeFavoriteParam(item.id, item.favorite)"
            ></i>
          </div>
          <div class="item__element">
            <p class="element__value">{{ item.title }}</p>
          </div>
          <div class="item__element">
            <app-tooltip>
              <template v-slot:tooltipElement>
                <img class="element__img" src="https://st3.depositphotos.com/4562487/15839/v/950/depositphotos_158398124-stock-illustration-meat-icon-illustration.jpg" alt="категория">
              </template>
              <template v-slot:tooltipText>
                <p class="element__tooltip-text">Мясо и мясные продукты</p>
              </template>
            </app-tooltip>
          </div>
          <div class="item__element">
            <input
              class="element__weight-input"
              type="text"
              v-model="item.weight"
              @focus="setFocus($event)"
            >
            <span class="element__weight-scale">гр.</span>
          </div>
          <div class="item__element">
            <p class="element__value">{{ item.protein }}</p>
          </div>
          <div class="item__element">
            <p class="element__value">{{ item.fats }}</p>
          </div>
          <div class="item__element">
            <p class="element__value">{{ item.carb }}</p>
          </div>
          <div class="item__element">
            <p class="element__value">{{ item.kkal }}</p>
          </div>
          <div class="item__element">
            <app-button-with-actions
              :requiredParams="{
                productId: item.id,
                isFavorite: item.favorite
              }"
              :actions="btnActions"
            />
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppTooltip from '@/components/basic/AppTooltip'
import AppButtonWithActions from '@/components/basic/AppButtonWithActions'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    AppTooltip,
    AppButtonWithActions
  },
  data () {
    return {
      btnActions: [
        {
          title: 'Редактировать',
          doFunc: this.editProduct
        },
        {
          title: 'Добавить в избранное',
          doFunc: this.changeFavoriteParam
        },
        {
          title: 'Удалить',
          doFunc: this.removeProduct
        }
      ],
      productWeight: 100
    }
  },
  computed: {
    baseProducts () {
      return this.$store.getters['foodCalorieTable/getProducts']
    }
  },
  methods: {
    setFocus ($event) {
      $event.target.select()
    },
    editProduct (productId) {
      this.$store.dispatch('foodCalorieTable/editProduct', {productId: productId, newParams: {protein: 24}})
      // Передавать в newParams новый объект продукта со ВСЕМИ параметрами из модального окна (редактирование)
    },
    changeFavoriteParam (productId, isFavorite) {
      this.$store.dispatch('foodCalorieTable/changeFavoriteParam', {productId: productId, newParam: {favorite: !isFavorite}})
    },
    removeProduct (productId) {
      this.$store.dispatch('foodCalorieTable/removeProduct', {product: productId})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.product-table {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .food-table {
    margin-top: 20px;
    .food-table__header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 5px 0;
      color: $white;
      background: $green;
      border: 1px solid transparent;
      border-radius: 6px;
      .header__column-title {
        padding: 7px;
        width: 120px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        border-right: 1px solid rgba(255,255,255,.4);
      }
      .header__column-title:first-child {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
      }
      .header__column-title:nth-child(2) {
        flex: 1 1 auto;
        min-width: 200px;
      }
      .header__column-title:nth-child(8) {
        min-width: 155px;
      }
      .header__column-title:last-child {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
        border: none;
      }
    }
    .food-table__product-list {
      .product-list__item {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        padding: 5px 0px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .item__element {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7px;
          width: 120px;
          text-align: center;
          border-right: 1px solid $inputBorder;
          .element__value {
            font-size: 16px;
          }
          .element__favorite-product {
            // border: 1px solid red;
            padding: 5px;
            opacity: .3;
            cursor: pointer;
          }
          .element__favorite-product:hover {
            color: $green;
            opacity: 1;
          }
          .element__favorite-product--active {
            padding: 5px;
            color: $green;
            opacity: 1;
            cursor: pointer;
          }
          .element__img {
            width: 25px;
            height: 25px;
          }
          .element__tooltip-text {
            font-style: 14px;
          }
          .element__weight-input {
            margin-top: 3px;
            padding: 0 5px;
            width: 60px;
            min-width: 60px;
            max-width: 60px;
            outline: none;
            border: none;
            border-bottom: 1px solid $blockBorder;
            text-align: center;
            color: $green;
            font-family: $fontMontserrat;
            font-weight: 500;
          }
          .element__weight-input::selection {
            color: $white;
            background: $green;
          }
          .element__weight-scale {
            margin-top: 5px;
            margin-left: 5px;
            font-size: 12px;
          }
        }
        .item__element:first-child {
          width: 50px;
          min-width: 50px;
          max-width: 50px;
        }
        .item__element:nth-child(2) {
          flex: 1 1 auto;
          min-width: 200px;
          border: none;
        }
        .item__element:nth-child(3) {
          border-left: 1px solid $inputBorder;
        }
        .item__element:nth-child(8) {
          min-width: 155px;
        }
        .item__element:last-child {
          width: 50px;
          min-width: 50px;
          max-width: 50px;
          border: none;
        }
      }
    }
  }
}

</style>
