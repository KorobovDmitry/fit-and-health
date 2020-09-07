<template>
  <div class="recipe__additional-info">
    <app-block-title>Дополнительная информация</app-block-title>
    <div class="additional-info">
      <nutrients-calc />
      <div class="actions">
        <app-button>
          <i class="ti-trash"></i>
        </app-button>
        <app-button class="ml-5">
          <i class="ti-heart"></i>
        </app-button>
        <nuxt-link to="/meal-planer/recipe-editor" class="actions__link">
          <app-button class="ml-5" uppercase fillArea>Редактировать</app-button>
        </nuxt-link>
      </div>
      <nuxt-link to="/meal-planer/recipes-book" class="actions__link">
        <app-button class="mt-10" uppercase fillArea>Книга рецептов</app-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import NutrientsCalc from '@/components/recipe/AdditionalInfo/NutrientsCalc'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    NutrientsCalc,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.recipe__additional-info {
  // border: 1px solid red;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .additional-info {
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
    .actions {
      // border: 1px solid red;
      display: flex;
      margin-top: 10px;
      .actions__link {
        flex: 1 1 auto;
        margin-right: 5px;
      }
    }
  }
}

</style>
