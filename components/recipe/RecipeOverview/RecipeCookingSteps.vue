<template>
  <div class="cooking-steps">
    <p class="cooking-steps__block-title">Этапы приготовления</p>
    <ul class="steps">
      <li class="step">step</li>
    </ul>
  </div>
</template>

<script>
export default {
  
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
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }
  .steps {
    padding: 0 10px;
  }
}

</style>
