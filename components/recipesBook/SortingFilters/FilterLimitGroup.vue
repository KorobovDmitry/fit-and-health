<template>
  <div ref="filterGroup" class="filter-group">

    <div ref="contentWrapper" class="filter-group__content-wrapper">
      <div class="filter-group__title-block" @click="togglefilterGroupOpened()">
        <p class="filter-group__title">{{ groupTitle }}</p>
        <i v-show="!filterGroupOpened" class="filter-group__title-icon ti-arrow-down"></i>
        <i v-show="filterGroupOpened" class="filter-group__title-icon ti-arrow-up"></i>
      </div>

      <div class="filter-group__limit-block">
        <app-input-limit
          :startValue="startValue"
          :endValue="endValue"
          @limitValueChanged="limitValue = $event"
        />
      </div>
    </div>

  </div>
</template>

<script>
import AppInputLimit from '@/components/basic/AppInputLimit.vue'
export default {
  components: {
    AppInputLimit
  },
  props: {
    groupTitle: String,
    startValue: Number,
    endValue: Number
  },
  data () {
    return {
      filterGroupOpened: true,
      limitValue: {}
    }
  },
  watch: {
    limitValue () {
      this.$emit('limitValueChanged', this.limitValue)
    }
  },
  mounted () {
    this.$refs.filterGroup.style.height = this.$refs.contentWrapper.getBoundingClientRect().height + 'px'
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
  .filter-group__limit-block {
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 25px;
    user-select: none;
  }
}

</style>
