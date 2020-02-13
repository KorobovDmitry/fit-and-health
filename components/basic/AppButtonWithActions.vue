<template>
  <div class="btn-with-actions">
    <button class="btn-with-actions__btn" @click="toggleVisibility($event)">
      <i class="ti-more btn__icon"></i>
      <ul
        v-show="listOpened"
        ref="actionsList"
        class="btn-with-actions__actions-list"
        :class="[
          {'btn-with-actions__actions-list--right': rightSide},
          {'btn-with-actions__actions-list--left': leftSide}
        ]"
      >
        <li v-for="(action, index) in actions" :key="index" class="actions-list__item">
          <p class="item__text" @click="action.doFunc">{{ action.title }}</p>
        </li>
      </ul>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    actions: Array
  },
  data () {
    return {
      listOpened: false,
      rightSide: false,
      leftSide: false
    }
  },
  methods: {
    toggleVisibility ($event) {
      if (!this.listOpened) {
        this.setActionsListPosition ($event)
        this.openActionsList()
      } else {
        this.closeActionsList()
      }
    },
    setActionsListPosition ($event) {
      const actionsListWidth = this.$refs.actionsList.getBoundingClientRect().width
      const btnPosition = $event.target.getBoundingClientRect()
      const freeArea = btnPosition.x - actionsListWidth
      if (freeArea > actionsListWidth) {
        // console.log('расположить слева')
        this.leftSide = true
      } else {
        // console.log('расположить справа')
        this.rightSide = true
      }
    },
    openActionsList () {
      this.listOpened = true
      setTimeout(() => {
        document.addEventListener('click', this.closeActionsList)
      }, 10)
    },
    closeActionsList () {
      this.listOpened = false
      document.removeEventListener('click', this.closeActionsList)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.btn-with-actions {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn-with-actions__btn {
    // border: 1px solid red;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: transparent;
    color: $black;
    font-family: $fontMontserrat;
    font-size: 16px;
    border: none;
    outline: none;
    .btn__icon {
      padding: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: $tr-01;
    }
    .btn-with-actions__actions-list {
      // border: 1px solid red;
      position: absolute;
      top: 30px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      box-shadow: $boxShadow;
      z-index: 2;
      .actions-list__item {
        // border: 1px solid red;
        position: relative;
        padding: 10px 20px;
        border-bottom: 1px solid $blockBorder;
        cursor: pointer;
        .item__text {
          text-align: center;
          white-space: nowrap;
        }
      }
      .actions-list__item:last-child {
        border: none;
      }
      .actions-list__item:hover {
        color: $green;
      }
    }
    .btn-with-actions__actions-list--right {
      left: -10px;
    }
    .btn-with-actions__actions-list--left {
      right: -10px;
    }
    .btn-with-actions__actions-list--left:after {
      position: absolute;
      content: '';
      top: -7px;
      right: 14px;
      width: 14px;
      height: 14px;
      background: $white;
      border-top: 1px solid $blockBorder;
      border-left: 1px solid $blockBorder;
      transform: rotate(45deg);
    }
    .btn-with-actions__actions-list--right:after {
      position: absolute;
      content: '';
      top: -7px;
      left: 15px;
      width: 14px;
      height: 14px;
      background: $white;
      border-top: 1px solid $blockBorder;
      border-left: 1px solid $blockBorder;
      transform: rotate(45deg);
    }
  }
}

</style>
