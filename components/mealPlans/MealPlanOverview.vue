<template>
  <div class="meal-plan-overview">

    <app-block-title>Обзор рациона</app-block-title>

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
@import "@/assets/scss/vars.scss";

.meal-plan-overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  margin-left: 40px;
}

</style>
