<template>
  <div class="filter-checkbox-group">

    <app-accordion :isOpened="filterGroupOpened">
      <template v-slot:accordionHeader>
        <div class="filter-checkbox-group__header">
          <p class="header__title">{{ headerTitle }}</p>
          <i class="ti-angle-double-down header__icon"></i>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <div class="filter-checkbox-group__footer">
          <ul class="footer__value-list">
            <li v-for="(item, index) in valueList" :key="index" class="value-list__item">
              <app-input-checkbox
                v-model="checkedValue"
                :label="item"
                :value="item"
              />
            </li>
          </ul>
          <div class="footer__btn-wrapper">
            <app-button size12px uppercase mt10 @click.native="removeAllValue()">Очистить все</app-button>
            <app-button size12px uppercase mt10 @click.native="selectAllValue()">Выбрать все</app-button>
            <app-button size12px uppercase mt10 @click.native="applyFilter()">Применить</app-button>
          </div>
        </div>
      </template>
    </app-accordion>

  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion.vue'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppAccordion,
    AppInputCheckbox,
    AppButton
  },
  props: {
    headerTitle: String,
    valueList: Array,
    defaultValue: Array,
    filterGroupOpened: Boolean
  },
  data () {
    return {
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
    },
    applyFilter () {
      // console.log('applyFilter')
      this.$emit('applyFunc')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.filter-checkbox-group {
  margin-bottom: 20px;
  .filter-checkbox-group__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .header__title {
      font-weight: 500;
    }
    .header__icon {
      font-size: 14px;
    }
  }
  .filter-checkbox-group__footer {
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    background: $hiddenBlockBG;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .footer__value-list {
      padding: 15px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .value-list__item {
        margin-bottom: 10px;
      }
      .value-list__item:last-child {
        margin-bottom: 0;
      }
    }
    .footer__btn-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
}

</style>