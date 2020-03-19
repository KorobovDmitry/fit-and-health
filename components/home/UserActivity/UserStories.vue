<template>
  <div class="user-stories">
    <app-block-title>Истории</app-block-title>
    <div class="user-stories__story-block">
      <div class="story-block__element">
        <img class="element__user-avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="user-avatar">
        <i class="ti-plus element__add-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.user-stories {
  margin-bottom: 40px;
  .user-stories__story-block {
    display: flex;
    // padding: 10px;
    // background: $hiddenBlockBG;
    // border-radius: 6px;
    .story-block__element {
      position: relative;
      padding: 5px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      transition: $tr-02;
      cursor: pointer;
      .element__user-avatar {
        width: 80px;
        height: 80px;
        // border: 1px solid $white;
        border-radius: 6px;
        object-fit: cover;
      }
      .element__add-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: $white;
        padding: 10px;
        border-radius: 50%;
        opacity: 0;
        transition: $tr-02;
      }
    }
    .story-block__element:hover {
      box-shadow: $btnHoverShadow;
      .element__add-icon {
        opacity: 1;
      }
    }
  }
}

</style>