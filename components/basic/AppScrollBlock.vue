<template>
  <div class="scroll-block" @mousewheel="updateScrollLine()">

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
  methods: {
    updateScrollLine () {
      // https://learn.javascript.ru/size-and-scroll
      console.log(this.$refs.scrollContent.scrollTop)
    }
  },
  mounted () {
    const ScrollContent = this.$refs.scrollContent
    const ScrollWidth = ScrollContent.offsetWidth - ScrollContent.clientWidth
    ScrollContent.style.width = `calc(100% + ${ScrollWidth}px)`
    ScrollContent.style.height = `calc(100% + ${ScrollWidth}px)`

    console.log(ScrollContent.scrollHeight)
    console.log(ScrollContent.scrollTop)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.scroll-block {
  // border: 1px solid red;
  position: relative;
  flex: 1 1 auto;
  overflow: hidden;
  .scroll-block__content {
    // border: 1px solid red;
    position: absolute;
    top: 0;
    left: 0;
    padding-right: 10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    overflow: scroll;
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