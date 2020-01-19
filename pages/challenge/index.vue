<template>
  <div class="challenge-page">
    <app-page-title>Вызовы</app-page-title>
    <div class="callenge-page__content">
      challenge
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
export default {
  components: {
    AppPageTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.challenge-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .callenge-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
