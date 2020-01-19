<template>
  <div class="measurements-page">
    <app-page-title>Замеры и статистика</app-page-title>
    <div class="measurements-page__content">
      <div class="content__left-block">
        <tracking-params />
        <user-progress-chart />
        <calculation-parameters />
      </div>
      <div class="content__right-block">
        <user-params-overview />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import TrackingParams from '@/components/measurements/TrackingParams'
import UserProgressChart from '@/components/measurements/UserProgressChart'
import CalculationParameters from '@/components/measurements/CalculationParameters'
import UserParamsOverview from '@/components/measurements/UserParamsOverview'
export default {
  components: {
    AppPageTitle,
    TrackingParams,
    UserProgressChart,
    CalculationParameters,
    UserParamsOverview
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
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .measurements-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
    .content__left-block {
      flex: 1 1 auto;
      // border: 1px solid red;
    }
    // .content__right-block {
    //   border: 1px solid red;
    // }
  }
}

</style>
