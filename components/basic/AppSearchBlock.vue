<template>
  <div
    ref="search"
    class="search"
    :class="[
      {'mb10': mb10},
      {'mb20': mb20}
    ]"
  >

    <div ref="searchField" class="search-field">
      <input
        ref="searchInput"
        class="search__input"
        type="text"
        placeholder="Поиск по названия"
        v-model="searchString"
      >
      <div class="search__action-btn">
        <i class="search__action-btn-icon ti-close" @click="resetSearchInputValue()" />
        <i v-if="filters" class="search__action-btn-icon ti-panel" @click="toggleFiltersVisibility()"></i>
      </div>
      <div class="search__btn" @click="searchProduct()">
        <i v-if="small" class="search__btn-text ti-search" />
        <p v-if="!small" class="search__btn-text">Найти</p>
      </div>
    </div>

    <div ref="searchFilters" v-if="filters" class="search-filters">
      <slot name="searchFilters"></slot>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    small: Boolean,
    filters: Boolean,
    mb10: Boolean,
    mb20: Boolean
  },
  data () {
    return {
      isVisible: false,
      searchString: ''
    }
  },
  watch: {
    searchString () {
      this.$emit('searchStringChanged', this.searchString)
    }
  },
  methods: {
    resetSearchInputValue () {
      this.$refs.searchInput.value = ''
    },
    toggleFiltersVisibility () {
      const searchFieldHeight = this.$refs.searchField.getBoundingClientRect().height
      const searchFiltersHeight = this.$refs.searchFilters.getBoundingClientRect().height
      const blockMargin = 5
      if (!this.isVisible) {
        this.isVisible = true
        this.$refs.search.style.height = `${searchFieldHeight + searchFiltersHeight + blockMargin}px`
      } else {
        this.isVisible = false
        this.$refs.search.style.height = `${searchFieldHeight}px`
      }
    },
    searchProduct () {
      // console.log('search product')
    }
  },
  mounted () {
    this.$refs.search.style.height = this.$refs.searchField.getBoundingClientRect().height + 'px'
    setTimeout(() => {
      this.$refs.search.style.transition = 'all .2s linear'
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.search {
  // border: 1px solid red;
  height: 0;
  overflow: hidden;
  .search-field {
    display: flex;
    .search__input {
      padding: 10px 0px 10px 20px;
      width: 100%;
      font-family: $fontMontserrat;
      border: 1px solid $blockBorder;
      border-right: none;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      outline: none;
      transition: $tr-01;
      @include for(580) {
        padding: 10px 0px 10px 20px;
      }
    }
    .search__action-btn {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $white;
      padding: 0 10px;
      color: $green;
      border-top: 1px solid $blockBorder;
      border-bottom: 1px solid $blockBorder;
      transition: $tr-01;
      .search__action-btn-icon {
        // border: 1px solid red;
        padding: 5px;
        color: $gray-dark;
        user-select: none;
        cursor: pointer;
      }
      .search__action-btn-icon:first-child {
        margin-right: 5px;
      }
    }
    .search__btn {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $green;
      border: 1px solid $green;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      user-select: none;
      cursor: pointer;
      transition: $tr-02;
      .search__btn-text {
        color: $white;
        transition: $tr-02;
      }
    }
  }
  .search-filters {
    margin: 5px 0 20px 0;
    padding: 10px 20px;
    background: $white;
    // background: $hiddenBlockBG;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
}

.mb10 {
  margin-bottom: 10px;
}
.mb20 {
  margin-bottom: 20px;
}

</style>
