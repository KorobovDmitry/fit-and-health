<template>
  <div class="visual-example">
    <iframe width="400px" height="500px" src="https://www.youtube.com/embed/FntGgrPurFA"></iframe>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.visual-example {
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  iframe {
    border-radius: 6px;
  }
}

</style>