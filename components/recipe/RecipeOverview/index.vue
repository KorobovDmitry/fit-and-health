<template>
  <div class="recipe-overview">
    <app-block-title>Рецепт</app-block-title>

    <div class="overview">

      <div class="images-social-main-info">
        <div class="images-and-social">
          <recipe-images />
          <social-btns class="mt-5" :btnsInfo="{like: 0, dislike: 0, share: 0}" />
        </div>
        <recipe-main-info />
      </div>

      <recipe-ingredients />
      <recipe-cooking-steps />

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import RecipeImages from '@/components/recipe/RecipeOverview/RecipeImages'
import RecipeMainInfo from '@/components/recipe/RecipeOverview/RecipeMainInfo'
import RecipeIngredients from '@/components/recipe/RecipeOverview/RecipeIngredients'
import RecipeCookingSteps from '@/components/recipe/RecipeOverview/RecipeCookingSteps'
import SocialBtns from '@/components/basic/SocialBtns'

export default {
  components: {
    AppBlockTitle,
    RecipeImages,
    RecipeMainInfo,
    RecipeIngredients,
    RecipeCookingSteps,
    SocialBtns
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.recipe-overview {
  // border: 1px solid red;
  flex: 1 1 auto;
  .overview {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
    .images-social-main-info {
      display: flex;
      .images-and-social {
        width: 100%;
        max-width: 500px;
        min-width: 500px;
      }
    }
  }
}

</style>
