<template>
  <div class="post-with-image-slider">
    <div class="post__info">
      <div class="info__user-avatar-wrapper">
        <img
          class="user-avatar"
          src="https://pic.sport.ua/media/images/Foto%202.jpg"
          alt="user-avatar"
        />
      </div>
      <div class="info__data">
        <p class="info__user-name">Дмитрий Коробов</p>
        <p class="info__creating-date">21.04.2019</p>
      </div>
      <div class="info__edit-btn">
        <i class="ti-more"></i>
      </div>
    </div>
    <div class="post__slider">
      slider
    </div>
    <p class="post__message-text" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi fuga corporis, tempora animi non labore mollitia voluptatibus.</p>
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
@import "@/assets/scss/vars.scss";

.post-with-image-slider {
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
  .post__slider {
    margin-top: 5px;
    padding: 20px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .post__message-text {
    flex: 1 1 auto;
    margin-top: 5px;
    padding: 20px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    overflow: auto;
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
    }
  }
}

</style>