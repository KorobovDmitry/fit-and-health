<template>
  <div class="limit-input">
    <label class="limit-input__label">
      <p class="limit-input__text">от:</p>
      <input
        class="limit-input__value"
        type="text"
        v-model="limitValue.from"
        @click="selectValue($event)"
        @keypress.enter="enterValue($event)"
        @blur="blurValue($event)"
      >
      <!-- <p class="limit-input__text">мин.</p> -->
    </label>
    <label class="limit-input__label">
      <p class="limit-input__text">до:</p>
      <input
        class="limit-input__value"
        type="text"
        v-model="limitValue.to"
        @click="selectValue($event)"
        @keypress.enter="enterValue($event)"
        @blur="blurValue()"
      >
      <!-- <p class="limit-input__text">мин.</p> -->
    </label>
  </div>
</template>

<script>
export default {
  props: {
    startValue: Number,
    endValue: Number
  },
  data () {
    return {
      limitValue: {
        from: this.startValue,
        to: this.endValue
      }
    }
  },
  methods: {
    selectValue ($event) {
      $event.target.select()
    },
    blurValue () {
      // console.log($event.target)
      // $event.target.blur()
      this.$emit('limitValueChanged', this.limitValue)
    },
    enterValue ($event) {
      $event.target.blur()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.limit-input {
  display: flex;
  align-items: center;
  margin: 10px 0;
  .limit-input__label {
    display: flex;
    align-items: center;
    .limit-input__text {
      // font-weight: 600;
    }
    .limit-input__value {
      margin: 0 10px;
      width: 100%;
      background: none;
      text-align: center;
      // color: $gray-dark;
      font-size: 18px;
      font-weight: 500;
      outline: none;
      border: none;
      border-bottom: 2px solid $green;
    }
    .limit-input__value::selection {
      color: $white;
      background: $green;
    }
  }
  .limit-input__label:first-child {
    margin-right: 20px;
  }
}

</style>
