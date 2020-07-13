<template>
  <div class="base-settings">
    <app-block-title>Базовые настройки</app-block-title>
    <div class="base-settings__content">
      <nutrients-settings />
      <nutrients-calculate />
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import NutrientsSettings from '@/components/mealPlanEditor/BaseSettings/NutrientsSettings'
import NutrientsCalculate from '@/components/mealPlanEditor/BaseSettings/NutrientsCalculate'

export default {
  components: {
    AppBlockTitle,
    NutrientsSettings,
    NutrientsCalculate
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.base-settings {
  // border: 1px solid red;
  margin-left: 40px;
  width: 100%;
  max-width: 400px;
  min-width: 400px;
  .base-settings__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
  }
}

</style>