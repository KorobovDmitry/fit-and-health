<template>
  <label class="input__label">
    <input class="input__value-field" type="checkbox" :checked="shouldBeChecked" :value="value" @change="updateInput">
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
      default: false
    },
    label: {
      type: String,
      required: true
    },
    // Мы установили `true-value` и `false-value` в true и false по-умолчанию, таким образом
    // мы всегда можем использовать их вместо проверки на то, установлены они или нет.
    // Также здесь мы можем использовать camelCase, дефис разделяющий имя атрибута
    // все равно будет работать
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  computed: {
    shouldBeChecked () {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Обратите внимание, что `true-value` и` false-value` являются camelCase в JS
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput (event) {
      let isChecked = event.target.checked

      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]

        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }

        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
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
    // border: 1px solid red;
    display: none;
  }
  .input__value-field:checked + .input__text {
    color: $white;
    background: $green;
    border: 1px solid $green;
  }

  .input__text {
    // border: 1px solid red;
    padding: 4px 14px;
    background: $white;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    user-select: none;
    cursor: pointer;
    transition: $tr-01;
  }
}

</style>
