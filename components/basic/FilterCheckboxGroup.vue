<template>
  <div class="filter-checkbox-group">
    <div class="filter-checkbox-group__header">
      <p class="header__title">{{ headerTitle }}</p>
      <i class="ti-angle-double-down header__icon"></i>
    </div>

    <div class="filter-checkbox-group__value-list-and-btn">
      <ul class="value-list">
        <li v-for="(item, index) in valueList" :key="index" class="value-list__item">
          <app-input-checkbox
            v-model="checkedValue"
            :label="item"
            :value="item"
          />
        </li>
      </ul>
      <!-- <div class="btn-wrapper">
        <app-button size14px uppercase @click.native="removeAllValue()">Очистить</app-button>
        <app-button size14px uppercase @click.native="selectAllValue()">Выбрать все</app-button>
      </div> -->
    </div>

  </div>
</template>

<script>
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'
import AppButton from '@/components/basic/AppButton'
export default {
  components: {
    AppInputCheckbox,
    AppButton
  },
  props: {
    headerTitle: String,
    valueList: Array,
    defaultValue: Array
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
  },
  methods: {
    removeAllValue () {
      this.checkedValue = []
    },
    selectAllValue () {
      this.checkedValue = this.defaultValue
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.filter-checkbox-group {
  margin-bottom: 10px;
  .filter-checkbox-group__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 10px 20px;
    // background: $green;
    background: $white;
    // border: 1px solid $green;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    // color: $white;
    .header__title {
      font-weight: 500;
    }
    .header__icon {
      font-size: 14px;
    }
  }
  .filter-checkbox-group__value-list-and-btn {
    padding: 15px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .value-list {
      // margin-bottom: 5px;
      .value-list__item {
        margin-bottom: 10px;
      }
      .value-list__item:last-child {
        margin-bottom: 0;
      }
    }
    .btn-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
    }
  }
}

</style>