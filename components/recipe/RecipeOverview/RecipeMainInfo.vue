<template>
  <div class="main-info">

    <div class="recipe-overview">
      <div class="element">
        <i class="ti-pie-chart element__icon"></i>
        <p class="element__amount">8</p>
        <p class="element__text">продуктов</p>
      </div>
      <div class="element">
        <i class="ti-timer element__icon"></i>
        <p class="element__amount">25</p>
        <p class="element__text">мин.</p>
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
      <p class="cooking-skill__block-title">Сложность приготовления:</p>
      <app-rating class="ml-auto" :rating="2" />
    </div>
  </div>
</template>

<script>
import AppRating from '@/components/basic/AppRating'

export default {
  components: {
    AppRating
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.main-info {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
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
      border-right: 1px solid $blockBorder;
      .element__icon {}
      .element__amount {
        margin-left: 10px;
        font-size: 14px;
        font-weight: 600;
      }
      .element__text {
        margin-left: 5px;
        font-size: 12px;
        font-weight: 500;
        white-space: nowrap;
      }
    }
    .element:last-child {
      border-right: none;
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
        // border: 1px solid red;
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
    padding: 10px 20px;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .cooking-skill__block-title {
      font-weight: 500;
    }
  }
}

</style>
