<template>
  <app-modal v-if="mealPartModalActive" @close="changeModalVisibility()">
    <template v-slot:modalHeader>
      <p class="meal-part-modal__title">{{ modalInfo.modalTitle }}</p>
      <p class="meal-part-modal__subtitle">{{ modalInfo.modalSubtitle }}</p>
    </template>

    <template v-slot:modalContent>
      <div class="meal-part__modal-content">
        <div class="meal-part__main-info">
          <p class="main-info__title">Общая информация</p>
          <app-input-text
            infoText="Название"
            textAlignRight
            v-model="mealPartTitle"
            @inputValueChanged="updateTitle($event)"
          />
          <app-input-text
            infoText="Короткое описание"
            textAlignRight
            v-model="mealPartSubtitle"
            @inputValueChanged="updateSubtitle($event)"
          />
        </div>

        <div class="meal-part__sorting-lists">
          <div class="sorting-lists__section">
            <p class="sorting-lists__section-title">Все продукты</p>
            <app-search-block/>
            <products-list :products="allProducts" :actionBtn="{add: true, remove: false}"/>
          </div>
          <div class="sorting-lists__section">
            <p class="sorting-lists__section-title">Дабавленные</p>
            <app-search-block/>
            <products-list :products="modalInfo.mealPartProducts" :actionBtn="{add: false, remove: true}"/>
          </div>
        </div>

      </div>
    </template>

    <template v-slot:modalButton>
      <app-button class="meal-part-modal__action-btn" size16px uppercase @click.native="removeMealPart()">Удалить</app-button>
      <app-button class="meal-part-modal__action-btn" size16px uppercase @click.native="updateMealParts()">Сохранить</app-button>
      <app-button class="meal-part-modal__action-btn" size16px uppercase @click.native="changeModalVisibility()">Отменить</app-button>
    </template>
  </app-modal>
</template>

<script>
import AppModal from '@/components/basic/AppModal'
import AppButton from '@/components/basic/AppButton'
import AppInputText from '@/components/basic/AppInputText'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppInputRadio from '@/components/basic/AppInputRadio'
import ProductsList from '@/components/nutritionDiary/MealPlaner/MealParts/Modal/ProductsList'
export default {
  components: {
    AppModal,
    AppButton,
    AppInputText,
    AppSearchBlock,
    AppInputRadio,
    ProductsList
  },
  data () {
    return {}
  },
  computed: {
    mealPartModalActive () {
      return this.$store.getters['mealPlaner/getMealPartModalActive']
    },
    modalInfo () {
      return this.$store.getters['mealPlaner/getMealPartModalInfo']
    },
    mealPartTitle () {
      return this.$store.getters['mealPlaner/getMealPartModalInfo'].mealPartTitle
    },
    mealPartSubtitle () {
      return this.$store.getters['mealPlaner/getMealPartModalInfo'].mealPartSubtitle
    },
    allProducts () {
      return this.$store.getters['products/getAllProducts']
    }
  },
  methods: {
    changeModalVisibility () {
      this.$store.commit('mealPlaner/setMealPartModalActive')
    },
    updateTitle ($event) {
      this.$store.commit('mealPlaner/setMealPartTitleModalInfo', $event)
    },
    updateSubtitle ($event) {
      this.$store.commit('mealPlaner/setMealPartSubtitleModalInfo', $event)
    },
    updateMealParts () {
      const newMealPart = {
        title: this.mealPartTitle,
        description: this.mealPartSubtitle,
        products: this.modalInfo.mealPartProducts
      }
      this.$store.dispatch('mealPlaner/updateMealParts', newMealPart)
    },
    removeMealPart () {
      // console.log(`delete meal part № ${this.$store.getters['mealPlaner/getMealPartModalInfo'].mealPartNumber}`)
      const mealPartNumber = this.$store.getters['mealPlaner/getMealPartModalInfo'].mealPartNumber
      this.$store.dispatch('mealPlaner/removeMealParts', mealPartNumber)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.meal-part-modal__title {
  font-size: 24px;
  font-weight: 600;
}
.meal-part-modal__subtitle {
  // border: 1px solid red;
  margin-top: 10px;
}

.meal-part__modal-content {
  // border: 1px solid red;
  .meal-part__main-info {
    .main-info__title {
      padding-bottom: 10px;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .meal-part__sorting-lists {
    // border: 1px solid red;
    display: flex;
    padding-top: 10px;
    .sorting-lists__section {
      // border: 1px solid red;
      width: 50%;
      margin-right: 20px;
      .sorting-lists__section-title {
        margin-bottom: 10px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
      }
    }
    .sorting-lists__section:last-child {
      margin-right: 0;
    }
  }
}

.meal-part-modal__action-btn {
  margin-right: 10px;
}
.meal-part-modal__action-btn:first-child {
  margin-right: auto;
}
.meal-part-modal__action-btn:last-child {
  margin-right: 0;
}

</style>
