<template>
  <div class="tracking-params">
    <p class="tracking-params__block-title">Отслеживаемые параметры</p>
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
      <div v-for="(item, index) in 5" :key="index" class="tracking-parameter">
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
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.tracking-params {
  // max-width: 100%;
  .tracking-params__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .tracking-params__scrolling-items {
    // border: 1px solid red;
    display: flex;
    // margin-top: 10px;
    // max-width: 100%;
    // overflow: hidden;
    .tracking-parameter {
      margin-right: 20px;
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
        .tracking-parameter__chart {
          // border: 1px solid red;
        }
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
      background: $green;
      color: $white;
      border: 1px solid transparent;
      .tracking-parameter__bottom {
        .tracking-parameter__last-value {
          .chenge-percent__icon {
            color: $white;
          }
          .chenge-percent__value {
            color: $white;
          }
        }
      }
    }
  }
}
</style>