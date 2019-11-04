<template>
  <div class="selected-user__main-info">

    <p class="main-info__block-title">Загруженные фотографии и видео</p>
    <div class="general-info__user-avatar">
      <img class="user-avatar__img" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt />
      <img class="user-avatar__img" src="https://i.pinimg.com/736x/f5/05/17/f50517f2ed6a300996318d0ac4c458da.jpg" alt />
      <img class="user-avatar__img" src="https://pbs.twimg.com/media/DN3HR-sXUAAjLUs.jpg:large" alt />
    </div>

    <p class="main-info__block-title">Общая информация</p>
    <div class="general-info">
      <div class="general-info__user-data">
        <div class="user-data">
          <div class="additional-info">
            <div class="additional-info__item">
              <p class="additional-info__item-text">Возраст:</p>
              <p class="additional-info__item-value">30</p>
            </div>
            <div class="additional-info__item">
              <p class="additional-info__item-text">Вес:</p>
              <p class="additional-info__item-value">78.6</p>
            </div>
            <div class="additional-info__item">
              <p class="additional-info__item-text">Рост:</p>
              <p class="additional-info__item-value">174</p>
            </div>
            <div class="additional-info__item">
              <p class="additional-info__item-text">Подписчики:</p>
              <p class="additional-info__item-value">482 000</p>
            </div>
          </div>

          <p class="main-info__block-title">Контактная информация</p>
          <div class="user-data__contact-info">
            <div class="contact-info__item">
              <i class="ti-location-pin contact-info__item-icon"></i>
              <p class="contact-info__item-title">Город:</p>
              <p class="contact-info__item-text">г. Самара</p>
            </div>
            <div class="contact-info__item">
              <i class="ti-pencil contact-info__item-icon"></i>
              <p class="contact-info__item-title">Телефон:</p>
              <p class="contact-info__item-text">+7 845 879 87 96</p>
            </div>
            <div class="contact-info__item">
              <i class="ti-email contact-info__item-icon"></i>
              <p class="contact-info__item-title">E-mail:</p>
              <p class="contact-info__item-text">TestMail@gmail.com</p>
            </div>
            <div class="contact-info__item">
              <i class="ti-world contact-info__item-icon"></i>
              <p class="contact-info__item-title">Website:</p>
              <p class="contact-info__item-text">johndow-website.com</p>
            </div>
            <div class="contact-info__item">
              <i class="ti-new-window contact-info__item-icon"></i>
              <p class="contact-info__item-title">Соц. сети:</p>
              <p class="contact-info__item-text">
                <i class="social-link">vk</i>
                <i class="ti-facebook social-link"></i>
                <i class="ti-instagram social-link"></i>
                <i class="ti-youtube social-link"></i>
                <i class="ti-twitter social-link"></i>
                <i class="ti-skype social-link"></i>
              </p>
            </div>
          </div>

        </div>
      </div>
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

.selected-user__main-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .main-info__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }



  .general-info__user-avatar {
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    // width: 50%;
    // min-width: 700px;
    // max-width: 600px;
    // height: 300px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    overflow: hidden;
    .user-avatar__img {
      margin-right: 10px;
      height: 250px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
  }




  .general-info {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    margin-bottom: 5px;


.general-info__user-avatar {
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    // width: 50%;
    // min-width: 700px;
    // max-width: 600px;
    // height: 300px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    overflow: hidden;
    .user-avatar__img {
      height: 200px;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
  }

    .general-info__user-data {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      // width: 400px;
      // min-width: 400px;
      // max-width: 400px;
      .user-data {
        // border: 1px solid red;
        flex: 1 1 auto;
        // height: 100%;
        display: flex;
        flex-direction: column;
        .user-data__common-info {
          display: flex;
          flex-direction: column;
          // justify-content: space-between;
          // align-items: flex-start;
          // margin-right: 5px;
          margin-bottom: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .common-info__user-name {
            margin: 0 30px;
            font-size: 24px;
            font-weight: 600;
          }
          .common-info__user-status {
            display: flex;
            margin: 5px 30px 0 30px;
            .user-status__dot {
              margin-top: 4px;
              width: 8px;
              height: 8px;
              background: $gray;
              border-radius: 6px;
            }
            .user-status__text {
              margin-left: 5px;
              font-size: 12px;
            }
          }

          .common-info__action-btn-wrapper {
            display: flex;
            margin-top: 10px;
            padding: 10px 10px 0 10px;
            border-top: 1px dashed $blockBorder;
            .common-info__action-btn {
              margin-right: 10px;
            }
            .common-info__action-btn:first-child {
              margin-right: auto;
            }
            .common-info__action-btn:last-child {
              margin-right: 0;
            }
          }
        }

        .additional-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding: 10px 0;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .additional-info__item {
            flex: 1 1 auto;
            border-right: 1px solid $blockBorder;
            .additional-info__item-text {
              text-align: center;
              font-size: 14px;
              font-weight: 500;
            }
            .additional-info__item-value {
              margin-top: 5px;
              text-align: center;
              color: $green;
              font-size: 20px;
              font-weight: 600;
              white-space: nowrap;
            }
          }
          .additional-info__item:last-child {
            border: none;
          }
        }

        .user-data__contact-info {
          // flex: 1 1 auto;
          // margin-right: 5px;
          // margin-bottom: 5px;
          padding: 0 20px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .contact-info__item {
            display: flex;
            align-items: center;
            margin: 10px 0;
            .contact-info__item-icon {
              margin-right: 10px;
              font-size: 16px;
            }
            .contact-info__item-title {
              font-size: 14px;
              font-weight: 500;
            }
            .contact-info__item-text {
              margin-left: auto;
              font-size: 14px;
              .social-link {
                padding: 5px;
                cursor: pointer;
              }
            }
          }
        }
      }
      // .user-info__action-btn-wrapper {
      //   display: flex;
      //   margin-right: 5px;
      //   padding: 10px;
      //   background: $white;
      //   border: 1px solid $blockBorder;
      //   border-radius: 6px;
      //   .user-info__action-btn {
      //     margin-right: 10px;
      //   }
      //   .user-info__action-btn:first-child {
      //     margin-right: auto;
      //   }
      //   .user-info__action-btn:last-child {
      //     margin-right: 0;
      //   }
      // }
    }
    // .general-info__user-avatar {
    //   padding: 10px;
    //   // width: 50%;
    //   // min-width: 700px;
    //   // max-width: 600px;
    //   // height: 300px;
    //   background: $white;
    //   border: 1px solid $blockBorder;
    //   border-radius: 6px;
    //   overflow: hidden;
    //   .user-avatar__img {
    //     height: 250px;
    //     border: 1px solid $blockBorder;
    //     border-radius: 6px;
    //   }
    // }
  }

  

}

</style>