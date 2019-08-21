<template>
  <div class="navbar">
    <div class="navbar__action-btn-wrapper">
      <i class="ti-search navbar__action-btn"></i>
      <i class="ti-email navbar__action-btn"></i>
      <i class="ti-bell navbar__action-btn"></i>
      <i class="ti-settings navbar__action-btn"></i>
    </div>
    <!-- <app-main-search-block /> -->
  </div>
</template>

<script>
import AppMainSearchBlock from '@/components/navigation/AppMainSearchBlock'
export default {
  components: {
    AppMainSearchBlock
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

.navbar {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 80px;
  width: calc(100% - 80px);
  height: 60px;
  background: $white;
  border-bottom: 1px solid $blockBorder;
  .navbar__action-btn-wrapper {
    margin-left: auto;
    margin-right: 20px;
    .navbar__action-btn {
      // border: 1px solid red;
      margin: 0 10px;
      padding: 5px;
      font-size: 24px;
      cursor: pointer;
    }
  }
}

</style>
