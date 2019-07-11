<template>
  <div class="table-pagination">
    <ul class="pagination-list">
      <li class="pagination-list__item-navigation">назад</li>
      <li class="pagination-list__item">1</li>
      <li class="pagination-list__item-missed-page">...</li>
      <li class="pagination-list__item">4</li>
      <li class="pagination-list__item pagination-list__item--active">5</li>
      <li class="pagination-list__item">6</li>
      <li class="pagination-list__item-missed-page">...</li>
      <li class="pagination-list__item">15</li>
      <li class="pagination-list__item-navigation">вперед</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.table-pagination {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  // margin-bottom: 20px;
  .pagination-list {
    display: flex;
    user-select: none;
    .pagination-list__item {
      margin: 8px;
      padding: 4px 6px;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: $tr-02;
    }
    .pagination-list__item:hover {
      // border-bottom: 2px solid $green;
      color: $green;
      // font-weight: 600;
    }
    .pagination-list__item--active {
      color: $green;
      font-weight: 600;
      border-bottom: 2px solid $green;
    }
    .pagination-list__item-navigation {
      margin: 8px;
      padding: 4px 6px;
      border-bottom: 2px solid transparent;
      // color: $green;
      font-weight: 600;
      cursor: pointer;
      transition: $tr-02;
    }
    .pagination-list__item-navigation:hover {
      color: $green;
    }
    .pagination-list__item-missed-page {
      margin: 8px;
      padding: 4px 6px;
      border-bottom: 2px solid transparent;
      cursor: default;
    }
  }
}

</style>
