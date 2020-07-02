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
        <p> тренировочные дни</p>
        <div class="days">
          <div v-for="(item, index) in 4" :key="index" class="day">
            <div class="day__overview">
              <div class="day__title">День {{ index + 1 }}. Название тренировочного дня</div>
              <div>Описнаие / комментарий</div>
              <div>статистика</div>
            </div>
            <div class="day__exercises">
              <ul class="exercises__list">
                <li class="list__item">exercise</li>
              </ul>
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
      margin-top: 5px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .days {
        .day {
          display: flex;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px dashed $blockBorder;
          .day__overview {
            // border: 1px solid red;
            flex: 1 1 auto;
            width: 100%;
            max-width: 400px;
            .day__title {
              font-weight: 500;
            }
          }
          .day__exercises {
            // border: 1px solid red;
            flex: 1 1 auto;
            margin-left: 20px;
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
