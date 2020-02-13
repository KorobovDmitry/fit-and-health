<template>
  <div class="index-page">
    <app-page-title>Профиль</app-page-title>
    <div class="index-page__content">
      <user-card />
      <user-activity />
      <main-info />
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import UserCard from '@/components/home/UserCard'
import MainInfo from '@/components/home/MainInfo'
import UserActivity from '@/components/home/UserActivity/index'

export default {
  name: 'index',
  head: {
    title: 'Fit and Health - Профиль'
  },
  // middleware: ['userAuth'],
  components: {
    AppPageTitle,
    UserCard,
    UserActivity,
    MainInfo
  },
  // async fetch ({ store }) {
  //   await store.dispatch('userProfile/getUserInfo')
  // }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.index-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .index-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
