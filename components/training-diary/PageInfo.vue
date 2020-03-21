<template>
  <div class="overview-products">
    <div class="info__wrapper">
      <div class="info__element">
        <p class="info__element-text">Тренировочных программ</p>
        <p class="info__element-value">12</p>
      </div>
      <div class="info__element">
        <p class="info__element-text">Избранное</p>
        <p class="info__element-value">5</p>
      </div>
      <div class="info__element">
        <p class="info__element-text">Мои программы</p>
        <p class="info__element-value">3</p>
      </div>
    </div>
    <div class="add-product-btn__wrapper">
      <app-button sizeXL uppercase right @click.native="openModal()">Добавить тренировочую программу</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
export default {
  components: {
    AppButton
  },
  computed: {
    totalProductsAmount () {
      return this.$store.getters['products/getAllProducts'].length
    },
    categoriesAmount () {
      return this.$store.getters['products/getCategories'].length
    },
    favoritesAmount () {
      let favoritesProductsAmount = 0
      let products = this.$store.getters['products/getAllProducts']
      for (let i = 0; i < products.length; i++) {
        if (products[i].favorites) {
          favoritesProductsAmount++
        }
      }
      return favoritesProductsAmount
    },
    myProductsAmount () {
      let userProductsAmount = 0
      let products = this.$store.getters['products/getAllProducts']
      for (let i = 0; i < products.length; i++) {
        if (products[i].userProduct) {
          userProductsAmount++
        }
      }
      return userProductsAmount
    }
  },
  methods: {
    openModal() {
      this.$store.commit('products/setProductsModalActive')
    },
    // addUserProduct () {
    //   const product = {
    //     productInfo: {
    //       title: 'Рис',
    //       category: 'крупы',
    //       categoryIcon: '/public/category-img/default.jpg',
    //       protein: 1,
    //       fats: 1,
    //       carb: 1,
    //       kkal: 1,
    //       water: 1,
    //       ash: 1,
    //       // vitamins: [],
    //       sugar: 1,
    //       cellulose: 1,
    //       farina: 1,
    //       cholesterol: 1,
    //       transFats: 1,
    //       userProduct: true,
    //       favorites: true
    //     },
    //     currentWeight: 100
    //   }

    //   this.$store.dispatch('foodCalorieTable/createProduct', product)
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.overview-products {
  // border: 1px solid red;
  display: flex;
  flex: 1 1 auto;
  margin-bottom: 40px;
  // margin-left: 440px;
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
    margin-left: auto;
    @include for (1090) {
      margin-left: 0;
      margin-top: 40px;
    }
  }
}

</style>
