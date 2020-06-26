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
        <social-btns class="mt-5" :btnsInfo="{like: 0, dislike: 0, share: 0}" />
      </div>

      <div class="stats-and-info">
        <div class="training-stats">
          <div class="training-stats__element">
            <i class="ti-timer element__icon"></i>
            <p class="element__amount">4</p>
            <p class="element__text">тренировочных дня</p>
          </div>
          <div class="training-stats__element">
            <i class="ti-check-box element__icon"></i>
            <p class="element__amount">27</p>
            <p class="element__text">завершенных тренировок</p>
          </div>
        </div>

        <div class="main-info">
          <div class="element">
            <p class="element__title">Название тренировочной программы</p>
            <app-input-text placeholder="Название" @valueChanged="test = $event" />
          </div>
          <div class="element">
            <p class="element__title">Описание тренировочной программы</p>
            <app-textarea placeholder="Описание" @valueChanged="test = $event" />
          </div>
        </div>

        <div class="training-skill">
          <p class="training-skill__block-title">Сложность тренировочной программы:</p>
          <app-rating :rating="5" />
        </div>

      </div>
      

      <app-add-marks-form
        :marks="['mark 1']"
        @addMark="addMark($event)"
        @removeMark="removeMark($event)"
      />


      <div class="training-focus">
        <p class="training-focus__block-title">Акцент тренировок</p>
        <div class="training-focus__chart">
          график круговой показывает смещение акцента в тренировках (выносливость, сила, кардио)
        </div>
        <div class="training-focus__percents">
          <div class="percents__element">
            <p class="element__title">Сила:</p>
            <div class="element__value">60%</div>
          </div>
          <div class="percents__element">
            <p class="element__title">Выносливость:</p>
            <div class="element__value">20%</div>
          </div>
          <div class="percents__element">
            <p class="element__title">Гибкость:</p>
            <div class="element__value">5%</div>
          </div>
          <div class="percents__element">
            <p class="element__title">Кардио:</p>
            <div class="element__value">5%</div>
          </div>
        </div>
      </div>


    </div>
    <div class="training-overview__action-btns">
      <app-button uppercase >Удалить программу</app-button>
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
import AppAddMarksForm from '@/components/basic/AppAddMarksForm'
import AppRating from '@/components/basic/AppRating'

export default {
  components: {
    AppBlockTitle,
    AppInputText,
    AppTextarea,
    SocialBtns,
    AppButton,
    AppAddMarksForm,
    AppRating
  },
  methods: {
    addMark ($event) {
      console.log($event)
    },
    removeMark ($event) {
      console.log($event)
    }
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
    .stats-and-info {
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      width: 100%;
      .training-stats {
        display: flex;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .training-stats__element {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid $blockBorder;
          .element__amount {
            margin-left: 10px;
            font-size: 14px;
            font-weight: 600;
          }
          .element__text {
            margin-left: 5px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
          }
        }
        .training-stats__element:last-child {
          border-right: none;
        }
      }
      .main-info {
        // border: 1px solid red;
        flex: 1 1 auto;
        margin-top: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .element {
          margin-bottom: 10px;
          .element__title {
            margin-bottom: 5px;
            padding: 0 10px;
            font-weight: 500;
          }
        }
      }
      .training-skill {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 5px;
        padding: 10px 20px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .training-skill__block-title {
          font-weight: 500;
        }
      }
      // .training-days {
      //   margin-top: 5px;
      //   padding: 10px;
      //   background: $white;
      //   border: 1px solid $blockBorder;
      //   border-radius: 6px;
      //   .training-days__block-title {
      //     display: flex;
      //     justify-content: space-between;
      //     padding-bottom: 10px;
      //     border-bottom: 1px dashed $blockBorder;
      //     .block-title {
      //       padding: 0 10px;
      //       font-weight: 500;
      //     }
      //   }
      //   .calendar-row {
      //     // border: 1px solid red;
      //     display: flex;
      //     align-items: center;
      //     margin: 10px 0;
      //     .element {
      //       flex: 1 1 auto;
      //       display: flex;
      //       flex-direction: column;
      //       align-items: center;
      //       padding: 5px 10px;
      //       border-right: 1px solid $blockBorder;
      //       .element__title {
      //         // text-transform: uppercase;
      //         font-size: 12px;
      //         font-weight: 600;
      //       }
      //       .element__value {
      //         margin-top: 5px;
      //         color: $green;
      //         font-size: 18px;
      //         font-weight: 600;
      //       }
      //     }
      //   }
      // }
    }
    
    .training-focus {
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      width: 260px;
      min-width: 260px;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .training-focus__block-title {
        text-align: center;
        font-weight: 500;
        padding-bottom: 10px;
        border-bottom: 1px dashed $blockBorder;
      }
      .training-focus__chart {
        // border: 1px solid red;
        margin-top: 40px;
      }
      .training-focus__percents {
        margin-top: auto;
        .percents__element {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;
          .element__title {
            // font-weight: 500;
          }
          .element__value {
            color: $green;
            font-weight: 600;
          }
        }
        .percents__element:last-child {
          margin-bottom: 0;
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
