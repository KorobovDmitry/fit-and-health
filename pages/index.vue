<template>
  <div class="index-page">
    <div class="index-page__content-wrapper">
      <p>index page {{ users }}</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['user-auth'],
  async asyncData ({$axios}) {
    const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    return {users}
  },
  beforeCreate () {
    this.$store.commit('nutritionDiary/closeSidebar')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.index-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .index-page__content-wrapper {
    border: 1px solid red;
    margin-top: 60px;
    padding: 40px 40px 20px 40px;
    width: 100%;
    max-width: 1400px;
  }
}

</style>
