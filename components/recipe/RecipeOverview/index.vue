<template>
  <div class="recipe-overview">
    <app-block-title>Рецепт</app-block-title>

    <div class="overview">
      <div class="top">
        <div class="overview__images-and-main-info">
          <recipe-images />
          <social-btns :btnsInfo="{like: 0, dislike: 0, share: 0}" />
        </div>
        <recipe-main-info />
      </div>
      <div class="bottom">
        <div class="overview__ingredients-marks-steps">
          <div class="ingredients-marks">
            <recipe-ingredients />
            <added-marks />
          </div>
          <recipe-cooking-steps />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import RecipeImages from '@/components/recipe/RecipeOverview/RecipeImages'
import RecipeMainInfo from '@/components/recipe/RecipeOverview/RecipeMainInfo'
import RecipeIngredients from '@/components/recipe/RecipeOverview/RecipeIngredients'
import RecipeCookingSteps from '@/components/recipe/RecipeOverview/RecipeCookingSteps'
import AddedMarks from '@/components/recipe/RecipeOverview/AddedMarks'
import SocialBtns from '@/components/basic/SocialBtns'

export default {
  components: {
    AppBlockTitle,
    RecipeImages,
    RecipeMainInfo,
    AddedMarks,
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
  margin-right: 40px;
  .overview {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
    .top {
      display: flex;
    }
    .bottom {
      margin-top: 10px;
    }
    .overview__images-and-main-info {
      display: flex;
      flex-direction: column;
      width: 500px;
      min-width: 500px;
      max-width: 500px;
    }
    .overview__ingredients-marks-steps {
      flex: 1 1 auto;
      // margin-left: 10px;
      .ingredients-marks {
        display: flex;
      }
    }
  }
}

</style>
