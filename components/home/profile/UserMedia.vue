<template>
  <div class="media">
    <div class="media__preview">
      <div class="media__preview-img-wrapper">
        <img class="media__preview-img" src="https://www.lady-grace.com.ua/wp-content/uploads/2015/09/tumblr_inline_nrrni1hiyn1rosmwl_1280.jpg" alt="">
      </div>
      <div class="media__preview-img-wrapper">
        <img class="media__preview-img" src="http://old.eurofitclub.ru/wp-content/images/2013/06/training_1_016_web.jpg" alt="">
      </div>
      <div class="media__preview-img-wrapper">
        <img class="media__preview-img" src="https://img4.goodfon.ru/original/2000x1334/1/4b/woman-training-crossfit-leg-amputated.jpg" alt="">
      </div>
    </div>
    <!-- <i class="ti-gallery media__block-icon"></i> -->
    <p class="media__info">65 фотографий</p>
    <p class="media__info">18 видео</p>
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

.media {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 20px;
  min-width: 400px;
  max-width: 400px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .media__preview {
    // border: 1px solid red;
    position: relative;
    height: 290px;
    margin-bottom: 10px;
    .media__preview-img-wrapper {
      // border: 1px solid red;
      position: absolute;
      height: 250px;
      border: 4px solid $white;
      border-radius: 6px;
      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.4);
      overflow: hidden;
      .media__preview-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .media__preview-img-wrapper:nth-child(1) {
      top: 10px;
      left: 5px;
      transform: rotate(-2deg);
      width: calc(100% - 30px);
    }
    .media__preview-img-wrapper:nth-child(2) {
      top: 10px;
      left: 25px;
      transform: rotate(2deg);
      width: calc(100% - 30px);
    }
    .media__preview-img-wrapper:nth-child(3) {
      top: 30px;
      left: 15px;
      width: calc(100% - 30px);
    }
  }
  // .media__block-icon {
  //   // border: 1px solid red;
  //   align-self: center;
  //   position: relative;
  //   margin-top: -40px;
  //   margin-bottom: 10px;
  //   padding: 15px;
  //   background: $white;
  //   font-size: 30px;
  //   border: 1px solid $black;
  //   border-radius: 50%;
  // }
  .media__info {
    // border: 1px solid red;
    margin-bottom: 10px;
    padding: 0 5px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
}

</style>
