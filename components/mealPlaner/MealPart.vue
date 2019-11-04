<template>
  <div class="meal-part">
    <p class="meal-part__block-title">Приемы пищи</p>
    <div class="meal-part__content">
      <div class="meal-part__tabs-wrapper">
        <div class="tab tab--active">Завтрак</div>
        <div class="tab">Перекус №1</div>
        <div class="tab">Обед</div>
        <div class="tab">Перекус №2</div>
        <div class="tab">Ужин</div>
        <div class="tab">Перекус №3</div>
      </div>
      <div class="meal-part__tab-content-wrapper">
        <!-- <app-search-block small /> -->
        <div class="meal-part__food">
          <!-- <app-search-block /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSearchBlock from '@/components/basic/AppSearchBlock'
export default {
  components: {
    AppSearchBlock
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-part {
  // border: 1px solid red;
  // margin-left: 5px;
  width: 100%;
  .meal-part__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .meal-part__content {
    // border: 1px solid red;
    .meal-part__tabs-wrapper {
      // border: 1px solid red;
      display: flex;
      .tab {
        margin-left: 2px;
        padding: 10px 20px;
        background: $gray-light;
        // background: $app-background;
        // border: 1px solid $blockBorder;
        color: $gray-dark;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        transition: $tr-02;
        cursor: pointer;
      }
      .tab:first-child {
        margin-left: 10px;
        border-bottom: none;
      }
      .tab:hover {
        background: rgba(0,0,0,.1);
        color: $black;
      }
      .tab--active {
        color: $black;
        background: $white;
        border: 1px solid $blockBorder;
        border-bottom: none;
        z-index: 2;
      }
      .tab--active:hover {
        background: $white;
      }
    }
    .meal-part__tab-content-wrapper {
      // border: 1px solid red;
      position: relative;
      z-index: 1;
      margin-top: -1px;
      padding: 10px;
      // height: 500px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .meal-part__food {
        // margin-top: 10px;
        padding: 10px;
        // background: $gray-light;
        background: $app-background;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        height: 545px;
      }
    }
  }
}

</style>