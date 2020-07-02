<template>
  <div class="program-overview-page">
    <app-page-title>Тренировочная программа</app-page-title>
    <div class="program-overview-page__content">
      <program-overview />
      <additional-info />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import ProgramOverview from '@/components/training-diary/Program/ProgramOverview/index'
import AdditionalInfo from '@/components/training-diary/Program/AdditionalInfo/index'

export default {
  components: {
    AppPageTitle,
    ProgramOverview,
    AdditionalInfo
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.program-overview-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .program-overview-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
