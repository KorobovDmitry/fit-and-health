<template>
  <div class="user-card">

    <div class="user-card__user-info">
      <div class="user-card__top">
        <div class="user-card__top-left">
          <img class="user-card__avatar" src="" alt="user-avatar">
        </div>
        <div class="user-card__top-right">
          <button class="user-card__subscriptions-btn">
            <p class="user-card__subscriptions-text">+ <br> <span>Подписки</span></p>
          </button>
          <div class="user-card__raiting">
            <p class="user-card__raiting-text">Рейтинг:</p>
            <p class="user-card__raiting-count">458 796</p>
          </div>
        </div>
      </div>

      <div class="user-card__bottom">
        <p class="user-card__user-name">{{ firstName }} {{ lastName }}</p>
        <p class="user-card__user-status">Тренер</p>
        <!-- <p class="user-card__user-status">Здесь можно разместить статус или ванильную цитату</p> -->
        <div class="user-card__favorite-sports-block">
          <p class="user-card__favorite-sports-title">Бодибилдинг</p>
          <p class="user-card__favorite-sports-title">CrossFit</p>
          <p class="user-card__favorite-sports-title">Футбол</p>
          <p class="user-card__favorite-sports-title">Плавание</p>
          <p class="user-card__favorite-sports-title">Хокей</p>
        </div>
      </div>
    </div>

    <ul class="user-card__menu-list">
      <li class="user-card__menu-list-item">Лента</li>
      <li class="user-card__menu-list-item">Активность</li>
      <!-- <li class="user-card__menu-list-item">Тренировочные программы</li> -->
      <li class="user-card__menu-list-item">Оповещения</li>
      <li class="user-card__menu-list-item">Личные сообщения</li>
      <li class="user-card__menu-list-item">Статистика</li>
      <li class="user-card__menu-list-item user-card__menu-list-item--active">Настройки</li>
      <li class="user-card__menu-list-item">FAQ</li>
      <li class="user-card__menu-list-item" @click="logout()">Выйти</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    lastName () {
      return this.$store.getters['userProfile/getUserLastName']
    },
    firstName () {
      return this.$store.getters['userProfile/getUserFirstName']
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vars.scss";

.user-card {
  // border: 1px solid red;
  // margin-top: 40px;
  min-width: 400px;
  max-width: 400px;
  .user-card__user-info {
    .user-card__top {
      // border: 1px solid red;
      display: flex;
      .user-card__top-left {
        border: 1px solid $green;
        min-width: 200px;
        width: 200px;
        height: 200px;
        border-radius: 8px;
        overflow: hidden;
        .user-card__avatar {
          // border: 1px solid red;
          width: 200px;
          height: 200px;
        }
      }
      .user-card__top-right {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-left: 20px;
        .user-card__subscriptions-btn {
          // border: 1px solid red;
          width: 100px;
          height: 100px;
          background: $green;
          border: none;
          outline: none;
          border-radius: 8px;
          box-shadow: $btnShadow;
          transition: $tr-02;
          cursor: pointer;
          .user-card__subscriptions-text {
            padding: 40px 0 0 13px;
            text-align-last: left;
            color: $white;
            font-size: 22px;
            font-weight: 900;
            line-height: 18px;
            span {
              font-size: 14px;
              font-weight: 400;
            }
          }
        }
        .user-card__subscriptions-btn:hover {
          box-shadow: $btnHoverShadow;
          transition: $tr-02;
        }
        .user-card__subscriptions-btn:active {
          box-shadow: $btnActiveShadow;
          transition: $tr-02;
        }
        .user-card__raiting {
          font-size: 18px;
          text-align: center;
          .user-card__raiting-text {
            // border: 1px solid red;
            margin-bottom: 4px;
          }
          .user-card__raiting-count {
            // border: 1px solid red;
            font-weight: 600;
          }
        }
      }
    }
    .user-card__bottom {
      .user-card__user-name {
        margin-top: 20px;
        font-size: 24px;
        font-weight: 700;
      }
      .user-card__user-status {
        margin-top: 6px;
        // font-size: 18px;
      }
      .user-card__favorite-sports-block {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        .user-card__favorite-sports-title {
          margin: 0 10px 10px 0;
          padding: 6px 14px;
          color: $gray-light;
          font-size: 14px;
          border: 1px solid $gray-light;
          border-radius: 16px;
        }
      }
    }
  }
  .user-card__menu-list {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px dashed $gray-light;
    .user-card__menu-list-item {
      margin: 10px 0;
      padding-left: 10px;
      border-left: 2px solid transparent;
      font-size: 18px;
      transition: $tr-02;
      cursor: pointer;
    }
    .user-card__menu-list-item:hover {
      // border-left: 2px solid $green;
      color: $green;
      transition: $tr-02;
    }
    .user-card__menu-list-item--active {
      border-left: 2px solid $green;
      color: $green;
    }
    .user-card__menu-list-item:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
