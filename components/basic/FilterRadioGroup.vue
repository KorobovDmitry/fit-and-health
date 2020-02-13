<template>
  <div class="filter-radio-group">

    <app-accordion :isOpened="filterGroupOpened">
      <template v-slot:accordionHeader>
        <div class="filter-radio-group__header">
          <p class="header__title">{{ headerTitle }}</p>
          <i class="ti-angle-double-down header__icon"></i>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
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
          <div class="footer__btn-wrapper">
            <app-button size12px uppercase mt5 @click.native="setDefaultValue()">значение по умолчанию</app-button>
            <app-button size12px uppercase mt5 @click.native="applyFunc()">Применить</app-button>
          </div>
        </div>
      </template>
    </app-accordion>

  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion.vue'
import AppInputRadio from '@/components/basic/AppInputRadio.vue'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppAccordion,
    AppInputRadio,
    AppButton
  },
  props: {
    headerTitle: String,
    valueList: Array,
    defaultValue: String,
    filterGroupOpened: Boolean,
    applyFunc: Function
  },
  data () {
    return {
      isOpened: false,
      checkedValue: this.defaultValue
    }
  },
  watch: {
    checkedValue () {
      this.$emit('inputGroupValueChanged', this.checkedValue)
    }
  },
  methods: {
    setDefaultValue () {
      console.log('set Default Value')
      this.checkedValue = this.defaultValue
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.filter-radio-group {
  margin-bottom: 20px;
  .filter-radio-group__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    transition: $tr-02;
    transition-delay: .15s;
    .header__title {
      font-weight: 500;
    }
    .header__icon {
      font-size: 14px;
    }
  }
  .filter-radio-group__footer {
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    background: $hiddenBlockBG;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .filter-radio-group__value-list {
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
      justify-content: space-between;
      align-items: center;
    }
  }
}

</style>