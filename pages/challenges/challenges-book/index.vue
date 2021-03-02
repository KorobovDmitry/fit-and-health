<template>
  <div class="challenges-book">
    <app-page-title>Книга вызывов</app-page-title>
    <div class="callenges-book__content">
      <app-page-info
        :infoElements="pageInfo"
        btnTitle="Добавить вызов"
        @btnAction="AddChallengeBtn()"
      />
      <div class="filters-and-results">
        <search-filters />
        <search-results />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppPageInfo from '@/components/basic/AppPageInfo'
import SearchFilters from '@/components/challengesBook/SearchFilters'
import SearchResults from '@/components/challengesBook/SearchResults'

export default {
  components: {
    AppPageTitle,
    AppPageInfo,
    SearchFilters,
    SearchResults
  },
  data () {
    return {
      pageInfo: [
        {
          title: 'Всего вызывов',
          value: 28456
        },
        {
          title: 'Принято',
          value: 65
        },
        {
          title: 'Побед',
          value: 52
        },
        {
          title: 'Мои вызовы',
          value: 14
        },
      ]
    }
  },
  methods: {
    AddChallengeBtn () {
      console.log('add challenge')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.challenges-book {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .callenges-book__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .filters-and-results {
      display: flex;
    }
  }
}

</style>

