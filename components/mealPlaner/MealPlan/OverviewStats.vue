<template>
  <div class="overview__stats">
    <div class="stats__element">
      <i class="ti-timer element__icon"></i>
      <p class="element__amount">4</p>
      <p class="element__text">приема пищи</p>
    </div>
    <div class="stats__element">
      <i class="ti-receipt element__icon"></i>
      <p class="element__amount">3</p>
      <p class="element__text">блюда</p>
    </div>
    <div class="stats__element">
      <i class="ti-pie-chart element__icon"></i>
      <p class="element__amount">8</p>
      <p class="element__text">продуктов</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.overview__stats {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .stats__element {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid $blockBorder;
    .element__amount {
      margin-left: 10px;
      font-size: 14px;
      font-weight: 600;
    }
    .element__text {
      margin-left: 5px;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
  .stats__element:last-child {
    border-right: none;
  }
}

</style>
