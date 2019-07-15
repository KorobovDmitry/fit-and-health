<template>
  <div class="index-page">
    <div class="index-page__content-wrapper">
      <p class="index-page__title">Настройки</p>
      <div class="index-page__content">

        <user-card />
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
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/home/profile/UserCard.vue'
export default {
  middleware: ['user-auth'],
  components: {
    UserCard
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
  .index-page__content-wrapper {
    // border: 1px solid red;
    margin-top: 60px;
    padding: 40px;
    width: 100%;
    max-width: 1400px;
    .index-page__title {
      // border: 1px solid red;
      text-align: center;
      font-size: 26px;
      margin-bottom: 40px;
    }
    .index-page__content {
      // border: 1px solid red;
      display: flex;
    }
  }
}

.settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.settings-element {
  margin-top: 20px;
}

</style>
