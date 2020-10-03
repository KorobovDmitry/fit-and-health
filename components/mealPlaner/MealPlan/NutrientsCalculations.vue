<template>
  <div class="nutrients-calculations">
    <div class="nutrients-calculations__item">
      <p class="item__title">Белки</p>
      <div class="item__value">
        <p class="value__current">128</p>
        <p class="value__divider">/</p>
        <p class="value__max">140</p>
        <p class="value__scale">гр.</p>
      </div>
    </div>
    <div class="nutrients-calculations__item">
      <p class="item__title">Жиры</p>
      <div class="item__value">
        <p class="value__current">24</p>
        <p class="value__divider">/</p>
        <p class="value__max">30</p>
        <p class="value__scale">гр.</p>
      </div>
    </div>
    <div class="nutrients-calculations__item">
      <p class="item__title">Углеводы</p>
      <div class="item__value">
        <p class="value__current">70</p>
        <p class="value__divider">/</p>
        <p class="value__max">76</p>
        <p class="value__scale">гр.</p>
      </div>
    </div>
    <div class="nutrients-calculations__item">
      <p class="item__title">Калорийность</p>
      <div class="item__value">
        <p class="value__current">1768</p>
        <p class="value__divider">/</p>
        <p class="value__max">1968</p>
        <p class="value__scale">гр.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients-calculations {
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .nutrients-calculations__item {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid $blockBorder;
    .item__title {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
    }
    .item__value {
      display: flex;
      margin-top: 5px;
      .value__current {
        color: $green;
        font-weight: 600;
      }
      .value__divider {
        margin: 0 5px;
        color: $gray;
      }
      .value__max {
        margin-top: 1px;
        color: $gray;
        font-size: 14px;
        font-weight: 500;
      }
      .value__scale {
        margin-top: 3px;
        margin-left: 2px;
        color: $gray;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
  .nutrients-calculations__item:last-child {
    border-right: none;
  }
}

</style>
