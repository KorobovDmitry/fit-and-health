<template>
  <div class="challenges-in-progress-page">
    <app-page-title>Выполнение вызова</app-page-title>
    <div class="challenges-in-progress-page__content">
      content
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'

export default {
  components: {
    AppPageTitle,
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.challenges-in-progress-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .challenges-in-progress-page__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
