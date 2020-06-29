<template>
  <div class="training-focus">
    <p>Акцент тренировок</p>

    <div class="chart-and-percents">
      <div class="chart">
        <p>график круговой показывает смещение акцента в тренировках (выносливость, сила, кардио)</p>
      </div>
      <div class="percents">
        <div class="percents__element">
          <p class="element__title">Сила:</p>
          <div class="element__value">60%</div>
        </div>
        <div class="percents__element">
          <p class="element__title">Выносливость:</p>
          <div class="element__value">20%</div>
        </div>
        <div class="percents__element">
          <p class="element__title">Гибкость:</p>
          <div class="element__value">5%</div>
        </div>
        <div class="percents__element">
          <p class="element__title">Кардио:</p>
          <div class="element__value">5%</div>
        </div>
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

.training-focus {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;

  .chart {
    // border: 1px solid red;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .percents {
    margin-top: auto;
    padding: 20px 10px 10px 10px;
    border-top: 1px dashed $blockBorder;
    .percents__element {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      .element__title {
        font-size: 18px;
        // font-weight: 500;
      }
      .element__value {
        color: $green;
        font-size: 18px;
        font-weight: 600;
      }
    }
    .percents__element:last-child {
      margin-bottom: 0;
    }
  }
}

</style>