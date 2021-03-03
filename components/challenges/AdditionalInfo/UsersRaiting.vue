<template>
  <div class="users-raiting">
    <app-block-title>Рейтинг пользователей</app-block-title>

    <div class="users-raiting__content">
      <ul class="users-raiting__list">
        <li class="user-card">
          <img src="https://pic.sport.ua/media/images/Foto%202.jpg" class="user-card__image">
          <div class="user-card__info">
            <p class="info__name">Имя Фамилия</p>
            <div class="info__challenges">
              <p class="challenges__block-title">Вызовы:</p>
              <div class="challenges__stats">
                <p class="stats__item">Принято: 10</p>
                <p class="stats__item">Побед: 8</p>
                <p class="stats__item">Поражений: 2</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

  .users-raiting {
    margin-bottom: 20px;
    .users-raiting__content {
      display: flex;
      flex-direction: column;
      padding: 10px;
      height: 600px;
      background: $hiddenBlockBG;
      border-radius: 6px;
      box-shadow: $boxShadow;
      .users-raiting__list {
        // border: 1px solid red;
        .user-card {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .user-card__image {
            width: 70px;
            height: 70px;
            object-fit: cover;
            object-position: center;
            border: 1px solid $blockBorder;
            border-radius: 6px;
          }
          .user-card__info {
            flex: 1 1 auto;
            margin-left: 10px;
            .info__name {
              // font-size: 18px;
              font-weight: 500;
            }
            .info__challenges {
              // border: 1px solid red;
              // display: flex;
              // flex-direction: column;
              .challenges__block-title {
                margin-top: 5px;
                font-size: 14px;
                font-weight: 500;
              }
              .challenges__stats {
                // border: 1px solid red;
                // flex: 1 1 auto;
                display: flex;
                .stats__item {
                  // border: 1px solid red;
                  padding: 0 10px;
                  // flex: 1 1 auto;
                  font-size: 12px;
                  border-right: 1px solid $blockBorder;
                }
                .stats__item:first-child {
                  padding-left: 0;
                }
                .stats__item:last-child {
                  padding-right: 0;
                  border-right: none;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
