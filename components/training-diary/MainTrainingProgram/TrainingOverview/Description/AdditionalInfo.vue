<template>
  <div class="additional-info">
    <div class="additional-info__element">
      <i class="ti-timer element__icon"></i>
       <p class="element__amount">4</p>
      <p class="element__text">тренировочных дня</p>
    </div>
    <div class="additional-info__element">
      <i class="ti-check-box element__icon"></i>
      <p class="element__amount">27</p>
      <p class="element__text">завершенных тренировок</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.additional-info {
  display: flex;
  margin-top: 5px;
  margin-left: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .additional-info__element {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    .element__icon {}

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
  .additional-info__element:last-child {
    border: none;
  }
}

</style>
