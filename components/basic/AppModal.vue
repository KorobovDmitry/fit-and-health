<template>
  <div class="modal__wrapper" @click="closeModal()">
    <div class="modal__content-wrapper" @click.stop>

      <div class="modal__top">
        <p class="modal__top-title">{{ title }}</p>
        <p class="modal__top-subtitle">{{ subtitle }}</p>
      </div>

      <div class="modal__content">
        <slot></slot>
      </div>

      <div class="modal__bottom">
        <app-button class="modal__bottom-btn" size16px uppercase @click.native="saveFunc()">Сохранить</app-button>
        <app-button class="modal__bottom-btn" size16px uppercase @click.native="closeModal()">Отменить</app-button>
      </div>

    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
export default {
  components: {
    AppButton
  },
  props: {
    title: String,
    subtitle: String,
    saveFunc: Function
  },
  methods: {
    closeModal () {
      this.$emit('visibilityChanged')
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.4);
  // background: rgba($color: $green, $alpha: 0.8);
  z-index: 9999;
  .modal__content-wrapper {
    margin: 40px;
    padding: 20px;
    width: 50%;
    background: $white;
    border-radius: 6px;
    .modal__top {
      padding: 0 20px 20px 20px;
      border-bottom: 1px dashed $gray-light;
      .modal__top-title {
        // margin-bottom: 10px;
        font-size: 24px;
        font-weight: 600;
      }
      .modal__top-subtitle {
        // border: 1px solid red;
        margin-top: 10px;
        // margin-bottom: 10px;
      }
    }
    .modal__content {
      // border: 1px solid red;
      padding: 20px;
    }
    .modal__bottom {
      display: flex;
      justify-content: center;
      padding: 20px 20px 0 20px;
      border-top: 1px dashed $gray-light;
      .modal__bottom-btn {
        margin-right: 10px;
      }
      .modal__bottom-btn:last-child {
        margin-right: 0;
      }
    }
  }
}

</style>
