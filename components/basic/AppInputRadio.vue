<template>
  <label class="input__label">
    <input class="input__value-field" type="radio" :checked="shouldBeChecked" :value="value" @change="updateInput()">
    <p class="input__visible-switch"></p>
    <p class="input__text">{{ label }}</p>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: {
      type: String
    },
    modelValue: {
      default: ''
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    shouldBeChecked () {
      return this.modelValue === this.value
    }
  },
  methods: {
    updateInput () {
      this.$emit('change', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.input__label {
  // border: 1px solid red;
  display: flex;
  align-items: center;

  .input__value-field {
    // visibility: hidden;
    display: none;
  }
  .input__value-field:checked + .input__visible-switch:after {
    background: $green;
  }
  .input__value-field:checked ~ .input__text {
    color: $green;
  }

  .input__visible-switch {
    // border: 1px solid red;
    position: relative;
    height: 20px;
    width: 20px;
    border: 2px solid #6EB63B;
    border-radius: 10px;
  }
  .input__visible-switch:after {
    // border: 1px solid red;
    position: absolute;
    top: 0;
    left: 2px;
    transform: translateY(calc(-50% + 8px));
    content: '';
    height: 12px;
    width: 12px;
    border-radius: 50%;
    transition: $tr-01;
  }

  .input__text {
    // border: 1px solid red;
    position: relative;
    margin-left: 12px;
    user-select: none;
    transition: $tr-01;
  }
}

</style>
