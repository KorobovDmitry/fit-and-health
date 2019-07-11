<template>
  <div>
    RangeSlider
    <input type="range" min="0" max="10" step="1" v-model="value">
    {{ value }}
    <!-- ДЛя двойного ползунка можно использовать два инпута связанных друг с другом
      или построить все на Div и span -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 2
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

</style>
