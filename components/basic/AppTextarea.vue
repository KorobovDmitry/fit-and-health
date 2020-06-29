<template>
    <textarea
      class="textarea"
      :placeholder="placeholder"
      @input="changeTextareaValue"
      v-model="inputValue"
    ></textarea>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String
  },
  data () {
    return {
      inputValue: this.value || ''
    }
  },
  methods: {
    changeTextareaValue () {
      this.$emit('valueChanged', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.textarea {
  padding: 10px;
  width: 100%;
  min-height: 100px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  color: $black;
  font-family: $fontMontserrat;
  font-size: 16px;
  resize: none;
  outline: none;
  transition: $tr-02;
}
.textarea:focus {
  border: 1px solid $green;
}
.textarea:focus::placeholder {
  opacity: 0;
}

</style>