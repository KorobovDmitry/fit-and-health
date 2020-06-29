<template>
  <div class="training-description">
    <p class="training-description__text">Описание программы:</p>
    <app-textarea placeholder="Описание программы тренировок" @valueChanged="test = $event" />
  </div>
</template>

<script>
import AppTextarea from "@/components/basic/AppTextarea";

export default {
  components: {
    AppTextarea
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-description {
  flex: 1 1 auto;
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .training-description__text {
    margin-bottom: 5px;
    padding: 0 20px;
    font-weight: 500;
  }
}

</style>