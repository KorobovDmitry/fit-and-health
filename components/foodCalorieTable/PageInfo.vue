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
              <input
                v-model="newProduct.title"
                class="field__input"
                type="text"
                placeholder="Название продукта"
              />
            </div>

            <div class="form-field">
              <p class="field__title">Категория</p>
              <input
                v-model="newProduct.category"
                class="field__input"
                type="text"
                placeholder="Категория продукта"
              />
            </div>

            <div class="form-field">
              <div class="checkbox-group">
                <app-input-checkbox
                  label="Добавить в избранное"
                  class="checkbox-group__checkbox"
                  @change="newProduct.favoriteProduct = $event"
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-field">
              <p class="field__title">Белки</p>
              <input
                v-model="newProduct.protein"
                class="field__input"
                type="text"
                placeholder="Кол-во"
              />
            </div>

            <div class="form-field">
              <p class="field__title">Жиры</p>
              <input
                v-model="newProduct.fats"
                class="field__input"
                type="text"
                placeholder="Кол-во"
              />
            </div>

            <div class="form-field">
              <p class="field__title">Углеводы</p>
              <input
                v-model="newProduct.carb"
                class="field__input"
                type="text"
                placeholder="Кол-во"
              />
            </div>

            <div class="form-field">
              <p class="field__title">Калорийность</p>
              <input
                v-model="newProduct.kkal"
                class="field__input"
                type="text"
                placeholder="Кол-во"
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
import AppPageInfo from "@/components/basic/AppPageInfo"
import AppModal from "@/components/basic/AppModal"
import AppInputCheckbox from "@/components/basic/AppInputCheckbox"
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppPageInfo,
    AppModal,
    AppInputCheckbox,
    AppButton
  },
  data() {
    return {
      pageInfoElements: [
        {
          title: "Всего продуктов",
          value: 235
        },
        {
          title: "Категорий",
          value: 14
        },
        {
          title: "Избранное",
          value: 42
        },
        {
          title: "Мои продукты",
          value: 12
        }
      ],
      newProduct: {
        title: "",
        weight: 100,
        protein: null,
        fats: null,
        carb: null,
        kkal: null,
        category: "qwerty",
        favoriteProduct: false,
        userProduct: true,
        userId: 1
      }
    };
  },
  computed: {
    modalActive() {
      return this.$store.getters["foodCalorieTable/getModalActive"];
    }
  },
  methods: {
    openModal() {
      this.$store.commit("foodCalorieTable/setModalActive", true);
    },
    closeModal() {
      this.$store.commit("foodCalorieTable/setModalActive", false);
    },
    saveNewUserProduct() {
      this.$store.dispatch("foodCalorieTable/saveNewProduct", this.newProduct);
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
          margin-left: 10px;
          font-size: 14px;
          font-weight: 500;
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
          margin-top: 10px;
          margin-left: 10px;
          .checkbox-group__checkbox {
            margin-bottom: 5px;
          }
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