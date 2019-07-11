<template>
  <div class="parameter">
    <div class="parameter__date">
      <p class="parameter__date-last-changes">08 июня 2019 г.</p>
      <i class="parameter__edit ti-pencil-alt"></i>
      <!-- <i class="parameter__edit ti-save"></i> -->
    </div>

    <div class="parameter__options">
      <div class="parameter__value-block">
        <p class="parameter__value-title">Текущий вес</p>
        <div class="parameter__value-wrapper">
          <!-- <input class="parameter__value-input" type="text" value="83.2"> -->
          <p class="parameter__value">{{ currentWeight[currentWeight.length - 1] }}</p>
          <p class="parameter__value-scale">кг.</p>
        </div>
      </div>

      <div class="completed-percent__chart">
        <p class="completed-percent__value">{{ completedPercent }}%</p>
      </div>

      <div class="parameter__value-block">
        <p class="parameter__value-title">Желаемый вес</p>
        <div class="parameter__value-wrapper">
          <!-- <input class="parameter__value-input" type="text" value="83.2"> -->
          <p class="parameter__value">{{ targetWeight }}</p>
          <p class="parameter__value-scale">кг.</p>
        </div>
      </div>
    </div>

    <div class="parameter__info">
      <div class="parameter__info-wrapper">
        <p class="parameter__info-text">Начальный вес:</p>
        <p class="parameter__info-value">86.6</p>
        <p class="parameter__info-scale">кг.</p>
        <i class="parameter__info-icon ti-pencil"></i>
      </div>
      <div class="parameter__info-wrapper">
        <p class="parameter__info-text">Изменение веса:</p>
        <p class="parameter__info-value">{{ lostWeight }}</p>
        <p class="parameter__info-scale">гр.</p>
        <i class="parameter__info-icon ti-info-alt"></i>
      </div>
      <div class="parameter__info-wrapper">
        <p class="parameter__info-text">Кол-во дней до цели:</p>
        <p class="parameter__info-value">{{ dayToTarget }}</p>
        <p class="parameter__info-scale">дней</p>
        <i class="parameter__info-icon ti-info-alt"></i>
      </div>

      <div class="period__chart-wrapper">
        <div class="period__chart-title-wrapper">
          <p class="period__chart-title">График изменений за</p>
          <p>все время</p>
          <p>год</p>
          <p>пол года</p>
          <p>месяц</p>
        </div>
        <div class="period__chart">
          график - канвас
        </div>
      </div>

      <div class="chart-init">
        <app-button size18px fillArea uppercase>Скрыть график</app-button>
        <!-- <app-button size18px fillArea uppercase>Показать график</app-button> -->
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
      currentWeight: this.$store.state.userProfile.currentWeight,
      targetWeight: this.$store.state.userProfile.targetWeight
    }
  },
  computed: {
    completedPercent () {
      let percent = (this.$store.state.userProfile.initialWeight - this.$store.state.userProfile.currentWeight[this.$store.state.userProfile.currentWeight.length - 1]) / (this.$store.state.userProfile.initialWeight - this.$store.state.userProfile.targetWeight) * 100
      return Math.round(percent * 100) / 100
    },
    lostWeight () {
      let weights = []
      let lost = []
      for (let i = 0; i <= 7; i++) {
        if (this.currentWeight[i] !== undefined) {
          weights.push(this.currentWeight[this.currentWeight.length - (1 + i)])
        }
      }
      weights.reverse()
      let lostedWeight = 0
      for (let i = 0; i < weights.length - 1; i++) {
        lost.push(Math.round((weights[i] - weights[i + 1]) * 100) / 100)
        lostedWeight += lost[i]
      }
      lostedWeight = lostedWeight / lost.length
      if (lostedWeight > 0) {
        return Math.round(lostedWeight * 1000) * -1
      } else {
        return `+${Math.round(lostedWeight * 1000) * -1}`
      }
    },
    dayToTarget () {
      let weight = this.currentWeight[this.currentWeight.length - 1]
      let day = 0
      if (this.lostWeight < 0) {
        for (let i = weight; i > this.targetWeight; i = i + this.lostWeight / 1000) {
          day++
        }
      } else {
        day = 'бесконечность'
      }
      return day
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.parameter {
  // border: 1px solid red;
  // margin-left: 20px;
  // margin-right: 20px;
  margin-bottom: 20px;
  background: $white;
  // border: 1px solid rgba($green, 1);
  // border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  // overflow: hidden;
  .parameter__date {
    // border: 1px solid red;
    // padding: 6px 20px;
    // margin-left: 40px;
    // text-align: right;
    background: $green;
    // border-bottom: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .parameter__date-last-changes {
      // border: 1px solid red;
      padding: 10px 20px;
      color: $white;
      // color: $gray-light;
      // font-size: 14px;
      font-weight: 400;
    }
    .parameter__edit {
      // border: 1px solid red;
      padding: 6px 20px;
      color: $white;
      font-size: 22px;
      cursor: pointer;
      // transition: $tr-01;
    }
  }
  .parameter__options {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding: 20px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    .parameter__value-block {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 140px;
      .parameter__value-title {
        font-size: 16px;
        font-weight: 600;
      }
      .parameter__value-wrapper {
        // border: 1px solid red;
        display: flex;
        align-items: flex-end;
        margin-top: 6px;
        .parameter__value {
          color: $green;
          font-size: 24px;
          font-weight: 600;
        }
        .parameter__value-input {
          width: 40px;
        }
        .parameter__value-scale {
          margin-left: 10px;
          margin-bottom: 1px;
          color: $green;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }

  .completed-percent__chart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 10px solid $green;
    border-radius: 50%;
    .completed-percent__value {
      font-size: 14px;
      font-weight: 600;
    }
  }

  .parameter__info {
    display: flex;
    flex-direction: column;
    // background: $green;
    // border: 1px solid rgba(0,0,0,.2);
    .parameter__info-wrapper {
      margin-top: 10px;
      // padding: 10px 20px;
      display: flex;
      align-items: center;
      background: $green;
      color: $white;
      border-radius: 6px;
    }
    .parameter__info-text {
      padding: 10px 0;
      margin-left: 20px;
      // padding-left: 20px;
      // font-size: 14px;
    }
    .parameter__info-value {
      // border: 1px solid red;
      margin-left: 20px;
      // color: $green;
      font-size: 16px;
      font-weight: 600;
    }
    .parameter__info-scale {
      // margin-top: 4px;
      margin-left: 6px;
      margin-right: 20px;
      font-size: 14px;
      font-weight: 600;
    }
    .parameter__info-icon {
      margin-left: auto;
      padding: 6px 20px;
      font-size: 22px;
      cursor: pointer;
    }
  }

  .period__chart-wrapper {
    margin-top: 10px;
    padding: 20px;
    // width: 100%;
    // height: 300px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
  }

  .chart-init {
    // border: 1px solid blue;
    margin-top: 10px;
    // background: $green;
    color: $white;
    // padding: 10px 20px;
    text-align: center;
    border-radius: 6px;
  }
}
</style>
