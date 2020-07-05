<template>
  <li class="product-item">
    <div class="product-item__drag-and-drop-btn">
      <i class="ti-exchange-vertical"></i>
    </div>
    <p class="product-item__title">Название продукта</p>
    <img
      class="product-item__img"
      src="https://ic.pics.livejournal.com/palsanovich/25623435/954433/954433_1000.jpg"
      alt
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
      <i class="ti-close"></i>
    </div>
  </li>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
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

</style>
