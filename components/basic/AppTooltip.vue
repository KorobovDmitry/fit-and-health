<template>
  <div class="tooltip">
    <div class="tooltip__element">

      <slot name="tooltipElement"></slot>

      <div class="tooltip__hidden-content">
        <slot name="tooltipText"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    minWidth: Number
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.tooltip {
  // border: 1px solid red;
  position: relative;
  .tooltip__element {
    // border: 1px solid red;
    position: relative;
    display: flex;
    align-items: center;
    .tooltip__hidden-content {
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      box-shadow: $boxShadow;
      font-size: 14px;
      transition: $tr-02;
      transition-delay: .2s;
      opacity: 0;
      visibility: hidden;
    }
  }
  .tooltip__element:hover .tooltip__hidden-content {
    opacity: 1;
    visibility: visible;
  }
}

</style>