<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <nuxt-link to="/" exact no-prefetch>FH</nuxt-link>
    </div>

    <nuxt-link
      to="/profile"
      exact
      no-prefetch
      class="ti-home navbar__page-link"
      active-class="navbar__page-link--active"
    ></nuxt-link>
    <nuxt-link
      to="/messages"
      exact
      no-prefetch
      class="ti-comments navbar__page-link"
      active-class="navbar__page-link--active"
    ></nuxt-link>
    <nuxt-link
      to="/training-diary"
      no-prefetch
      class="ti-timer navbar__page-link"
      active-class="navbar__page-link--active"
    ></nuxt-link>
    <nuxt-link
      to="/meal-planer"
      no-prefetch
      class="ti-agenda navbar__page-link"
      active-class="navbar__page-link--active"
    ></nuxt-link>
    <nuxt-link
      to="/challenge"
      no-prefetch
      class="ti-cup navbar__page-link"
      active-class="navbar__page-link--active"
    ></nuxt-link>
    <nuxt-link
      to="/measurements"
      exact
      no-prefetch
      class="ti-bar-chart navbar__page-link"
      active-class="navbar__page-link--active"
    ></nuxt-link>

    <nuxt-link
      to="/handbook"
      exact
      no-prefetch
      class="ti-bookmark-alt navbar__page-link"
      active-class="navbar__page-link--active"
    ></nuxt-link>

    <nuxt-link
      to="/settings"
      exact
      no-prefetch
      class="ti-settings navbar__page-link"
      active-class="navbar__page-link--active"
    ></nuxt-link>

    <i
      class="ti-export navbar__page-link logout"
      @click="logout()"
    ></i>
  </nav>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/auth')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.navbar {
  // border: 1px solid red;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100%;
  background: $white;
  border-right: 1px solid $blockBorder;
  z-index: 9000;
  .navbar__logo {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background: $green;
    a {
      color: $white;
      font-size: 28px;
      font-weight: 600;
    }
  }
  .navbar__page-link {
    // border: 1px solid red;
    position: relative;
    margin: 5px 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    color: $black;
    font-size: 28px;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    cursor: pointer;
    transition: $tr-02;
  }
  .navbar__page-link:nth-child(2) {
    margin-top: auto;
  }
  .navbar__page-link:last-child {
    margin-top: auto;
    margin-bottom: 20px;
  }
  .navbar__page-link--active {
    color: $white;
    background: $green;
    border-radius: 6px;
  }
  .logout {
    transform: rotate(90deg);
  }
}

</style>
