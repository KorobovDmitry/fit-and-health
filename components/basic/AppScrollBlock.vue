<template>
  <div class="scroll-block">

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