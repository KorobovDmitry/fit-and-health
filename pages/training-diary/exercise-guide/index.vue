<template>
  <div class="exercise-guide">
    <app-page-title>Справочник по упражнениям</app-page-title>
    <div class="exercise-guide__content">
      exercise-guide
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/basic/AppPageTitle"

export default {
  components: {
    AppPageTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercise-guide {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .exercise-guide__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
  }
}

</style>