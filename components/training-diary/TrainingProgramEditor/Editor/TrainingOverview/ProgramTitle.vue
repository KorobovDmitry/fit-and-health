<template>
  <div class="program-title">
    <p class="program-title__text">Название программы:</p>
    <app-input-text placeholder="Название программы тренировок" @valueChanged="test = $event" />
  </div>
</template>

<script>
import AppInputText from "@/components/basic/AppInputText";

export default {
  components: {
    AppInputText
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.program-title {
  display: flex;
  align-items: center;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .program-title__text {
    margin: 0 10px;
    font-weight: 500;
    white-space: nowrap;
  }
}

</style>