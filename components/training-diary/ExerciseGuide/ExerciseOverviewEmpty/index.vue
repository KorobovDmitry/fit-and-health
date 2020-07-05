<template>
  <div class="exercise-overview-empty">
    <app-block-title>Описание упражения</app-block-title>
    <div class="exercise-overview-empty__content">
      <p>Выберите упражнение из списка, что бы получить подробную информацию</p>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercise-overview-empty {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  .exercise-overview-empty__content {
    flex: 1 1 auto;
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
  }
}

</style>
