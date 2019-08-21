<template>
  <ul class="accordion-list">
    <li class="accordion-list__item">
      <div class="accordion-list__item-header" @click="toggleVisibility($event)">
        <slot name="accordionHeader"></slot>
      </div>
      <div class="accordion-list__item-hidden-content">
        <slot name="accordionHiddenContent"></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    toggleVisibility ($event) {
      console.log($event.target)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

</style>
