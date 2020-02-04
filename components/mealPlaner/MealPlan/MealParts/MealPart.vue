<template>
  <div class="meal-part meal-part--active">
    <p class="overview__title">Завтрак</p>
    <p class="overview__time">09 : 00</p>
    <img class="overview__img" src="https://s1.1zoom.me/big0/727/Bread_Tomatoes_Juice_Meat_products_Fried_egg_Plate_554159_1280x872.jpg" alt="">
    <div class="overview__nutrients">
      <div class="nutrients__item">
        <p class="item__title">Белки:</p>
        <p class="item__value">12,1</p>
      </div>
      <div class="nutrients__item">
        <p class="item__title">Жиры:</p>
        <p class="item__value">5,3</p>
      </div>
      <div class="nutrients__item">
        <p class="item__title">Углеводы:</p>
        <p class="item__value">78,2</p>
      </div>
      <div class="nutrients__item">
        <p class="item__title">Ккал:</p>
        <p class="item__value">321,2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.meal-part {
  margin-right: 10px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .overview__title {
    padding: 0 10px;
    font-weight: 500;
  }
  .overview__time {
    margin-bottom: 5px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: 500;
  }
  .overview__img {
    max-width: 150px;
    margin-bottom: 10px;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .overview__nutrients {
    .nutrients__item {
      display: flex;
      align-items: flex-end;
      margin-bottom: 2px;
      padding: 0 10px;
      font-size: 14px;
      .item__title {
        margin-right: 5px;
        font-weight: 500;
      }
      .item__value {
        margin-left: auto;
        color: $green;
        font-weight: 600;
      }
    }
  }
}
.meal-part--active {
  border: 2px solid $green;
}

</style>
