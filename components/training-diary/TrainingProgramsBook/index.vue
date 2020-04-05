<template>
  <div class="training-programs-book">
    <page-info />
    <div class="training-programs-book__filters-and-results">
      <sorting-filters />
      <search-results />
    </div>
  </div>
</template>

<script>
import PageInfo from '@/components/training-diary/TrainingProgramsBook/PageInfo'
import SortingFilters from '@/components/training-diary/TrainingProgramsBook/SortingFilters'
import SearchResults from '@/components/training-diary/TrainingProgramsBook/SearchResults'

export default {
  components: {
    PageInfo,
    SortingFilters,
    SearchResults,
  },
  data () {
    return {}
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
