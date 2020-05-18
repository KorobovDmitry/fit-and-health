<template>
  <div class="select">
    <p
      v-if="labelText !== '' ? labelText : false"
      class="select__label-text"
    >{{ labelText }}</p>
    <div class="select__default-value-wrapper">
      <p
        ref="defaultValue"
        class="select__default-value"
        :class="[
          {'select__default-value-left': alignSelectedValueLeft},
          {'select__default-value-right': alignSelectedValueRight},
          {'select__default-value-center': alignSelectedValueCenter},
        ]"
        @click="toggleVisibility($event)"
      >{{ selectValue }}</p>
      <i class="select__icon ti-angle-double-down" @click="toggleVisibility($event)"></i>

      <ul
        ref="listOptions"
        class="select__list"
        :class="[
          {'select__list-opened': listOpened},
          {'select__list-left': alignListLeft},
          {'select__list-right': alignListRight},
          {'select__list-center': alignListCenter}
        ]"
      >
        <li
          v-for="(item, index) in selectOptionsList"
          :key="index"
          class="select__list-item"
          @click="toggleVisibility($event)"
        >{{ item }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    minWidth: String,
    labelText: String,
    defaultValue: String,
    selectOptionsList: Array,
    alignListLeft: Boolean,
    alignListRight: Boolean,
    alignListCenter: Boolean,
    alignSelectedValueLeft: Boolean,
    alignSelectedValueRight: Boolean,
    alignSelectedValueCenter: Boolean
  },
  data () {
    return {
      listOpened: false,
      selectValue: this.defaultValue
    }
  },
  watch: {
    defaultValue () {
      this.selectValue = this.defaultValue
    }
  },
  methods: {
    toggleVisibility ($event) {
      if (!this.listOpened) {
        this.openSelect()
      } else {
        if ($event.target.classList.contains('select__list-item')) {
          this.selectValue = $event.target.innerHTML
          this.changeSelectValue()
        }
        this.closeSelect()
      }
    },
    openSelect () {
      this.listOpened = true
      setTimeout(() => {
        document.addEventListener('click', this.closeSelect)
      }, 10)
    },
    closeSelect () {
      this.listOpened = false
      document.removeEventListener('click', this.closeSelect)
    },
    changeSelectValue () {
      this.$emit('selectValueChanged', this.selectValue)
      // console.log(`emit select --> ${this.selectValue}`)
    }
  },
  mounted: function () {
    // При добавлении в дом компонента отправить текущие выбранные данные
    this.changeSelectValue()

    // Задать минимальную ширину для элементов текущего значения и списка для выбора
    this.$refs.defaultValue.style.minWidth = this.minWidth
    this.$refs.listOptions.style.minWidth = this.minWidth
    // из-за шрифта неверно расчитывается ширина элемента. Возможно из-за того что шрифт не успевает скачаться или из-за того что стили обрабатывает браузер.
    // лучше устанавливать нужное значение максимальной ширины вручную через пропсы
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

.select {
  // border: 1px solid red;
  position: relative;
  display: flex;
  align-items: center;
  text-align: right;
  align-self: flex-start;
  .select__label-text {
    margin-right: 20px;
    font-size: 18px;
    white-space: nowrap;
  }
  .select__default-value-wrapper {
    // border: 1px solid red;
    position: relative;
    display: flex;
    align-items: center;
    .select__default-value {
      position: relative;
      padding: 5px 10px;
      font-size: 14px;
      background: $white;
      border: 1px solid rgba(52,40,104,.2);
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      user-select: none;
      z-index: 1;
      cursor: pointer;
    }
    .select__icon {
      // border: 1px solid red;
      padding: 8px 10px;
      background: $white;
      font-family: $fontThemify;
      font-size: 12px;
      font-style: normal;
      border: 1px solid rgba(52,40,104,.2);
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      cursor: pointer;
    }
    .select__list {
      // border: 1px solid red;
      position: absolute;
      top: 0px;
      // left: 0px;
      right: 35px;
      background: $white;
      font-size: 14px;
      border: 1px solid rgba(52,40,104,.2);
      border-radius: 6px;
      box-shadow: 0 2px 6px 1px rgba(123, 115, 158, 0.2);
      opacity: 0;
      visibility: hidden;
      z-index: 2;
      transition: $tr-02;
      .select__list-item {
        // border: 1px solid red;
        padding: 8px 10px;
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
      }
      .select__list-item:hover {
        background: rgba(52,40,104,.04);
      }
      .select__list-item:first-child {
        margin-top: 4px;
      }
      .select__list-item:last-child {
        margin-bottom: 4px;
      }
    }
    .select__list-opened {
      top: 38px;
      opacity: 1;
      visibility: visible;
      transition: $tr-02;
    }
  }
}

.select__default-value-left {
  text-align: left;
}
.select__default-value-right {
  text-align: right;
}
.select__default-value-center {
  text-align: center;
}

.select__list-left {
  text-align: left;
}
.select__list-right {
  text-align: right;
}
.select__list-center {
  text-align: center;
}
</style>
