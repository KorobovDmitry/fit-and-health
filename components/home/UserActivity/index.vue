<template>
  <div class="user-activity">
    <div class="user-activity__news-visibility">
      <p class="news-visibility__block-title">Лента новостей</p>
      <filter-radio-text-group
        :valueList="['Все записи', 'Только мои записи']"
        :defaultValue="feed"
        size18px
        @inputGroupValueChanged="feed = $event"
      />
    </div>
    <user-new-post />
    <user-stories />
    <user-post/>
    <user-post-image-slider/>
  </div>
</template>

<script>
import UserNewPost from '@/components/home/UserActivity/UserNewPost'
import UserStories from '@/components/home/UserActivity/UserStories'
import UserPost from '@/components/home/UserActivity/UserPost'
import UserPostImageSlider from '@/components/home/UserActivity/UserPostImageSlider'
import FilterRadioTextGroup from '@/components/basic/FilterRadioTextGroup'

export default {
  components: {
    UserNewPost,
    UserStories,
    UserPost,
    UserPostImageSlider,
    FilterRadioTextGroup
  },
  data () {
    return {
      feed: 'Все записи'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.user-activity {
  flex: 1 1 auto;
  margin: 0 40px;
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
  }
}

</style>