<template>
  <div class="filter-radio-group">

    <div class="filter-radio-group__header">
      <p class="header__title">{{ headerTitle }}</p>
      <i class="ti-angle-double-down header__icon"></i>
    </div>

    <div class="filter-radio-group__footer">
      <ul class="filter-radio-group__value-list">
        <li v-for="(item, index) in valueList" :key="index" class="value-list__item">
          <app-input-radio
            v-model="checkedValue"
            :label="item"
            :value="item"
          />
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import AppInputRadio from '@/components/basic/AppInputRadio.vue'
export default {
  components: {
    AppInputRadio
  },
  props: {
    headerTitle: String,
    valueList: Array,
    defaultValue: String
  },
  data () {
    return {
      // filterGroupOpened: true,
      checkedValue: this.defaultValue
    }
  },
  watch: {
    checkedValue () {
      this.$emit('inputGroupValueChanged', this.checkedValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.filter-radio-group {
  margin-bottom: 10px;
  .filter-radio-group__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-bottom: 5px;
    padding: 10px 20px;
    // background: $green;
    background: $white;
    // border: 1px solid $green;
    border: 1px solid $blockBorder;
    // border-radius: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    // color: $white;
    .header__title {
      font-weight: 500;
    }
    .header__icon {
      font-size: 14px;
    }
  }
  .filter-radio-group__footer {
    padding: 10px;
    background: rgba(0,0,0,.1);
    // border-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .filter-radio-group__value-list {
      // margin: 0 10px;
      padding: 15px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      // border-bottom-left-radius: 6px;
      // border-bottom-right-radius: 6px;
      .value-list__item {
        margin-bottom: 10px;
      }
      .value-list__item:last-child {
        margin-bottom: 0;
      }
    }
  }
}

</style>