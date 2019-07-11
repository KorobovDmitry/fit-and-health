<template>
  <label class="input__label">
    <input class="input__value-field" type="checkbox" :checked="shouldBeChecked" :value="value" @change="updateInput">
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
    // visibility: hidden;
    display: none;
  }
  .input__value-field:checked + .input__visible-switch:after {
    background: $green;
    left: 15px;
  }
  .input__value-field:checked ~ .input__text {
    color: $green;
  }

  .input__visible-switch {
    // border: 1px solid red;
    position: relative;
    height: 14px;
    width: 35px;
    // background: $green;
    background: rgba(0,0,0,.2);
    border-radius: 10px;
  }
  .input__visible-switch:after {
    // border: 1px solid red;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(calc(-50% + 7px));
    content: '';
    height: 20px;
    width: 20px;
    // background: $gray-dark;
    background: $red;
    border-radius: 50%;
    transition: $tr-01;
  }

  .input__text {
    // border: 1px solid red;
    margin-left: 10px;
    user-select: none;
    transition: $tr-01;
  }
}

</style>
