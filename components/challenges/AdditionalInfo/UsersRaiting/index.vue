<template>
  <div class="users-raiting">
    <app-block-title>Рейтинг пользователей</app-block-title>

    <div class="users-raiting__content">
      <ul class="users-raiting__list">
        <li class="list__item">
          <user-card v-for="(item, index) in 6" :key="index" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import UserCard from "@/components/challenges/AdditionalInfo/UsersRaiting/UserCard"

export default {
  components: {
    AppBlockTitle,
    UserCard
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

  .users-raiting {
    // margin-bottom: 20px;
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
        .list__item {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>
