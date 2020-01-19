<template>
  <div class="tracking-params">

    <app-block-title>Отслеживаемые параметры</app-block-title>

    <div class="tracking-params__scrolling-items">
      <div class="tracking-parameter tracking-parameter--active">
        <div class="tracking-parameter__top">
          <p class="tracking-parameter__title">Вес</p>
          <i class="ti-more tracking-parameter__action-btn"></i>
        </div>
        <div class="tracking-parameter__bottom">
          <div class="tracking-parameter__chart">chart</div>
          <div class="tracking-parameter__last-value">
            <p class="last-value">78.3 кг</p>
            <div class="last-value__chenge-percent">
              <i class="ti-arrow-down chenge-percent__icon"></i>
              <p class="chenge-percent__value">- 1.23%</p>
            </div>
          </div>
        </div>
      </div>
      <div v-for="(item, index) in 4" :key="index" class="tracking-parameter">
        <div class="tracking-parameter__top">
          <p class="tracking-parameter__title">Вес</p>
          <i class="ti-more tracking-parameter__action-btn"></i>
        </div>
        <div class="tracking-parameter__bottom">
          <div class="tracking-parameter__chart">chart</div>
          <div class="tracking-parameter__last-value">
            <p class="last-value">78.3 кг</p>
            <div class="last-value__chenge-percent">
              <i class="ti-arrow-down chenge-percent__icon"></i>
              <p class="chenge-percent__value">- 1.23%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.tracking-params {
  // border: 1px solid red;
  margin-bottom: 20px;
  .tracking-params__scrolling-items {
    // border: 1px solid red;
    display: flex;
    // margin-top: 10px;
    // max-width: calc(100% - 440px);
    overflow: hidden;
    .tracking-parameter {
      margin-right: 10px;
      padding: 10px;
      min-width: 200px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .tracking-parameter__top {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .tracking-parameter__title {
          // font-size: 14px;
          font-weight: 500;
        }
        .tracking-parameter__action-btn {
          margin-right: 5px;
        }
      }
      .tracking-parameter__bottom {
        // border: 1px solid red;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        // .tracking-parameter__chart {
        //   border: 1px solid red;
        // }
        .tracking-parameter__last-value {
          // border: 1px solid red;
          .last-value {
            // margin-top: 10px;
            text-align: right;
            // font-size: 16px;
            font-weight: 600;
          }
          .last-value__chenge-percent {
            margin-top: 10px;
            display: flex;
            align-items: center;
            color: $green;
            .chenge-percent__icon {
              margin-right: 5px;
              padding: 4px;
              background: $green;
              color: $white;
              font-size: 8px;
              letter-spacing: normal;
              line-height: 8px;
              // border: 1px solid $green;
              border-radius: 50%;
            }
            .chenge-percent__value {
              // color: $green;
              font-size: 12px;
              font-weight: 500;
            }
          }
        }
      }
    }
    .tracking-parameter--active {
      // background: $green;
      // color: $white;
      border: 2px solid $green;
      // .tracking-parameter__bottom {
      //   .tracking-parameter__last-value {
      //     .chenge-percent__icon {
      //       color: $white;
      //     }
      //     .chenge-percent__value {
      //       color: $white;
      //     }
      //   }
      // }
    }
  }
}
</style>