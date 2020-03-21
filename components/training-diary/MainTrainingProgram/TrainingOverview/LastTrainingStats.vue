<template>
  <div class="last-training-stats">
    <div class="element">
      <p class="element__text">Последняя тренировка</p>
      <p class="element__value">
        14
        <span class="value__scale">февраля</span>
        2020
        <span class="value__scale">г.</span>
      </p>
    </div>
    <div class="element">
      <p class="element__text">Время последней тренировки</p>
      <p class="element__value">
        1
        <span class="value__scale">час</span>
        08
        <span class="value__scale">мин.</span>
      </p>
    </div>
    <div class="element">
      <p class="element__text">Тоннаж последней тренировки</p>
      <p class="element__value">
        19 845
        <span class="value__scale">кг.</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.last-training-stats {
  display: flex;
  margin-top: 5px;
  // margin-right: 238px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .element {
    // border: 1px solid red;
    flex: 1 1 auto;
    padding: 0 10px;
    border-right: 1px solid $blockBorder;
    .element__text {
      text-align: center;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .element__value {
      text-align: center;
      color: #6eb63b;
      font-size: 18px;
      font-weight: 600;
      .value__scale {
        // margin: 0 0px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
  .element:nth-child(3) {
    margin-right: 0;
    .element__value {
      .value__scale:last-child {
        margin-right: 0;
      }
    }
  }
  .element:last-child {
    margin-right: 0;
    border-right: none;
    .element__value {
      .value__scale {
        margin-right: 0;
      }
    }
  }
}

</style>
