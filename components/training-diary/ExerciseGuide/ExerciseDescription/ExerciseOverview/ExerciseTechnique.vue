<template>
  <div class="exercise-technique">
    <p class="exercise-technique__block-title">Техника выполнения упражнения:</p>
    <p class="exercise-technique__text">Встаньте сбоку от платформы, левую ногу поставьте на середину платформы. Подпрыгните вверх и опуститесь правой ногой на платформу, а левой ногой на пол с другой стороны от платформы. Балансируйте руками, чтобы помочь вашим движениям. Продолжайте прыжки из стороны в сторону через платформу.</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercise-technique {
  flex: 1 1 auto;
  margin-top: 10px;
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