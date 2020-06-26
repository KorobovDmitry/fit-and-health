<template>
  <div class="add-marks-form">
    <div class="add-marks-form__block-title">Добавленные отмеки</div>

    <div class="add-marks-form__marks">
      <div class="mark" v-for="(item, index) in marks" :key="index">
        <p class="mark__text">{{ item }}</p>
        <i class="ti-close mark__icon" @click="remove(index)"></i>
      </div>
    </div>

    <div class="add-marks-form__input-wrapper">
      <input class="input" type="text" v-model="mark">
      <button class="action-btn" @click="add()">
        <i class="ti-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    marks: Array
  },
  data () {
    return {
      mark: ''
    }
  },
  methods: {
    add () {
      this.$emit('addMark', this.mark)
    },
    remove (index) {
      this.$emit('removeMark', index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.add-marks-form {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  padding: 10px;
  min-width: 300px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .add-marks-form__block-title {
    text-align: center;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px dashed $blockBorder;
  }
  .add-marks-form__marks {
    display: flex;
    flex-direction: column;
    margin: 10px 5px;
    .mark {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      padding: 5px;
      background: $hiddenBlockBG;
      border-radius: 6px;
      .mark__text {
        margin-left: 5px;
        font-size: 14px;
      }
      .mark__icon {
        // border: 1px solid red;
        padding: 5px;
        font-size: 10px;
        cursor: pointer;
      }
    }
    .mark:last-child {
      margin-bottom: 0;
    }
  }
  .add-marks-form__input-wrapper {
    display: flex;
    align-items: center;
    margin-top: auto;
    .input {
      padding: 5px 10px;
      width: calc(100% - 58px);
      border: 1px solid $blockBorder;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .action-btn {
      padding: 5px 20px;
      background: $green;
      color: $white;
      border: 1px solid $green;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
}

</style>
