<template>
  <div class="handbook">
    <app-page-title>Справочник</app-page-title>
    <div class="handbook__content">
      handbook
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
@import "@/assets/scss/vars.scss";

.handbook {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .handbook__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
