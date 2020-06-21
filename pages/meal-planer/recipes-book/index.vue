<template>
  <div class="recipes-book">
    <app-page-title>Книга рецептов</app-page-title>
    <div class="recipes-book__content">
      <app-page-info
        :infoElements="pageInfoElements"
        btnTitle="Добавить рецепт"
        @btnAction="toggleModal()"
      />
      <div class="recipes-book__filters-and-results">
        <sorting-filters />
        <search-results />
      </div>

      <app-modal :isActive="modalActive" @close="toggleModal()">
        <template v-slot:modalHeader>
          <p class="modal__title">Добавить рецепт</p>
          <p class="modal__description">Заполните форму и нажмите "сохранить рецепт", что бы добавить новый рецепт в общую базу.</p>
        </template>

        <template v-slot:modalContent>
          <div>
            <div class="item">
              <p>Title:</p>
              <input type="text">
            </div>

            <div class="item">
              <p>Description:</p>
              <input type="text">
            </div>

            <div class="item">
              <p>Products:</p>
              <input type="text">
            </div>

            <div class="item">
              <p>CookingTime:</p>
              <input type="text">
            </div>

            <div class="item">
              <p>CookingSkill:</p>
              <input type="text">
            </div>
          </div>
        </template>

        <template v-slot:modalButton>
          <div class="modal__action-btns">
            <app-button uppercase @click.native="toggleModal()" >Отмена</app-button>
            <app-button uppercase >Сохранить рецепт</app-button>
          </div>
        </template>
      </app-modal>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppPageInfo from '@/components/basic/AppPageInfo'
import SortingFilters from '@/components/recipesBook/SortingFilters/SortingFilters'
import SearchResults from '@/components/recipesBook/SearchResults/SearchResults'
import AppModal from '@/components/basic/AppModal'
import AppButton from '@/components/basic/AppButton'

export default {
  async fetch ({ store }) {
    await store.dispatch('recipesBook/fetchRecipes')
  },
  components: {
    AppPageTitle,
    AppPageInfo,
    SortingFilters,
    SearchResults,
    AppModal,
    AppButton
  },
  data () {
    return {
      pageInfoElements: [
        {
          title: 'Всего рецептов',
          value: 952
        },
        {
          title: 'Избранное',
          value: 2
        },
        {
          title: 'Мои рецепты',
          value: 14
        }
      ],
      modalActive: true
    }
  },
  methods: {
    toggleModal () {
      this.modalActive = !this.modalActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.recipes-book {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .recipes-book__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .recipes-book__filters-and-results {
      display: flex;
    }
    .modal__title {
      font-size: 20px;
      font-weight: 500;
    }
    .modal__description {
      margin-top: 5px;
      font-size: 14px;
    }
    .modal__action-btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
}

</style>
