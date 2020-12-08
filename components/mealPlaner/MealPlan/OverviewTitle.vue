<template>
  <div class="overview__title">
    <p class="title__text">Название рациона:</p>
    <app-input-text :value="title" class="title__input" />
    <app-button-with-actions
      :actions="btnActions"
      :params="{id: 1}"
      @actionHandler="mealPlanActions($event)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppInputText from '@/components/basic/AppInputText'
import AppButtonWithActions from '@/components/basic/AppButtonWithActions'

export default {
  components: {
    AppInputText,
    AppButtonWithActions
  },
  data () {
    return {
      btnActions: ['Сохранить как...', 'Удалить'],
    }
  },
  computed: {
    ...mapState({
      title: state => state.mealPlaner.mealPlanerInfo.title
    })
  },
  methods: {
    mealPlanActions ($event) {
      console.log('mealPlanActions', $event)
    }
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
  .title__input {
    margin-right: 10px;
  }
}

</style>
