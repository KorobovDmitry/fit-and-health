<template>
  <div class="nutrients-calc">
    <p class="nutrients-calc__block-title">Нутриенты</p>
    <div class="nutrients-calc__chart">график содержания БЖУК</div>
    <div class="nutrients-calc__nutrients">
      <div class="nutrient">
        <p class="nutrient__title">Белки:</p>
        <p class="nutrient__amount">24</p>
      </div>
      <div class="nutrient">
        <p class="nutrient__title">Жиры:</p>
        <p class="nutrient__amount">7.6</p>
      </div>
      <div class="nutrient">
        <p class="nutrient__title">Углеводы:</p>
        <p class="nutrient__amount">78</p>
      </div>
      <div class="nutrient">
        <p class="nutrient__title">Ккал:</p>
        <p class="nutrient__amount">254</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients-calc {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-left: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .nutrients-calc__block-title {
    padding-bottom: 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }
  .nutrients-calc__chart {
    flex: 1 1 auto;
    padding: 10px;
  }
  .nutrients-calc__nutrients {
    // border: 1px solid red;
    padding: 0 10px;
    .nutrient {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      .nutrient__title {
        font-weight: 500;
      }
      .nutrient__amount {
        color: $green;
        font-weight: 500;
      }
    }
    .nutrient:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
