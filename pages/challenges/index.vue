<template>
  <div class="challenges-page">
    <app-page-title>Вызовы</app-page-title>
    <div class="callenges-page__content">
      <week-challenges />
      <additional-info />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import WeekChallenges from '@/components/challenges/WeekChallenges/index'
import AdditionalInfo from '@/components/challenges/AdditionalInfo/index'

export default {
  components: {
    AppPageTitle,
    WeekChallenges,
    AdditionalInfo,
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.challenges-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .callenges-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
