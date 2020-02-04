<template>
  <div class="input-time-select">
    <p class="input-time-select__title">
      Время приема пищи
    </p>
    <div class="input-time-select__value-field">
      <div class="value-field__value-input">09</div>
      <div class="value-field__value-divider">:</div>
      <div class="value-field__value-input">45</div>
      <div class="value-field__value-divider">:</div>
      <div class="value-field__value-input">00</div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.input-time-select {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .input-time-select__title {
    // border: 1px solid red;
    padding: 0 10px;
    margin-bottom: 5px;
    min-width: 200px;
    font-size: 14px;
    font-weight: 500;
  }
  .input-time-select__value-field {
    display: flex;
    align-items: center;
    // justify-content: center;
    .value-field__value-input {
      padding: 5px 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      font-size: 14px;
    }
    .value-field__value-divider {
      margin: 0 10px;
    }
  }
}

</style>