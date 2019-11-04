<template>
  <div class="added-marks">
    <p class="added-marks__title">Добавленные отметки</p>

    <div class="added-marks__elements">
      <div class="element">
        <p class="element__text">Низкоуглеводное</p>
        <i class="ti-close element__icon"></i>
      </div>
      <div class="element">
        <p class="element__text">Веганское</p>
        <i class="ti-close element__icon"></i>
      </div>
      <div class="element">
        <p class="element__text">Без ГМО</p>
        <i class="ti-close element__icon"></i>
      </div>
      <div class="element">
        <p class="element__text">Для набора массы</p>
        <i class="ti-close element__icon"></i>
      </div>
    </div>

    <div class="added-marks__input-wrapper">
      <input class="added-marks__input" type="text">
      <div class="added-marks__action-btn">
        <i class="ti-plus"></i>
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

.added-marks {
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  padding: 10px;
  // min-width: 350px;
  // max-width: 800px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .added-marks__title {
    margin-bottom: 10px;
    padding: 0 10px 10px 10px;
    width: 100%;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
    white-space: nowrap;
  }
  .added-marks__elements {
    // display: flex;
    // flex-wrap: wrap;
    padding: 0 10px;
    margin-bottom: 15px;
    .element {
      // margin: 0 10px 5px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 5px;
      margin-bottom: 5px;
      padding: 5px 10px;
      background: $gray-light;
      border-radius: 6px;
      .element__text {
        font-size: 14px;
        white-space: nowrap;
      }
      .element__icon {
        margin-left: 10px;
        font-size: 10px;
        cursor: pointer;
      }
    }
  }

  .added-marks__input-wrapper {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    margin-top: auto;
    width: 100%;
    .added-marks__input {
      // margin-top: 5px;
      padding: 5px 5px;
      // margin-right: 10px;
      width: 100%;
      color: $black;
      font-family: $fontMontserrat;
      font-size: 14px;
      outline: none;
      border: 1px solid $blockBorder;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .added-marks__action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: $green;
      color: $white;
      width: 50px;
      // height: 100%;
      padding: 7px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      cursor: pointer;
    }
  }
}

</style>