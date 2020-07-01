<template>
  <div class="timer">
    <p class="element__title">Табата таймер</p>
    <p class="element__data">00 : 00 : 00</p>
    <div class="element__timer-btn-wrapper">
      <i class="element__timer-btn ti-control-backward"></i>
      <i class="element__timer-btn ti-control-play"></i>
      <!-- <i class="element__timer-btn ti-control-record"></i> -->
      <!-- <i class="element__timer-btn ti-control-pause"></i> -->
      <i class="element__timer-btn ti-control-stop"></i>
      <i class="element__timer-btn ti-control-forward"></i>
      <!-- <i class="element__timer-btn ti-volume"></i> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.timer {
  // margin-top: 5px;
  margin-left: 5px;
  padding: 20px 10px;
  width: 300px;
  background: $white;
  text-align: center;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .element__title {
    text-transform: uppercase;
    font-weight: 600;
  }
  .element__data {
    margin: 20px 0;
    color: $green;
    font-size: 32px;
    font-weight: 600;
  }
  .element__timer-btn-wrapper {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    .element__timer-btn {
      margin: 0 10px;
      font-size: 20px;
      cursor: pointer;
      transition: $tr-02;
    }
    .element__timer-btn:hover {
      color: $green;
    }
  }
}

</style>
