<template>
  <div class="found-program">
    <div class="found-program__main-info">
      <p class="training-description__title">Круговая жиросжигающая тренировка "BATMAN"</p>

      <div class="main-info__training-description">
        <div class="training-description__img-wrapper">
          <img
            class="training-description__img"
            src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg"
            alt
          />
        </div>

        <div class="training-description__overview">
          <div class="training-description__statistics">
            <div class="statistics__element">
              <i class="ti-timer"></i>
              <p class="element__value">4</p>
              <p class="element__title">тренировочных дня</p>
            </div>
            <div class="statistics__element">
              <i class="ti-check-box"></i>
              <p class="element__value">27</p>
              <p class="element__title">завершенных тренировок</p>
            </div>
          </div>

          <div class="training-description__short-text-overview">
            <p class="short-text-overview__block-title">Описание</p>
            <p
              class="short-text-overview__text"
            >Короткое описание тренировочной программы на 100-200 символов остальное будет обрезано. блок со скроллом используется.</p>
            <br />
            <p>НАЗВАНИЕ СДЕЛАТЬ СВЕРХУ НАД КАРТИНКОЙИ СЛОЖНОСТЬ НА ВСЮ ДЛИНУ КАК И НАЗВАНИЕ</p>
          </div>
        </div>
      </div>

      <div class="training-description__training-skill">
        <p class="training-skill__text">Сложность тренировочной программы:</p>
        <div class="training-skill__level-view">
          <i class="ti-crown level-view__icon level-view__icon--active"></i>
          <i class="ti-crown level-view__icon level-view__icon--active"></i>
          <i class="ti-crown level-view__icon level-view__icon--active"></i>
          <i class="ti-crown level-view__icon"></i>
          <i class="ti-crown level-view__icon"></i>
        </div>
      </div>
    </div>

    <div class="found-program__chart-and-marks">
      <div class="chart-and-marks__top">
        <div class="chart">
          <p class="chart__block-title">Акцент тренировок</p>
          <img
            src="https://image.freepik.com/free-vector/circle-chart-infographic-template-with-options_93208-410.jpg"
            alt
          />
          <p>Кардио: 30%</p>
          <p>Сила: 20%</p>
          <p>Выносливость: 38%</p>
          <p>Гибкость: 12%</p>
        </div>

        <div class="added-marks">
          <p class="added-marks__block-title">Добавленные отметки</p>
          <div class="added-marks__item">Кардио</div>
          <div class="added-marks__item">Жиросжигающая</div>
          <div class="added-marks__item">Круговая</div>
          <div class="added-marks__item">На все группы мышц</div>
        </div>
      </div>
      <div class="chart-and-marks__bottom">
        <nuxt-link to="training-programs/program-123" class="open-program-btn">Открыть программу</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.found-program {
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  transition: $tr-02;
  background: $hiddenBlockBG;
  border-radius: 6px;
  box-shadow: $btnHoverShadow;
  .found-program__main-info {
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 10px;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;

    .training-description__title {
      padding: 0 10px 10px 10px;
      font-weight: 500;
      border-bottom: 1px dashed $blockBorder;
    }
    .main-info__training-description {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      // margin-left: 10px;
      .training-description__img-wrapper {
        // border: 1px solid red;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 200px;
        min-width: 200px;
        max-width: 200px;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        overflow: hidden;
        .training-description__img {
        }
      }
      .training-description__overview {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        .training-description__statistics {
          display: flex;
          // margin-top: 10px;
          padding: 10px;
          border-bottom: 1px dashed $blockBorder;
          .statistics__element {
            // border: 1px solid red;
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            .element__value {
              margin-left: 10px;
              font-size: 14px;
              font-weight: 600;
            }
            .element__title {
              margin-left: 5px;
              font-size: 12px;
              font-weight: 500;
              white-space: nowrap;
            }
          }
        }
        .training-description__short-text-overview {
          padding: 10px;
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          .short-text-overview__block-title {
            align-self: center;
            font-weight: 500;
          }
        }
      }
    }
    .training-description__training-skill {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 10px 0 10px;
      border-top: 1px dashed rgba(0, 0, 0, 0.2);
      .training-skill__text {
        font-size: 14px;
        font-weight: 500;
      }
      .training-skill__level-view {
        .level-view__icon {
          color: $gray;
          font-size: 14px;
        }
        .level-view__icon--active {
          color: $green;
        }
      }
    }
  }

  .found-program__chart-and-marks {
    .chart-and-marks__top {
      display: flex;
      margin-bottom: 10px;
      .chart {
        width: 230px;
        min-width: 230px;
        max-width: 230px;
        margin-top: 10px;
        margin-left: 10px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .chart__block-title {
          margin-bottom: 10px;
          padding: 0 10px 10px 10px;
          text-align: center;
          font-weight: 500;
          border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
          white-space: nowrap;
        }
      }
      .added-marks {
        margin-top: 10px;
        margin-right: 10px;
        margin-left: 10px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .added-marks__block-title {
          margin-bottom: 10px;
          padding: 0 10px 10px 10px;
          text-align: center;
          font-weight: 500;
          border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
          white-space: nowrap;
        }
        .added-marks__item {
          // margin-bottom: 5px;
          margin: 0 10px 5px 10px;
          padding: 5px 10px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          font-size: 14px;
        }
      }
    }
    .chart-and-marks__bottom {
      // border: 1px solid red;
      display: flex;
      margin: 0 10px 10px 10px;
      // padding: 10px 0;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .open-program-btn {
        // border: 1px solid red;
        flex: 1 1 auto;
        padding: 10px;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        color: $black;
        font-weight: 500;
        transition: $tr-02;
      }
      .open-program-btn:hover {
        color: $green;
      }
    }
  }
}

.found-program:hover {
  // box-shadow: $btnHoverShadow;
}
</style>