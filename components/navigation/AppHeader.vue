<template>
  <div class="header-navbar">
    <div class="header-navbar__action-btn-wrapper">
      <i class="ti-search header-navbar__action-btn"></i>
      <nuxt-link
        to="/messages"
        exact
        no-prefetch
        class="ti-email header-navbar__page-link"
        active-class="header-navbar__page-link--active"
      ></nuxt-link>
      <i class="ti-bell header-navbar__action-btn"></i>
      <nuxt-link
        to="/settings"
        exact
        no-prefetch
        class="ti-settings header-navbar__page-link"
        active-class="header-navbar__page-link--active"
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

.header-navbar {
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
  opacity: .3;
  .header-navbar__action-btn-wrapper {
    margin-left: auto;
    margin-right: 20px;
    .header-navbar__action-btn {
      // border: 1px solid red;
      margin: 0 5px;
      padding: 10px;
      font-size: 24px;
      cursor: pointer;
      transition: $tr-02;
    }
    // .header-navbar__action-btn--active {
    //   color: $green;
    // }
    .header-navbar__page-link {
      margin: 0 5px;
      padding: 10px;
      text-decoration: none;
      color: $black;
      font-size: 24px;
      cursor: pointer;
      transition: $tr-02;
    }
    .header-navbar__page-link--active {
      color: $green;
    }
  }
}

</style>
