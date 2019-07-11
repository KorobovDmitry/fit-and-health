<template>
  <div class="product-table">
    <div class="top-list">
      <p class="top-list__element">
        <i class="top-list__element-icon ti-heart"></i>
      </p>
      <p class="top-list__element">Название</p>
      <p class="top-list__element">Категория</p>
      <p class="top-list__element">Белки</p>
      <p class="top-list__element">Жиры</p>
      <p class="top-list__element">Углеводы</p>
      <p class="top-list__element">Ккал</p>
      <p class="top-list__element">
        <i class="top-list__element-icon ti-settings"></i>
      </p>
    </div>

    <food-list />

    <table-pagination />

  </div>
</template>

<script>
import FoodList from '@/components/nutritionDiary/FoodCalorieTable/ProductTable/FoodList.vue'
import TablePagination from '@/components/nutritionDiary/FoodCalorieTable/TablePagination.vue'
export default {
  components: {
    FoodList,
    TablePagination
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.product-table {
  // border: 1px solid red;
  @include for (580) {
    margin: 0 10px;
  }
  .top-list {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    margin-top: 20px;
    background: $green;
    border: 1px solid transparent;
    border-radius: 6px;
    @include for (930) {
      display: none;
    }
    .top-list__element {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: 100%;
      max-width: 150px;
      // text-align: center;
      text-transform: uppercase;
      color: $white;
      font-size: 12px;
      font-weight: 600;
      border-right: 1px solid rgba($white, .4);
      user-select: none;
    }
    .top-list__element:first-child {
      // border: 1px solid red;
      max-width: 60px;
      min-width: 60px;
      padding: 0;
      font-size: 16px;
      border: none;
    }
    .top-list__element:nth-child(2) {
      max-width: 100%;
      min-width: 300px;
      border-left: 1px solid rgba($white, .4);
    }
    // .top-list__element:nth-child(3) {
    //   display: none;
    //   @include for (930) {
    //     display: flex;
    //   }
    // }
    .top-list__element:last-child {
      max-width: 60px;
      min-width: 60px;
      padding: 0;
      font-size: 16px;
      border-right: none;
    }
  }
}

</style>
