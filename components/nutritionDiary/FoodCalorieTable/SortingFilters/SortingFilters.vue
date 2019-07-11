<template>
  <div class="sorting-filters">

    <search-block />

    <div class="filters">
      <div ref="filtersWrapper" class="filters__wrapper" @resize="updateFiltersWrapperHeight($event)">
        <div ref="titleBlock" class="filters__title-block">
          <p class="filters__title">Фильтры</p>
          <p v-if="!filtersVisibility" class="filters__open-btn" @click="toggleFiltersVisibility($event)">показать <i class="filters__icon ti-check-box"></i></p>
          <p v-if="filtersVisibility" class="filters__open-btn" @click="toggleFiltersVisibility($event)">скрыть <i class="filters__icon ti-check-box"></i></p>
        </div>

        <div ref="optionsBlock" class="filters__options-block">

          <div class="options">
            <p class="options__title" data-target="element-1">Сортировать по <span class="options__span">. . .</span></p>
            <ul class="options__list">
              <li v-for="(item, index) in orderOptions" :key="index" class="options__list-item">
                <app-input-radio v-model="filterOrder" :label="item" :value="item" />
              </li>
            </ul>
          </div>

          <div class="options">
            <p class="options__title">Категории <span class="options__span">. . .</span></p>
            <ul class="options__list">
              <li
                v-for="(item, index) in categoryOptions"
                :key="index"
                class="options__list-item"
              >
                <app-input-checkbox v-model="filterCategory" :label="item" :value="item" />
              </li>
            </ul>
            <div class="options__toggle-checkbox">
              <app-button
                class="options__toggle-checkbox-btn"
                size14px
                uppercase
                @click.native="selectAllCheckbox()"
              >Выбрать все</app-button>
              <app-button
                class="options__toggle-checkbox-btn"
                size14px
                uppercase
                @click.native="removeAllCheckbox()"
              >Убрать все</app-button>
            </div>
          </div>

          <div class="options">
            <p class="options__title">Продукты <span class="options__span">. . .</span></p>
            <ul class="options__list">
              <li
                v-for="(item, index) in productOptions"
                :key="index"
                class="options__list-item"
              >
                <app-input-radio v-model="filterProducts" :label="item" :value="item" />
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton.vue'
import SearchBlock from '@/components/nutritionDiary/FoodCalorieTable/SortingFilters/SearchBlock.vue'
import AppInputRadio from '@/components/basic/AppInputRadio.vue'
import AppInputCheckbox from '@/components/basic/AppInputCheckbox.vue'
export default {
  components: {
    AppButton,
    SearchBlock,
    AppInputRadio,
    AppInputCheckbox
  },
  data () {
    return {
      orderOptions: ['Названию (от А до Я)', 'Названию (от Я до А)', 'Белкам', 'Жирам', 'Углеводам', 'Калорийности'],
      categoryOptions: ['Мясо', 'Рыба', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
      productOptions: ['Все', 'Мои продукты', 'Избранное'],
      filterOrder: 'Названию (от А до Я)',
      filterCategory: ['Мясо', 'Рыба', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
      filterProducts: 'Все',
      filtersVisibility: false
    }
  },
  mounted () {
    // иногда высота может расчитаться неверно, вероятно из-за особенностей шрифта. Поэтому высота задается жестко в px при уловии что размеры блока не будут меняться
    // this.$refs.filtersWrapper.style.height = this.$refs.titleBlock.getBoundingClientRect().height + 10 + 'px'
    this.$refs.filtersWrapper.style.height = 54 + 'px'
    window.addEventListener('resize', this.updateFiltersWrapperHeight)

    // НЕ ИСПОЛЬЗОВАТЬ (высота может оперделяться не верно если одно из полей таблицы изменит вышину, например от переноса строки)
    // for (let i = 0; i < this.category.length; i++) {
    //   let tartgetCheckbox = document.querySelector(`#food-calory-table__category-checkbox-${i}`)
    //   tartgetCheckbox.setAttribute('checked', true)
    // }
  },
  methods: {
    toggleFiltersVisibility () {
      if (!this.filtersVisibility) {
        this.filtersVisibility = true
        this.$refs.filtersWrapper.style.height = this.$refs.titleBlock.getBoundingClientRect().height + this.$refs.optionsBlock.getBoundingClientRect().height + 20 + 'px'
      } else {
        this.filtersVisibility = false
        this.$refs.filtersWrapper.style.height = this.$refs.titleBlock.getBoundingClientRect().height + 10 + 'px'
      }
    },
    updateFiltersWrapperHeight () {
      if (this.filtersVisibility) {
        this.$refs.filtersWrapper.style.height = this.$refs.titleBlock.getBoundingClientRect().height + this.$refs.optionsBlock.getBoundingClientRect().height + 20 + 'px'
      }
    },
    selectAllCheckbox () {
      this.allCheckboxActive = false
      this.filterCategory = this.categoryOptions
    },
    removeAllCheckbox () {
      this.allCheckboxActive = true
      this.filterCategory = []
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.sorting-filters {
  // border: 1px solid red;
  margin-top: 40px;

  .filters {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    // margin-left: 40px;
    // margin-right: 40px;
    @include for (580) {
      margin: 20px 10px 0 10px;
    }
    .filters__wrapper {
      // border: 1px solid red;
      overflow: hidden;
      transition: $tr-04;
      .filters__title-block {
        display: flex;
        align-items: center;
        margin-top: 10px;
        padding: 10px 20px 10px 20px;
        background: $white;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 6px;
        user-select: none;
        .filters__title {
          font-size: 18px;
          font-weight: 600;
        }
        .filters__icon {
          margin-left: 10px;
        }
        .filters__open-btn {
          margin-left: auto;
          font-weight: 600;
          cursor: pointer;
          transition: $tr-02;
        }
        .filters__open-btn:hover {
          color: $green;
        }
      }

      .filters__options-block {
        // border: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        padding: 20px;
        background: $white;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 6px;
        user-select: none;
        @include for (1180) {
          flex-direction: column;
        }
        .options {
          display: flex;
          flex-direction: column;
          margin-right: 40px;
          @include for (1180) {
            margin-right: 0;
            margin-bottom: 20px;
          }
          .options__title {
            font-weight: 600;
            .options__span {
              color: $green;
              font-weight: 600;
              cursor: pointer;
            }
          }
          .options__list {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            border-radius: 6px;
            margin-top: 10px;
            @include for (580) {
              text-align-last: left;
            }
            .options__list-item {
              // border: 1px solid red;
              margin: 5px 0;
            }
          }
          .options__toggle-checkbox {
            display: flex;
            align-items: center;
            @include for (580) {
              justify-content: center;
            }
            .options__toggle-checkbox-btn {
              margin-top: 20px;
              margin-right: 20px;
            }
          }
        }
        .options:first-child {
          // border: 1px solid red;
          @include for (1180) {
            order: 2;
          }
        }
        .options:nth-child(2) {
          // border: 1px solid red;
          @include for (1180) {
            order: 3;
            margin-bottom: 0px;
          }
          .options__list {
            // border: 1px solid red;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 610px;
            @include for (760) {
              flex-direction: column;
              width: auto;
            }
            .options__list-item {
              // border: 1px solid red;
              width: 300px;
            }
          }
        }
        .options:last-child {
          // border: 1px solid red;
          margin-right: 0;
          margin-left: auto;
          @include for (1180) {
            order: 1;
            margin-left: 0;
          }
        }
      }
    }
  }
}

</style>
