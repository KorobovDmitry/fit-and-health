<template>
  <div class="food-part__overview">
    <div class="food-part__description-wrapper">
      <p class="food-part__title">Завтрак</p>
      <p class="food-part__description">Бутерброды с творогом и фруктами.</p>
    </div>
    <div class="food-part__nutrition-sum food-part__nutrition-sum-kkal">Калорийность: 1056</div>
    <div class="food-part__nutrition-sum-wrapper">
      <div class="food-part__nutrition-sum">Белки: 80 гр.</div>
      <div class="food-part__nutrition-sum">Жиры: 68 гр.</div>
      <div class="food-part__nutrition-sum">Углеводы: 98 гр.</div>
    </div>
  </div>
</template>

<script>
export default {}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.food-part__overview {
  // border: 1px solid red;
  position: relative;
  margin-right: 10px;
  width: 500px;
  min-width: 500px;
  height: 280px;
  background: $green;
  color: $white;
  border-radius: 6px;
  .food-part__description-wrapper {
    // border: 1px solid red;
    position: absolute;
    top: 50px;
    bottom: 80px;
    left: 40px;
    right: 40px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .food-part__title {
      margin-top: auto;
      font-size: 26px;
      font-weight: 600;
    }
    .food-part__description {
      margin-top: 6px;
    }
  }
  .food-part__nutrition-sum-wrapper {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
  }
  .food-part__nutrition-sum {
    margin-right: 6px;
    padding: 5px 14px;
    background: $white;
    color: $green;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  .food-part__nutrition-sum-kkal {
    position: absolute;
    top: 20px;
    right: 14px;
  }
}
</style>
