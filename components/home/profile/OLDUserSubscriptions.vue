<template>
  <div class="subscriptions">

    <div class="subscriptions__preview">
      <div class="subscriptions__preview-img-wrapper">
        <img class="subscriptions__preview-img" src="https://www.lady-grace.com.ua/wp-content/uploads/2015/09/tumblr_inline_nrrni1hiyn1rosmwl_1280.jpg" alt="">
      </div>
      <div class="subscriptions__page-info-wrapper">
        <div class="page-info__top">
          <p class="page-info__main">Jane Smith, 28</p>
          <p class="page-info__subscriptions">35 890 подписчиков</p>
        </div>
        <div class="page-info__bottom">
          <div class="page-info__left">
            <div class="page-info__user-progress">
              <p class="page-info__user-progress-text">Вес:</p>
              <p class="page-info__user-progress-value">56.4</p>
            </div>
            <div class="page-info__user-progress">
              <p class="page-info__user-progress-text">Рост:</p>
              <p class="page-info__user-progress-value">168</p>
            </div>
            <div class="page-info__user-progress">
              <p class="page-info__user-progress-text">Вызовы:</p>
              <p class="page-info__user-progress-value">
                <span class="user-progress-value__success">1 045</span>
                <span class="user-progress-value__divider">/</span>
                <span class="user-progress-value__fail">128</span>
              </p>
            </div>
          </div>
          <div class="page-info__right">
            <app-button size14px uppercase center><i class="ti-search"></i></app-button>
          </div>
        </div>
      </div>
    </div>

    <!-- <i class="ti-bolt subscriptions__block-icon"></i> -->
    <p class="subscriptions__info">82 интересные страницы</p>
    <app-button size14px uppercase center>Посмотерть все</app-button>

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

.subscriptions {
  display: flex;
  flex-direction: column;
  padding: 10px 10px 20px 10px;
  min-width: 400px;
  max-width: 400px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;

  .subscriptions__preview {
    // border: 1px solid red;
    margin: 10px 10px 0 10px;
    padding: 10px;
    // border: 1px solid $blockBorder;
    border-radius: 6px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
    .subscriptions__preview-img-wrapper {
      width: 100%;
      height: 200px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      overflow: hidden;
      .subscriptions__preview-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .subscriptions__page-info-wrapper {
      // border: 1px solid red;
      .page-info__top {
        margin-top: 10px;
        .page-info__main {
          margin: 0 10px;
          font-size: 18px;
          font-weight: 500;
        }
        .page-info__subscriptions {
          margin: 5px 10px 0 10px;
          font-size: 14px;
        }
      }
      .page-info__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px;
        .page-info__left {
          .page-info__user-progress {
            display: flex;
            align-items: center;
            .page-info__user-progress-text {
              font-size: 12px;
              font-weight: 500;
            }
            .page-info__user-progress-value {
              margin-left: 5px;
              color: $green;
              font-size: 12px;
              font-weight: 600;
              .user-progress-value__success {
                color: $green;
                font-weight: 600;
              }
              .user-progress-value__fail {
                color: $red;
                font-weight: 600;
              }
              .user-progress-value__divider {
                color: $black;
              }
            }
          }
        }
        .page-info__right {
          align-self: flex-end;
        }
      }
    }
  }

  // .subscriptions__block-icon {
  //   // border: 1px solid red;
  //   align-self: center;
  //   position: relative;
  //   margin-top: -20px;
  //   margin-bottom: 10px;
  //   padding: 15px;
  //   background: $white;
  //   font-size: 30px;
  //   border: 1px solid $black;
  //   border-radius: 50%;
  // }
  .subscriptions__info {
    // border: 1px solid red;
    margin: 20px 0;
    padding: 0 5px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
}

</style>