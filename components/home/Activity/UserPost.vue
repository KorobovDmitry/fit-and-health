<template>
  <div class="post">
    <div class="post__top">
      <div class="post__image-wrapper">
        <img class="post__image" src="http://crossfitcusco.com/wp-content/uploads/2015/07/cross10.jpg" alt="">
      </div>
      <div class="post__text-block">
        <div class="info">
          <img class="info__user-avatar" src="" alt="user-avatar">
          <div class="info__data">
            <p class="info__user-name">John Douh</p>
            <div class="info__creating-date">
              <p>14:23, вторник</p>
              <p>21.04.2019</p>
            </div>
          </div>
        </div>
        <div class="post-message">
          <p class="post-message__title">Post Title</p>
          <p class="post-message__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus.</p>
        </div>
      </div>
    </div>
    <div class="post__bottom">

        <div class="social-activity__left">
          <div class="social-activity__action-btn">
            <i class="ti-heart"></i>
            <span>28</span>
          </div>
          <div class="social-activity__action-btn">
            <i class="ti-heart-broken"></i>
            <span>8</span>
          </div>
          <div class="social-activity__action-btn">
            <i class="ti-share"></i>
            <span>2</span>
          </div>
        </div>
        <div class="social-activity__right">
          <p class="social-activity__comments-amount-text">Комментарии:</p>
          <!-- <p class="social-activity__comments-amount-text"><i class="ti-comments"></i></p> -->
          <p class="social-activity__comments-amount-value">16</p>
        </div>
    </div>
    <div class="comments">
      <div class="comments__new-comment">
        <textarea class="comments__new-comment-text" placeholder="Оставить комментарий" rows="1"></textarea>
        <i class="ti-email comments__new-comment-send-btn"></i>
      </div>
      <div class="comments__user-comment">
        <div class="user-comment__avatar">avatar</div>
        <p class="user-comment__text">коментарий оставленный пользователем</p>
      </div>
      <p>показать остальные (26)</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.post {
  // margin-left: 40px;
  margin-bottom: 20px;
  width: 100%;
  // background: $white;
  // border: 1px solid $blockBorder;
  // border-radius: 6px;
  // overflow: hidden;
  .post__top {
    // border: 1px solid red;
    display: flex;
    position: relative;
    .post__image-wrapper {
      border: 1px solid red;
      position: relative;
      margin-right: 5px;
      padding: 10px 10px;
      max-width: 50%;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .post__image {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // margin: 10px;
        width: 100%;
        height: 100%;
        // height: 100%;
        object-fit: cover;
      }
    }
    .post__text-block {
      // border: 1px solid red;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .info {
        // border: 1px solid red;
        margin: 0 10px;
        padding: 10px;
        display: flex;
        align-items: center;
        border-bottom: 1px dashed $blockBorder;
        .info__user-avatar {
          border: 1px solid $green;
          width: 60px;
          min-width: 60px;
          max-width: 60px;
          height: 60px;
          min-height: 60px;
          max-height: 60px;
          border-radius: 6px;
        }
        .info__data {
          margin-left: 20px;
          .info__user-name {
            font-size: 14px;
            font-weight: 600;
          }
          .info__creating-date {
            margin-top: 5px;
            color: $gray-dark;
            font-size: 12px;
          }
        }
      }
      .post-message {
        padding: 20px 20px;
        height: 200px;
        overflow: auto;
        .post-message__title {
          font-size: 18px;
          font-weight: 600;
        }
        .post-message__text {
          margin-top: 10px;
        }
      }
    }
  }
  .post__bottom {
    // border: 1px solid red;
    display: flex;
    margin-top: 5px;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    padding: 10px;
    // .social-activity {
      // border: 1px solid red;
      // display: flex;
      // padding: 10px;
      .social-activity__left {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-right: 5px;
        width: 50%;
        .social-activity__action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          color: $green;
          font-size: 14px;
          cursor: pointer;
          i {
            margin-right: 5px;
          }
          span {
            font-weight: 600;
          }
        }
      }
      .social-activity__right {
        // border: 1px solid red;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .social-activity__comments-amount-text {
          margin-right: 5px;
          color: $green;
          font-size: 14px;
          font-weight: 500;
        }
        .social-activity__comments-amount-value {
          color: $green;
          font-size: 14px;
          font-weight: 600;
        }
      }
    // }
    .comments {
      border-top: 1px solid $blockBorder;
      .comments__new-comment {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 20px;
        padding: 20px;
        border-bottom: 1px dashed $blockBorder;
        .comments__new-comment-text {
          width: 100%;
          // height: 40px;
          margin-right: 20px;
          padding: 10px;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
        .comments__new-comment-send-btn {
          color: $gray-dark;
          font-size: 30px;
          cursor: pointer;
        }
      }
    }
  }
}

</style>
