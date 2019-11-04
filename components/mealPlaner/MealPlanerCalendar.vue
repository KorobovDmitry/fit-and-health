<template>
  <div class="meal-planer-calendar">
    <!-- <p class="meal-planer-calendar__block-title">Дата</p> -->

    <div class="selected-date">
      <i class="ti-calendar selected-date__calendar-icon"></i>
      <p class="selected-date__value">28 апреля 2019</p>
      <i class="ti-angle-double-down"></i>
    </div>
    <div class="calendar-table">
      <!-- <div class="calendar-table__top">
        <p>28 апреля 2019</p>
        <p>2019</p>
      </div> -->
      <div>
        <span>1 2 3 4 5 6 7</span>
        <br>
        <br>
        <span>1 2 3 4 5 6 7</span>
        <br>
        <br>
        <span>1 2 3 4 5 6 7</span>
        <br>
        <br>
        <span>1 2 3 4 5 6 7</span>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-planer-calendar {
  position: relative;
  margin-bottom: 5px;
  .meal-planer-calendar__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .selected-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    cursor: pointer;
    .selected-date__calendar-icon {
      margin-top: -2px;
      // font-size: 20px;
    }
    .selected-date__value {
      text-align: center;
      // font-size: 18px;
      font-weight: 500;
    }
  }
  .calendar-table {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 5px;
    width: 100%;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    opacity: 0;
    .calendar-table__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 0 10px 10px 10px;
      border-bottom: 1px dashed $blockBorder;
    }
  }
}

</style>
