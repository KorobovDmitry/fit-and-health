<template>
  <div class="navbar">
    <nuxt-link
      to="/"
      exact
      no-prefetch
      class="navbar__logo-link"
      @click.native="closeSidebar()"
    >
      Fit & Health
    </nuxt-link>
    <nuxt-link
      v-for="(element, key) of navbarLink"
      :key="key"
      :to="key"
      no-prefetch
      active-class="navbar__link--active"
      class="navbar__link"
      @click.native="closeSidebar()"
    >
      {{ element }}
    </nuxt-link>
    <p @click="logout()">выйти</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarLink: {
        '/trainings': 'Тренировки',
        '/nutrition-diary': 'Дневник питания',
        '/events': 'Вызовы',
        '/auth': 'Auth'
      }
    }
  },
  methods: {
    closeSidebar () {
      this.$store.commit('nutritionDiary/closeSidebar', false)
    },
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: $white;
  border-bottom: 1px solid rgba(0,0,0,.2);
  // box-shadow: $menuBlockShadow;
  z-index: 100;
  .navbar__logo-link {
    margin: 0 100px 0 80px;
    padding: 14px;
    text-decoration: none;
    color: $black;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: .6px;
    white-space: nowrap;
  }
  .navbar__link {
    position: relative;
    margin: 0 2px;
    padding: 18px 20px;
    text-decoration: none;
    color: $gray-dark;
    font-size: 16px;
    // font-weight: 400;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    transition: $tr-02;
  }
  .navbar__link:hover {
    color: $green;
    border-bottom: 2px solid $green;
    transition: $tr-02;
  }
  .navbar__link--active {
    color: $green;
    border-bottom: 2px solid $green;
  }
  .navbar__notification {
    margin-left: auto;
    margin-right: 20px;
  }
  .navbar__user {
    margin: 0 60px 0 20px;
  }
}

</style>
