<template>
  <div class="current-training-overview">
    <div class="info-block">
      <div class="info-block__current-program">
        <p class="info-block__program-title">Четырехдневный сплит</p>
        <p class="info-block__date-text">Предыдущая тренировка:</p>
        <p class="info-block__date">вторник, 14 декабря 2019</p>
      </div>
      <div class="info-block__statistics">
        <div class="info-block__statistics-element">
          <p class="info-block__statistics-value">09 : 43</p>
          <p class="info-block__statistics-text">Время начала тренировки</p>
        </div>
        <div class="info-block__statistics-element">
          <p class="info-block__statistics-value">11 : 09</p>
          <p class="info-block__statistics-text">Время завершения тренировки</p>
        </div>
        <div class="info-block__statistics-element">
          <p class="info-block__statistics-value">1 час 17 мин.</p>
          <p class="info-block__statistics-text">Общее время тренировки</p>
        </div>
        <div class="info-block__statistics-element">
          <p class="info-block__statistics-value">1217 кг.</p>
          <p class="info-block__statistics-text">Общий тоннаж тренировки</p>
        </div>
      </div>
    </div>

    <app-button size16px uppercase left fillArea mt10>Редактировать тренировочную программу</app-button>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
export default {
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.current-training-overview {
  margin-top: 40px;
  .info-block {
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    background: $green;
    color: $white;
    border-radius: 6px;
    .info-block__current-program {
      display: flex;
      flex-direction: column;
      margin-right: auto;
      .info-block__program-title {
        font-size: 24px;
        font-weight: 600;
      }
      .info-block__date-text {
        margin-top: 5px;
        text-transform: uppercase;
        font-size: 12px;
      }
      .info-block__date {
        font-size: 12px;
      }
    }
    .info-block__statistics {
      // border: 1px solid red;
      display: flex;
      overflow: hidden;
      .info-block__statistics-element {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0px 10px 0 0;
        padding: 10px;
        width: 180px;
        min-width: 180px;
        border: 1px solid $white;
        border-radius: 6px;
        .info-block__statistics-value {
          font-size: 20px;
          font-weight: 500;
          .info-block__statistics-value-scale {
            font-size: 16px;
          }
        }
        .info-block__statistics-text {
          margin-top: 10px;
          text-align: center;
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 500;
        }
      }
      .info-block__statistics-element:first-child {
        margin-left: 10px;
      }
      .info-block__statistics-element:last-child {
        margin-right: 0;
      }
    }
  }
}

</style>
