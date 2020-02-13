<template>
  <div class="modal__wrapper" @click="closeModal()">
    <div class="modal__content-wrapper" @click.stop>

      <div class="modal__header">
        <slot name="modalHeader"></slot>
      </div>

      <div class="modal__content">
        <slot name="modalContent"></slot>
      </div>

      <div class="modal__button">
        <slot name="modalButton"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean
  },
  watch: {
    isActive: {
      handler: function () {
        if (this.isActive) {
          document.querySelector('#__nuxt').style.marginTop = `-${window.pageYOffset}px`
          document.querySelector('body').classList.add('body-overflow')
        } else {
          const currentScroll = parseFloat(document.querySelector('#__nuxt').style.marginTop) * -1
          document.querySelector('#__nuxt').style.marginTop = '0px'
          document.querySelector('body').classList.remove('body-overflow')
          window.scrollTo(0, currentScroll)
        }
      },
      // Коллбэк (handler) будет вызываться каждый раз, когда изменяется любое из свойств наблюдаемого объекта, независимо от глубины их вложенности
      deep: true,
      // коллбэк (handler) будет вызван сразу же после начала наблюдения если свойство установленно true
      immediate: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.modal__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.4);
  z-index: 9999;
  .modal__content-wrapper {
    margin: 40px;
    padding: 20px;
    width: 50%;
    background: $white;
    border-radius: 6px;
    overflow: hidden;
    .modal__header {
      padding: 0 20px 20px 20px;
      border-bottom: 1px dashed $gray-light;
    }
    .modal__content {
      // border: 1px solid red;
      padding: 20px;
      min-height: calc(100% - 138px);
      max-height: calc(100% - 140px);
      overflow: auto;
    }
    .modal__button {
      display: flex;
      justify-content: center;
      padding: 20px 20px 0 20px;
      border-top: 1px dashed $gray-light;
    }
  }
}

</style>
