<template>
  <div class="food-list__wrapper">
    <div
      v-for="(element, key) in productsList"
      :key="key"
      :id="'food-list-' + key"
      class="food-list"
    >

      <div :id="'food-list__content-wrapper-' + key" class="food-list__content-wrapper">
        <div :id="'food-list__overview-block-' + key" class="food-list__overview-block">
          <div class="food-list__element">
            <i v-show="!element.favorites" class="food-list__element-icon ti-check"></i>
            <i v-show="element.favorites" class="food-list__element-icon ti-heart"></i>
          </div>
          <div class="food-list__element">
            <p class="food-list__element-value">{{ element.title }}</p>
            <i v-show="!element.favorites" class="food-list__element-small-width-icon ti-check"></i>
            <i v-show="element.favorites" class="food-list__element-small-width-icon ti-heart"></i>
            <i
              class="food-list__element-small-width-icon ti-zoom-in"
              :data-target="'food-list-' + key"
              @click="toggleFullInfoBlock($event)"
            ></i>
          </div>
          <div class="food-list__element">
            <p class="food-list__element-small-width-text">Категория:</p>
            <p class="food-list__element-value">{{ element.category }}</p>
          </div>
          <div class="food-list__element">
            <p class="food-list__element-value">{{ element.categoryIcon }}</p>
          </div>
          <div class="food-list__element">
            <p class="food-list__element-small-width-text">Белки:</p>
            <p class="food-list__element-value">{{ element.protein }}</p>
          </div>
          <div class="food-list__element">
            <p class="food-list__element-small-width-text">Жиры:</p>
            <p class="food-list__element-value">{{ element.fats }}</p>
          </div>
          <div class="food-list__element">
            <p class="food-list__element-small-width-text">Углеводы:</p>
            <p class="food-list__element-value">{{ element.carb }}</p>
          </div>
          <div class="food-list__element">
            <p class="food-list__element-small-width-text">Калорийность:</p>
            <p class="food-list__element-value">{{ element.kkal }}</p>
          </div>
          <div class="food-list__element">
            <i
              class="food-list__element-icon ti-zoom-in"
              :data-target="'food-list-' + key"
              @click="toggleFullInfoBlock($event)"
            ></i>
          </div>
        </div>

        <div class="food-list__full-info-block">

          <div class="food-list__contains-block">
            <p class="food-list__contains-block-title">Содержание витаминов:</p>
            <p
              v-for="(element, item) in element.vitamins"
              :key="item"
              class="food-list__contains-block-element"
            >{{ element.title }}({{ element.count }} мг.)</p>
          </div>

          <div class="food-list__contains-block">
            <p class="food-list__contains-block-title">Содержание</p>
            <p class="food-list__contains-block-element">воды: {{ element.water !== null ? element.water + ' мг.,' : 'н/д,' }}</p>
            <p class="food-list__contains-block-element">золы: {{ element.ash !== null ? element.ash + ' мг.,' : 'н/д,' }}</p>
            <p class="food-list__contains-block-element">холестерина: {{ element.cholesterol !== null ? element.cholesterol + ' мг.,' : 'н/д,' }}</p>
            <p class="food-list__contains-block-element">трансжиров: {{ element.transFats !== null ? element.transFats + ' мг.' : 'н/д' }}</p>
          </div>

          <div class="food-list__contains-block">
            <p class="food-list__contains-block-title">Суммарное содержание</p>
            <p
              class="food-list__contains-block-element"
            >сахаров: {{ element.sugar !== null ? element.sugar + ' гр.,' : 'н/д' }}</p>
            <p
              class="food-list__contains-block-element"
            >клетчатки: {{ element.cellulose !== null ? element.cellulose + ' гр.,' : 'н/д' }}</p>
            <p
              class="food-list__contains-block-element"
            >крахмала: {{ element.farina !== null ? element.farina + ' гр.' : 'н/д' }}</p>
          </div>

          <div class="food-list__nutrients-chart">
            <div class="nutrients-chart__block">
              <div class="nutrients-chart__element part-protein"></div>
              <div class="nutrients-chart__element part-fats"></div>
              <div class="nutrients-chart__element part-carb"></div>
              <div class="nutrients-chart__element part-water"></div>
              <div class="nutrients-chart__element part-ash"></div>
            </div>
            <div class="nutrients-chart__block">
              <div class="nutrients-chart__mark">
                <p class="nutrients-chart__mark-protein"></p>
                <p class="nutrients-chart__mark-text">Белки</p>
              </div>
              <div class="nutrients-chart__mark">
                <p class="nutrients-chart__mark-fats"></p>
                <p class="nutrients-chart__mark-text">Жиры</p>
              </div>
              <div class="nutrients-chart__mark">
                <p class="nutrients-chart__mark-carb"></p>
                <p class="nutrients-chart__mark-text">Углеводы</p>
              </div>
              <div class="nutrients-chart__mark">
                <p class="nutrients-chart__mark-water"></p>
                <p class="nutrients-chart__mark-text">Воды</p>
              </div>
              <div class="nutrients-chart__mark">
                <p class="nutrients-chart__mark-ash"></p>
                <p class="nutrients-chart__mark-text">Зола</p>
              </div>
            </div>
          </div>

          <div v-if="element.userProduct" class="edit-product-btn-wrapper">
            <app-button class="edit-product-btn" size14px uppercase center>Редактировать продукт</app-button>
            <app-button class="edit-product-btn" size14px uppercase center>Удалить продукт</app-button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
export default {
  components: {
    AppButton
  },
  data () {
    return {
      fullInfoOpened: false,
      foodListOpened: []
    }
  },
  computed: {
    productsList () {
      return this.$store.getters['foodCalorieTable/getProductsList']
    }
  },
  mounted () {
    // При создании списка продуктов задать всем элементам foodList высоту блока overview
    let foodListArray = document.querySelectorAll(`.food-list`)
    for (let i = 0; i < foodListArray.length; i++) {
      document.querySelector(`#food-list-${i}`).style.height = document.querySelector(`#food-list__overview-block-${i}`).getBoundingClientRect().height + 2 + 'px'
    }

    // При изменении размера экрана пересчитать высоту эелементов foodList
    window.addEventListener('resize', this.updateFoodListHeight)
  },
  methods: {
    toggleFullInfoBlock ($event) {
      let targetList = $event.target.getAttribute('data-target')
      let listNumber = ''

      // Если data target найден в массиве то элемент нужно закрыть, если не найден то добавить в массив и открыть
      if (this.foodListOpened.indexOf(targetList) === -1) {
        // console.log('Элемента нет в массиве ДОБАВИТЬ и ОТКРЫТЬ')
        this.foodListOpened.push(targetList)
        listNumber = targetList.substr(-1)
        document.querySelector(`#food-list-${listNumber}`).style.height = document.querySelector(`#food-list__content-wrapper-${listNumber}`).getBoundingClientRect().height + 2 + 'px'
      } else {
        // console.log('Элемент есть в массиве УДАЛИТЬ и ЗАКРЫТЬ')
        this.foodListOpened.splice(this.foodListOpened.indexOf(targetList), 1)
        listNumber = targetList.substr(-1)
        document.querySelector(`#food-list-${listNumber}`).style.height = document.querySelector(`#food-list__overview-block-${listNumber}`).getBoundingClientRect().height + 2 + 'px'
      }
    },
    updateFoodListHeight () {
      // console.log('update')
      let foodListArray = document.querySelectorAll(`.food-list`)
      for (let i = 0; i < foodListArray.length; i++) {
        if (this.foodListOpened.indexOf(`food-list-${i}`) !== -1) {
          document.querySelector(`#food-list-${i}`).style.height = document.querySelector(`#food-list__content-wrapper-${i}`).getBoundingClientRect().height + 2 + 'px'
        } else {
          document.querySelector(`#food-list-${i}`).style.height = document.querySelector(`#food-list__overview-block-${i}`).getBoundingClientRect().height + 2 + 'px'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.food-list {
  // border: 1px solid blue;
  margin-top: 10px;
  // height: 41px;
  background: $white;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  overflow: hidden;
  transition: $tr-04;
  @include for (930) {
    height: auto;
    border: none;
    background: none;
  }
  .food-list__overview-block {
    // border: 1px solid blue;
    display: flex;
    align-items: center;
    @include for (930) {
      flex-direction: column;
      padding: 0 10px;
    }
    .food-list__element {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: 100%;
      max-width: 150px;
      @include for (930) {
        margin-top: 10px;
        padding: 10px 20px;
        background: $white;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 6px;
        max-width: 100%;
      }
      .food-list__element-value {
        // border: 1px solid red;
        text-align: right;
        font-weight: 500;
      }
      .food-list__element-icon {
        // border: 1px solid red;
        color: $gray-light;
        cursor: pointer;
        transition: $tr-02;
      }
      .food-list__element-icon:hover {
        color: $green;
      }
    }
    .food-list__element-small-width-text {
      // background: red;
      display: none;
      @include for (930) {
        display: block;
        margin-right: auto;
        font-weight: 600;
      }
    }
    .food-list__element-small-width-icon {
      // background: red;
      display: none;
      @include for (930) {
        display: flex;
        font-size: 18px;
        margin-left: 5px;
        padding: 0 10px;
        cursor: pointer;
      }
    }

    .food-list__element:first-child {
      max-width: 60px;
      min-width: 60px;
      border: none;
      padding: 0;
      font-size: 16px;
      @include for (930) {
        display: none;
      }
    }
    .food-list__element:nth-child(2) {
      padding: 10px 20px;
      max-width: 100%;
      min-width: 300px;
      border-left: 1px solid rgba($white, .4);
      @include for (930) {
        margin-top: 20px;
        padding: 10px 10px 10px 20px;
        background: $green;
        color: $white;
        border: 1px solid $green;
        border-radius: 6px;
      }
      .food-list__element-value {
        margin-right: auto;
        text-align: left;
        @include for (930) {
          font-size: 17px;
        }
      }
    }
    .food-list__element:nth-child(3) {
      // background: red;
      display: none;
      @include for (930) {
        display: flex;
      }
    }
    .food-list__element:nth-child(4) {
      // background: red;
      display: flex;
      @include for (930) {
        display: none;
      }
    }
    .food-list__element:last-child {
      max-width: 60px;
      min-width: 60px;
      border-right: none;
      @include for (930) {
        display: none;
      }
    }
  }

  .food-list__full-info-block {
    border-top: 1px solid rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,.08);
    @include for (930) {
      background: none;
      border: none;
    }
    .food-list__contains-block {
      border: 1px solid rgba(0,0,0,.2);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 10px 80px;
      margin: 5px 10px;
      border-radius: 4px;
      background: $white;
      @include for (930) {
        padding: 6px 20px;
        border-radius: 6px;
      }
      .food-list__contains-block-title {
        margin-right: 10px;
        font-weight: 600;
      }
      .food-list__contains-block-element {
        margin-right: 10px;
      }
    }
    .food-list__contains-block:first-child {
      margin-top: 10px;

    }

    .food-list__nutrients-chart {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 5px 10px 10px 10px;
      padding: 20px 60px;
      border: 1px solid rgba(0,0,0,.2);
      border-radius: 4px;
      background: $white;
      @include for (930) {
        margin-top: 5px;
        margin-bottom: 0;
        border-radius: 6px;
      }
      .nutrients-chart__block {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        .nutrients-chart__element {
          // border: 1px solid red;
          height: 20px;
        }
        .part-protein {
          width: 11.73%;
          background: $green;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .part-fats {
          width: 2.71%;
          background: $yellow;
        }
        .part-carb {
          width: 74.95%;
          background: $red;
          // opacity: .8;
        }
        .part-water {
          width: 8.41%;
          background: $blue;
        }
        .part-ash {
          width: 2.2%;
          background: $gray-dark;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        .nutrients-chart__mark {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
        }
        .nutrients-chart__mark-text {
          font-weight: 600;
          margin-left: 10px;
          // margin-right: 20px;
        }
        .nutrients-chart__mark-protein {
          width: 30px;
          height: 6px;
          background: $green;
          border-radius: 6px;
        }
        .nutrients-chart__mark-fats {
          width: 30px;
          height: 6px;
          background: $yellow;
          border-radius: 6px;
        }
        .nutrients-chart__mark-carb {
          width: 30px;
          height: 6px;
          background: $red;
          border-radius: 6px;
        }
        .nutrients-chart__mark-water {
          width: 30px;
          height: 6px;
          background: $blue;
          border-radius: 6px;
        }
        .nutrients-chart__mark-ash {
          width: 30px;
          height: 6px;
          background: $gray-dark;
          border-radius: 6px;
        }
      }
      .nutrients-chart__block:first-child {
        margin-bottom: 10px;
      }
    }
  }
}

.edit-product-btn-wrapper {
  // border: 1px solid red;
  display: flex;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5px 20px 10px 20px;
  .edit-product-btn {
    margin-bottom: 5px;
    @include for (930) {
      margin-top: 10px;
    }
  }
  .edit-product-btn:first-child {
    margin-right: 40px;
    @include for (930) {
      margin-right: 40px;
    }
  }
  // .edit-product-btn:last-child {
  //   width: 100%;
  // }
}

</style>
