<template>
  <div class="input__wrapper">
    <p
      class="input__title"
      :class="[
        {'input__title--active': isFocus},
        {'input__title--fill': inputFill},
        {'input__title--error': error.exist}
      ]"
    >
      {{ title }}
      <span v-if="error.exist" class="input__error-message">{{ `${error.message}` }}</span>
    </p>

    <input
      v-model="inputValue"
      class="input"
      :class="[
        {'input--fill': inputFill},
        {'input--error': error.exist}
      ]"
      type="text"
      :placeholder="placeholder"
      @input="changeInputValue"
      @focus="setTitlePosition()"
      @blur="setTitlePosition()"
    >
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    error: Object
  },
  data () {
    return {
      inputValue: '',
      isFocus: false
    }
  },
  computed: {
    inputFill () {
      if (this.inputValue !== '') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    setTitlePosition () {
      if (this.inputValue === '') {
        this.isFocus = !this.isFocus
      }
    },
    changeInputValue () {
      this.$emit('inputValueChanged', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.input__wrapper {
  // border: 1px solid red;
  position: relative;
  .input__title {
    // border: 1px solid red;
    position: absolute;
    top: 20px;
    left: 0;
    padding: 10px 20px;
    color: $gray-light;
    font-size: 18px;
    user-select: none;
    transition: $tr-02;
    .input__error-message {
      margin-left: 10px;
    }
  }
  .input {
    // border: 1px solid red;
    position: relative;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px 20px;
    width: 100%;
    font-size: 18px;
    background: none;
    border: none;
    outline: none;
    // border-top: 1px solid #000;
    border-bottom: 2px solid $gray-dark;
    z-index: 2;
    transition: $tr-02;
  }
  .input--fill {
    border-bottom: 2px solid $green;
  }
  .input--error {
    border-bottom: 2px solid $red;
  }
  .input__title--active {
    padding: 2px 20px;
    top: 0px;
    left: 0px;
    font-size: 12px;
    font-weight: 600;
  }
  .input__title--fill {
    color: $green;
  }
  .input__title--error {
    padding: 2px 20px;
    top: 0px;
    left: 0px;
    color: $red;
    font-size: 12px;
    font-weight: 600;
  }
}

</style>
