<template>
  <div class="nutrients-charts">
    <div class="chart">
      <div class="chart__info">
        <p class="chart__info-text-title">Белки</p>
        <p class="chart__info-text-amount">
          {{ currentProtein }}
          <span class="chart__info-text-amount-span">гр.</span>
        </p>
        <p class="chart__info-text-percent">{{ proteinPercent }}%</p>
      </div>
      <canvas ref="canvasProtein" class="chart__info-canvas" width="180" height="180"></canvas>
    </div>
    <div class="chart">
      <div class="chart__info">
        <p class="chart__info-text-title">Жиры</p>
        <p class="chart__info-text-amount">
          {{ currentFats }}
          <span class="chart__info-text-amount-span">гр.</span>
        </p>
        <p class="chart__info-text-percent">{{ fatsPercent }}%</p>
      </div>
      <canvas ref="canvasFats" class="chart__info-canvas" width="180" height="180"></canvas>
    </div>
    <div class="chart">
      <div class="chart__info">
        <p class="chart__info-text-title">Углеводы</p>
        <p class="chart__info-text-amount">
          {{ currentCarb }}
          <span class="chart__info-text-amount-span">гр.</span>
        </p>
        <p class="chart__info-text-percent">{{ carbPercent }}%</p>
      </div>
      <canvas ref="canvasCarb" class="chart__info-canvas" width="180" height="180"></canvas>
    </div>
    <div class="chart">
      <div class="chart__info">
        <p class="chart__info-text-title">Ккал</p>
        <p class="chart__info-text-amount">
          {{ currentKkal }}
          <!-- <span class="chart__info-text-amount-span">гр.</span> -->
        </p>
        <p class="chart__info-text-percent">{{ kkalPercent }}%</p>
      </div>
      <canvas ref="canvasKkal" class="chart__info-canvas" width="180" height="180"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    currentProtein () {
      let mealPartsProteinSumArray = []
      for (let i = 0; i < this.$store.getters['mealPlaner/getMealParts'].length; i++) {
        let proteinSum = 0
        for (let p = 0; p < this.$store.getters['mealPlaner/getMealParts'][i].products.length; p++) {
          proteinSum += this.$store.getters['mealPlaner/getMealParts'][i].products[p].currentWeight * this.$store.getters['mealPlaner/getMealParts'][i].products[p].productInfo.protein / 100
        }
        mealPartsProteinSumArray.push(proteinSum)
      }
      let totalProtein = 0
      for (let i = 0; i < mealPartsProteinSumArray.length; i++) {
        totalProtein += mealPartsProteinSumArray[i]
      }
      return Math.round(totalProtein * 100) / 100
    },
    proteinPercent () {
      let percent = 100 / (this.$store.getters['mealPlaner/getDayTargetProtein'] / this.currentProtein)
      return Math.round(percent * 100) / 100
    },
    currentFats () {
      let mealPartsFatsSumArray = []
      for (let i = 0; i < this.$store.getters['mealPlaner/getMealParts'].length; i++) {
        let fatsSum = 0
        for (let p = 0; p < this.$store.getters['mealPlaner/getMealParts'][i].products.length; p++) {
          fatsSum += this.$store.getters['mealPlaner/getMealParts'][i].products[p].currentWeight * this.$store.getters['mealPlaner/getMealParts'][i].products[p].productInfo.fats / 100
        }
        mealPartsFatsSumArray.push(fatsSum)
      }
      let totalFats = 0
      for (let i = 0; i < mealPartsFatsSumArray.length; i++) {
        totalFats += mealPartsFatsSumArray[i]
      }
      return Math.round(totalFats * 100) / 100
    },
    fatsPercent () {
      let percent = 100 / (this.$store.getters['mealPlaner/getDayTargetFats'] / this.currentFats)
      return Math.round(percent * 100) / 100
    },
    currentCarb () {
      let mealPartsCarbSumArray = []
      for (let i = 0; i < this.$store.getters['mealPlaner/getMealParts'].length; i++) {
        let carbSum = 0
        for (let p = 0; p < this.$store.getters['mealPlaner/getMealParts'][i].products.length; p++) {
          carbSum += this.$store.getters['mealPlaner/getMealParts'][i].products[p].currentWeight * this.$store.getters['mealPlaner/getMealParts'][i].products[p].productInfo.carb / 100
        }
        mealPartsCarbSumArray.push(carbSum)
      }
      let totalCarb = 0
      for (let i = 0; i < mealPartsCarbSumArray.length; i++) {
        totalCarb += mealPartsCarbSumArray[i]
      }
      return Math.round(totalCarb * 100) / 100
    },
    carbPercent () {
      let percent = 100 / (this.$store.getters['mealPlaner/getDayTargetCarb'] / this.currentCarb)
      return Math.round(percent * 100) / 100
    },
    currentKkal () {
      let mealPartsKkalSumArray = []
      for (let i = 0; i < this.$store.getters['mealPlaner/getMealParts'].length; i++) {
        let kkalSum = 0
        for (let p = 0; p < this.$store.getters['mealPlaner/getMealParts'][i].products.length; p++) {
          kkalSum += this.$store.getters['mealPlaner/getMealParts'][i].products[p].currentWeight * this.$store.getters['mealPlaner/getMealParts'][i].products[p].productInfo.kkal / 100
        }
        mealPartsKkalSumArray.push(kkalSum)
      }
      let totalKkal = 0
      for (let i = 0; i < mealPartsKkalSumArray.length; i++) {
        totalKkal += mealPartsKkalSumArray[i]
      }
      return Math.round(totalKkal * 100) / 100
    },
    kkalPercent () {
      let percent = 100 / (this.$store.getters['mealPlaner/getDayTargetKkal'] / this.currentKkal)
      return Math.round(percent * 100) / 100
    }
  },
  watch: {
    proteinPercent (value) {
      this.updateCanvasProtein(value)
    },
    fatsPercent (value) {
      this.updateCanvasFats(value)
    },
    carbPercent (value) {
      this.updateCanvasCarb(value)
    },
    kkalPercent (value) {
      this.updateCanvasKkal(value)
    }
  },
  methods: {
    getCircleFillPercent (percent) {
      const degrees = (360 * 1 / 100) * percent
      return (Math.PI/180) * degrees
    },
    updateCanvasProtein (value) {
      const canvasProtein = this.$refs.canvasProtein
      const ctxProtein = canvasProtein.getContext('2d')

      ctxProtein.clearRect(0, 0, 180, 180)

      ctxProtein.beginPath()
      ctxProtein.arc(90, 90, 80, 0, Math.PI * 2)
      ctxProtein.strokeStyle= 'rgba(18,150,249,.2)'
      ctxProtein.lineWidth = 20
      ctxProtein.lineCap = 'round'
      ctxProtein.stroke()

      ctxProtein.beginPath()
      ctxProtein.arc(90, 90, 80, 0, this.getCircleFillPercent(value))
      ctxProtein.strokeStyle="rgb(18,150,249)"
      ctxProtein.lineWidth = 20
      ctxProtein.lineCap = 'round'
      ctxProtein.stroke()
    },
    updateCanvasFats (value) {
      const canvasFats = this.$refs.canvasFats
      const ctxFats = canvasFats.getContext('2d')

      ctxFats.clearRect(0, 0, 180, 180)

      ctxFats.beginPath()
      ctxFats.arc(90, 90, 80, 0, Math.PI * 2)
      ctxFats.strokeStyle= 'rgba(247,217,33,.2)'
      ctxFats.lineWidth = 20
      ctxFats.lineCap = 'round'
      ctxFats.stroke()

      ctxFats.beginPath()
      ctxFats.arc(90, 90, 80, 0, this.getCircleFillPercent(value))
      ctxFats.strokeStyle="rgb(255,215,0)"
      ctxFats.lineWidth = 20
      ctxFats.lineCap = 'round'
      ctxFats.stroke()
    },
    updateCanvasCarb (value) {
      const canvasCarb = this.$refs.canvasCarb
      const ctxCarb = canvasCarb.getContext('2d')

      ctxCarb.clearRect(0, 0, 180, 180)

      ctxCarb.beginPath()
      ctxCarb.arc(90, 90, 80, 0, Math.PI * 2)
      // ctxCarb.strokeStyle= 'rgba(55,204,219,.2)'
      ctxCarb.strokeStyle= 'rgba(226,35,85,.2)'
      ctxCarb.lineWidth = 20
      ctxCarb.lineCap = 'round'
      ctxCarb.stroke()

      ctxCarb.beginPath()
      ctxCarb.arc(90, 90, 80, 0, this.getCircleFillPercent(value))
      // ctxCarb.strokeStyle="rgb(55,204,219)"
      ctxCarb.strokeStyle="rgb(226,35,85)"
      ctxCarb.lineWidth = 20
      ctxCarb.lineCap = 'round'
      ctxCarb.stroke()
    },
    updateCanvasKkal (value) {
      const canvasKkal = this.$refs.canvasKkal
      const ctxKkal = canvasKkal.getContext('2d')

      ctxKkal.clearRect(0, 0, 180, 180)

      ctxKkal.beginPath()
      ctxKkal.arc(90, 90, 80, 0, Math.PI * 2)
      ctxKkal.strokeStyle= 'rgba(121,91,244,.2)'
      ctxKkal.lineWidth = 20
      ctxKkal.lineCap = 'round'
      ctxKkal.stroke()

      ctxKkal.beginPath()
      ctxKkal.arc(90, 90, 80, 0, this.getCircleFillPercent(value))
      ctxKkal.strokeStyle="rgb(121,91,244)"
      ctxKkal.lineWidth = 20
      ctxKkal.lineCap = 'round'
      ctxKkal.stroke()
    }
  },
  mounted () {
    this.updateCanvasProtein(this.proteinPercent)
    this.updateCanvasFats(this.fatsPercent)
    this.updateCanvasCarb(this.carbPercent)
    this.updateCanvasKkal(this.kkalPercent)
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
  margin-left: 10px;
  padding: 0 100px;
  width: 100%;
  .chart {
    // border: 1px solid $green;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    text-align: center;
    font-weight: 700;
    // line-height: 26px;
    .chart__info-canvas {
      // border: 1px solid red;
      position: relative;
      transform: rotate(-90deg);
      width: 150px;
      height: 150px;
    }
    .chart__info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .chart__info-text-title {
        font-size: 12px;
        font-weight: 600;
      }
      .chart__info-text-amount {
        // border: 1px solid red;
        display: flex;
        align-items: flex-end;
        margin: 5px 0;
        font-size: 20px;
        font-weight: 800;
        .chart__info-text-amount-span {
          // border: 1px solid red;
          margin-left: 5px;
          margin-bottom: 2px;
          font-size: 12px;
          font-weight: 800;
        }
      }
      .chart__info-text-percent {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
  // .red {
  //   border: 20px solid $red;
  // }
  // .blue {
  //   border: 20px solid $blue;
  // }
  // .yellow {
  //   border: 20px solid $yellow;
  // }
  // .violet {
  //   border: 20px solid $violet;
  // }
  // .blue-light {
  //   border: 20px solid $blue-light;
  // }
  // .green {
  //   border: 20px solid $green;
  // }
  // .green-light {
  //   border: 20px solid $green-light;
  // }
}
</style>
