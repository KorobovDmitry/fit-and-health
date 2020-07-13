<template>
  <div class="nutrients-calculate">
    <div class="nutrients-calculate__element">
      <p class="element__title">Белки</p>
      <progress value="80" max="100"></progress>
    </div>
    <div class="nutrients-calculate__element">
      <p class="element__title">Жиры</p>
      <progress value="50" max="100"></progress>
    </div>
    <div class="nutrients-calculate__element">
      <p class="element__title">Углеводы</p>
      <progress value="15" max="100"></progress>
    </div>
    <div class="nutrients-calculate__element">
      <p class="element__title">Калорийность</p>
      <progress value="40" max="100"></progress>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients-calculate {
  .nutrients-calculate__element {
    display: flex;
    align-items: center;
    .element__title {
      margin-right: auto;
    }
  }
}

</style>
