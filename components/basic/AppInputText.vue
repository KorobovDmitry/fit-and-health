<template>

<input
  class="input-text"
  type="text"
  :placeholder="placeholder"
  @input="changeInputValue"
  v-model="inputValue"
>

</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String,
  },
  data () {
    return {
      inputValue: this.value || ''
    }
  },
  methods: {
    changeInputValue () {
      this.$emit('valueChanged', this.inputValue)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

.input-text {
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
.input-text:focus {
  border: 1px solid $green;
  transition: $tr-02;
}
.input-text:focus::placeholder {
  opacity: 0;
}

</style>
