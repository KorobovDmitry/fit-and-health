<template>
  <div class="meal-plan-overview">

    <app-block-title>Обзор рациона</app-block-title>

    <div class="meal-plan-overview__description">
      <div class="description__meal-plan-title">
        <p class="meal-plan-title">Название рациона на сутки</p>
        <i class="ti-more"></i>
      </div>
      <div class="info-and-img">
        <div class="info">
          <div class="left">info desc</div>
          <div class="stats">
            БЖУК
            <br>
            <br>
            <br>
            <br>
          </div>
        </div>
        <div class="added-marks">
          добавленные отметки
        </div>
        <div class="right">
          <img src="https://s1.1zoom.me/big3/131/Baking_Powidl_492158.jpg" alt="">
        </div>
      </div>
      <div class="meal-parts">
        приемы пищи
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
      
    </div>

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plan-overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
  .meal-plan-overview__description {
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    .description__meal-plan-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .meal-plan-title {
        font-weight: 500;
      }
    }
    .info-and-img {
      display: flex;
      margin-top: 10px;
      .info {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        .left {
          flex: 1 1 auto;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
        .stats {
          margin-top: 10px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }
      .added-marks {
        margin-left: 10px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
      .right {
        margin-left: 10px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        width: 400px;
        min-width: 400px;
        max-width: 400px;
        img {
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }
    }
    .meal-parts {
      margin-top: 10px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    
  }
}

</style>
