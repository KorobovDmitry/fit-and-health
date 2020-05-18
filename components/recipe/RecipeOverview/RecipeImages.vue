<template>
  <div class="recipe-images">
    <!-- <div class="stats">
      <div class="element">
        <i class="ti-timer"></i>
        <p>25 мин.</p>
      </div>
      <div class="element">
        <i class="ti-pie-chart"></i>
        <p>8 продуктов</p>
      </div>
    </div> -->
    <img
      class="recipe-images__main"
      src="http://bientasty.ru/wp-content/uploads/2017/04/1491022672_maxresdefault.jpg"
      alt
    />
    <div class="recipe-images__additionals">
      <img class="additional__img" src="http://bientasty.ru/wp-content/uploads/2017/04/1491022672_maxresdefault.jpg" alt />
      <img class="additional__img" src="http://bientasty.ru/wp-content/uploads/2017/04/1491022672_maxresdefault.jpg" alt />
      <img class="additional__img" src="http://bientasty.ru/wp-content/uploads/2017/04/1491022672_maxresdefault.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.recipe-images {
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .recipe-images__main {
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .recipe-images__additionals {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .additional__img {
      width: 32%;
      border-radius: 6px;
    }
  }
}
</style>
