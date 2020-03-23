<template>
  <div class="training-description">
    <p class="training-description__title">Описание</p>
    <p class="training-description__text">Короткое описание тренировочной программы</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-description {
  flex: 1 1 auto;
  margin-top: 5px;
  margin-left: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .training-description__title {
    margin: 0 10px;
    text-align: center;
    font-weight: 500;
  }
  .training-description__text {
    margin: 10px 10px 0 10px;
  }
}

</style>
