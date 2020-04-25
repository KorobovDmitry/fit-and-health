<template>
  <div class="exercise-description">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить упражнение"
      @btnAction="openModal()"
    />

    <div class="exercise-description__list-and-overview">
      <exercises-list />
      <exercise-overview />
    </div>
  </div>
</template>

<script>
import AppPageInfo from "@/components/basic/AppPageInfo"
import ExercisesList from "@/components/training-diary/TrainingProgramEditor/Editor/ExercisesList/index"
import ExerciseOverview from '@/components/training-diary/ExerciseGuide/ExerciseDescription/ExerciseOverview/index'

export default {
  components: {
    AppPageInfo,
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
      ]
    }
  },
  methods: {
    openModal() {
      console.log('Открыть модальное окно "Добавить упражнение"')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercise-description {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1700px;
  .exercise-description__list-and-overview {
    display: flex;
  }
}

</style>