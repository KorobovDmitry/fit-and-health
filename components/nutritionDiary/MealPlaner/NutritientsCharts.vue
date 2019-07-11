<template>
  <div class="nutrients-charts">
    <div class="chart blue">
      Белки
      <br>
      70%
    </div>
    <div class="chart yellow">
      Жиры
      <br>
      140%
    </div>
    <div class="chart blue-light">
      Углеводы
      <br>
      60%
    </div>
    <div class="chart violet">
      Ккал
      <br>{{ currentKkal() }}
      <br>{{ getPercent() }}%
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    currentKkal () {
      // let sum = 0
      // let protein = this.$store.state.userProfile.targetWeight * this.$store.state.mealPlaner.nutrients.protein
      // let fats = this.$store.state.userProfile.targetWeight * this.$store.state.mealPlaner.nutrients.fats
      // let carb = this.$store.state.userProfile.targetWeight * this.$store.state.mealPlaner.nutrients.carb
      // sum = (protein * 4.1) + (fats * 9.3) + (carb * 4.1)
      // return sum
    },
    getPercent () {
      let percent = 100 / (2029 / this.currentKkal())
      return Math.round(percent * 100) / 100
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients-charts {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0 60px 0 80px;
  width: 100%;
  .chart {
    // border: 14px solid $green;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    line-height: 26px;
    width: 180px;
    height: 180px;
  }
  .red {
    border: 20px solid $red;
  }
  .blue {
    border: 20px solid $blue;
  }
  .yellow {
    border: 20px solid $yellow;
  }
  .violet {
    border: 20px solid $violet;
  }
  .blue-light {
    border: 20px solid $blue-light;
  }
  .green {
    border: 20px solid $green;
  }
  .green-light {
    border: 20px solid $green-light;
  }
}
</style>
