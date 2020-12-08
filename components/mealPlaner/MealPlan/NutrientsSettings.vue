<template>
  <div class="nutrients-settings">

    <div class="chart">
      chart
    </div>

    <div class="nutrients-settings__nutrients">
      <div class="nutrients__target">
        <div class="target__element">
          <p class="element__text">Белки:</p>
          <div class="element__value">
            <p class="value__number">{{ targetProtein }}</p>
            <input
              ref="proteinInput"
              v-show="proteinIsEdit"
              class="value__input"
              type="text"
              v-model="targetProtein"
              @keyup.enter="proteinEdit()"
            >
          </div>
          <p class="element__scale">гр.</p>
          <i v-if="!proteinIsEdit" class="ti-pencil element__action-btn" @click="proteinEdit()"></i>
          <i v-if="proteinIsEdit" class="ti-save element__action-btn" @click="proteinEdit()"></i>
        </div>
        <div class="target__element">
          <p class="element__text">Жиры:</p>
          <div class="element__value">
            <p class="value__number">{{ targetFats }}</p>
            <input
              ref="fatsInput"
              v-show="fatsIsEdit"
              class="value__input"
              type="text"
              v-model.number="targetFats"
              @keyup.enter="fatsEdit()"
            >
          </div>
          <p class="element__scale">гр.</p>
          <i v-if="!fatsIsEdit" class="ti-pencil element__action-btn" @click="fatsEdit()"></i>
          <i v-if="fatsIsEdit" class="ti-save element__action-btn" @click="fatsEdit()"></i>
        </div>
        <div class="target__element">
          <p class="element__text">Углеводы:</p>
          <div class="element__value">
            <p class="value__number">{{ targetCarb }}</p>
            <input
              ref="carbInput"
              v-show="carbIsEdit"
              class="value__input"
              type="text"
              v-model="targetCarb"
              @keyup.enter="carbEdit()"
            >
          </div>
          <p class="element__scale">гр.</p>
          <i v-if="!carbIsEdit" class="ti-pencil element__action-btn" @click="carbEdit()"></i>
          <i v-if="carbIsEdit" class="ti-save element__action-btn" @click="carbEdit()"></i>
        </div>
      </div>
    </div>

    <div class="nutrients-settings__weight">
      <div class="weight__target">
        <div class="target__element">
          <p class="element__text">Текущий вес:</p>
          <div class="element__value">
            <p class="value__number">{{ currentWeight }}</p>
          </div>
          <p class="element__scale">кг.</p>
          <app-tooltip>
            <template v-slot:tooltipElement>
              <i class="ti-info-alt element__action-btn"></i>
            </template>
            <template v-slot:tooltipText>
              <p>Изменить значение текущего веса можно в разделе "Замеры и статистика"</p>
            </template>
          </app-tooltip>
        </div>
        <div class="target__element">
          <p class="element__text">Желаемый вес:</p>
          <div class="element__value">
            <p class="value__number">{{ targetWeight }}</p>
            <input
              ref="weightInput"
              v-show="weightIsEdit"
              class="value__input"
              type="text"
              v-model="targetWeight"
              @keyup.enter="weightEdit()"
            >
          </div>
          <p class="element__scale">кг.</p>
          <i v-if="!weightIsEdit" class="ti-pencil element__action-btn" @click="weightEdit()"></i>
          <i v-if="weightIsEdit" class="ti-save element__action-btn" @click="weightEdit()"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppTooltip from '@/components/basic/AppTooltip'

export default {
  components: {
    AppTooltip
  },
  data () {
    return {
      currentWeight: 72.3,
      proteinIsEdit: false,
      fatsIsEdit: false,
      carbIsEdit: false,
      weightIsEdit: false
    }
  },
  computed: {
    ...mapState({
      targetProtein: state => state.mealPlaner.mealPlanerInfo.targetProtein,
      targetFats: state => state.mealPlaner.mealPlanerInfo.targetFats,
      targetCarb: state => state.mealPlaner.mealPlanerInfo.targetCarb,
      targetWeight: state => state.mealPlaner.mealPlanerInfo.targetWeight,
    })
  },
  methods: {
    proteinEdit () {
      if (!this.proteinIsEdit) {
        this.proteinIsEdit = true
        this.$nextTick(() => {
          this.$refs.proteinInput.focus()
          this.$refs.proteinInput.select()
        })
      } else {
        this.proteinIsEdit = false
        // сохранить на сервере в бд
      }
    },
    fatsEdit () {
      if (!this.fatsIsEdit) {
        this.fatsIsEdit = true
        this.$nextTick(() => {
          this.$refs.fatsInput.focus()
          this.$refs.fatsInput.select()
        })
      } else {
        this.fatsIsEdit = false
        // сохранить на сервере в бд
      }
    },
    carbEdit () {
      if (!this.carbIsEdit) {
        this.carbIsEdit = true
        this.$nextTick(() => {
          this.$refs.carbInput.focus()
          this.$refs.carbInput.select()
        })
      } else {
        this.carbIsEdit = false
        // сохранить на сервере в бд
      }
    },
    weightEdit () {
      if (!this.weightIsEdit) {
        this.weightIsEdit = true
        this.$nextTick(() => {
          this.$refs.weightInput.focus()
          this.$refs.weightInput.select()
        })
      } else {
        this.weightIsEdit = false
        // сохранить на сервере в бд
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients-settings {
  // border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 10px;
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .chart {
    flex: 1 1 auto;
    height: 200px;
  }
  .nutrients-settings__nutrients {
    display: flex;
    padding-top: 10px;
    border-top: 1px dashed $blockBorder;
    .nutrients__target {
      flex: 1 1 auto;
      padding: 0 10px;
      .target__element {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .element__text {
          font-weight: 500;
        }
        .element__value {
          position: relative;
          margin-left: auto;
          .value__number {
            margin-right: 5px;
            font-weight: 600;
          }
          .value__input {
            position: absolute;
            top: 0;
            right: 0;
            padding: 0px 5px;
            width: 70px;
            background: $white;
            outline: none;
            border: none;
            border-bottom: 1px solid $blockBorder;
            text-align: right;
            color: $green;
            font-family: $fontMontserrat;
            font-weight: 600;
          }
          .value__input::selection {
            color: $white;
            background: $green;
          }
        }
        .element__scale {
          margin-top: 2px;
          font-size: 12px;
          font-weight: 600;
        }
        .element__action-btn {
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .target__element:last-child {
        margin-bottom: 0;
      }
    }
  }
  .nutrients-settings__weight {
    display: flex;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed $blockBorder;
    .weight__target {
      flex: 1 1 auto;
      padding: 0 10px;
      .target__element {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .element__text {
          font-weight: 500;
        }
        .element__value {
          position: relative;
          margin-left: auto;
          .value__number {
            margin-right: 5px;
            font-weight: 600;
          }
          .value__input {
            position: absolute;
            top: 0;
            right: 0;
            padding: 0px 5px;
            width: 70px;
            background: $white;
            outline: none;
            border: none;
            border-bottom: 1px solid $blockBorder;
            text-align: right;
            color: $green;
            font-family: $fontMontserrat;
            font-weight: 600;
          }
          .value__input::selection {
            color: $white;
            background: $green;
          }
        }
        .element__scale {
          margin-top: 2px;
          font-size: 12px;
          font-weight: 600;
        }
        .element__action-btn {
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .target__element:last-child {
        margin-bottom: 0;
      }
    }
  }
  
}

</style>