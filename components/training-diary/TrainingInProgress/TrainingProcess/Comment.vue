<template>
  <div class="comment">
    <p class="comment__title">Комментарий</p>
    <p class="comment__text">Комментарий к тренировочному дню в несколько строк</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.comment {
  flex: 1 1 auto;
  margin-left: 5px;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .comment__title {
    padding: 0 10px 10px 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }
  .comment__text {
    padding: 10px 10px 0 10px;
  }
}

</style>