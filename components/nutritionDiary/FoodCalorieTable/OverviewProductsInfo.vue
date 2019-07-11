<template>
  <div class="overview-products">
    <div class="info__wrapper">
      <div class="info__element">
        <p class="info__element-text">Всего продуктов</p>
        <p class="info__element-value">{{ totalProductsAmount }}</p>
      </div>
      <div class="info__element">
        <p class="info__element-text">Категорий</p>
        <p class="info__element-value">{{ categoriesAmount }}</p>
      </div>
      <div class="info__element">
        <p class="info__element-text">Избранное</p>
        <p class="info__element-value">{{ favoritesAmount }}</p>
      </div>
      <div class="info__element">
        <p class="info__element-text">Мои продукты</p>
        <p class="info__element-value">{{ myProductsAmount }}</p>
      </div>
    </div>
    <div class="add-product-btn__wrapper">
      <app-button sizeXL uppercase right @click.native="addUserProduct()">ДОБАВИТЬ ПРОДУКТ</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
export default {
  components: {
    AppButton
  },
  computed: {
    totalProductsAmount () {
      return this.$store.getters['foodCalorieTable/getTotalProductsAmount']
    },
    categoriesAmount () {
      return this.$store.getters['foodCalorieTable/getCategoriesAmount']
    },
    favoritesAmount () {
      return this.$store.getters['foodCalorieTable/getFavoritesAmount']
    },
    myProductsAmount () {
      return this.$store.getters['foodCalorieTable/getMyProductsAmount']
    }
  },
  methods: {
    addUserProduct () {
      const product = {
        title: 'Рис',
        category: 'крупы',
        categoryIcon: '/public/category-img/default.jpg',
        protein: 1,
        fats: 1,
        carb: 1,
        kkal: 1,
        water: 1,
        ash: 1,
        // vitamins: [],
        sugar: 1,
        cellulose: 1,
        farina: 1,
        cholesterol: 1,
        transFats: 1,
        userProduct: true,
        favorites: true
      }
      this.$store.dispatch('foodCalorieTable/createProduct', product)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.overview-products {
  // border: 1px solid red;
  margin-top: 40px;
  // margin-left: 40px;
  // margin-right: 40px;
  display: flex;
  @include for (1090) {
    flex-direction: column;
    align-items: center;
  }
  @include for (580) {
    margin-left: 0px;
    margin-right: 0px;
  }
  .info__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    // align-items: flex-end;
    .info__element {
      // border: 1px solid red;
      padding: 0 40px;
      border-right: 1px solid rgba(0,0,0,.1);
      @include for (930) {
        width: 50%;
        padding: 20px;
        // margin-bottom: 40px;
        text-align: center;
      }
      @include for (580) {
        padding: 20px 10px;
      }
      .info__element-text {
        font-size: 18px;
      }
      .info__element-value {
        color: $green;
        font-size: 32px;
        font-weight: 600;
        @include for (930) {
          margin-top: 10px;
          // align-self: flex-end;
        }
      }
    }
    .info__element:first-child {
      padding-left: 0px;
      @include for (1090) {
        padding-left: 40px;
      }
      @include for (930) {
        padding-left: 20px;
      }
      @include for (580) {
        padding-left: 10px;
      }
    }
    .info__element:nth-child(2) {
      @include for (930) {
        border-right: none;
      }
    }
    .info__element:nth-child(3) {
      @include for (930) {
        border-top: 1px solid rgba(0,0,0,.1);
      }
    }
    .info__element:nth-child(4) {
      border-right: none;
      @include for (930) {
        border-top: 1px solid rgba(0,0,0,.1);
      }
    }
  }
  .add-product-btn__wrapper {
    // border: 1px solid red;
    display: flex;
    // align-items: center;
    margin-left: auto;
    @include for (1090) {
      margin-left: 0;
      margin-top: 40px;
    }
  }
}

</style>
