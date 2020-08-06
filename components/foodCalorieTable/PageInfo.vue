<template>
  <div class="page-info">
    <app-page-info
      :infoElements="pageInfoElements"
      btnTitle="Добавить продукт"
      @btnAction="openModal()"
    />

    <app-modal :isActive="modalActive" @close="closeModal()">
      <template v-slot:modalHeader>
        <p class="header__title">Добавить продукт</p>
        <div class="header__description">
          <p
            class="description__text"
          >Заполните форму и нажмите "сохранить продукт", что бы добавить новый продукт в общую базу.</p>
          <p class="description__text">Новый продукт будет доступен только для вас.</p>
        </div>
      </template>
      <template v-slot:modalContent>
        <div class="content__add-product-form">
          <div class="form-group">
            <div class="form-field">
              <p class="field__title">Название</p>
              <app-input-text
                :value="newProduct.title"
                @valueChanged="newProduct.title = $event"
              />
            </div>

            <div class="form-field">
              <p class="field__title">Категория</p>
              <app-select
                minWidth="236px"
                :selectOptionsList="productCategories"
                defaultValue="Мясо"
                alignListLeft
                alignSelectedValueLeft
                @selectValueChanged="newProduct.category = $event"
              />
            </div>

            <div class="form-field">
              <div class="checkbox-group">
                <app-input-checkbox
                  label="Добавить в избранное"
                  @change="newProduct.favoriteProduct = $event"
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-field">
              <p class="field__title">Белки</p>
              <app-input-text
                :value="newProduct.protein"
                @valueChanged="newProduct.protein = $event"
              />
            </div>

            <div class="form-field">
              <p class="field__title">Жиры</p>
              <app-input-text
                :value="newProduct.fats"
                @valueChanged="newProduct.fats = $event"
              />
            </div>

            <div class="form-field">
              <p class="field__title">Углеводы</p>
              <app-input-text
                :value="newProduct.carb"
                @valueChanged="newProduct.carb = $event"
              />
            </div>

            <div class="form-field">
              <p class="field__title">Калорийность</p>
              <app-input-text
                :value="newProduct.kkal"
                @valueChanged="newProduct.kkal = $event"
              />
            </div>
          </div>
        </div>
      </template>
      <template v-slot:modalButton>
        <app-button uppercase size14px @click.native="closeModal()">Отмена</app-button>
        <app-button
          uppercase
          size14px
          class="modal-action-btn"
          @click.native="saveNewUserProduct()"
        >Сохранить продукт</app-button>
      </template>
    </app-modal>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import AppPageInfo from "@/components/basic/AppPageInfo"
import AppModal from "@/components/basic/AppModal"
import AppInputText from "@/components/basic/AppInputText"
import AppInputCheckbox from "@/components/basic/AppInputCheckbox"
import AppSelect from "@/components/basic/AppSelect"
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppPageInfo,
    AppModal,
    AppInputText,
    AppInputCheckbox,
    AppSelect,
    AppButton
  },
  data() {
    return {
      modalActive: false,
      newProduct: {
        title: "",
        weight: 100,
        protein: null,
        fats: null,
        carb: null,
        kkal: null,
        category: "",
        favoriteProduct: false,
        userProduct: true
      }
    }
  },
  computed: {
    ...mapState({
      productCategories: state => state.foodCalorieTable.productCategories,
      productsAmount: state => state.foodCalorieTable.products.length,
      categoriesAmount: state => state.foodCalorieTable.productCategories.length
    }),
    ...mapGetters({
      favoriteAmount: 'foodCalorieTable/getFavoriteAmount',
      userProductsAmount: 'foodCalorieTable/getUserProductsAmount'
    }),
    pageInfoElements () {
      return [
        {
          title: "Всего продуктов",
          value: this.productsAmount
        },
        {
          title: "Категорий",
          value: this.categoriesAmount
        },
        {
          title: "Избранное",
          value: this.favoriteAmount
        },
        {
          title: "Мои продукты",
          value: this.userProductsAmount
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      saveNewProduct: 'foodCalorieTable/saveNewProduct'
    }),
    openModal() {
      this.modalActive = true
    },
    closeModal() {
      this.modalActive = false
    },
    saveNewUserProduct() {
      this.saveNewProduct(this.newProduct)
      this.closeModal()
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.page-info {
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

  .content__add-product-form {
    // border: 1px solid red;
    display: flex;
    .form-group {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      .form-field {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        .field__title {
          padding: 0 10px 5px 10px;
          font-size: 14px;
        }
        .field__input {
          margin-top: 5px;
          padding: 5px 10px;
          width: 100%;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          transition: $tr-02;
        }
        .field__input::placeholder {
          font-size: 14px;
        }
        .field__input:focus {
          border: 1px solid $green;
        }
        .checkbox-group {
          // border: 1px solid red;
          align-self: flex-start;
          margin-top: 10px;
          margin-left: 10px;
        }
      }
    }
    .form-group:first-child {
      margin-left: 0;
    }
    .form-group:last-child {
      margin-right: 0;
    }
  }

  .modal-action-btn {
    margin-left: auto;
  }
}
</style>