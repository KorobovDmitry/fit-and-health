<template>
  <div class="measurements-page">
    <div class="measurements-page__content">
      measurements
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.measurements-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 100px 40px 40px 40px;
  .measurements-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1800px;
  }
}

</style>
