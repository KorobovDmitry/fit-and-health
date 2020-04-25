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
        <div>
          выбрать дни недели для занятий (горизонтальная линия с днями недели в которой можно выбрать дни для тренировок и установить конкретный тренировочный день)
        </div>
      </div>
      <div class="test">
        <div>
          добавленные отметки
        </div>
        <div>
          график круговой показывает смещение акцента в тренировках (выносливость, сила, кардио)
        </div>
      </div>
    </div>
    <div class="training-overview__action-btns">
      <app-button uppercase >Удалить тренировочную программу</app-button>
      <app-button uppercase >Сделать основной</app-button>
      <app-button uppercase >Сохранить изменения</app-button>
      <app-button uppercase >Начать тренировку</app-button>
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
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
    .img-and-social {
      // width: 400px;
      .img__wrapper {
        // margin-bottom: 5px;
        padding: 10px;
        width: 300px;
        min-width: 300px;
        max-width: 300px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        overflow: hidden;
        .img {
          min-width: 280px;
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
    
  }
  .training-overview__action-btns {
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .btn-wrapper {
      margin-left: 10px;
    }
    .btn-wrapper:first-child {
      margin-left: 0;
      margin-right: auto;
    }
  }
}
</style>
