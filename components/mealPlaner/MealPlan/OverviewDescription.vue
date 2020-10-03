<template>
  <div class="overview__description">
    <p class="block-title">Описание</p>
    <app-textarea class="mt-10 fill-area" value="Низкоуглеводный рацион на сутки для снижения веса. Увеличенное содержание белка для поддержания мышечной массы. Содержит глютен и может вызывать аллергическую реакцию на арахис." />
  </div>
</template>

<script>
import AppTextarea from '@/components/basic/AppTextarea'

export default {
  components: {
    AppTextarea
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.overview__description {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 10px;
  min-height: 300px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .block-title {
    text-align: center;
    font-weight: 500;
  }
}

</style>
