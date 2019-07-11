<template>
  <div class="overview-parameters">
    <weight-parameters />
  </div>
</template>

<script>
import WeightParameters from '@/components/nutritionDiary/Measurements/Parameters/WeightParameters.vue'
export default {
  components: {
    WeightParameters
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.overview-parameters {
  // border: 1px solid red;
  margin-top: 40px;
  margin-left: 40px;
  width: 100%;
}

</style>
