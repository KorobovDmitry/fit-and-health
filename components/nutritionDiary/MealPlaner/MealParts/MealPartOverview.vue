<template>
  <div class="food-part__overview">
    <div class="food-part__text-wrapper">
      <p class="food-part__title">{{element.title}}</p>
      <p class="food-part__description">{{ element.description }}</p>
    </div>
    <div class="food-part__nutrition-sum food-part__nutrition-sum-kkal">
      Калорийность: <span>{{ kkal }}</span>
    </div>
    <div class="food-part__nutrition-sum-wrapper">
      <p class="food-part__nutrition-sum">Белки: <span>{{ protein }}</span> гр.</p>
      <p class="food-part__nutrition-sum">Жиры: <span>{{ fats }}</span> гр.</p>
      <p class="food-part__nutrition-sum">Углеводы: <span>{{ carb }}</span> гр.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    element: Object
  },
  computed: {
    protein () {
      let proteinSum = 0
      for (let i = 0; i < this.element.products.length; i++) {
        proteinSum += this.element.products[i].currentWeight * this.element.products[i].productInfo.protein / 100
      }
      return Math.round(proteinSum * 100) / 100
    },
    fats () {
      let fatsSum = 0
      for (let i = 0; i < this.element.products.length; i++) {
        fatsSum += this.element.products[i].currentWeight * this.element.products[i].productInfo.fats / 100
      }
      return Math.round(fatsSum * 100) / 100
    },
    carb () {
      let carbSum = 0
      for (let i = 0; i < this.element.products.length; i++) {
        carbSum += this.element.products[i].currentWeight *  this.element.products[i].productInfo.carb / 100
      }
      return Math.round(carbSum * 100) / 100
    },
    kkal () {
      let kkalSum = 0
      for (let i = 0; i < this.element.products.length; i++) {
        kkalSum += this.element.products[i].currentWeight * this.element.products[i].productInfo.kkal / 100
      }
      return Math.round(kkalSum * 100) / 100
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.food-part__overview {
  // border: 1px solid red;
  position: relative;
  margin-right: 10px;
  // width: 520px;
  min-width: 500px;
  height: 300px;
  background: $green;
  color: $white;
  border-radius: 6px;
  .food-part__text-wrapper {
    // border: 1px solid red;
    position: absolute;
    top: 70px;
    bottom: 70px;
    left: 40px;
    right: 40px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .food-part__title {
      margin-top: auto;
      font-size: 26px;
      font-weight: 600;
      // white-space: nowrap;
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
    font-size: 12px;
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    span {
      font-size: 14px;
      font-weight: 600;
    }
  }
  .food-part__nutrition-sum-kkal {
    position: absolute;
    top: 20px;
    right: 14px;
  }
}
</style>
