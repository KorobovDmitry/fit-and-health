<template>
  <div class="meal-editor">

    <div class="quick-search">поиск</div>

    <div class="food-list">
      <p>Название приема пищи</p>
      <p>Короткое описание приема пищи</p>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-editor {
  display: flex;
  // margin-bottom: 5px;
  // padding: 10px;
  // background: $white;
  // border: 1px solid $blockBorder;
  // border-radius: 6px;
  .quick-search {
    width: 400px;
    min-width: 400px;
    max-width: 400px;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .food-list {
    width: 100%;
    height: 550px;
    margin-left: 5px;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

</style>