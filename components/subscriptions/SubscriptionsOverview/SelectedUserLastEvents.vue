<template>
  <div class="selected-user__last-events">
    <div class="last-events__block-title">Последнии принятые вызовы</div>
    <div class="last-events__events-wrapper">
      <div class="event">
        <p class="event__title">Сотня отжиманий</p>
        <div class="event__img-wrapper">
          <img src="https://wallpapercave.com/wp/wp1836146.jpg" alt class="event-img" />
        </div>
        <div class="event__description">
          <p class="description__title">Описание</p>
          <p class="description__text">Выполните 100 отжиманий за 5 минут без отдыха за 1 подход.</p>
        </div>
        <div class="event__best-result">
          <p class="best-results__section-title">Лучшие результаты:</p>
          <div class="best-results__users">user</div>
        </div>
        <div class="event__status">
          <p class="status__mark">Выполнено</p>
        </div>
      </div>

      <div class="event">
        <p class="event__title">Название вызова</p>
        <div class="event__img-wrapper">
          <img src="https://wallpapercave.com/wp/wp1836146.jpg" alt class="event-img" />
        </div>
        <div class="event__description">
          <p class="description__title">Описание</p>
          <p class="description__text">Выполните 100 отжиманий за 5 минут без отдыха за 1 подход.</p>
        </div>
        <div class="event__best-result">
          <p class="best-results__section-title">Лучшие результаты:</p>
          <div class="best-results__users">user</div>
        </div>
        <div class="event__status">
          <p class="status__mark">Выполнено</p>
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

.selected-user__last-events {
  .last-events__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .last-events__events-wrapper {
    // display: flex;
    .event {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      padding: 10px;
      // width: 300px;
      // min-width: 300px;
      // max-width: 300px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .event__title {
        margin: 0 10px 10px 10px;
        font-size: 18px;
        font-weight: 600;
      }
      .event__img-wrapper {
        // margin-bottom: 10px;
        .event-img {
          border-radius: 6px;
        }
      }
      .event__description {
        margin: 10px 10px 0 10px;
        .description__title {
          // margin: 0 10px;
          font-weight: 600;
        }
        .description__text {
          margin-top: 5px;
          font-size: 14px;
        }
      }
      .event__best-result {
        margin: 10px 10px 0 10px;
        .best-results__section-title {
          font-weight: 600;
        }
        .best-results__users {
          color: red;
        }
      }
      .event__status {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px dashed $blockBorder;
        .status__mark {
          text-align: center;
          color: $green;
          font-weight: 800;
        }
      }
    }
  }
}


</style>