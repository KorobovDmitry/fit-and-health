<template>
  <div class="main-challenge">
    <app-block-title>Легендарный вызов</app-block-title>

    <div class="main-challenge__card">
      <div class="card__content">
        <p class="card__title">Название вызова</p>

        <div class="image-and-decription">
          <div class="image-and-socials">
            <div class="image__wrapper">
              <img
                class="image"
                src="https://wallpapercave.com/wp/wp1836146.jpg"
              />
            </div>

            <social-btns
              class="mt-5"
              :btnsInfo="{ like: 1, dislike: 0, share: 10 }"
            />
          </div>
          <div class="description">
            <p class="description__block-title">Описание</p>
            <p class="description__text">Описание текст</p>
          </div>
          <div class="exercises">
            <p class="exercises__block-title">Упражнения</p>
          </div>
        </div>
      </div>

      <div class="card__actions">
        <app-button size14px uppercase>Найти похожие</app-button>

        <app-button size14px class="ml-auto" uppercase>Подробнее</app-button>
        <app-button size14px class="ml-10" uppercase>Приступить к выполнению</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import SocialBtns from "@/components/basic/SocialBtns"
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppBlockTitle,
    SocialBtns,
    AppButton,
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.main-challenge {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .main-challenge__card {
    display: flex;
    flex-direction: column;
    .card__content {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10px;
      background: $hiddenBlockBG;
      border-radius: 6px;
      box-shadow: $boxShadow;
      .card__title {
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        text-align: center;
        font-weight: 500;
      }
      .image-and-decription {
        display: flex;
        margin-top: 5px;
        .image-and-socials {
          .image__wrapper {
            padding: 10px;
            max-width: 400px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
            .image {
              object-fit: cover;
              object-position: center;
              border-radius: 6px;
            }
          }
        }
        .description {
          flex: 1 1 auto;
          margin-left: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .description__block-title {
            text-align: center;
            font-weight: 500;
          }
          .description__text {
          }
        }
        .exercises {
          margin-left: 5px;
          padding: 10px;
          width: 100%;
          max-width: 300px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .exercises__block-title {
            text-align: center;
            font-weight: 500;
            padding-bottom: 10px;
            border-bottom: 1px dashed $blockBorder;
          }
        }
      }
    }
    .card__actions {
      display: flex;
      margin-top: 10px;
    }
  }
}

</style>
