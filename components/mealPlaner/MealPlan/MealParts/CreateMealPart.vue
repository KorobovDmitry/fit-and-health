<template>
  <div class="create-meal-part">
    <p class="overview__title">Название</p>
    <p class="overview__time">-- : --</p>
    <div class="overview__add-img">
      <i class="ti-plus add-img__icon"></i>
    </div>
    <div class="overview__nutrients">
      <div class="nutrients__item">
        <p class="item__title">Белки:</p>
        <p class="item__value">--:--</p>
      </div>
      <div class="nutrients__item">
        <p class="item__title">Жиры:</p>
        <p class="item__value">--:--</p>
      </div>
      <div class="nutrients__item">
        <p class="item__title">Углеводы:</p>
        <p class="item__value">--:--</p>
      </div>
      <div class="nutrients__item">
        <p class="item__title">Ккал:</p>
        <p class="item__value">--:--</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.create-meal-part {
  padding: 10px;
  // background: $white;
  background: $hiddenBlockBG;
  // border: 1px solid $blockBorder;
  border: 1px dashed transparent;
  border-radius: 6px;
  color: $gray-dark;
  transition: $tr-02;
  cursor: pointer;
  .overview__title {
    padding: 0 10px;
    font-weight: 500;
  }
  .overview__time {
    margin-bottom: 5px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: 500;
  }
  .overview__add-img {
    position: relative;
    margin-bottom: 10px;
    min-width: 150px;
    min-height: 100px;
    background: transparent;
    border: 1px dashed $blockBorder;
    border-radius: 6px;
    .add-img__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 15px;
      background: $white;
      border-radius: 50%;
      color: $gray-dark;
      opacity: 0;
      transition: $tr-02;
    }
  }
  .overview__nutrients {
    .nutrients__item {
      display: flex;
      align-items: flex-end;
      margin-bottom: 2px;
      padding: 0 10px;
      font-size: 14px;
      .item__title {
        margin-right: 5px;
        font-weight: 500;
      }
      .item__value {
        margin-left: auto;
        color: $gray;
        font-weight: 400;
      }
    }
  }
}
.create-meal-part:hover {
  border: 1px solid $blockBorder;
  .overview__add-img {
    // border: 1px dashed $blockBorder;
    .add-img__icon {
      background: $white;
      opacity: 1;
    }
  }
}

</style>
