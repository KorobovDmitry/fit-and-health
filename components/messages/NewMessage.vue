<template>
  <div class="new-message">
    <textarea class="new-message__textarea" placeholder="Введите сообщение"></textarea>
    <div class="new-message__attach-and-send">
      <i class="ti-cup attach-btn"></i>
      <i class="ti-rocket attach-btn"></i>
      <i class="ti-gallery attach-btn"></i>
      <i class="ti-video-camera attach-btn"></i>
      <app-button size14px uppercase>Отправить</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
export default {
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.new-message {
  padding: 10px 20px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .new-message__textarea {
    // margin-top: 10px;
    padding: 10px;
    width: 100%;
    height: 80px;
    color: #565859;
    resize: none;
    outline: none;
    border: 1px solid $inputBorder;
    border-radius: 6px;
  }
  .new-message__attach-and-send {
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding-top: 10px;
    // padding: 10px 10px 0px 10px;
    // margin-top: 10px;
    border-top: 1px dashed $blockBorder;
    .attach-btn {
      margin-right: 20px;
      color: $gray;
      font-size: 20px;
      cursor: pointer;
      transition: $tr-02;
    }
    .attach-btn:nth-child(4) {
      margin-right: auto;
    }
    .attach-btn:hover {
      color: $black;
    }
  }
}

</style>