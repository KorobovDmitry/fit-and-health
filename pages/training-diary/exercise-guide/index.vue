<template>
  <div class="exercise-guide">
    <app-page-title>Справочник по упражнениям</app-page-title>

    <div class="exercise-guide__content">
      <app-page-info
        :infoElements="pageInfoElements"
        btnTitle="Добавить упражнение"
        @btnAction="toggleModalVisibility()"
      />
      <div class="exercises-list-and-description">
        <exercises-list />
        <exercise-overview />
        <!-- <div class="exercise-overview-empty">
          <p>Выберите упражнение из списка, что бы получить подробную информацию</p>
        </div> -->
      </div>
    </div>

    <app-modal :isActive="modalActive" @close="toggleModalVisibility()">
      <template v-slot:modalHeader>
        <p class="header__title">Добавить упражнение</p>
        <div class="header__description">
          <p class="description__text">Заполните форму и нажмите "сохранить продукт", что бы добавить новый продукт в общую базу.</p>
          <p class="description__text">Новый продукт будет доступен только для вас.</p>
        </div>
      </template>
      <template v-slot:modalContent>
        <div class="new-exercise-form">
          <input type="text" v-model="newExercise.title" placeholder="title">
          <input type="text" v-model="newExercise.techniqueDescription" placeholder="technique description">
          <input type="text" v-model="newExercise.category" placeholder="category">
        </div>
      </template>
      <template v-slot:modalButton>
        <app-button uppercase @click.native="toggleModalVisibility()">Отменить</app-button>
        <app-button uppercase class="ml-auto" @click.native="saveExercise()">Сохранить</app-button>
      </template>
    </app-modal>

  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppPageInfo from '@/components/basic/AppPageInfo'
import AppButton from '@/components/basic/AppButton'
import AppModal from '@/components/basic/AppModal'
import ExercisesList from "@/components/training-diary/ExerciseGuide/ExercisesList/index"
import ExerciseOverview from '@/components/training-diary/ExerciseGuide/ExerciseOverview/index'

export default {
  async fetch ({ store }) {
    await store.dispatch('exercises/fetchExercisesList')
  },
  components: {
    AppPageTitle,
    AppPageInfo,
    AppButton,
    AppModal,
    ExercisesList,
    ExerciseOverview
  },
  data() {
    return {
      pageInfoElements: [
        {
          title: "Всего упражнений",
          value: 147
        },
        {
          title: "Категорий",
          value: 6
        },
        {
          title: "Мои упражнения",
          value: 8
        }
      ],
      modalActive: false,
      newExercise: {
        title: '',
        techniqueDescription: '',
        category: ''
      }
    }
  },
  methods: {
    toggleModalVisibility () {
      // console.log('Открыть модальное окно "Добавить упражнение"')
      this.modalActive = !this.modalActive
    },
    saveExercise () {
      // console.log('сохранить упражнение в БД', this.newExercise)
      this.$store.dispatch('exercises/saveNewExercises', this.newExercise)
    }
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
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .exercises-list-and-description {
      display: flex;
    }
  }

  .header__title {
    font-size: 20px;
    font-weight: 500;
  }
  .header__description {
    margin-top: 5px;
    .description__text {
      font-size: 14px;
    }
  }

}

</style>