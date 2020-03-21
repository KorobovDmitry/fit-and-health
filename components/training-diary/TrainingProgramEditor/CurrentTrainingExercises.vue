<template>
  <div class="current-training-exercises">
    <p class="current-training-exercises__title">Тренировочные дни</p>
    <div class="current-training-days">

      <div class="training-day">
        <div class="training-day__title-block">
          <div class="training-day__title">
            <p class="training-day__title-text">День 1. Ноги и плечи</p>
            <p class="training-day__last-training-text">Последняя тренировка:</p>
            <p class="training-day__last-training-date">суббота, 10 декабря 2019</p>
          </div>
          <div class="training-day__info-block">
            <div class="training-day__info">
              <p class="training-day__info-count">1 час 02 мин.</p>
              <p class="training-day__info-text">Время последней тренировки</p>
            </div>
            <div class="training-day__info">
              <p class="training-day__info-count">1869 кг.</p>
              <p class="training-day__info-text">Тоннаж последней тренировки</p>
            </div>
          </div>
        </div>
        <div class="training-day__exercises-list-open-btn">
          <i class="ti-angle-up"></i>
          <!-- <i class="ti-angle-down"></i> -->
        </div>
        <ul class="training-day__exercises-list">
          <li class="training-day__exercises-list-item">
            <div class="exercises-list-item__element-drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="exercises-list-item__element-title">Присядания со штангой в тренажере Смитта</p>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">подходы</p>
              <p class="exercises-list-item__element-parameter-value">4</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">повторений</p>
              <p class="exercises-list-item__element-parameter-value">10 - 12</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-list-item__element-parameter-value">45 кг.</p>
            </div>
            <div class="exercises-list-item__element-edit-btn">
              <!-- <i class="ti-pencil"></i> -->
              <i class="ti-save"></i>
            </div>
            <div class="exercises-list-item__element-delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
          <li class="training-day__exercises-list-item">
            <div class="exercises-list-item__element-drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="exercises-list-item__element-title">Тяга гантели в наклоне</p>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">подходы</p>
              <p class="exercises-list-item__element-parameter-value">4</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">повторений</p>
              <p class="exercises-list-item__element-parameter-value">10 - 12</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-list-item__element-parameter-value">45 кг.</p>
            </div>
            <div class="exercises-list-item__element-edit-btn">
              <i class="ti-pencil"></i>
              <!-- <i class="ti-save"></i> -->
            </div>
            <div class="exercises-list-item__element-delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
        </ul>
      </div>

      <!-- конец основной части (далее дубль для проверки view) -->

      <div class="training-day">
        <div class="training-day__title-block">
          <div class="training-day__title">
            <p class="training-day__title-text">День 2. Спина и трицепс</p>
            <p class="training-day__last-training-text">Последняя тренировка:</p>
            <p class="training-day__last-training-date">суббота, 10 декабря 2019</p>
          </div>
          <div class="training-day__info-block">
            <div class="training-day__info">
              <p class="training-day__info-count">1 час 02 мин.</p>
              <p class="training-day__info-text">Время последней тренировки</p>
            </div>
            <div class="training-day__info">
              <p class="training-day__info-count">1869 кг.</p>
              <p class="training-day__info-text">Тоннаж последней тренировки</p>
            </div>
          </div>
        </div>
        <div class="training-day__exercises-list-open-btn">
          <i class="ti-angle-up"></i>
          <!-- <i class="ti-angle-down"></i> -->
        </div>
        <ul class="training-day__exercises-list">
          <li class="training-day__exercises-list-item">
            <div class="exercises-list-item__element-drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="exercises-list-item__element-title">Гиперэкстензия</p>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">подходы</p>
              <p class="exercises-list-item__element-parameter-value">4</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">повторений</p>
              <p class="exercises-list-item__element-parameter-value">10 - 15</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-list-item__element-parameter-value">0 кг.</p>
            </div>
            <div class="exercises-list-item__element-edit-btn">
              <i class="ti-pencil"></i>
              <!-- <i class="ti-save"></i> -->
            </div>
            <div class="exercises-list-item__element-delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
          <li class="training-day__exercises-list-item">
            <div class="exercises-list-item__element-drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="exercises-list-item__element-title">Тяга верхнего блока широким хватом</p>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">подходы</p>
              <p class="exercises-list-item__element-parameter-value">4</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">повторений</p>
              <p class="exercises-list-item__element-parameter-value">10 - 12</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-list-item__element-parameter-value">45 кг.</p>
            </div>
            <div class="exercises-list-item__element-edit-btn">
              <i class="ti-pencil"></i>
              <!-- <i class="ti-save"></i> -->
            </div>
            <div class="exercises-list-item__element-delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
          <li class="training-day__exercises-list-item">
            <div class="exercises-list-item__element-drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="exercises-list-item__element-title">Тяга верхнего блока узким хватом</p>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">подходы</p>
              <p class="exercises-list-item__element-parameter-value">4</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">повторений</p>
              <p class="exercises-list-item__element-parameter-value">10 - 12</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-list-item__element-parameter-value">45 кг.</p>
            </div>
            <div class="exercises-list-item__element-edit-btn">
              <i class="ti-pencil"></i>
              <!-- <i class="ti-save"></i> -->
            </div>
            <div class="exercises-list-item__element-delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
          <li class="training-day__exercises-list-item">
            <div class="exercises-list-item__element-drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="exercises-list-item__element-title">Тяга нижнего блока узким хватом</p>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">подходы</p>
              <p class="exercises-list-item__element-parameter-value">4</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">повторений</p>
              <p class="exercises-list-item__element-parameter-value">10 - 12</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-list-item__element-parameter-value">40 кг.</p>
            </div>
            <div class="exercises-list-item__element-edit-btn">
              <i class="ti-pencil"></i>
              <!-- <i class="ti-save"></i> -->
            </div>
            <div class="exercises-list-item__element-delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
          <li class="training-day__exercises-list-item">
            <div class="exercises-list-item__element-drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="exercises-list-item__element-title">Тяга гантели в наклоне</p>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">подходы</p>
              <p class="exercises-list-item__element-parameter-value">4</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">повторений</p>
              <p class="exercises-list-item__element-parameter-value">10 - 12</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-list-item__element-parameter-value">20 кг.</p>
            </div>
            <div class="exercises-list-item__element-edit-btn">
              <i class="ti-pencil"></i>
              <!-- <i class="ti-save"></i> -->
            </div>
            <div class="exercises-list-item__element-delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
          <li class="training-day__exercises-list-item">
            <div class="exercises-list-item__element-drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="exercises-list-item__element-title">Разгибание рук на трицепс</p>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">подходы</p>
              <p class="exercises-list-item__element-parameter-value">4</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">повторений</p>
              <p class="exercises-list-item__element-parameter-value">12 - 15</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-list-item__element-parameter-value">15 кг.</p>
            </div>
            <div class="exercises-list-item__element-edit-btn">
              <i class="ti-pencil"></i>
              <!-- <i class="ti-save"></i> -->
            </div>
            <div class="exercises-list-item__element-delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
          <li class="training-day__exercises-list-item">
            <div class="exercises-list-item__element-drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="exercises-list-item__element-title">Подъем гантели вверх из-за головы</p>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">подходы</p>
              <p class="exercises-list-item__element-parameter-value">4</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">повторений</p>
              <p class="exercises-list-item__element-parameter-value">12 - 15</p>
            </div>
            <div class="exercises-list-item__element-parameter-wrapper">
              <p class="exercises-list-item__element-parameter-text">Отягощение</p>
              <p class="exercises-list-item__element-parameter-value">5 кг.</p>
            </div>
            <div class="exercises-list-item__element-edit-btn">
              <i class="ti-pencil"></i>
              <!-- <i class="ti-save"></i> -->
            </div>
            <div class="exercises-list-item__element-delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <app-button size16px uppercase right>Добавить тренировочный день</app-button>

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

.current-training-exercises {
  // border: 1px solid red;
  margin-left: 40px;
  width: 100%;
  .current-training-exercises__title {
    margin: 40px 20px 20px 20px;
    color: $green;
    font-size: 24px;
    font-weight: 600;
  }
  .current-training-days {
    .training-day {
      margin-bottom: 20px;
      .training-day__title-block {
        // border: 1px solid red;
        display: flex;
        // flex-direction: column;
        align-items: center;
        padding: 20px;
        background: $green;
        color: $white;
        border-radius: 6px;
        .training-day__title {
          display: flex;
          flex-direction: column;
          .training-day__title-text {
            font-size: 20px;
            font-weight: 600;
          }
          .training-day__last-training-text {
            margin-top: 5px;
            text-transform: uppercase;
            font-size: 12px;
          }
          .training-day__last-training-date {
            font-size: 12px;
          }
        }
        .training-day__info-block {
          // border: 1px solid red;
          display: flex;
          // flex-wrap: wrap;
          margin-left: auto;
          .training-day__info {
            margin-right: 10px;
            padding: 10px;
            width: 180px;
            min-width: 180px;
            text-align: center;
            border: 1px solid $white;
            border-radius: 6px;
            .training-day__info-count {
              font-size: 18px;
              font-weight: 600;
            }
            .training-day__info-text {
              font-size: 12px;
            }
          }
          .training-day__info:last-child {
            margin-right: 0;
          }
        }
      }
      .training-day__exercises-list-open-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 0;
        padding: 5px;
        background: $green;
        color: $white;
        border-radius: 6px;
        cursor: pointer;
        i {
          font-size: 12px;
        }
      }
      .training-day__exercises-list {
        // border: 1px solid red;
        .training-day__exercises-list-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          padding: 10px 20px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .exercises-list-item__element-drag-drop-btn {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            margin-right: 20px;
            cursor: pointer;
            transition: $tr-02;
          }
          .exercises-list-item__element-drag-drop-btn:hover {
            color: $green;
          }
          .exercises-list-item__element-title {
            // border: 1px solid red;
            font-size: 18px;
            font-weight: 600;
            margin-right: auto;
          }
          .exercises-list-item__element-parameter-wrapper {
            // border: 1px solid red;
            margin-left: 10px;
            text-align: center;
            // width: 140px;
            min-width: 140px;
            .exercises-list-item__element-parameter-text {
              text-transform: uppercase;
              font-size: 8px;
            }
            .exercises-list-item__element-parameter-value {
              margin-top: 5px;
              font-size: 18px;
              font-weight: 600;
            }
          }
          .exercises-list-item__element-edit-btn {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            // margin-left: 20px;
            cursor: pointer;
            transition: $tr-02;
          }
          .exercises-list-item__element-edit-btn:hover {
            color: $green;
          }
          .exercises-list-item__element-delete-btn {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            margin-left: 20px;
            cursor: pointer;
            transition: $tr-02;
          }
          .exercises-list-item__element-delete-btn:hover {
            color: $green;
          }
        }
        .training-day__exercises-list-item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

</style>
