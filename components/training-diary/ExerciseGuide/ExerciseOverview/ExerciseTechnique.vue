<template>
  <div class="exercise-technique">
    <p class="exercise-technique__block-title">Техника выполнения упражнения:</p>
    <p class="exercise-technique__text">{{ techniqueDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    techniqueDescription: String
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercise-technique {
  flex: 1 1 auto;
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .exercise-technique__block-title {
    padding: 10px;
    text-align: center;
    font-weight: 500;
  }
  .exercise-technique__text {
    padding: 0 10px 10px 10px;
  }
}

</style>