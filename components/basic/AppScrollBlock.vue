<template>
  <div ref="scrollBlock" class="scroll-block" @mousewheel="move($event)">

    <div ref="scrollContent" class="scroll-block__content">
      <slot></slot>
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
      currentScrollPosition: 0,
      step: 40,
      hiddenContent: null
    }
  },
  methods: {
    move ($event) {
      if (this.$refs.scrollContent.getBoundingClientRect().height - this.$refs.scrollBlock.getBoundingClientRect().height > 0) {
        if ($event.deltaY > 0) {
          // console.log('смещение наверх')
          if (this.hiddenContent >= this.step) {
            this.$refs.scrollContent.style.top = this.currentScrollPosition + this.step * -1 + 'px'
            this.hiddenContent += this.step * -1
          } else {
            this.$refs.scrollContent.style.top = this.currentScrollPosition + this.hiddenContent * -1 + 'px'
            this.hiddenContent = 0
          }
        } else {
          // console.log('смещение вниз');
          if (parseFloat(this.$refs.scrollContent.style.top) * -1 >= this.step) {
            this.$refs.scrollContent.style.top = this.currentScrollPosition + this.step + 'px'
            this.hiddenContent += this.step
          } else {
            this.$refs.scrollContent.style.top = 0
            this.hiddenContent = this.$refs.scrollContent.getBoundingClientRect().height - this.$refs.scrollBlock.getBoundingClientRect().height
          }
        }
      }

      this.currentScrollPosition = parseFloat(this.$refs.scrollContent.style.top)
    },
    calcHiddenContent () {
      this.hiddenContent = this.$refs.scrollContent.getBoundingClientRect().height - this.$refs.scrollBlock.getBoundingClientRect().height
    }
  },
  mounted () {
    // console.log('scroll block mounted')

    // Стартовая позиция скрола
    this.$refs.scrollContent.style.top = 0
    // рассчет скрытой части контента
    this.calcHiddenContent()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.scroll-block {
  // border: 1px solid red;
  position: relative;
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;
  .scroll-block__content {
    // border: 1px solid red;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
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