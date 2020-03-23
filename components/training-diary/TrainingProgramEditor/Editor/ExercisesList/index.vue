<template>
  <div class="exercises-list">
    <app-block-title>База упражнений</app-block-title>

    <div class="exercises-list__content">
      <app-search-block small />

      <app-button size16px uppercase fillArea mt20>Добавить новое упражнение в базу</app-button>

      <div class="categories">

        <div v-for="(item, index) in 3" :key="index" class="category__item">
          <app-accordion :isOpened="false">
            <template v-slot:accordionHeader>
              <div class="item__header">
                <img class="header__img" src alt="img" />
                <div class="header__title">
                  <p class="title__text">Широчайшие</p>
                  <p class="title__exercises-count">Кол-во упражнений 24</p>
                </div>
                <i class="ti-angle-double-down header__icon"></i>
              </div>
            </template>
            <template v-slot:accordionHiddenContent>
              <ul class="item__exercises-list">
                <li v-for="(item, index) in 4" :key="index" class="exercises-list__list-item">
                  <div class="list-item__exercises-drag-drop-btn">
                    <i class="ti-move"></i>
                  </div>
                  <div>
                    <p class="list-item__exercises-title">Подтягивания широким хватом</p>
                  </div>
                  <div class="list-item__exercises-more-btn">
                    <i class="ti-more"></i>
                  </div>
                </li>
              </ul>
            </template>
          </app-accordion>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import AppSearchBlock from "@/components/basic/AppSearchBlock.vue"
import AppAccordion from "@/components/basic/AppAccordion"
import AppButton from "@/components/basic/AppButton.vue"

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    AppAccordion,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercises-list {
  // border: 1px solid red;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .exercises-list__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    .categories {
      // border: 1px solid red;
      margin-top: 20px;
      .category__item {
        // border: 1px solid red;
        margin-bottom: 10px;
        .item__header {
          display: flex;
          align-items: center;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .header__img {
            width: 60px;
            height: 60px;
            border: 1px solid $blockBorder;
            border-radius: 6px;
          }
          .header__title {
            margin-left: 10px;
            .title__text {
              font-size: 18px;
              font-weight: 500;
            }
            .title__exercises-count {
              font-size: 14px;
            }
          }
          .header__icon {
            margin-left: auto;
            margin-right: 10px;
          }
        }
        .item__exercises-list {
          margin: 0 5px;
          padding: 10px;
          background: rgba(0, 0, 0, 0.08);
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
          .exercises-list__list-item {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            padding: 10px 20px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
            .list-item__exercises-drag-drop-btn {
              margin-right: 10px;
            }
            .list-item__exercises-title {
              font-weight: 500;
            }
            .list-item__exercises-more-btn {
              margin-left: auto;
            }
          }
          .exercises-list__list-item:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
