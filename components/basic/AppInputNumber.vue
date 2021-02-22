<template>
  <input
    class="input-number"
    type="text"
    :placeholder="placeholder"
    v-model="inputValue"
    @keypress.enter="checkInputValue()"
    @blur="checkInputValue()"
  />
</template>

<script>
export default {
  props: {
    value: [String, Number],
    placeholder: String,
    min: Number,
    max: Number,
    float: Boolean,
    before: Number,
    after: Number
  },
  data () {
    return {
      inputValue: this.value || ''
    }
  },
  watch: {
    value (newValue, prevValue) {
      // Проверка на допустимые символы
      if (this.float) {
        if (newValue.length === this.before && prevValue.length < this.before) {
          newValue = `${newValue}.`.replace('..', '.')
        }
      }

      newValue = newValue.replace('..', '.')
      newValue = newValue.replace(/(?!-)[^0-9.]/g, "")

      // Проверка на диапазон допустимого числа
      if (this.value < this.min) {
        this.inputValue = this.min
      } else if (this.value > this.max) {
        this.inputValue = this.max
      } else if (this.value) {
        if (this.float) {
          this.inputValue = parseFloat(this.value).toFixed(this.after)
        } else {
          this.inputValue = parseInt(this.value)
        }
      }

      this.inputValue = newValue
    },
    inputValue (newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    checkInputValue () {
      if (this.value < this.min) {
        this.inputValue = this.min
      } else if (this.value > this.max) {
        this.inputValue = this.max
      } else if (this.value) {
        if (this.float) {
          this.inputValue = parseFloat(this.value).toFixed(this.after)
        } else {
          this.inputValue = parseInt(this.value)
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

.input-number {
  padding: 10px;
  width: 100%;
  min-width: 200px;
  color: $black;
  font-family: $fontMontserrat;
  font-size: 16px;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  outline: none;
  transition: $tr-02;
}
.input-number:focus {
  border: 1px solid $green;
  transition: $tr-02;
}
.input-number:focus::placeholder {
  opacity: 0;
}

</style>
