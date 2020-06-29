<template>
  <div class="training-days">
    <div class="training-day__settings">
      <div class="settings__header">
        <div class="header__title">
          <p class="header__title-text">Название</p>
          <input type="text" value="День 1. Ноги и плечи" />
          <p class="header__last-training-text">Последняя тренировка:</p>
          <p class="header__last-training-date">суббота, 10 декабря 2019</p>
        </div>
        <div class="header__info-block">
          <div class="info-block__item">
            <p class="item__info-text">Время последней тренировки</p>
            <p class="item__info-count">1 час 02 мин.</p>
          </div>
          <div class="info-block__item">
            <p class="item__info-text">Тоннаж последней тренировки</p>
            <p class="item__info-count">1869 кг.</p>
          </div>
        </div>
        <i class="ti-angle-double-down header-icon"></i>
      </div>
      <ul class="settings__exercises-list">
        <li v-for="(item, index) in 4" :key="index" class="exercises-list__list-item">
          <div class="list-item__drag-drop-btn">
            <i class="ti-exchange-vertical"></i>
          </div>
          <p class="list-item__title">Присядания со штангой в тренажере Смитта</p>
          <div class="list-item__parameter">
            <p class="parameter__text">подходы</p>
            <p class="parameter__value">4</p>
          </div>
          <div class="list-item__parameter">
            <p class="parameter__text">повторений</p>
            <p class="parameter__value">10 - 12</p>
          </div>
          <div class="list-item__parameter">
            <p class="parameter__text">Отягощение</p>
            <p class="parameter__value">45 кг.</p>
          </div>
          <div class="list-item__edit-btn">
            <i class="ti-pencil"></i>
            <i class="ti-save"></i>
          </div>
          <div class="list-item__delete-btn">
            <i class="ti-close"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleActiveTab() {
      console.log(this);
      // this.classList.add('tab--active')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-days {
  // border: 1px solid red;
  margin-left: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  width: 100%;
  .training-day__settings {
    // margin-left: 40px;
    .settings__header {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      padding: 10px;
      background: $hiddenBlockBG;
      // background: $white;
      // border: 1px solid $blockBorder;
      border-radius: 6px;
      .header__title {
        // flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        .header__title-text {
          margin-left: 20px;
          // font-size: 18px;
          font-weight: 500;
        }
        .header__last-training-text {
          margin-top: 5px;
          text-transform: uppercase;
          font-size: 12px;
        }
        .header__last-training-date {
          font-size: 12px;
        }
      }
      .header__info-block {
        // border: 1px solid red;
        display: flex;
        margin-left: auto;
        .info-block__item {
          padding: 0 10px;
          max-width: 180px;
          text-align: center;
          border-left: 1px solid $blockBorder;
          .item__info-text {
            font-size: 12px;
          }
          .item__info-count {
            margin-top: 5px;
            font-size: 16px;
            font-weight: 500;
          }
        }
        .info-block__item:last-child {
          border-right: 1px solid $blockBorder;
        }
      }
      .header-icon {
        margin: 0 20px;
      }
    }
    .settings__exercises-list {
      // border: 1px solid red;
      // margin: 0 5px;
      margin-top: 5px;
      padding: 10px;
      background: $hiddenBlockBG;
      border-radius: 6px;
      // border-bottom-left-radius: 6px;
      // border-bottom-right-radius: 6px;
      // box-shadow: $btnHoverShadow;
      .exercises-list__list-item {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        padding: 10px 20px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .list-item__drag-drop-btn {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          margin-right: 20px;
          cursor: pointer;
          transition: $tr-02;
        }
        .list-item__drag-drop-btn:hover {
          color: $green;
        }
        .list-item__title {
          // border: 1px solid red;
          // font-size: 16px;
          font-weight: 500;
          margin-right: auto;
        }
        .list-item__parameter {
          // border: 1px solid red;
          margin-left: 10px;
          text-align: center;
          // width: 140px;
          min-width: 140px;
          .parameter__text {
            text-transform: uppercase;
            font-size: 8px;
          }
          .parameter__value {
            margin-top: 5px;
            // font-size: 16px;
            font-weight: 500;
          }
        }
        .list-item__edit-btn {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: $tr-02;
        }
        .list-item__edit-btn:hover {
          color: $green;
        }
        .list-item__delete-btn {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          margin-left: 20px;
          cursor: pointer;
          transition: $tr-02;
        }
        .list-item__delete-btn:hover {
          color: $green;
        }
      }
      .exercises-list__list-item:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
