<template>
  <div class="sidebar" :class="{'sidebar--active': sidebarActive}">
    <ul class="sidebar__list">
      <nuxt-link
        v-for="(element, key) of sidebarList"
        :key="key"
        tag="li"
        :to="element.link"
        exact
        no-prefetch
        class="sidebar__list-item"
        active-class="sidebar__list-item--active"
      >
        <i class="sidebar__list-item-icon" :class="element.icon"></i>
        <!-- <p class="sidebar__list-item-text">{{ element.text }}</p> -->
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sidebarActive: Boolean
  },
  data () {
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
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/scss/vars.scss';

.sidebar {
  // border: 1px solid red;
  position: fixed;
  top: 40px;
  left: -70px;
  height: calc(100vh - 60px);
  transition: $tr-04;
  .sidebar__list {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;
    color: $gray-dark;
  }
  .sidebar__list-item {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 6px 0;
    background: $white;
    font-size: 18px;
    border: 1px solid rgba(0,0,0,.2);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    transition: $tr-01;
    &-icon {
      // border: 1px solid red;
      padding: 10px 14px 10px 20px;
      font-family: $fontThemify;
      font-size: 24px;
    }
    // &-text {
    //   // border: 1px solid red;
    //   margin-right: 40px;
    //   font-size: 16px;
    //   user-select: none;
    // }
  }
  .sidebar__list-item:hover {
    color: $green;
    transition: $tr-01;
  }
  .sidebar__list-item--active {
    background: $green;
    color: $white;
    border: 1px solid transparent;
    // color: $green;
  }
  .sidebar__list-item--active:hover {
    background: $green;
    color: $white;
    border: 1px solid transparent;
    transition: $tr-01;
  }
}
.sidebar--active {
  left: 0;
  transition: $tr-04;
}
</style>
