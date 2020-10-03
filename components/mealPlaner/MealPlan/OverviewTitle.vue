<template>
  <div class="overview__title">
    <p class="title__text">Название рациона:</p>
    <app-input-text value="Низкоуглеводное меню для снижения веса" />
    <nuxt-link to="/meal-planer/meal-plan-editor">
      <i class="ti-save"></i>
    </nuxt-link>
    <i class="ti-trash"></i>
  </div>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'

export default {
  components: {
    AppInputText
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.overview__title {
  display: flex;
  align-items: center;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .title__text {
    padding: 0 10px;
    font-weight: 500;
    white-space: nowrap;
  }
  i {
    padding: 0 10px;
    font-size: 20px;
  }
}

</style>
