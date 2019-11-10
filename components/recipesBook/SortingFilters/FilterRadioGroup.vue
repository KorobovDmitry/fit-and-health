<template>
  <div ref="filterGroup" class="filter-radio-group">

    <div ref="contentWrapper" class="filter-radio-group__content-wrapper">
      <div class="filter-group__title-block" @click="togglefilterGroupOpened()">
        <p class="filter-group__title">{{ groupTitle }}</p>
        <i v-show="!filterGroupOpened" class="filter-group__title-icon ti-arrow-down"></i>
        <i v-show="filterGroupOpened" class="filter-group__title-icon ti-arrow-up"></i>
      </div>

      <div class="filter-group__list-block">
        <ul class="filter-group__list">
          <li v-for="(item, index) in valueList" :key="index" class="filter-group__list-item">
            <app-input-radio
              v-model="checkedValue"
              :label="item"
              :value="item"
            />
          </li>
        </ul>
      </div>
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
    groupTitle: String,
    valueList: Array,
    defaultValue: String
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

.filter-radio-group {
  // border: 1px solid red;
  // margin-bottom: 20px;
  // border-top: 1px dashed transparent;
  // border-bottom: 1px dashed rgba(0,0,0,.2);
  // overflow: hidden;
  // transition: $tr-02;
  .filter-radio-group__content-wrapper {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
  .filter-group__title-block {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    user-select: none;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    cursor: pointer;
    .filter-group__title {
      font-size: 18px;
    }
    .filter-group__title-icon {
      font-size: 12px;
    }
    .filter-group__title-icon:hover {
      color: $green;
    }
  }
  .filter-group__list-block {
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 25px;
    user-select: none;
    padding: 15px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .filter-group__list {
      // border: 1px solid red;
      .filter-group__list-item {
        // border: 1px solid red;
        margin-bottom: 8px;
      }
      .filter-group__list-item:last-child {
        // border: 1px solid red;
        margin-bottom: 0;
      }
    }
  }
}

</style>
