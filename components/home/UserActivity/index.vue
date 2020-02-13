<template>
  <div class="user-activity">
    <div class="user-activity__news-visibility">
      <p class="news-visibility__block-title">Лента новостей</p>
      <p class="news-visibility__param-btn news-visibility__param-btn--active">Все записи</p>
      <p class="news-visibility__param-btn">Только мои записи</p>
    </div>
    <user-new-post />
    <user-stories />
    <user-post v-for="(item, index) in 1" :key="index"/>
  </div>
</template>

<script>
import UserNewPost from '@/components/home/UserActivity/UserNewPost'
import UserStories from '@/components/home/UserActivity/UserStories'
import UserPost from '@/components/home/UserActivity/UserPost'

export default {
  components: {
    UserNewPost,
    UserStories,
    UserPost
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.user-activity {
  flex: 1 1 auto;
  margin-left: 40px;
  .user-activity__news-visibility {
    display: flex;
    align-items: center;
    margin: 0 20px 10px 20px;
    .news-visibility__block-title {
      margin-right: auto;
      padding: 2px 5px;
      font-size: 18px;
      font-weight: 500;
      border-bottom: 2px solid transparent;
    }
    .news-visibility__param-btn {
      margin-left: 20px;
      padding: 2px 5px;
      font-size: 18px;
      font-weight: 500;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: $tr-02;
    }
    .news-visibility__param-btn:hover {
      color: $green;
    }
    .news-visibility__param-btn--active {
      color: $green;
      // font-weight: 500;
      border-bottom: 2px solid $green;
    }
  }
}

</style>