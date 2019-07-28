<template>
  <div class="search">
    <input
      ref="searchInput"
      class="search__input"
      type="text"
      placeholder="Поиск по названия"
      value
    >
    <div class="search__reset-value-btn" @click="resetSearchInputValue">
      <i class="search__reset-value-btn-icon ti-close" />
    </div>
    <div class="search__btn" @click="searchProduct">
      <i v-if="small" class="search__btn-text ti-search" />
      <p v-if="!small" class="search__btn-text">
        Найти
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: Boolean
  },
  methods: {
    resetSearchInputValue() {
      this.$refs.searchInput.value = ''
    },
    searchProduct() {
      // console.log('search product')
    },
    setFilterOrder($event) {
      this.filterOrder = $event
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.search {
  // border: 1px solid red;
  display: flex;
  .search__input {
    padding: 8px 0px 8px 20px;
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
  .search__input:focus {
    border: 1px solid $green;
    border-right: none;
  }
  .search__input:focus + .search__reset-value-btn {
    border-top: 1px solid $green;
    border-bottom: 1px solid $green;
  }
  .search__reset-value-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $white;
    padding: 0 14px;
    color: $green;
    border-top: 1px solid $blockBorder;
    border-bottom: 1px solid $blockBorder;
    user-select: none;
    cursor: pointer;
    transition: $tr-01;
    .search__reset-value-btn-icon {
      color: $gray-dark;
      user-select: none;
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
</style>
