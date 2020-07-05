<template>
  <div class="overview">
    <div class="overview__title-block">
      <p class="title__text">Название рациона:</p>
      <app-input-text placeholder="Название рациона" />
    </div>
    <div class="image-and-base-info">
      <div class="image-wrapper">
        <img class="image" src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg">
      </div>
      <div class="base-info">
        <div class="stats-and-desc">
          <div class="stats">stats</div>
          <div class="desc">desc</div>
        </div>
        <div class="marks">marks</div>
      </div>

    </div>
    <!-- <nutrients-calculate /> -->
  </div>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'
import NutrientsCalculate from '@/components/mealPlanEditor/MealPlanConstructor/Overview/NutrientsCalculate'

export default {
  components: {
    AppInputText,
    NutrientsCalculate
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.overview {
  // border: 1px solid red;
  .overview__title-block {
    display: flex;
    align-items: center;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .title__text {
      padding: 10px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
  .image-and-base-info {
    display: flex;
    margin-top: 5px;
    .image-wrapper {
      padding: 10px;
      width: 100%;
      min-width: 300px;
      max-width: 300px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .image {
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }
    .base-info {
      flex: 1 1 auto;
      display: flex;
      margin-left: 5px;
      .stats-and-desc {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        .stats {
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
        .desc {
          flex: 1 1 auto;
          margin-top: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }
      .marks {
        margin-left: 5px;
        padding: 10px;
        width: 100%;
        min-width: 260px;
        max-width: 260px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }
  }
}

</style>
