<template>
  <div class="cooking-steps">
    <p class="cooking-steps__block-title">Этапы приготовления</p>
    <ul class="steps">
      <li v-for="(item, index) in cookingSteps" :key="index" class="step">
        <div class="image-and-description">
          <img class="image" :src="item.image" alt="">
          <div class="description">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      cookingSteps: state => state.recipe.recipe.cookingSteps
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.cooking-steps {
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .cooking-steps__block-title {
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }
  .steps {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    .step {
      margin-bottom: 20px;
      .image-and-description {
        display: flex;
        .image {
          // border: 1px solid red;
          width: 100%;
          min-width: 400px;
          max-width: 400px;
          min-height: 250px;
          background: $insetBlockBG;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
        .description {
          flex: 1 1 auto;
          margin-left: 20px;
        }
      }
    }
    .step:last-child {
      margin-bottom: 10px;
    }
  }
}

</style>
