<template>
  <div class="range">
    <div
      ref="rangeBgLineBlock"
      class="range__bg-line-block"
      @mousedown="startDrag($event)"
      @mouseup="stopDrag($event)"
      @mouseleave="stopDrag($event)"
    >
      <div ref="rangeBgLine" class="range__bg-line">
        <div ref="rangeBgFullArea" class="range__bg-full-area"></div>
      </div>
    </div>
    <div ref="rangeSliderBtn" class="range__slider-btn"

    >
      <p class="range__current-value">{{ currentValue }} мин.</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentValue: 7,
      maxValue: 360,
      dragging: false,
      rangeBlockWidth: 0
    }
  },
  methods: {
    // Событие срабатывает редко из-за наведения мыши не круглу кнопку. Поднять слой отслеживающий движение мыши на верхний уровень.
    startDrag ($event) {
      this.dragging = true
      this.setNewPosition($event)
      $event.path[0].addEventListener('mousemove', this.setNewPosition)
    },
    stopDrag ($event) {
      this.dragging = false
      $event.path[0].removeEventListener('mousemove', this.setNewPosition)
    },
    setNewPosition ($event) {
      // получаем колво процентов заполнения шкалы
      let percent = Math.round(100 / (this.rangeBlockWidth / ($event.layerX - 10)))
      // получить нужное значение из указанного диапазона с максимальным числом
      let value = Math.round((this.maxValue / 100) * percent)

      if ($event.layerX < 10) {
        // console.log($event.layerX)
        this.$refs.rangeBgFullArea.style.width = 0
        this.$refs.rangeSliderBtn.style.left = 0
        this.currentValue = 0
      } else if ($event.layerX >= 290) {
        // console.log($event.layerX)
        this.$refs.rangeBgFullArea.style.width = this.rangeBlockWidth + 4 + 'px'
        this.$refs.rangeSliderBtn.style.left = this.rangeBlockWidth + 4 + 'px'
        this.currentValue = this.maxValue
      } else {
        // console.log($event.layerX)
        this.currentValue = value

        this.$refs.rangeBgFullArea.style.width = $event.layerX - 10 + 'px'
        this.$refs.rangeSliderBtn.style.left = $event.layerX - 7 + 'px'

        // если ширина (currentValue.width / 2) >= ($event.layerX - 10)
        // if () {
        //    установить значение left у currentValue
        // } else {
        //    установить значение left у currentValue = 0
        // }
      }
    }
  },
  mounted () {
    this.rangeBlockWidth = this.$refs.rangeBgLineBlock.getBoundingClientRect().width - 20
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.range {
  // border: 1px solid red;
  position: relative;
  display: flex;
  padding-top: 32px;
  padding-bottom: 20px;
  .range__slider-btn {
    position: absolute;
    top: 45px;
    left: 30px;
    height: 16px;
    width: 16px;
    background: $white;
    border: 2px solid $green;
    border-radius: 50%;
    cursor: pointer;
    z-index: -1;
    .range__current-value {
      position: absolute;
      top: -34px;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 12px;
      background: $green;
      color: $white;
      font-size: 12px;
      border-radius: 6px;
      white-space: nowrap;
      cursor: default;
    }
  }
  .range__bg-line-block {
    // border: 1px solid red;
    padding: 20px 10px;
    width: 100%;
    cursor: pointer;
    .range__bg-line {
      // border: 1px solid red;
      position: relative;
      height: 2px;
      background: $gray-light;
      z-index: -2;
      .range__bg-full-area {
        position: absolute;
        top: 0;
        left: 0;
        height: 2px;
        width: 50%;
        background: $green;
      }
    }
    .range__bg-line:before {
      position: absolute;
      content: '';
      top: -4px;
      left: -10px;
      height: 10px;
      width: 10px;
      background: $green;
      border: 2px solid $green;
      border-radius: 50%;
    }
    .range__bg-line:after {
      position: absolute;
      content: '';
      top: -4px;
      right: -10px;
      height: 10px;
      width: 10px;
      background: $gray-light;
      border: 2px solid $gray-light;
      border-radius: 50%;
    }
  }
}
</style>
