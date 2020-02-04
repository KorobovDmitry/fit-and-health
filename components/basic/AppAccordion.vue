<template>
  <div ref="accordion" class="accordion">
    <div ref="header" class="accordion__header" @click="toggleVisibility()">
      <slot name="accordionHeader"></slot>
    </div>
    <div ref="hiddenContent" class="accordion__hidden-content">
      <slot name="accordionHiddenContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpened: Boolean
  },
  data () {
    return {
      isVisible: this.isOpened
    }
  },
  methods: {
    toggleVisibility () {
      const headerHeight = this.$refs.header.getBoundingClientRect().height
      const hiddenContentHeight = this.$refs.hiddenContent.getBoundingClientRect().height
      if (!this.isVisible) {
        this.isVisible = true
        this.$refs.accordion.style.height = `${headerHeight + hiddenContentHeight}px`
      } else {
        this.isVisible = false
        this.$refs.accordion.style.height = `${headerHeight}px`
      }
    }
  },
  mounted () {
    if (this.isOpened) {
      this.$refs.accordion.style.height = this.$refs.header.getBoundingClientRect().height + this.$refs.hiddenContent.getBoundingClientRect().height + 'px'
      setTimeout(() => {
        this.$refs.accordion.style.transition = 'all .2s linear'
      }, 0)
    } else {
      this.$refs.accordion.style.height = this.$refs.header.getBoundingClientRect().height + 'px'
      setTimeout(() => {
        this.$refs.accordion.style.transition = 'all .2s linear'
      }, 0)
    }

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.accordion {
  // border: 1px solid blue;
  height: 0;
  overflow: hidden;
  .accordion__header {
    // border: 1px solid red;
    user-select: none;
    cursor: pointer;
  }
}

</style>
