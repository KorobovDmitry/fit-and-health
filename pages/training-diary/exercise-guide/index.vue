<template>
  <div class="exercise-guide">
    <app-page-title>Справочник по упражнениям</app-page-title>

    <div class="exercise-guide__content">
      <div class="exercise-guide__page-info">
        <div class="info__wrapper">
          <div class="info__element">
            <p class="info__element-text">Всего упражнений</p>
            <p class="info__element-value">127</p>
          </div>
          <div class="info__element">
            <p class="info__element-text">Категорий</p>
            <p class="info__element-value">8</p>
          </div>
          <div class="info__element">
            <p class="info__element-text">Мои упражнения</p>
            <p class="info__element-value">3</p>
          </div>
        </div>
        <div class="add-product-btn__wrapper">
          <app-button sizeXL uppercase right>Добавить упражнение</app-button>
        </div>
      </div>

      <div class="exercise-guide__list-and-overview">
        <exercises-list />

        <div class="exercises-overview">
          <app-block-title>Описание упражения</app-block-title>

          <div class="exercises-overview__description">
            <div class="description">
              <p class="description__exercises-title">Боковые прыжки через платформу</p>
              <div class="description__exercise-technique">
                <p class="exercise-technique__block-title">Техника выполнения упражнения:</p>
                <p
                  class="exercise-technique__text"
                >Встаньте сбоку от платформы, левую ногу поставьте на середину платформы. Подпрыгните вверх и опуститесь правой ногой на платформу, а левой ногой на пол с другой стороны от платформы. Балансируйте руками, чтобы помочь вашим движениям. Продолжайте прыжки из стороны в сторону через платформу.</p>
              </div>
              <div class="description__info-and-focus">
                <div class="exercises-info">
                  <div class="exercises-info__item">
                    <p class="item__title">Группа мышц:</p>
                    <p class="item__value">Квадрицепсы</p>
                  </div>
                  <div class="exercises-info__item">
                    <p class="item__title">Тип упражнения:</p>
                    <p class="item__value">Базовое</p>
                  </div>
                  <div class="exercises-info__item">
                    <p class="item__title">Дополнительные мышцы:</p>
                    <p class="item__value">Абдукторы, Аддукторы, Бедра, Икры</p>
                  </div>
                  <div class="exercises-info__item">
                    <p class="item__title">Вид упражнения:</p>
                    <p class="item__value">Плиометрическое</p>
                  </div>
                  <div class="exercises-info__item">
                    <p class="item__title">Оборудование:</p>
                    <p class="item__value">Другое</p>
                  </div>
                  <div class="exercises-info__item">
                    <p class="item__title">Уровень сложности:</p>
                    <p class="item__value">
                      <i class="ti-crown"></i>
                      <i class="ti-crown"></i>
                      <i class="ti-crown"></i>
                      <i class="ti-crown"></i>
                      <i class="ti-crown"></i>
                    </p>
                  </div>
                </div>
                <div class="exercises-focus">
                  акцент упражнения на силу, выносливость, гибкость
                </div>
              </div>
              <div class="description__user-best-result">
                <p>Мой лучшый результат</p>
              </div>
            </div>
            <div class="iframe-youtube-video">
              <iframe width="350px" height="500px" src="https://www.youtube.com/embed/FntGgrPurFA"></iframe>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle";
import ExercisesList from "@/components/training-diary/TrainingProgramEditor/Editor/ExercisesList/index";
import AppBlockTitle from "@/components/basic/AppBlockTitle";
import AppButton from "@/components/basic/AppButton";

export default {
  components: {
    AppPageTitle,
    ExercisesList,
    AppBlockTitle,
    AppButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercise-guide {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;

  .exercise-guide__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;

    .exercise-guide__page-info {
      // border: 1px solid red;
      display: flex;
      margin-bottom: 40px;
      .info__wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .info__element {
          // border: 1px solid red;
          padding: 0 40px;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          .info__element-text {
            font-size: 18px;
          }
          .info__element-value {
            color: $green;
            font-size: 32px;
            font-weight: 600;
          }
        }
        .info__element:first-child {
          padding-left: 0px;
        }
        .info__element:nth-child(3) {
          border-right: none;
        }
      }
      .add-product-btn__wrapper {
        // border: 1px solid red;
        display: flex;
        margin-left: auto;
      }
    }

    .exercise-guide__list-and-overview {
      display: flex;
      .exercises-overview {
        // border: 1px solid red;
        flex: 1 1 auto;
        margin-left: 40px;
        .exercises-overview__description {
          display: flex;
          padding: 10px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          .description {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            .description__exercises-title {
              font-weight: 500;
              padding: 10px 20px;
              background: $white;
              border: 1px solid $blockBorder;
              border-radius: 6px;
            }

            .description__exercise-technique {
              flex: 1 1 auto;
              margin-top: 10px;
              padding: 10px;
              background: $white;
              border: 1px solid $blockBorder;
              border-radius: 6px;
              .exercise-technique__block-title {
                padding: 10px;
                text-align: center;
                font-weight: 500;
              }
              .exercise-technique__text {
                padding: 0 10px;
              }
            }

            .description__info-and-focus {
              display: flex;
              margin-top: 10px;
              .exercises-info {
                flex: 1 1 auto;
                padding: 10px 20px;
                background: $white;
                border: 1px solid $blockBorder;
                border-radius: 6px;
                .exercises-info__item {
                  display: flex;
                  margin-bottom: 10px;
                  .item__title {
                    font-weight: 500;
                  }
                  .item__value {
                    margin-left: 10px;
                  }
                }
                .exercises-info__item:last-child {
                  margin-bottom: 0;
                }
              }
              .exercises-focus {
                margin-left: 10px;
                padding: 10px;
                background: $white;
                border: 1px solid $blockBorder;
                border-radius: 6px;
                width: 200px;
                min-width: 200px;
                max-width: 200px;
              }
            }

            .description__user-best-result {
              margin-top: 10px;
              padding: 10px 20px;
              background: $white;
              border: 1px solid $blockBorder;
              border-radius: 6px;
            }
          }
          .iframe-youtube-video {
            margin-left: 10px;
            padding: 10px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
            iframe {
              border-radius: 6px;
            }
          }
        }
      }
    }
  }
}
</style>