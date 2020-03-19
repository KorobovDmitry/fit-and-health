<template>
  <div class="filter-radio-text-group">
    <ul class="filter-radio-text-group__value-list">
      <li v-for="(item, index) in valueList" :key="index" class="value-list__item">
        <label class="input__label">
          <input class="input__value-field" type="radio" :value="item" v-model="checkedValue">
          <p 
            class="input__text"
            :class="[
              {'text-transform-uppercase': uppercase},
              {'size14px': size14px},
              {'size18px': size18px}
            ]"
          >{{ item }}</p>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    valueList: Array,
    defaultValue: String,
    uppercase: Boolean,
    size14px: Boolean,
    size18px: Boolean
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
    setDefaultValue () {
      this.checkedValue = this.defaultValue
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.filter-radio-text-group {
  // border: 1px solid red;
  user-select: none;
  .filter-radio-text-group__value-list {
    display: flex;
    .value-list__item {
      .input__label {
        display: flex;
        .input__value-field {
          display: none;
        }
        .input__value-field:checked + .input__text {
          color: $green;
          border-bottom: 2px solid $green;
        }
        .input__text {
          // border: 1px solid red;
          margin: 0 5px;
          padding: 0 5px;
          color: $black;
          font-weight: 500;
          border-bottom: 2px solid transparent;
        }
      }
    }
  }
}

.text-transform-uppercase {
  text-transform: uppercase;
  font-weight: 600;
}
.size14px {
  font-size: 14px;
}
.size18px {
  font-size: 18px;
}



</style>
