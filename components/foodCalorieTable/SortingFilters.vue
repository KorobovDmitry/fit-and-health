<template>
  <div class="sorting-filters">

    <!-- <page-info /> -->

    <p class="sorting-filters__block-title">Фильтры</p>
    <div class="sorting-filters__elements">
      <div class="element">
        <!-- <app-accordion>
                <template v-slot:accordionHeader>
                  <div class="element__title">
                    <p class="element__title-text">Сортировать по...</p>
                    <i class="ti-angle-double-down element__title-icon"></i>
                  </div>
                </template>
                <template v-slot:accordionHiddenContent>
                  <div class="element__selected-value">
                    Названию <br>
                    Белкам <br>
                  </div>
                </template>
        </app-accordion>-->

        <div class="element__title">
          <p class="element__title-text">Сортировать по ...</p>
          <i class="ti-angle-double-down element__title-icon"></i>
        </div>
        <ul class="element__selected-value-list">
          <li class="selected-value-list__item">
            <app-input-radio label="Названию (от А до Я)" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Названию (от Я до А)" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Белкам" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Жирам" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Углеводам" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Калорийности" />
          </li>
        </ul>
      </div>

      <div class="element">
        <div class="element__title">
          <p class="element__title-text">Категории</p>
          <i class="ti-angle-double-down element__title-icon"></i>
        </div>
        <ul class="element__selected-value-list">
          <li class="selected-value-list__item">
            <app-input-radio label="Мясо" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Рыба" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Злаки" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Овощи" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Фрукты" />
          </li>
        </ul>
      </div>

      <div class="element">
        <div class="element__title">
          <p class="element__title-text">Продукты</p>
          <i class="ti-angle-double-down element__title-icon"></i>
        </div>
        <ul class="element__selected-value-list">
          <li class="selected-value-list__item">
            <app-input-radio label="Все продукты" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Мои продукты" />
          </li>
          <li class="selected-value-list__item">
            <app-input-radio label="Избранное" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import PageInfo from '@/components/foodCalorieTable/PageInfo'
import AppAccordion from '@/components/basic/AppAccordion'
import AppInputRadio from '@/components/basic/AppInputRadio'
export default {
  components: {
    // PageInfo,
    AppAccordion,
    AppInputRadio
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.sorting-filters {
  // border: 1px solid red;
  width: 400px;
  .sorting-filters__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .sorting-filters__elements {
    .element {
      margin-bottom: 20px;
      .element__title {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        padding: 10px 20px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .element__title-text {
          font-weight: 500;
        }
        .element__title-icon {
          margin-left: auto;
          font-size: 14px;
        }
      }
      .element__selected-value-list {
        padding: 15px 20px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .selected-value-list__item {
          margin-bottom: 10px;
        }
        .selected-value-list__item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

</style>
