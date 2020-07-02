<template>
  <div class="program-overview">
    <app-block-title>Информация о тренировочной программе</app-block-title>
    <div class="program-overview__content">
      content
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.program-overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  .program-overview__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
  }
}

</style>
