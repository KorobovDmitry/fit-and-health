<template>
  <div class="nutrients-overview">
    <p class="nutrients-overview__block-title">Содержание БЖУ в рационе</p>
    <div class="overview__elements">

      <div class="element">
        <div class="element__top">
          <p class="element__top-text">Белки:</p>
          <p class="element__top-value">80</p>
          <p class="element__top-scale">гр.</p>
        </div>
        <div class="element__chart">
          <div class="element__chart-background">
            <div class="element__chart-percent" style="width: 20%; background: #1296F9"></div>
          </div>
        </div>
        <div class="element__info">
          <p class="element__info-text">Расчетный максимум:</p>
          <p class="element__info-value">140</p>
          <p class="element__info-scale">гр.</p>
        </div>
      </div>

      <div class="element">
        <div class="element__top">
          <p class="element__top-text">Жиры:</p>
          <p class="element__top-value">20</p>
          <p class="element__top-scale">гр.</p>
        </div>
        <div class="element__chart">
          <div class="element__chart-background">
            <div class="element__chart-percent" style="width: 60%; background: #FFD700"></div>
          </div>
        </div>
        <div class="element__info">
          <p class="element__info-text">Расчетный максимум:</p>
          <p class="element__info-value">35</p>
          <p class="element__info-scale">гр.</p>
        </div>
      </div>

      <div class="element">
        <div class="element__top">
          <p class="element__top-text">Углеводы:</p>
          <p class="element__top-value">80</p>
          <p class="element__top-scale">гр.</p>
        </div>
        <div class="element__chart">
          <div class="element__chart-background">
            <div class="element__chart-percent" style="width: 80%; background: #E22355"></div>
          </div>
        </div>
        <div class="element__info">
          <p class="element__info-text">Расчетный максимум:</p>
          <p class="element__info-value">65</p>
          <p class="element__info-scale">гр.</p>
        </div>
      </div>

      <div class="element">
        <div class="element__top">
          <p class="element__top-text">Калорийность:</p>
          <p class="element__top-value">1462</p>
          <p class="element__top-scale">ккал.</p>
        </div>
        <div class="element__chart">
          <div class="element__chart-background">
            <div class="element__chart-percent" style="width: 40%; background: #795BF4"></div>
          </div>
        </div>
        <div class="element__info">
          <p class="element__info-text">Расчетный максимум:</p>
          <p class="element__info-value">1845</p>
          <p class="element__info-scale">ккал.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients-overview {
  // border: 1px solid red;
  // margin-bottom: 20px;
  width: 100%;
  .nutrients-overview__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .overview__elements {
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    // margin-bottom: 5px;
    .element {
      // margin-right: 5px;
      margin-bottom: 5px;
      padding: 10px 20px;
      flex: 1 1 auto;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .element__top {
        display: flex;
        align-items: center;
        .element__top-text {
          font-weight: 500;
        }
        .element__top-value {
          margin-left: auto;
          font-weight: 600;
        }
        .element__top-scale {
          margin-top: 2px;
          margin-left: 5px;
          font-size: 12px;
          font-weight: 600;
        }
      }
      .element__chart {
        margin-top: 5px;
        margin-bottom: 5px;
        .element__chart-background {
          position: relative;
          height: 6px;
          background: rgba(0,0,0,.1);
          border-radius: 6px;
          overflow: hidden;
          .element__chart-percent {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 6px;
            background: $green;
            border-radius: 6px;
          }
        }
      }
      .element__info {
        display: flex;
        align-items: flex-end;
        // font-size: 12px;
        color: $gray;
        .element__info-text {
          font-size: 12px;
          font-weight: 500;
        }
        .element__info-value {
          margin-left: 10px;
          font-size: 12px;
          font-weight: 500;
        }
        .element__info-scale {
          margin-left: 3px;
          font-size: 10px;
          font-weight: 500;
        }
      }
    }
    .element:last-child {
      margin-bottom: 0;
    }
  }
}

</style>