<template>
  <div class="input-text">
    <p
      class="input-text__title"
      :class="[
        {'input-text__text-align-right': textAlignRight},
        {'input-text__text-align-center': textAlignCenter},
        {'input-text__text-align-left': textAlignLeft},
        {'input-text__text-transform-uppercase': textUppercase}
      ]"
    >{{ infoText }}</p>
    <label class="input-text__label">
      <input
        class="input-text__value-field"
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
    value: String,
    infoText: String,
    placeholderText: String,
    textAlignLeft: Boolean,
    textAlignRight: Boolean,
    textAlignCenter: Boolean,
    textUppercase: Boolean
  },
  data () {
    return {
      inputValue: this.value || ''
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

.input-text {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .input-text__title {
    // border: 1px solid red;
    padding: 0 10px;
    margin-bottom: 5px;
    min-width: 200px;
    font-size: 14px;
    font-weight: 500;
  }
  .input-text__label {
    // border: 1px solid red;
    width: 100%;
    .input-text__value-field {
      padding: 5px 10px;
      width: 100%;
      min-width: 200px;
      color: $black;
      font-family: $fontMontserrat;
      font-size: 14px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      outline: none;
      transition: $tr-02;
    }
    .input-text__value-field:focus {
      border: 1px solid $green;
      transition: $tr-02;
    }
    .input-text__value-field::placeholder {
      color: $gray-light;
    }
  }
}

.input-text__text-transform-uppercase {
  text-transform: uppercase;
}

.input-text__text-align-left {
  text-align: left;
}
.input-text__text-align-right {
  text-align: right;
  padding-right: 20px;
}
.input-text__text-align-center {
  text-align: center;
}

</style>
