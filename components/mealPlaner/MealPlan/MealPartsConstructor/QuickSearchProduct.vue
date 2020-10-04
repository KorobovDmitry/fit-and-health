<template>
  <div class="quick-search-product">
    <div class="product__title-and-action-btn">
      <!-- <i class="ti-bookmark product__favorite-icon product__favorite-icon--active"></i> -->
      <p class="product__title">Гречка</p>
      <i class="ti-plus product__action-btn"></i>
    </div>
    <div class="product__nutrients-and-img">
      <div class="product__nutrients">
        <p class="nutrients__block-title">Содержание БЖУК:</p>
        <p class="nutrients__element">
          Белки:
          <span class="nutrients__amount">12,1</span> гр.
        </p>
        <p class="nutrients__element">
          Жиры:
          <span class="nutrients__amount">5,3</span> гр.
        </p>
        <p class="nutrients__element">
          Углеводы:
          <span class="nutrients__amount">78,2</span> гр.
        </p>
        <p class="nutrients__element">
          Калорийность:
          <span class="nutrients__amount">321,2</span> ккал.
        </p>
      </div>
      <img
        class="product__img"
        src="https://ic.pics.livejournal.com/palsanovich/25623435/954433/954433_1000.jpg"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.quick-search-product {
  margin-bottom: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .product__title-and-action-btn {
    display: flex;
    // justify-content: space-between;
    margin-bottom: 10px;
    .product__favorite-icon {
      margin-top: -12px;
      color: $gray;
      font-size: 30px;
    }
    .product__favorite-icon--active {
      color: $green;
    }
    .product__title {
      flex: 1 1 auto;
      margin-left: 10px;
      font-weight: 500;
    }
    .product__action-btn {
      margin-right: 10px;
      margin-left: auto;
    }
  }
  .product__nutrients-and-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px dashed $blockBorder;
    .product__nutrients {
      margin-left: 10px;
      .nutrients__block-title {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 500;
      }
      .nutrients__element {
        font-size: 12px;
        .nutrients__amount {
          color: $green;
          font-weight: 600;
        }
      }
    }
    .product__img {
      margin-right: 10px;
      width: 150px;
      // height: 60px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
  }
}

</style>
