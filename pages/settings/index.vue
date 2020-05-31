<template>
  <div class="settings-page">
    <app-page-title>Настройки</app-page-title>
    <div class="settings-page__content">
      settings
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'

export default {
  components: {
    AppPageTitle
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.settings-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .settings-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
