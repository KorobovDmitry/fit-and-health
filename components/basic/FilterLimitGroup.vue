<template>
  <div class="filter-limit-group">

    <app-accordion :isOpened="filterGroupOpened">
      <template v-slot:accordionHeader>
        <div class="filter-limit-group__header">
          <p class="header__title">{{ groupTitle }}</p>
          <i class="ti-angle-double-down header__icon"></i>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <div class="filter-limit-group__footer">
          <div class="footer__content">
            <app-input-limit
              :startValue="startValue"
              :endValue="endValue"
              @limitValueChanged="limitValue = $event"
            />
          </div>
        </div>
      </template>
    </app-accordion>

  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion.vue'
import AppInputLimit from '@/components/basic/AppInputLimit.vue'

export default {
  props: {
    groupTitle: String,
    startValue: Number,
    endValue: Number,
    filterGroupOpened: Boolean
  },
  components: {
    AppAccordion,
    AppInputLimit
  },
  data () {
    return {
      // filterGroupOpened: true,
      limitValue: {}
    }
  },
  watch: {
    limitValue () {
      this.$emit('limitValueChanged', this.limitValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.filter-limit-group {
  // border: 1px solid red;
  margin-bottom: 20px;
  .filter-limit-group__header {
    // border: 1px solid red;
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
  .filter-limit-group__footer {
    // border: 1px solid red;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    background: $hiddenBlockBG;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .footer__content {
      padding: 15px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
  }
}

</style>
