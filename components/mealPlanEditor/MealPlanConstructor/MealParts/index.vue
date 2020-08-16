<template>
  <div class="meal-parts">

    <div class="meal-parts__tabs">
      <div class="tab tab--active">
        <p class="tab__title">Завтрак</p>
        <!-- <div class="tab__info">
          <p class="info__element">09 : 00</p>
          <p class="info__element">1 рецепт</p>
          <p class="info__element">4 продукта</p>
        </div> -->
      </div>
      <div class="tab">
        <p class="tab__title">Обед</p>
        <!-- <div class="tab__info">
          <p class="info__element">09 : 00</p>
          <p class="info__element">1 рецепт</p>
          <p class="info__element">4 продукта</p>
        </div> -->
      </div>
      <div class="tab">
        <p class="tab__title">Перекус</p>
        <!-- <div class="tab__info">
          <p class="info__element">09 : 00</p>
          <p class="info__element">1 рецепт</p>
          <p class="info__element">4 продукта</p>
        </div> -->
      </div>
      <div class="tab">
        <p class="tab__title">Ужин</p>
        <!-- <div class="tab__info">
          <p class="info__element">09 : 00</p>
          <p class="info__element">1 рецепт</p>
          <p class="info__element">4 продукта</p>
        </div> -->
      </div>
      
      <div class="add-meal-part">
        <i class="ti-plus"></i>
      </div>
    </div>

    <div class="meal-part">
      <div class="info-and-image">
        <div class="info">
          <div>Название приема пищи: <input type="text"></div>
          <div>Время приема пищи: <input type="text"></div>
          <textarea placeholder="Описание приема пищи"></textarea>
        </div>
        <div class="image">
          <img src="" alt="asd">
        </div>
      </div>
      <div class="quick-search-and-added-products">
        <div class="quick-search">quick-search</div>
        <div class="added-products">added-products</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-parts {
  margin-top: 5px;

  overflow: hidden;
  .meal-parts__tabs {
    display: flex;
    // border-bottom: 1px solid $blockBorder;
    .tab {
      margin-left: 5px;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-bottom: 1px solid transparent;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      user-select: none;
      cursor: pointer;
      .tab__title {
        text-align: center;
        font-weight: 500;
        // padding-bottom: 10px;
        // border-bottom: 1px dashed $blockBorder;
      }
      // .tab__info {
      //   display: flex;
      //   margin-top: 10px;
      //   .info__element {
      //     padding: 0 10px;
      //     font-size: 12px;
      //     border-right: 1px solid $blockBorder;
      //   }
      //   .info__element:first-child {
      //     color: $green;
      //     font-size: 14px;
      //     font-weight: 600;
      //   }
      //   .info__element:last-child {
      //     border-right: none;
      //   }
      // }
    }
    .tab:first-child {
      margin-left: 0;
    }
    .tab--active {
      background: $green;
      border: 1px solid transparent;
      .tab__title {
        color: $white;
        // border-bottom: 1px dashed $white;
      }
      // .tab__info {
      //   .info__element, .info__element:first-child {
      //     color: $white;
      //     border-right: 1px solid $white;
      //   }
      // }
    }
    .add-meal-part {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 5px;
      // margin-left: auto;
      width: 60px;
      background: $green;
      color: $white;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      transition: $tr-02;
      cursor: pointer;
    }
    .add-meal-part:hover {
      font-size: 20px;
    }
  }
  .meal-part {
    padding: 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .info-and-image {
      display: flex;
      height: 250px;
      .info {
        flex: 1 1 auto;
      }
      .image {
        width: 400px;
        padding: 10px;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }
    .quick-search-and-added-products {
      display: flex;
      margin-top: 20px;
      .quick-search {
        padding: 10px;
        width: 400px;
        height: 500px;
        background: rgba(0,0,0,.025);
        box-shadow: $insetBoxShadow;
        border-radius: 6px;
      }
      .added-products {
        flex: 1 1 auto;
        margin-left: 20px;
        padding: 10px;
        width: 400px;
        height: 500px;
        background: rgba(0,0,0,.025);
        box-shadow: $insetBoxShadow;
        border-radius: 6px;
      }
    }
  }
}

</style>
