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
        <li v-for="(item, index) in 8" :key="index" class="product-list__item">
          <p class="item__value"><i class="ti-heart"></i></p>
          <p class="item__value">Куриная грудка</p>
          <p class="item__value">
            <img class="value__img" src="https://st3.depositphotos.com/4562487/15839/v/950/depositphotos_158398124-stock-illustration-meat-icon-illustration.jpg" alt="">
          </p>
          <p class="item__value">100 гр.</p>
          <p class="item__value">10.8</p>
          <p class="item__value">0.35</p>
          <p class="item__value">87.2</p>
          <p class="item__value">182.3</p>
          <p class="item__value"><i class="ti-more"></i></p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
export default {
  components: {
    AppBlockTitle,
    AppSearchBlock
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
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 5px 0px;
      color: $white;
      background: $green;
      border: 1px solid $green;
      border-radius: 6px;
      .header__column-title {
        flex: 1 1 auto;
        padding: 5px 0;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        border-right: 1px solid rgba(255,255,255,.4);
      }
      .header__column-title:last-child {
        border: none;
      }
    }
    .food-table__product-list {
      .product-list__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 5px 0px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .item__value {
          flex: 1 1 auto;
          padding: 5px 0;
          // height: 50px;
          text-align: center;
          border-right: 1px solid $inputBorder;
          .value__img {
            width: 30px;
            height: 30px;
          }
        }
        .item__value:last-child {
          border: none;
        }
      }
    }
  }
}

</style>
