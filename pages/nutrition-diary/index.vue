<template>
  <div class="nutrition-diary">
    <div class="nutrition-diary__content">
      <div class="nutrition-diary__btn-wrapper">
        <ul class="nutrition-diary__btn-list">
          <nuxt-link
            v-for="(element, key) of sidebarList"
            :key="key"
            tag="li"
            :to="element.link"
            exact
            no-prefetch
            class="nutrition-diary__btn-list-item"
            active-class="nutrition-diary__btn-list-item--active"
            @click.native="openSidebar()"
          >
            <i class="nutrition-diary__btn-list-item-icon" :class="element.icon"></i>
            <p class="nutrition-diary__btn-list-item-text">{{ element.text }}</p>
          </nuxt-link>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  middleware: ['user-auth'],
  asyncData () {
    return {
      sidebarList: {
        mealPlaner: {
          icon: 'ti-agenda',
          link: '/nutrition-diary/meal-planer',
          text: 'Планировщик'
        },
        recipes: {
          icon: 'ti-receipt',
          link: '/nutrition-diary/recipes',
          text: 'Рецепты'
        },
        kkalTable: {
          icon: 'ti-view-list-alt',
          link: '/nutrition-diary/food-calorie-table',
          text: 'Таблица калорийности продуктов'
        },
        measurement: {
          icon: 'ti-ruler-pencil',
          link: '/nutrition-diary/measurements',
          text: 'Замеры'
        }
      }
    }
  },
  methods: {
    openSidebar () {
      this.$store.commit('nutritionDiary/openSidebar')
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/scss/vars.scss';

.nutrition-diary {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .nutrition-diary__content {
    // border: 1px solid red;
    margin-top: 60px;
    width: 100%;
    max-width: 1400px;
    .nutrition-diary__btn-wrapper {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      min-height: calc(100vh - 60px);;
      .nutrition-diary__btn-list {
        // border: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 80px;
        .nutrition-diary__btn-list-item {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 40px 20px;
          width: 400px;
          height: 200px;
          color: $gray-dark;
          cursor: pointer;
          transition: $tr-02;
          .nutrition-diary__btn-list-item-icon {
            // border: 1px solid red;
            margin-bottom: 40px;
            font-size: 60px;
          }
          .nutrition-diary__btn-list-item-text {
            // border: 1px solid red;
            text-align: center;
            font-size: 28px;
            font-weight: 600;
          }
        }
        .nutrition-diary__btn-list-item:hover {
          color: $green;
          transition: $tr-02;
        }
      }
    }
  }
}

</style>
