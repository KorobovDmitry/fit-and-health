<template>
  <div class="exercises-list">
    <app-block-title>База упражнений</app-block-title>

    <!-- <pre>{{ exercises }}</pre> -->

    <div class="exercises-list__content">
      <app-search-block small />

      <app-scroll-block>
        <template v-slot:scrollContent>
          <div v-for="(element, index) in exercises" :key="index" class="category__item">
            <app-accordion :isOpened="true">
              <template v-slot:accordionHeader>
                <div class="item__header">
                  <div class="header__title">
                    <p class="title__text">{{ element.category }}</p>
                    <p class="title__exercises-count">Кол-во упражнений {{ element.exercises.length }}</p>
                  </div>
                  <i class="ti-angle-double-down header__icon"></i>
                </div>
              </template>
              <template v-slot:accordionHiddenContent>
                <ul class="item__exercises-list">
                  <li
                    v-for="(exercise, index) in element.exercises"
                    :key="index"
                    class="exercises-list__item"
                    @click="fetchExerciseInfo(exercise.id)"
                  >
                    <div class="item__exercises-image">
                      <img src="" alt="img" class="exercise-image">
                    </div>
                    <div class="item__exercise-title-and-type">
                      <p class="exercises-title">{{ exercise.title }}</p>
                      <p class="exercise__target-muscles">Широчайшие, предплечья</p>
                    </div>
                    <i class="ti-star item__favorite-icon"></i>
                  </li>
                </ul>
              </template>
            </app-accordion>
          </div>
        </template>
      </app-scroll-block>

      <!-- <div class="categories">
        <div v-for="(element, index) in exercises" :key="index" class="category__item">
          <app-accordion :isOpened="false">
            <template v-slot:accordionHeader>
              <div class="item__header">
                <div class="header__title">
                  <p class="title__text">{{ element.category }}</p>
                  <p class="title__exercises-count">Кол-во упражнений {{ element.exercises.length }}</p>
                </div>
                <i class="ti-angle-double-down header__icon"></i>
              </div>
            </template>
            <template v-slot:accordionHiddenContent>
              <ul class="item__exercises-list">
                <li
                  v-for="(exercise, index) in element.exercises"
                  :key="index"
                  class="exercises-list__item"
                  @click="fetchExerciseInfo(exercise.id)"
                >
                  <div class="item__exercises-image">
                    <img src="" alt="img" class="exercise-image">
                  </div>
                  <div class="item__exercise-title-and-type">
                    <p class="exercises-title">{{ exercise.title }}</p>
                    <p class="exercise__target-muscles">Широчайшие, предплечья</p>
                  </div>
                  <i class="ti-star item__favorite-icon"></i>
                </li>
              </ul>
            </template>
          </app-accordion>
        </div>
      </div> -->

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock.vue'
import AppScrollBlock from '@/components/basic/AppScrollBlock'
import AppAccordion from '@/components/basic/AppAccordion'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    AppScrollBlock,
    AppAccordion
  },
  data () {
    return {}
  },
  computed: {
    exercises () {
      return this.$store.getters['exercises/getExercises']
    }
  },
  methods: {
    fetchExerciseInfo (exercisesId) {
      console.log(exercisesId)
      this.$store.dispatch('exercises/fetchExerciseInfo', exercisesId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercises-list {
  // border: 1px solid red;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .exercises-list__content {
    // border: 1px solid red;
    // display: flex;
    // flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
    overflow: hidden;
    // height: calc(100vh - 291px);
    height: calc(100vh - 400px);

    .category__item {
      // border: 1px solid red;
      margin-bottom: 5px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .item__header {
        display: flex;
        align-items: center;
        padding: 10px;
        .header__title {
          margin-left: 10px;
          .title__text {
            font-size: 18px;
            font-weight: 500;
          }
          .title__exercises-count {
            font-size: 14px;
          }
        }
        .header__icon {
          margin-left: auto;
          margin-right: 10px;
        }
      }
      .item__exercises-list {
        // border: 1px solid red;
        border-top: 1px solid $blockBorder;
        .exercises-list__item {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          padding: 10px 20px;
          border-bottom: 1px dashed $blockBorder;
          user-select: none;
          cursor: pointer;
          .item__exercises-image {
            border: 1px solid $blockBorder;
            border-radius: 6px;
            width: 60px;
            height: 60px;
          }
          .item__exercise-title-and-type {
            margin-left: 10px;
            .exercises-title {
              font-weight: 500;
              transition: $tr-02;
            }
            .exercise__target-muscles {
              margin-top: 5px;
              text-transform: uppercase;
              font-size: 10px;
            }
          }
          .item__favorite-icon {
            align-self: flex-start;
            margin-left: auto;
            color: $green;
          }
        }
        .exercises-list__item:last-child {
          margin-bottom: 0;
          border-bottom: none;
        }
        .exercises-list__item:hover {
          .exercises-title {
            color: $green;
          }
        }
      }
    }
    .category__item:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
