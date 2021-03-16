<template>
  <div class="user-page">
    <app-page-title>Профиль</app-page-title>
    <div class="user-page__content">
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
  name: 'user',
  head () {
    return {
      title: 'Fit and Health - Профиль',
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { // МИКРОРАЗМЕТКА
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://website.com",
            "name": "Website",
            "description": "This website is awesome.",
            "publisher": {
              "@type": "Organization",
              "name": "Website",
              "alternateName": "SiteWeb",
              "logo": {
                "@type": "ImageObject",
                "url": "https://someimage.com/image"
              }
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  },
  middleware: ['userAuth'],
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

.user-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 70px;
  padding: 40px;
  .user-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
