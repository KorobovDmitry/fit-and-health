<template>
  <div class="main-stats">
    <div class="main-stats__overview">
      <div class="overview__element">
        <p class="element__title">Продолжительность тренировки</p>
        <p class="element__value">00 : 00 : 00</p>
      </div>

      <div class="overview__element">
        <p class="element__title">Общий тоннаж тренировки</p>
        <p class="element__value">0 кг.</p>
      </div>

      <div class="overview__element">
        <p class="element__title">Среднее время отдыха</p>
        <p class="element__value">00 : 00</p>
      </div>

      <div class="overview__element">
        <p class="element__title">Среднее время выполнения упражнения</p>
        <p class="element__value">00 : 00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.main-stats {
  padding: 10px 0;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .main-stats__overview {
    display: flex;
    flex-wrap: wrap;
    .overview__element {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      padding: 10px;
      border-right: 1px solid $blockBorder;
      .element__title {
        margin-bottom: 5px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
      }
      .element__value {
        margin-top: auto;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
      }
    }
    .overview__element:last-child {
      border-right: none;
    }
  }
}

</style>
