<template>
  <div class="users-raiting">
    <app-block-title>Рейтинг пользователей</app-block-title>

    <div class="users-raiting__content">
      <ul class="users-raiting__list">
        <li class="list__item">
          <p>TOP - 100</p>
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
      padding: 10px;
      height: 600px;
      background: $hiddenBlockBG;
      border-radius: 6px;
      box-shadow: $boxShadow;
    }
  }
</style>
