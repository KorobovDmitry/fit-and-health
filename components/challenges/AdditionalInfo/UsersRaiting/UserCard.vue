<template>
  <nuxt-link to="/" class="user-card">
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
  </nuxt-link>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.user-card {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .user-card__image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    object-position: center;
    border: 1px solid $blockBorder;
    border-radius: 6px;
  }
  .user-card__info {
    flex: 1 1 auto;
    margin-left: 10px;
    .info__name {
      font-weight: 500;
    }
    .info__challenges {
      .challenges__block-title {
        margin-top: 5px;
        font-size: 14px;
        font-weight: 500;
      }
      .challenges__stats {
        display: flex;
        .stats__item {
          padding: 0 10px;
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
</style>