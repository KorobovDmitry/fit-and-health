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
      <i class="search__reset-value-btn-icon ti-close"></i>
    </div>
    <div class="search__btn" @click="searchProduct">
      <p class="search__btn-text">Найти</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resetSearchInputValue () {
      this.$refs.searchInput.value = ''
    },
    searchProduct () {
      console.log('search product')
    },
    setFilterOrder ($event) {
      this.filterOrder = $event
      console.log($event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.search {
  // border: 1px solid red;
  display: flex;
  // margin: 0 40px;
  @include for(580) {
    margin: 0 10px;
  }
  .search__input {
    padding: 8px 0px 8px 20px;
    width: 100%;
    // color: $gray-dark;
    font-family: $fontMontserrat;
    border: 1px solid rgba(0, 0, 0, 0.2);
    // border: 2px solid $green;
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
  // .search__input:focus ~ .search__btn {
  //   border-left: 1px solid $green;
  // }
  .search__reset-value-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $white;
    padding: 0 14px;
    color: $green;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
    // background: $white;
    background: $green;
    // border: 1px solid rgba(0, 0, 0, 0.2);
    border: 1px solid $green;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    user-select: none;
    cursor: pointer;
    transition: $tr-02;
    .search__btn-text {
      // color: $gray-dark;
      color: $white;
      transition: $tr-02;
      // font-weight: 400;
    }
  }
}
</style>
