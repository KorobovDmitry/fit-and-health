<template>
  <div class="program-overview">
    <app-block-title>Информация о тренировочной программе</app-block-title>
    <div class="program-overview__content">
      <div class="image-and-main-info">
        <div class="image-and-social">
          <div class="image__wrapper">
            <img
              src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg"
              alt
              class="image"
            />
          </div>
          <social-btns :btnsInfo="{like: 0, dislike: 0, share: 0, }" />
        </div>
        <div class="main-training-info">
          <div class="main-training-info__title">Название тренировки</div>

          <div class="stats-description-marks">
            <div class="stats-and-description">
              <div class="stats">stats</div>
              <div class="description">desc</div>
            </div>
            <div class="added-marks">marks</div>
          </div>
        </div>
      </div>

      <div class="training-days">
        <div class="days">
          <div v-for="(item, index) in 4" :key="index" class="day">
            <div class="overview-and-video">
              <div class="overview">
                <div class="overview__title">День {{ index + 1 }}. Название тренировочного дня</div>
                <div class="overview__comment">Описнаие / комментарий</div>
              </div>
              <div class="video">video</div>
            </div>

            <div class="exercises">
              <ul class="exercises__list">
                <li class="list__item">exercise</li>
              </ul>
            </div>

            <div class="stats">
              <div class="stats__element">
                <div class="element__text">Количество упражнений</div>
                <div class="ti-rocket element__icon"></div>
                <div class="element__value">4</div>
              </div>
              <div class="stats__element">
                <div class="element__text">Завершено тренировок</div>
                <div class="ti-check-box element__icon"></div>
                <div class="element__value">12</div>
              </div>
              <div class="stats__element">
                <div class="element__text">Интенсивность тренировок</div>
                <div class="element__value">Высокая</div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle";
import SocialBtns from "@/components/basic/SocialBtns";

export default {
  components: {
    AppBlockTitle,
    SocialBtns
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.program-overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  .program-overview__content {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
    .image-and-main-info {
      display: flex;
      .image-and-social {
        width: 100%;
        min-width: 350px;
        max-width: 350px;
        .image__wrapper {
          margin-bottom: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .image {
            border-radius: 6px;
          }
        }
      }
      .main-training-info {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        .main-training-info__title {
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          text-align: center;
          font-weight: 500;
        }
        .stats-description-marks {
          // border: 1px solid red;
          flex: 1 1 auto;
          display: flex;
          .stats-and-description {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            .stats {
              margin-top: 5px;
              padding: 10px;
              background: $white;
              border: 1px solid $blockBorder;
              border-radius: 6px;
            }
            .description {
              flex: 1 1 auto;
              margin-top: 5px;
              padding: 10px;
              background: $white;
              border: 1px solid $blockBorder;
              border-radius: 6px;
            }
          }
          .added-marks {
            margin-top: 5px;
            margin-left: 5px;
            padding: 10px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
            width: 100%;
            min-width: 260px;
            max-width: 260px;
          }
        }
      }
    }

    .training-days {
      
      .days {
        .day {
          display: flex;
          flex-direction: column;
          margin-top: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .overview-and-video {
            display: flex;
            .overview {
              // border: 1px solid red;
              margin-right: 10px;
              width: 50%;
              .overview__title {
                padding: 10px;
                font-weight: 500;
              }
              .overview__comment {
                padding: 10px;
                // margin-top: 10px;
                height: 300px;
              }
            }
            .video {
              width: 50%;
              border: 1px solid $blockBorder;
              border-radius: 6px;
            }
          }

          .stats {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px dashed $blockBorder;
            .stats__element {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
              padding: 10px 15px;
              .element__text {
                margin-bottom: 5px;
                width: 100%;
                text-transform: uppercase;
                text-align: center;
                font-size: 12px;
              }
              .element__icon {
                margin-right: 10px;
              }
              .element__value {
                font-weight: 500;
              }
            }
          }

          .exercises {
            // border: 1px solid red;
            flex: 1 1 auto;
            margin-top: 10px;
            .exercises__list {
              padding: 10px;
              background: rgba(0,0,0,.025);
              box-shadow: $insetBoxShadow;
              border-radius: 6px;
              height: 400px;
            }
          }
        }
      }
    }
  }
}
</style>
