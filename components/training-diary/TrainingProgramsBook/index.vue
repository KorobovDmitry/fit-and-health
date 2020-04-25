<template>
  <div class="training-programs-book">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить программу"
      @btnAction="openModal()"
    />
    <div class="training-programs-book__filters-and-results">
      <sorting-filters />
      <search-results />
    </div>
  </div>
</template>

<script>
import AppPageInfo from '@/components/basic/AppPageInfo'
import SortingFilters from '@/components/training-diary/TrainingProgramsBook/SortingFilters'
import SearchResults from '@/components/training-diary/TrainingProgramsBook/SearchResults'

export default {
  components: {
    AppPageInfo,
    SortingFilters,
    SearchResults,
  },
  data () {
    return {
      pageInfoElements: [
        {
          title: 'Всего программ',
          value: 12
        },
        {
          title: 'Избранное',
          value: 5
        },
        {
          title: 'Мои программы',
          value: 3
        }
      ]
    }
  },
  methods: {
    openModal () {
      console.log('Открыть модальное окно "Добавить программу тренировок"')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.training-programs-book {
  // border: 1px solid red;
  flex: 1 1 auto;
  .training-programs-book__filters-and-results {
    display: flex;
  }
}

</style>
