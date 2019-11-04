<template>
  <div class="measurements-page">
    <div class="measurements-page__content">

      <tracking-params />

    </div>
  </div>
</template>

<script>
import TrackingParams from '@/components/measurements/TrackingParams'
export default {
  components: {
    TrackingParams
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.measurements-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .measurements-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
