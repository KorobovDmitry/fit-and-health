<template>
  <div ref="filterGroup" class="filter-group">
    <div ref="contentWrapper" class="filter-group__content-wrapper">
      <div class="filter-group__title-block" @click="togglefilterGroupOpened()">
        <p class="filter-group__title">{{ groupTitle }}</p>
        <i v-show="!filterGroupOpened" class="filter-group__title-icon ti-arrow-down"></i>
        <i v-show="filterGroupOpened" class="filter-group__title-icon ti-arrow-up"></i>
      </div>

      <div class="filter-group__range-block">
        <app-input-range />
      </div>
    </div>
  </div>
</template>

<script>
import AppInputRange from '@/components/basic/AppInputRange.vue'
export default {
  components: {
    AppInputRange
  },
  props: {
    groupTitle: String,
    defaultValue: Number
  },
  data () {
    return {
      filterGroupOpened: true,
      checkedValue: this.defaultValue
    }
  },
  watch: {
    checkedValue () {
      this.$emit('inputGroupValueChanged', this.checkedValue)
    }
  },
  methods: {
    togglefilterGroupOpened () {
      if (this.filterGroupOpened) {
        this.filterGroupOpened = false
        this.$refs.filterGroup.style.height = '54px'
      } else {
        this.filterGroupOpened = true
        this.$refs.filterGroup.style.height = this.$refs.contentWrapper.getBoundingClientRect().height + 'px'
      }
    }
  },
  mounted () {
    this.$refs.filterGroup.style.height = this.$refs.contentWrapper.getBoundingClientRect().height + 'px'
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.filter-group {
  // border: 1px solid red;
  margin-bottom: 20px;
  border-top: 1px dashed transparent;
  border-bottom: 1px dashed rgba(0,0,0,.2);
  overflow: hidden;
  transition: $tr-02;
  .filter-group__content-wrapper {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
  .filter-group__title-block {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    user-select: none;
    cursor: pointer;
    .filter-group__title {
      // border: 1px solid red;
      padding: 5px 0;
      font-size: 18px;
    }
    .filter-group__title-icon {
      // border: 1px solid red;
      padding: 5px 0;
      font-size: 12px;
    }
    .filter-group__title-icon:hover {
      color: $green;
    }
  }
  .filter-group__range-block {
    // border: 1px solid red;
    padding-bottom: 20px;
  }
}

</style>
