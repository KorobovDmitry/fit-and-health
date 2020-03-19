<template>
  <div class="post">

    <div class="post__content">
      <div class="post__media-group">
        <div class="media-group__preview-img-wrapper">
          <img class="media-group__preview-img" src="https://cross.world/wp-content/uploads/2016/11/krossfit-uprazhneniya-na-vynoslivost-1.jpg" alt="">
          <!-- <img class="media-group__preview-img" src="https://sun9-45.userapi.com/c840422/v840422705/dfaa/3tG7DDr_xL4.jpg" alt=""> -->
          <div class="media-group__info">
            <!-- <p class="info__text">Прикрепленные<br>документы:</p> -->
            <p class="info__amount"><i class="ti-gallery"></i> 4</p>
            <i class="ti-search info__zoom-btn"></i>
          </div>
        </div>
      </div>

      <div class="post__message">
        <div class="post__info">
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
        <p class="post__message-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus.</p>
      </div>
    </div>

    <div class="social-activity">
      <div class="social-activity__action-btn-wrapper">
        <div class="social-activity__action-btn">
          <i class="ti-heart action-btn__icon"></i>
          <p class="action-btn__amount">28</p>
        </div>
        <div class="social-activity__action-btn">
          <i class="ti-heart-broken action-btn__icon"></i>
          <p class="action-btn__amount">8</p>
        </div>
        <div class="social-activity__action-btn">
          <i class="ti-share action-btn__icon"></i>
          <p class="action-btn__amount">2</p>
        </div>
      </div>
      <div class="social-activity__action-btn-wrapper">
        <div class="social-activity__action-btn">
          <!-- <i class="ti-comment action-btn__icon"></i> -->
          <p>Комментарии:</p>
          <p class="action-btn__amount">2</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.post {
  margin-bottom: 40px;
  width: 100%;
  .post__content {
    // border: 1px solid red;
    display: flex;
    position: relative;
    margin-top: 5px;
    // height: 400px;
    min-height: 350px;
    max-height: 350px;
    .post__media-group {
      // border: 1px solid red;
      flex: 1 1 auto;
      flex: 1 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      padding: 10px;
      width: calc(100% - 360px);
      min-width: 265px;
      // max-width: 265px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      overflow: hidden;
      .media-group__preview-img-wrapper {
        // border: 1px solid red;
        position: relative;
        text-align: center;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,1);
        // border: 1px solid $blockBorder;
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
        .media-group__preview-img {
          width: auto;
          // width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .media-group__info {
          display: flex;
          flex-direction: column;
          align-items: center;
          // justify-content: center;
          position: absolute;
          bottom: 0;
          left: 0px;
          width: 100%;
          height: 40px;
          background: rgba(0,0,0,.6);
          color: $white;
          overflow: hidden;
          transition: $tr-02;
          .info__text {
            margin-top: 45px;
            text-align: center;
            font-size: 12px;
            text-shadow: 0 0 2px rgb(0, 0, 0);
          }
          .info__amount {
            text-align: center;
            margin-top: 12px;
            font-weight: 600;
            transition: $tr-02;
          }
          .info__zoom-btn {
            text-align: center;
            margin-top: 20px;
            font-size: 24px;
          }
        }
      }
      .media-group__preview-img-wrapper:hover {
        .media-group__info {
          align-items: center;
          height: 100%;
          padding-top: 25%;
        }
      }
    }
    .post__message {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      flex: 0 10000 auto;
      min-width: 350px;
      .post__message-text {
        flex: 1 1 auto;
        margin-top: 5px;
        padding: 20px 20px;
        // max-height: 225px;
        background: $white;
        // text-indent: 20px;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        overflow: auto;
      }
      .post__info {
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
    }
  }
  .social-activity {
    display: flex;
    align-items: center;
    margin-top: 5px;
    .social-activity__action-btn-wrapper {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-right: 5px;
      min-width: 265px;
      max-width: 265px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .social-activity__action-btn {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        cursor: pointer;
        .action-btn__icon {
          font-size: 14px;
        }
        .action-btn__amount {
          margin-left: 10px;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    .social-activity__action-btn-wrapper:last-child {
      margin-right: 0;
      width: 100%;
      max-width: 100%;
    }
  }
}

</style>
