<template>
  <app-modal v-if="productsModalActive" @close="changeModalVisibility()">
    <template v-slot:modalHeader>
      <p class="FCT-modal__title">Добавить продукт</p>
      <p class="FCT-modal__subtitle">Заполните поля и нажмите сохранить</p>
    </template>

    <template v-slot:modalContent>
      <app-input-text infoText="Название" textAlignRight @inputValueChanged="productTitle = $event"/>
      <app-input-text infoText="Белков" textAlignRight @inputValueChanged="productProtein = $event"/>
      <app-input-text infoText="Жиров" textAlignRight @inputValueChanged="productFats = $event"/>
      <app-input-text infoText="Углеводов" textAlignRight @inputValueChanged="productCarb = $event"/>
      <app-input-text infoText="Калорийность" textAlignRight @inputValueChanged="productKkal = $event"/>
    </template>

    <template v-slot:modalButton>
      <app-button class="FCT-modal__action-btn" size16px uppercase @click.native="saveProduct()">Сохранить</app-button>
      <app-button class="FCT-modal__action-btn" size16px uppercase @click.native="changeModalVisibility()">Отменить</app-button>
    </template>
  </app-modal>
</template>

<script>
import AppModal from '@/components/basic/AppModal'
import AppInputText from '@/components/basic/AppInputText'
import AppButton from '@/components/basic/AppButton'
export default {
  components: {
    AppModal,
    AppInputText,
    AppButton
  },
  data () {
    return {
      productTitle: '',
      productProtein: '',
      productFats: '',
      productCarb: '',
      productKkal: ''
    }
  },
  computed: {
    productsModalActive () {
      return this.$store.getters['products/getProductsModalActive']
    },
  },
  methods: {
    changeModalVisibility () {
      this.$store.commit('products/setProductsModalActive')
    },
    saveProduct () {
      const product = {
        productInfo: {
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
        },
        currentWeight: 100
      }

      this.$store.dispatch('products/createProduct', product)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.FCT-modal__title {
  font-size: 24px;
  font-weight: 600;
}
.FCT-modal__subtitle {
  // border: 1px solid red;
  margin-top: 10px;
}


.FCT-modal__action-btn {
  margin-right: 10px;
}
.FCT-modal__action-btn:last-child {
  margin-right: 0;
}

</style>
