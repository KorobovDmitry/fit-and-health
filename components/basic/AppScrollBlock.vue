<template>
  <div ref="scrollBlock" class="scroll-block" @mousewheel.stop="onScroll($event)">

    <div ref="scrollContent" class="scroll-block__content">
      <slot name="scrollContent"></slot>
    </div>

    <div class="scroll-block__scroll-line">
      <div class="scroll-line"></div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentScroll: 0,
      targetScroll: 0,
      moveStep: 10,
      targetStep: 80,
      isMove: false,
      framesPerSecond: 60
    }
  },
  methods: {
    onScroll ($event) {
      // Остановить стандартное событие скрола страницы
      $event.preventDefault ? $event.preventDefault() : ($event.returnValue = false)

      this.setTargetScroll($event)
      if (!this.isMove) {
        this.isMove = true
        this.move()
      }
    },
    setTargetScroll ($event) {
      if ($event.deltaY < 0) {
        this.targetScroll += this.targetStep
        // утанавливаем направление движения вниз
        if (this.moveStep < 0) {
          this.moveStep = this.moveStep * -1
        }
      } else {
        this.targetScroll += (this.targetStep * -1)
        // утанавливаем направление движения вверх
        if (this.moveStep > 0) {
          this.moveStep = this.moveStep * -1
        }
      }
    },
    move () {

      const scrollBlockHeight = parseFloat(getComputedStyle(this.$refs.scrollBlock).height)
      const scrollContentHeight = parseFloat(getComputedStyle(this.$refs.scrollContent).height)
      const maxScroll = scrollBlockHeight - scrollContentHeight


      if (parseFloat(this.$refs.scrollContent.style.marginTop) + this.moveStep > 0) {
        this.$refs.scrollContent.style.marginTop = 0
        this.isMove = false
        this.currentScroll = 0
        this.targetScroll = 0
        // console.log('dont bottom scroll')
      } else if (parseFloat(this.$refs.scrollContent.style.marginTop) + this.moveStep > maxScroll) {
        // console.log('up scroll', parseFloat(this.$refs.scrollContent.style.marginTop) + this.moveStep, maxScroll)
        this.$refs.scrollContent.style.marginTop = parseFloat(this.$refs.scrollContent.style.marginTop) + this.moveStep + 'px'
        this.currentScroll = parseFloat(this.$refs.scrollContent.style.marginTop)
        setTimeout(() => {
        if (this.moveStep < 0 && this.currentScroll > this.targetScroll) {
            // console.log('смещение вверх')
            this.move()
          } else if (this.moveStep > 0 && this.currentScroll < this.targetScroll) {
            // console.log('смещение вниз')
            this.move()
          } else {
            this.isMove = false
            this.targetScroll = this.currentScroll
          }
        }, 1000 / this.framesPerSecond)
      }
      else {
        this.$refs.scrollContent.style.marginTop = parseFloat(this.$refs.scrollContent.style.marginTop) + (maxScroll - parseFloat(this.$refs.scrollContent.style.marginTop)) + 'px'
        this.currentScroll = parseFloat(this.$refs.scrollContent.style.marginTop)
        this.isMove = false
        this.targetScroll = this.currentScroll
        // console.log('dont up scroll');
      }


    }
  },
  mounted () {
    // устанавливаем высоту блока scroll-block
    const scrollBlockParent = this.$refs.scrollBlock.parentNode
    const parrentPaddingTop = parseFloat(getComputedStyle(scrollBlockParent).paddingTop) + parseFloat(getComputedStyle(scrollBlockParent).paddingBottom)
    this.$refs.scrollBlock.style.height = scrollBlockParent.getBoundingClientRect().height - parrentPaddingTop + 'px'

    // делаем блок видимым, чтобы он раньше врмени не растягивался на всю длинну, а имел высоту родителя
    this.$refs.scrollBlock.style.visibility = 'visible'

    // устанавливаем значение margin по умолчанию, чтобы не использовать в дальнейшем метод getComputedStyle(), а обрашаться напрямую к свойству через elem.style.marginTop
    this.$refs.scrollContent.style.marginTop = 0
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.scroll-block {
  // border: 1px solid red;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 12px;
  overflow: hidden;
  visibility: hidden;
  .scroll-block__content {
    // border: 1px solid red;
    // transition: all .01s linear;
  }
  .scroll-block__scroll-line {
    // border: 1px solid red;
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: $gray;
    .scroll-line {
      width: 100%;
      min-height: 40px;
      background: $black;
    }
  }
}

</style>