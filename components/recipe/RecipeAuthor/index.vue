<template>
  <div class="recipe__author">
    <app-block-title>Автор</app-block-title>
    <div class="author__info">
      <p>Аватар</p>
      <p>Имя и фамилия</p>
      <p>Несколько популярных рецептов автора</p>
      <p>Общая информация о питании тренировках вызовах активностях на ресурсе</p>
      <p>{{ getTest }}</p>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  },
  computed: {
    getTest () {
      return this.$store.getters['foodCalorieTable/getTest']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.recipe__author {
  // border: 1px solid red;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .author__info {
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
  }
}

</style>
