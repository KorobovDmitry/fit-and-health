<template>
  <div class="nutrients-calculate">
    <div class="nutrients-calculate__element">
      <p class="element__title">Белки</p>
      <div class="element__value">
        <p class="value__current-amount">27.4</p>
        <p class="value__calc-max-amount">/ 70 <span class="calc-max-amount__scale">гр.</span></p>
      </div>
    </div>

    <div class="nutrients-calculate__element">
      <p class="element__title">Жиры</p>
      <div class="element__value">
        <p class="value__current-amount">15.2</p>
        <p class="value__calc-max-amount">/ 35 <span class="calc-max-amount__scale">гр.</span></p>
      </div>
    </div>

    <div class="nutrients-calculate__element">
      <p class="element__title">Углеводы</p>
      <div class="element__value">
        <p class="value__current-amount">98.8</p>
        <p class="value__calc-max-amount">/ 150 <span class="calc-max-amount__scale">гр.</span></p>
      </div>
    </div>

    <div class="nutrients-calculate__element">
      <p class="element__title">Калорийность</p>
      <div class="element__value">
        <p class="value__current-amount">1827.4</p>
        <p class="value__calc-max-amount">/ 2170 <span class="calc-max-amount__scale">ккал.</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients-calculate {
  display: flex;
  justify-content: space-between;
  // margin-right: 242px;
  // margin-left: 460px;
  padding: 10px 0;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .nutrients-calculate__element {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid $blockBorder;
    .element__title {
      // font-size: 14px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .element__value {
      display: flex;
      align-items: flex-end;
      .value__current-amount {
        color: $green;
        font-size: 18px;
        font-weight: 600;
      }
      .value__calc-max-amount {
        margin-left: 5px;
        margin-bottom: 3px;
        color: $gray-dark;
        font-size: 12px;
        font-weight: 600;
        .calc-max-amount__scale {
          font-size: 10px;
          font-weight: 600;
        }
        
      }
    }
  }
  .nutrients-calculate__element:last-child {
    border: none;
  }
}

</style>