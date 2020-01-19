<template>
  <div class="message-history">
    <div class="equal-date">
      <div class="equal-date__header">
        <div class="header__line"></div>
        <p class="header__date">Сегодня</p>
        <div class="header__line"></div>
      </div>
      <div class="equal-date__meassage">
        <div class="meassage__my-message">
          <div class="my-message__subject">
            <div class="subject__text-wrapper">
              <p class="subject__user-name">Дмитрий Коробов</p>
              <p class="subject__text">Привет. Подскажешь как составить план тренировок для новичка?</p>
            </div>
            <div class="subject__date-and-time-info">
              <p class="date-and-time-info__date">21.04.2019,</p>
              <p class="date-and-time-info__time">11 : 02</p>
            </div>
          </div>
          <img class="my-message__user-avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="">
        </div>

        <div class="meassage__another-user-message">
          <img class="another-user-message__user-avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="">
          <div class="another-user-message__subject">
            <div class="subject__text-wrapper">
              <p class="subject__user-name">John Doe</p>
              <p class="subject__text">Привет. Посмотри в разделе спортивной википедии. Или поищи в разделе тренировок. Там есть несколько стандартных программ и подробное описание с техникой выполнения упражнений. :)</p>
            </div>
            <div class="subject__date-and-time-info">
              <p class="date-and-time-info__date">Сегодня,</p>
              <p class="date-and-time-info__time">12 : 15</p>
            </div>
          </div>
        </div>

        <div class="meassage__my-message">
          <div class="my-message__subject">
            <div class="subject__text-wrapper">
              <p class="subject__user-name">Дмитрий Коробов</p>
              <p class="subject__text">Спасибо )</p>
            </div>
            <div class="subject__date-and-time-info">
              <p class="date-and-time-info__date">21.04.2019,</p>
              <p class="date-and-time-info__time">11 : 02</p>
            </div>
          </div>
          <img class="my-message__user-avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.message-history {
  flex: 1 1 auto;
  padding: 10px 20px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  margin-bottom: 20px;
  .equal-date {
    .equal-date__header {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .header__line {
        width: 100%;
        border-top: 1px dashed $inputBorder;
      }
      .header__date {
        margin: 0 20px;
        color: $gray;
        font-size: 12px;
        font-weight: 500;
      }
    }
    .equal-date__meassage {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      .meassage__my-message {
        // border: 1px solid red;
        align-self: flex-end;
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
        margin-left: 250px;
        .my-message__subject {
          .subject__text-wrapper {
            background: $green;
            border: 2px solid $green;
            border-radius: 6px;
            border-bottom-right-radius: 0;
            color: $white;
            .subject__user-name {
              margin: 5px 20px 0 20px;
              text-align: right;
              font-size: 12px;
              font-weight: 500;
              opacity: .6;
            }
            .subject__text {
              padding: 5px 10px 10px 10px;
            }
          }
          .subject__date-and-time-info {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 5px;
            color: $green;
            font-size: 12px;
            .date-and-time-info__date {
              font-weight: 600;
            }
            .date-and-time-info__time {
              margin-left: 5px;
              font-weight: 600;
            }
          }
        }
        .my-message__user-avatar {
          margin-left: 10px;
          width: 60px;
          height: 60px;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }

      .meassage__another-user-message {
        // border: 1px solid red;
        align-self: flex-start;
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
        margin-right: 250px;
        .another-user-message__subject {
          .subject__text-wrapper {
            border: 2px solid $green;
            border-radius: 6px;
            border-bottom-left-radius: 0;
            .subject__user-name {
              margin: 5px 20px 0 20px;
              color: $green;
              font-size: 12px;
              font-weight: 500;
            }
            .subject__text {
              padding: 5px 10px 10px 10px;
            }
          }
          .subject__date-and-time-info {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 5px;
            color: $green;
            font-size: 12px;
            .date-and-time-info__date {
              font-weight: 600;
            }
            .date-and-time-info__time {
              margin-left: 5px;
              font-weight: 600;
            }
          }
        }
        .another-user-message__user-avatar {
          margin-right: 10px;
          width: 60px;
          height: 60px;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }
    }
  }
}

</style>
