<template>
  <div class="input__wrapper">
    <p
      class="input__text"
      :class="[
        {'input__text-align-right': textAlignRight},
        {'input__text-align-center': textAlignCenter},
        {'input__text-align-left': textAlignLeft},
        {'input__text-transform-uppercase': textUppercase}
      ]"
    >{{ infoText }}</p>
    <label class="input__label">
      <input
        class="input__value-field"
        type="text"
        :placeholder="placeholderText"
        @input="changeInputValue"
        v-model="inputValue"
      >
    </label>
  </div>
</template>

<script>
export default {
  props: {
    infoText: String,
    placeholderText: String,
    textAlignLeft: Boolean,
    textAlignRight: Boolean,
    textAlignCenter: Boolean,
    textUppercase: Boolean
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    changeInputValue () {
      this.$emit('inputValueChanged', this.inputValue)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

.input__wrapper {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  margin: 5px 0;
  .input__text {
    // border: 1px solid red;
    padding-top: 2px;
    min-width: 180px;
    font-size: 16px;
    // color: $gray-dark;
  }
  .input__label {
    // border: 1px solid red;
    width: 100%;
    .input__value-field {
      padding: 6px 16px;
      width: 100%;
      min-width: 200px;
      // color: $gray-dark;
      font-family: $fontMontserrat;
      font-size: 16px;
      border: 1px solid rgba(52,40,104,.2);
      border-radius: 6px;
      outline: none;
      transition: $tr-02;
    }
    .input__value-field:focus {
      border: 1px solid $green;
      transition: $tr-02;
    }
    .input__value-field::placeholder {
      color: $gray-light;
    }
  }
}

.input__text-transform-uppercase {
  text-transform: uppercase;
}

.input__text-align-left {
  text-align: left;
}
.input__text-align-right {
  text-align: right;
  padding-right: 20px;
}
.input__text-align-center {
  text-align: center;
}

</style>
