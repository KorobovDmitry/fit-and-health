<template>
  <div class="recipe-editor">
    <app-page-title>Редактор рецептов</app-page-title>
    <div class="recipe-editor__content">
      content
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle";

export default {
  // async fetch ({ store }) {
  //   await store.dispatch('recipe/fetchRecipe')
  // },
  components: {
    AppPageTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.recipe-editor {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .recipe-editor__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
