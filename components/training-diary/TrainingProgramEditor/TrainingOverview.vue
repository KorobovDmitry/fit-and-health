<template>
  <div class="training-overview">
    <app-block-title>Основная информация о тренировке</app-block-title>
    <div class="training-overview__content">
      <div class="img-and-social">
        <div class="img__wrapper">
          <img
            class="img"
            src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg"
            alt="training-program-img"
          />
        </div>
        <social-btns />
      </div>
      <div class="main-tarining-info__elements">
        <div class="element">
          <p class="element__title">Название тренировочной программы</p>
          <app-input-text placeholderText="Название" />
        </div>

        <div class="element">
          <p class="element__title">Короткое описание</p>
          <app-textarea />
        </div>

        <div class="element">
          <p class="element__title">Добавленные отметки</p>
          <app-input-text placeholderText="добавленные отметки" />
        </div>

        <br />график круговой показывает смещение акцента в тренировках (выносливость, сила, кардио)
        <br />выбрать дни недели для занятий (горизонтальная линия с днями недели в которой можно выбрать дни для тренировок и установить конкретный тренировочный день)
      </div>
      <div class="test">
        <app-button uppercase fillArea>Начать тренировку</app-button>
        <app-button uppercase fillArea mt10>Сохранить изменения</app-button>
        <app-button uppercase fillArea mt10>Сделать основной</app-button>
        <app-button uppercase fillArea mt10>Удалить тренировочную программу</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import SocialBtns from '@/components/basic/SocialBtns'
import AppInputText from "@/components/basic/AppInputText"
import AppTextarea from "@/components/basic/AppTextarea"
import AppButton from "@/components/basic/AppButton.vue"

export default {
  components: {
    AppBlockTitle,
    AppInputText,
    AppTextarea,
    SocialBtns,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-overview {
  // border: 1px solid red;
  margin-bottom: 40px;
  .training-overview__content {
    display: flex;
    .img-and-social {
      // width: 400px;
      .img__wrapper {
        // margin-bottom: 5px;
        padding: 10px;
        width: 400px;
        // height: 342px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        overflow: hidden;
        .img {
          min-width: 380px;
          // object-fit: cover;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }
    }
    .main-tarining-info__elements {
      // border: 1px solid red;
      margin-left: 5px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .element {
        .element__title {
          margin: 0 20px;
          font-weight: 500;
        }
      }
    }
    .test {
      margin-left: 40px;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
    }
  }
}
</style>
