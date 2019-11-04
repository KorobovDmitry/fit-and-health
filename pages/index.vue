<template>
  <div class="index-page">
    <div class="index-page__content">
      <div class="index-page__left-block">
        <user-card />
      </div>

      <div class="index-page__center-block">
        <user-activity />

        <div class="settings">
          <p class="settings-element">User E-mail:</p>
          <input type="text" :value="this.$store.getters['userProfile/getUserEmail']">
          <p class="settings-element">User Name:</p>
          <input type="text" :value="this.$store.getters['userProfile/getUserFirstName']">
          <p class="settings-element">User Last Name:</p>
          <input type="text" :value="this.$store.getters['userProfile/getUserLastName']">
          <p class="settings-element">User Middle Name:</p>
          <input type="text" :value="this.$store.getters['userProfile/getUserMiddleName']">
          <p class="settings-element">User Birthday:</p>
          <input type="text" :value="this.$store.getters['userProfile/getUserBirthday']">
          <p class="settings-element">User Phone Number:</p>
          <input type="text" :value="this.$store.getters['userProfile/getUserPhoneNumber']">
          <p class="settings-element">User Gender:</p>
          <input type="text" :value="this.$store.getters['userProfile/getUserGender']">
          <p class="settings-element">User Activity:</p>
          <input type="text" :value="this.$store.getters['userProfile/getUserActivity']">
        </div>
      </div>
      <div class="index-page__right-block">
        <user-all-time-stats />
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/home/Profile/UserCard.vue'
import UserAllTimeStats from '@/components/home/MainInfo/UserAllTimeStats.vue'
import UserActivity from '@/components/home/Activity/UserActivity.vue'
export default {
  middleware: ['user-auth'],
  components: {
    UserCard,
    UserActivity,
    UserAllTimeStats
  },
  async fetch ({ store }) {
    await store.dispatch('userProfile/getUserInfo')
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
  margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .index-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
    .index-page__left-block {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
    }
    .index-page__center-block {
      margin-left: 40px;
    }
    .index-page__right-block {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      margin-left: 40px;
      min-width: 400px;
      max-width: 400px;
    }
  }
}

</style>
