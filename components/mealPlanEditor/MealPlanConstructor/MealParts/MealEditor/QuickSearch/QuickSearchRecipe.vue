<template>
  <div class="quick-search-recipe">
    <div class="recipe__title-and-action-btn">
      <p class="recipe__title">Плов классический</p>
      <i class="ti-more recipe__action-btn"></i>
    </div>
    <div class="recipe__nutrients-and-img">
      <img class="recipe__img" src="https://pbs.twimg.com/media/DmFA8-eW4AEcIFH.jpg:large" alt />
      <div class="recipe__nutrients">
        <p class="nutrients__block-title">Содержание БЖУК:</p>
        <p class="nutrients__element">
          Белки:
          <span class="nutrients__amount">12,1</span> гр.
        </p>
        <p class="nutrients__element">
          Жиры:
          <span class="nutrients__amount">5,3</span> гр.
        </p>
        <p class="nutrients__element">
          Углеводы:
          <span class="nutrients__amount">78,2</span> гр.
        </p>
        <p class="nutrients__element">
          Калорийность:
          <span class="nutrients__amount">321,2</span> ккал.
        </p>
      </div>
    </div>
    <div class="recipe__info">
      <div class="info__element">
        <i class="ti-timer element__icon"></i>
        <span class="element__text">25 мин.</span>
      </div>
      <div class="info__element">
        <i class="ti-pie-chart element__icon"></i>
        <span class="element__text">8 продуктов</span>
      </div>
      <div class="info__element">
        <i class="ti-crown element__cook-skill-icon"></i>
        <i class="ti-crown element__cook-skill-icon"></i>
        <i class="ti-crown element__cook-skill-icon"></i>
        <i class="ti-crown element__cook-skill-icon"></i>
        <i class="ti-crown element__cook-skill-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.quick-search-recipe {
  margin-bottom: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .recipe__title-and-action-btn {
    display: flex;
    .recipe__title {
      margin-left: 10px;
      font-weight: 500;
    }
    .recipe__action-btn {
      margin-left: auto;
      margin-right: 10px;
    }
  }
  .recipe__nutrients-and-img {
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    border-top: 1px dashed $blockBorder;
    .recipe__img {
      width: 150px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
    .recipe__nutrients {
      margin-left: 20px;
      .nutrients__block-title {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 500;
      }
      .nutrients__element {
        font-size: 12px;
        .nutrients__amount {
          color: $green;
          font-weight: 600;
        }
      }
    }
  }
  .recipe__info {
    display: flex;
    // margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed $blockBorder;
    .info__element {
      flex: 1 1 auto;
      text-align: center;
      border-right: 1px solid $blockBorder;
      font-size: 14px;
      .element__icon {
        margin-right: 5px;
      }
      .element__text {
        font-weight: 500;
      }
    }
    .info__element:last-child {
      border: none;
    }
  }
}
</style>