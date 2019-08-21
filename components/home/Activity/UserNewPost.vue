<template>
  <div class="new-post">
    <div class="new-post__user-message-wrapper">
      <div class="new-post__user-avatar-wrapper">
        <img src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="" class="new-post__user-avatar">
      </div>
      <textarea class="new-post__message" placeholder="Поделитесь своими достижениями или новостями..."></textarea>
    </div>
    <div class="new-post__attach-and-send">
      <i class="ti-cup new-post__attach-btn"></i>
      <i class="ti-rocket new-post__attach-btn"></i>
      <i class="ti-gallery new-post__attach-btn"></i>
      <i class="ti-video-camera new-post__attach-btn"></i>
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
@import '@/assets/scss/vars.scss';

.new-post {
  margin-bottom: 20px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .new-post__user-message-wrapper {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    .new-post__user-avatar-wrapper {
      margin: 20px 20px 0px 20px;
      min-width: 60px;
      max-width: 60px;
      height: 60px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      overflow-x: hidden;
      .new-post__user-avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .new-post__message {
      margin-top: 20px;
      margin-right: 20px;
      padding: 10px;
      width: 100%;
      height: 80px;
      color: $black;
      resize: none;
      outline: none;
      // background: rgba(0, 0, 0, .02);
      border: 1px solid $inputBorder;
      // border: none;
      border-radius: 6px;
      // box-shadow: inset 0 0 4px 1px rgba(0,0,0,.1);
    }
  }
  .new-post__attach-and-send {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    margin: 20px 20px 10px 100px;
    padding: 10px 0px 0px 0px;
    border-top: 1px dashed $blockBorder;
    .new-post__attach-btn {
      margin-right: 20px;
      color: $gray-light;
      font-size: 20px;
      cursor: pointer;
      transition: $tr-02;
    }
    .new-post__attach-btn:hover {
      color: $black;
    }
    .new-post__attach-btn:nth-child(4) {
      margin-right: auto;
    }
  }
}

</style>
