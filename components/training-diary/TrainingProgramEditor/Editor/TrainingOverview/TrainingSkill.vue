<template>
  <div class="training-skill">
    <p class="training-skill__block-title">Сложность тренировочной программы:</p>
    <app-rating :rating="5" />
  </div>
</template>

<script>
import AppRating from "@/components/basic/AppRating"

export default {
  components: {
    AppRating
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-left: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .training-skill__block-title {
    margin-right: 10px;
    font-weight: 500;
  }
}

</style>