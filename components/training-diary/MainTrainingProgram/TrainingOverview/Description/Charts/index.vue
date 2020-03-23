<template>
  <div class="charts">
    <div
      class="circle"
    >круговой график показывает в какую сторону сделан акцент в тренировках (вынеосливаость/кардио/гибкость/сила)</div>
    <div class="best-results">
      <p>График прогресса</p>
      <div class="chart">график реузльтатов в выбранном упражнении</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.charts {
  display: flex;
  margin-top: 5px;
  margin-left: 5px;
  .best-results {
    width: 70%;
    margin-left: 5px;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .chart {
      height: 150px;
    }
  }
  .circle {
    width: 30%;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>
