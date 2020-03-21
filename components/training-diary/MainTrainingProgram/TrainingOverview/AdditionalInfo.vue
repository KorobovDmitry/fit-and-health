<template>
  <div class="additional-info">
    <div class="additional-info__element">
      <i class="ti-more"></i>
      <p>4 тренировочных дня</p>
    </div>
    <div class="additional-info__element">
      <i class="ti-more"></i>
      <p>27 завершенных тренировок</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.additional-info {
  margin-top: 5px;
  margin-left: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
}

</style>
