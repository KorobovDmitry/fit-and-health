<template>
  <div class="measurements">
    <div class="measurements__content-wrapper">
      <p class="measurements__page-title">Замеры</p>
      <div class="measurements__content">
        <monitored-parameters />
        <overview-parameters />
      </div>
    </div>
  </div>
</template>

<script>
import MonitoredParameters from '@/components/nutritionDiary/Measurements/MonitoredParameters.vue'
import OverviewParameters from '@/components/nutritionDiary/Measurements/OverviewParameters.vue'
export default {
  middleware: ['user-auth'],
  components: {
    MonitoredParameters,
    OverviewParameters
  },
  data () {
    return {

    }
  },
  beforeMount: function () {
    this.$store.commit('nutritionDiary/openSidebar')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.measurements {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .measurements__content-wrapper {
    // border: 1px solid red;
    margin-top: 60px;
    padding: 40px 40px 20px 40px;
    width: 100%;
    max-width: 1400px;
  }
  .measurements__page-title {
    text-align: center;
    font-size: 26px;
  }
  .measurements__content {
    // border: 1px solid red;
    display: flex;
  }
}

</style>
