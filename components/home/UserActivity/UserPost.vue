<template>
  <div class="user-post">

    <div class="user-post__info">
      <div class="info__user-avatar-wrapper">
        <img class="user-avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="user-avatar">
      </div>
      <div class="info__data">
        <p class="info__user-name">Дмитрий Коробов</p>
        <p class="info__creating-date">21.04.2019</p>
      </div>
      <div class="info__edit-btn">
        <i class="ti-more"></i>
      </div>
    </div>

    <div class="user-post__content">
      <div class="img-and-social">
        <div class="image-wrapper">
          <img class="image" src="https://cross.world/wp-content/uploads/2016/11/krossfit-uprazhneniya-na-vynoslivost-1.jpg">
        </div>
        <social-btns class="mt-5" :btnsInfo="{like: 1, dislike: 2, share: 0}" />
      </div>

      <div class="message-and-comments">
        <div class="message">
          <app-scroll-block>
            <p class="post__message-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, unde? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quam rerum, nemo similique cumque quia quas voluptates minima. Cumque aspernatur tempora assumenda libero voluptatibus esse, excepturi ea maiores magnam cupiditate sequi nostrum? Aliquam dicta iure temporibus repellat numquam tempora, unde velit reprehenderit minima voluptates amet vel repudiandae quos illum pariatur!</p>
          </app-scroll-block>
        </div>

        <div class="comments">
          <div class="comments__action-btn">
            <p class="action-btn__text">Комментарии:</p>
            <p class="action-btn__amount">2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialBtns from '@/components/basic/SocialBtns'
import AppScrollBlock from '@/components/basic/AppScrollBlock'

export default {
  components: {
    SocialBtns,
    AppScrollBlock
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.user-post {
  margin-bottom: 40px;
  width: 100%;
  .user-post__info {
    // border: 1px solid red;
    padding: 10px;
    display: flex;
    align-items: center;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .info__user-avatar-wrapper {
      min-width: 50px;
      max-width: 50px;
      height: 50px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      overflow-x: hidden;
      .user-avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .info__data {
      margin-left: 10px;
      .info__user-name {
        // font-size: 18px;
        font-weight: 600;
      }
      .info__creating-date {
        margin-top: 5px;
        color: $gray-dark;
        font-size: 12px;
        font-weight: 500;
      }
    }
    .info__edit-btn {
      // border: 1px solid red;
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      margin-left: auto;
      margin-right: 5px;
      cursor: pointer;
      transition: $tr-02;
    }
    .info__edit-btn:hover {
      color: $green
    }
  }
  .user-post__content {
    // border: 1px solid red;
    display: flex;
    margin-top: 5px;
    .img-and-social {
      width: 100%;
      max-width: 500px;
      .image-wrapper {
        padding: 10px;
        background: $white;
        border:1px solid $blockBorder;
        border-radius: 6px;
        .image {
          border:1px solid $blockBorder;
          border-radius: 6px;
        }
      }
    }
    .message-and-comments {
      margin-left: 5px;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      .message {
        flex: 1 1 auto;
        display: flex;
        padding: 10px;
        background: $white;
        border:1px solid $blockBorder;
        border-radius: 6px;
      }
      .comments {
        width: 100%;
        margin-top: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        cursor: pointer;
        .comments__action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          .action-btn__text {
            margin-right: 10px;
          }
          .action-btn__amount {
            font-weight: 600;
          }
        }
      }
    }
  }
}

</style>
