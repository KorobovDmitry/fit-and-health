<template>
  <div class="food-part__product-list">
    <ul class="food-part__top-list">
      <li class="food-part__top-list-item">Название</li>
      <li class="food-part__top-list-item">Масса</li>
      <li class="food-part__top-list-item">белки</li>
      <li class="food-part__top-list-item">жиры</li>
      <li class="food-part__top-list-item">углеводы</li>
      <li class="food-part__top-list-item">Ккал</li>
      <li class="food-part__top-list-item">
        <i class="ti-more"></i>
      </li>
    </ul>

    <div class="scroll__wrapper">
      <ul
        class="food-part__meal-list"
        v-for="(item, index) of element.products"
        :key="index"
      >
        <li class="food-part__meal-list-item">{{ item.productInfo.title }}</li>
        <li class="food-part__meal-list-item">
          <input
            :data-current-input="`product-input-${index}`"
            class="food-part__meal-list-item-input"
            type="text"
            :value="item.currentWeight"
            @keypress.enter="updateProductActionBtn($event, element, index, item)"
            @blur="updateProductActionBtn($event, element, index, item)"
          >
        </li>
        <li class="food-part__meal-list-item">{{ Math.round( (item.productInfo.protein * item.currentWeight / 100) * 100 ) / 100 }}</li>
        <li class="food-part__meal-list-item">{{ Math.round( (item.productInfo.fats * item.currentWeight / 100) * 100 ) / 100 }}</li>
        <li class="food-part__meal-list-item">{{ Math.round( (item.productInfo.carb * item.currentWeight / 100) * 100 ) / 100 }}</li>
        <li class="food-part__meal-list-item">{{ Math.round( (item.productInfo.kkal * item.currentWeight / 100) * 100 ) / 100 }}</li>
        <li class="food-part__meal-list-item">
          <i
            :data-remove-btn="`btn-remove-product-${index}-meal-part-${element.mealPartNumber}`"
            class="ti-close food-part__meal-icon-remove"
          ></i>
          <i
            :data-save-btn="`btn-save-product-${index}-meal-part-${element.mealPartNumber}`"
            class="ti-save food-part__meal-icon-save"
          ></i>
        </li>
      </ul>
    </div>

    <div class="food-part__btn-wrapper">
      <!-- <app-button class="food-part__btn" size14px uppercase fillArea>Сохранить изменения</app-button> -->
      <app-button class="food-part__btn" size14px uppercase fillArea @click.native="editCurrentMealPart(element)">Редактировать</app-button>
    </div>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
export default {
  props: {
    element: Object
  },
  components: {
    AppButton
  },
  data () {
    return {}
  },
  methods: {
    updateProductActionBtn ($event, element, index, item) {
      // console.log(`update weight for ELEMENT ${element.mealPartNumber} product INDEX ${index} and TITLE ${item.title}`)
      // console.log(`текущий вес продукта ${item.weight}`)
      // console.log(`новый вес продукта ${$event.target.value}`)

      const btnRemoveProduct = document.querySelector(`[data-remove-btn="btn-remove-product-${index}-meal-part-${element.mealPartNumber}"]`)
      const btnSaveProduct = document.querySelector(`[data-save-btn="btn-save-product-${index}-meal-part-${element.mealPartNumber}"]`)

      const currentWeight = parseFloat(item.weight)
      const newWeight = parseFloat($event.target.value)
      if (currentWeight !== newWeight) {
        btnRemoveProduct.style.display = 'none'
        btnSaveProduct.style.display = 'inline'
      }

      const updatedProduct = {
        productInfo: {
          title: item.productInfo.title,
          protein: item.productInfo.protein,
          fats: item.productInfo.fats,
          carb: item.productInfo.carb,
          kkal: item.productInfo.kkal,
        },
        currentWeight: $event.target.value,
        _id: item._id
      }
      this.$store.commit('mealPlaner/updateMealPartsProductWeight', {
        mealPartNumber: element.mealPartNumber,
        productIndex: index,
        updatedProduct: updatedProduct
      })
    },
    editCurrentMealPart (element) {
      // console.log(`open Edit Modal for ELEMENT meal Part Number ${element.mealPartNumber}`)

      // Формируем новый масив products чтобы данные из element.products не были реактивно связаны с данными из mealPartModalInfo.mealPartProducts
      let products = []
      for (let i = 0; i < element.products.length; i++) {
        products.push(element.products[i])
      }

      const editMealPart = {
        modalTitle: 'Редактирование',
        modalSubtitle: 'Заполните форму и нажмите сохранить',
        mealPartNumber: element.mealPartNumber,
        mealPartTitle: element.title,
        mealPartSubtitle: element.description,
        mealPartProducts: products
      }
      // console.log(editMealPart.mealPartProducts)
      this.$store.commit('mealPlaner/setMealPartModalInfo', editMealPart)
      this.$store.commit('mealPlaner/setMealPartModalActive')

      // проверяем загружен ли список продуктов из базы
      if (this.$store.getters['products/getAllProducts'].length === 0) {
        // console.log('продукты еще не загружены. нужно выполнить диспатч')
        this.$store.dispatch('products/fetchAllProducts')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.food-part__product-list {
  // border: 1px solid red;
  position: relative;
  width: 100%;
  .food-part__top-list {
    // border: 1px solid red;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    background: $green;
    // background: rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    .food-part__top-list-item {
      // border: 1px solid red;
      // width: 100%;
      min-width: 100px;
      text-transform: uppercase;
      text-align: center;
      color: $white;
      font-size: 12px;
      padding: 10px 0;
      border-left: 1px solid rgba($white, .3);
      user-select: none;
    }
    .food-part__top-list-item:first-child {
      // border: 1px solid red;
      min-width: 200px;
      width: 100%;
      border-left: none;
      padding-left: 16px;
    }
    .food-part__top-list-item:last-child {
      // border: 1px solid red;
      width: 40px;
      min-width: 40px;
    }
  }

  .scroll__wrapper {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin-top: 44px;
    margin-bottom: 10px;
    // margin-right: -16px;
    padding: 10px;
    height: 214px;
    max-height: 214px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    overflow: auto;
    // overflow-x: hidden;
  }

  .food-part__meal-list {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    background: $white;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    user-select: none;
    .food-part__meal-list-item {
      // border: 1px solid red;
      position: relative;
      min-width: 100px;
      height: 35px;
      text-align: center;
      font-size: 14px;
      padding: 8px 0;
      .food-part__meal-list-item-input {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        // margin-top: 2px;
        padding: 5px 10px;
        max-width: 100px;
        background: none;
        text-align: center;
        font-family: $fontMontserrat;
        font-size: 16px;
        font-weight: 600;
        outline: none;
        border: none;
        border-top: 3px solid transparent;
        border-bottom: 2px solid transparent;
        transition: $tr-02;
      }
      .food-part__meal-list-item-input:focus {
        border-bottom: 2px solid $green;
        transition: $tr-02;
      }
      .food-part__meal-list-item-input::selection {
        background: $green;
        color: $white;
      }
      .food-part__meal-icon-remove {
        display: inline;
        font-family: $fontThemify;
        margin: 2px 4px;
        padding: 4px;
        font-size: 12px;
        cursor: pointer;
        transition: $tr-02;
      }
      .food-part__meal-icon-save {
        display: none;
        font-family: $fontThemify;
        margin: 2px 4px;
        padding: 4px;
        font-size: 12px;
        cursor: pointer;
        transition: $tr-02;
      }
      // .food-part__meal-icon:hover {
      //   color: $green;
      //   transition: $tr-02;
      // }
    }
    .food-part__meal-list-item:first-child {
      // border: 1px solid red;
      padding: 8px 20px;
      min-width: 200px;
      width: 100%;
      text-align: left;
      font-size: 16px;
      font-weight: 500;
      line-height: 18px;
      border-left: none;
    }
    .food-part__meal-list-item:last-child {
      // background: red;
      // border-left: 1px solid rgba(0,0,0,.1);
      width: 40px;
      min-width: 40px;
    }
  }
  .food-part__meal-list:last-child {
    margin-bottom: 0;
  }

  .food-part__btn-wrapper {
    // border: 1px solid red;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    // align-items: center;
    // justify-content: center;
    .food-part__btn {
      margin-right: 10px;
    }
    .food-part__btn:last-child {
      margin-right: 0;
    }
  }
}
</style>
