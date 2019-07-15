<template>
  <app-modal
    v-if="mealPartModalActive"
    title="Редактировать прием пищи"
    subtitle="Заполните нужные поля и нажмите сохранить"
    :saveFunc="addMealParts"
    @visibilityChanged="changeModalVisibility()"
  >
    <div class="meal-part__modal-content">
      <p class="meal-part__modal-section-title">Общая информация</p>
      <br>
      <app-input-text infoText="Название" textAlignRight/>
      <app-input-text infoText="Короткое описание" textAlignRight/>
      <br>
      <p class="meal-part__modal-section-title">Список продуктов</p>
      <br>
      <app-search-block></app-search-block>
      <br>
      <ul>
        <li>Гречка</li>
        <li>Гречка</li>
        <li>Гречка</li>
        <li>Гречка</li>
        <li>Гречка</li>
      </ul>
    </div>
  </app-modal>
</template>

<script>
import AppModal from '@/components/basic/AppModal'
import AppInputText from '@/components/basic/AppInputText'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
export default {
  components: {
    AppModal,
    AppInputText,
    AppSearchBlock
  },
  data () {
    return {

    }
  },
  computed: {
    mealPartModalActive () {
      return this.$store.getters['mealPlaner/getMealPartModalActive']
    }
  },
  methods: {
    addMealParts () {
      console.log(`add Meal Parts ${this.$store.getters['mealPlaner/getMealParts'].length}`)
      const newMealPart = {
        mealPartNumber: this.$store.getters['mealPlaner/getMealParts'].length,
        title: 'Название',
        description: 'Небольшое описание',
        productsList: []
      }
      this.$store.commit('mealPlaner/setNewMealParts', newMealPart)
    },
    changeModalVisibility () {
      this.$store.commit('mealPlaner/setMealPartModalActive')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

</style>
