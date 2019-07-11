<template>
  <div class="exercises-list">
    <p class="exercises-list__block-title">База упражнений</p>
    <div class="exercises-list__content-wrapper">

      <app-search-block small />

      <app-button size16px uppercase fillArea mt20>Добавить новое упражнение в базу</app-button>

      <div class="categories">

        <div class="category__element">
          <div class="category__title-block">
            <img class="category__img" src="" alt="img">
            <div class="category__title">
              <p class="category__title-text">Широчайшие</p>
              <p class="category__exercises-count">Кол-во упражнений 24</p>
            </div>
          </div>
          <ul class="category__exercises-list">
            <li class="category__exercises-list-item">
              <div class="category__exercises-drag-drop-btn">
                <i class="ti-more"></i>
                <i class="ti-more"></i>
                <i class="ti-more"></i>
              </div>
              <div>
                <p class="category__exercises-title">Подтягивания широким хватом</p>
                <!-- <div class="category__exercises-target-muscle">
                  <p class="category__exercises-target-muscle-title">Широчайшие</p>
                  <p class="category__exercises-target-muscle-title">Бицепс</p>
                  <p class="category__exercises-target-muscle-title">Средняя часть спины</p>
                </div> -->
              </div>
              <div class="category__exercises-more-btn">
                <i class="ti-more"></i>
              </div>
            </li>
            <li class="category__exercises-list-item">
              <div class="category__exercises-drag-drop-btn">
                <i class="ti-more"></i>
                <i class="ti-more"></i>
                <i class="ti-more"></i>
              </div>
              <div>
                <p class="category__exercises-title">Тяга верхнего блока широким хватом</p>
                <!-- <div class="category__exercises-target-muscle">
                  <p class="category__exercises-target-muscle-title">Широчайшие</p>
                  <p class="category__exercises-target-muscle-title">Бицепс</p>
                  <p class="category__exercises-target-muscle-title">Средняя часть спины</p>
                </div> -->
              </div>
              <div class="category__exercises-more-btn">
                <i class="ti-more"></i>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import AppSearchBlock from '@/components/basic/AppSearchBlock.vue'
import AppButton from '@/components/basic/AppButton.vue'
export default {
  components: {
    AppSearchBlock,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.exercises-list {
  // border: 1px solid red;
  min-width: 400px;
  max-width: 400px;
  .exercises-list__block-title {
    margin: 40px 20px 20px 20px;
    color: $green;
    font-size: 24px;
    font-weight: 600;
  }
  .exercises-list__content-wrapper {
    display: flex;
    flex-direction: column;
    .categories {
      // border: 1px solid red;
      margin-top: 20px;
      .category__element {
        // border: 1px solid red;
        margin-bottom: 20px;
        .category__title-block {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          padding: 10px;
          background: $green;
          color: $white;
          border-radius: 6px;
          .category__img {
            background: $white;
            color: $black;
            border: 1px solid $white;
            border-radius: 6px;
            height: 80px;
            width: 80px;
            min-width: 80px;
          }
          .category__title {
            // border: 1px solid red;
            margin-left: 20px;
            .category__title-text {
              // text-transform: uppercase;
              font-size: 20px;
              font-weight: 600;
            }
            .category__exercises-count {
              margin-top: 5px;
              font-size: 14px;
            }
          }
        }
        .category__exercises-list {
          // border: 1px solid red;
          margin-bottom: 20px;
          .category__exercises-list-item {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            margin-top: 10px;
            padding: 10px 20px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
            .category__exercises-drag-drop-btn {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-right: 20px;
              cursor: pointer;
              transition: $tr-02;
              i {
                margin-top: -10px;
              }
              i:first-child {
                margin-top: 0;
              }
            }
            .category__exercises-drag-drop-btn:hover {
              color: $green;
            }
            .category__exercises-title {
              // border: 1px solid red;
              // font-size: 18px;
              font-weight: 600;
              margin-right: 20px;
            }
            // .category__exercises-target-muscle {
            //   display: flex;
            //   flex-wrap: wrap;
            //   .category__exercises-target-muscle-title {
            //     margin-top: 6px;
            //     margin-right: 6px;
            //     padding: 4px 8px;
            //     background: $white;
            //     // background: $green;
            //     // color: $white;
            //     font-size: 12px;
            //     border: 1px solid $blockBorder;
            //     border-radius: 6px;
            //   }
            //   .category__exercises-target-muscle-title:last-child {
            //     margin-right: 0;
            //   }
            // }
            .category__exercises-more-btn {
              // border: 1px solid red;
              display: flex;
              align-items: center;
              margin-left: auto;
              transform: rotateZ(90deg);
              cursor: pointer;
              transition: $tr-02;
            }
            .category__exercises-more-btn:hover {
              color: $green;
            }
          }
        }
      }
    }
  }
}
</style>
