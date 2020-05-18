<template>
  <div class="main-info">

    <div class="recipe-overview">
      <div class="element">
        <i class="ti-timer"></i>
        <p>25 мин.</p>
      </div>
      <div class="element">
        <i class="ti-pie-chart"></i>
        <p>8 продуктов</p>
      </div>
      <div class="element">
        <i class="ti-pie-chart"></i>
        <p>8 продуктов</p>
      </div>
    </div>

    <div class="description">
      <p class="description__title">Описание</p>
      <p class="description__text">описание рецепта vyjuj ntrcnf</p>
      <div class="description__marks">
        <p class="mark">Низкоуглеводное</p>
        <p class="mark">Без ГМО</p>
        <p class="mark">Для снижения веса</p>
      </div>
    </div>

    <div class="cooking-skill">
      <p>Сложность приготовления:</p>
      <i class="ti-crown"></i>
      <i class="ti-crown"></i>
      <i class="ti-crown"></i>
      <i class="ti-crown"></i>
      <i class="ti-crown"></i>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.main-info {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  .recipe-overview {
    display: flex;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .element {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .description {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .description__title {
      font-weight: 500;
      text-align: center;
    }
    .description__text {
      flex: 1 1 auto;
      padding: 10px;
    }
    .description__marks {
      display: flex;
      flex-wrap: wrap;
      .mark {
        margin-right: 5px;
        margin-top: 5px;
        padding: 5px 10px;
        background: $hiddenBlockBG;
        border-radius: 6px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
  .cooking-skill {
    display: flex;
    margin-top: 5px;
    background: $white;
    padding: 10px;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>
