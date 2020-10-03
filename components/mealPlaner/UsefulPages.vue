<template>
  <div class="useful-pages">
    <p class="useful-pages__block-title">Полезные страницы</p>
    <div class="useful-pages__elements">
      <nuxt-link
        to="meal-planer/meal-plans"
        class="element"
      >
        <i class="ti-write element__icon"></i>
        <p class="element__text">Сохраненные<br>рационы</p>
      </nuxt-link>
      <nuxt-link
        to="meal-planer/recipes-book"
        class="element"
      >
        <i class="ti-book element__icon"></i>
        <p class="element__text">Книга<br>рецептов</p>
      </nuxt-link>
      <nuxt-link
        to="meal-planer/food-calorie-table"
        class="element"
      >
        <i class="ti-view-list-alt element__icon"></i>
        <p class="element__text">Таблица<br>калорийности<br>продуктов</p>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.useful-pages {
  .useful-pages__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .useful-pages__elements {
    display: flex;
    flex-wrap: wrap;
    .element {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 1 auto;
      margin-bottom: 5px;
      padding: 20px 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      text-decoration: none;
      color: $black;
      transition: $tr-02;
      cursor: pointer;
      .element__icon {
        font-size: 26px;
      }
      .element__text {
        margin-top: 15px;
        text-align: center;
        font-weight: 500;
      }
    }
    .element:first-child {
      margin-right: 5px;
    }
    .element:last-child {
      width: 100%;
      margin-bottom: 0;
    }
    .element:hover {
      color: $green;
    }
  }
}

</style>