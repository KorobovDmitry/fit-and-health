<template>
  <div class="main-settings">
    <app-accordion :isOpened="false">
      <template v-slot:accordionHeader>
        <div class="header">
          <p class="header__title">Основные настройки</p>
          <i class="ti-angle-double-down"></i>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <div class="hidden-content">
          <div class="inputs">
            <app-input-text
              value="Завтрак"
              infoText="Название приема пищи"
            />
            <app-input-time-select />
            <app-textarea />
          </div>
        </div>
      </template>
    </app-accordion>
  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'
import AppInputText from '@/components/basic/AppInputText'
import AppInputTimeSelect from '@/components/basic/AppInputTimeSelect'
import AppTextarea from '@/components/basic/AppTextarea'

export default {
  components: {
    AppAccordion,
    AppInputText,
    AppInputTimeSelect,
    AppTextarea
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.main-settings {
  margin-bottom: 10px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .header__title {
      font-weight: 500;
    }
  }
  .hidden-content {
    margin: 0 5px;
    padding: 10px;
    background: $hiddenBlockBG;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .inputs {
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
  }
}

</style>