<template>
  <div class="nutrients-settings">
    <p class="nutrients-settings__title">Рацион</p>
    <p class="nutrients-settings__current-week">14 Декабря 2019 - 20 Декабря 2019</p>

    <div class="nutrients">
      <p class="nutrients__title">Кол-во БЖУ на 1 кг. массы тела</p>
      <ul class="nutrients__list">
        <li class="nutrients__list-item">
          <div class="nutrients__list-item-left">
            <p class="nutrients__list-item-text">Белки:</p>
          </div>
          <div class="nutrients__list-item-right">
            <input
              v-show="proteinEditActive"
              ref="inputProtein"
              class="nutrients__list-item-value-input"
              type="text"
              :value="targetProtein"
              @keypress.enter="closeInputEdit('protein')"
            >
            <p v-show="!proteinEditActive" class="nutrients__list-item-value">{{ targetProtein }}</p>
            <p class="nutrients__list-item-scale">гр.</p>
            <i
              v-show="!proteinEditActive"
              class="nutrients__list-item-icon ti-pencil"
              @click="openInputEdit('protein')"
            ></i>
            <i
              v-show="proteinEditActive"
              class="nutrients__list-item-icon ti-save"
              @click="closeInputEdit('protein')"
            ></i>
          </div>
        </li>
        <li class="nutrients__list-item">
          <div class="nutrients__list-item-left">
            <p class="nutrients__list-item-text">Жиры:</p>
          </div>
          <div class="nutrients__list-item-right">
            <input
              v-show="fatsEditActive"
              ref="inputFats"
              class="nutrients__list-item-value-input"
              type="text"
              :value="targetFats"
              @keypress.enter="closeInputEdit('fats')"
            >
            <p v-show="!fatsEditActive" class="nutrients__list-item-value">{{ targetFats }}</p>
            <p class="nutrients__list-item-scale">гр.</p>
            <i
              v-show="!fatsEditActive"
              class="nutrients__list-item-icon ti-pencil"
              @click="openInputEdit('fats')"
            ></i>
            <i
              v-show="fatsEditActive"
              class="nutrients__list-item-icon ti-save"
              @click="closeInputEdit('fats')"
            ></i>
          </div>
        </li>
        <li class="nutrients__list-item">
          <div class="nutrients__list-item-left">
            <p class="nutrients__list-item-text">Углеводы:</p>
          </div>
          <div class="nutrients__list-item-right">
            <input
              v-show="carbEditActive"
              ref="inputCarb"
              class="nutrients__list-item-value-input"
              type="text"
              :value="targetCarb"
              @keypress.enter="closeInputEdit('carb')"
            >
            <p v-show="!carbEditActive" class="nutrients__list-item-value">{{ targetCarb }}</p>
            <p class="nutrients__list-item-scale">гр.</p>
            <i
              v-show="!carbEditActive"
              class="nutrients__list-item-icon ti-pencil"
              @click="openInputEdit('carb')"
            ></i>
            <i
              v-show="carbEditActive"
              class="nutrients__list-item-icon ti-save"
              @click="closeInputEdit('carb')"
            ></i>
          </div>
        </li>
      </ul>
    </div>

    <div class="weight__wrapper">
      <div class="weight__left-block">
        <p class="weight__text">Текущий вес:</p>
      </div>
      <div class="weight__right-block">
        <!-- <input type="text" value="2"> -->
        <p class="weight__value">{{ currentWeight }}</p>
        <p class="weight__scale">кг.</p>
        <i class="weight__icon ti-info-alt"></i>
      </div>
    </div>
    <div class="weight__wrapper">
      <div class="weight__left-block">
        <p class="weight__text">Желаемый вес:</p>
      </div>
      <div class="weight__right-block">
        <input
          v-show="targetWeightEditActive"
          ref="inputTargetWeight"
          class="weight__value-input"
          type="text"
          :value="targetWeight"
          @keypress.enter="closeInputEdit('targetWeight')"
        >
        <p v-show="!targetWeightEditActive" class="weight__value">{{ targetWeight }}</p>
        <p class="weight__scale">кг.</p>
        <i
          v-show="!targetWeightEditActive"
          class="weight__icon ti-pencil"
          @click="openInputEdit('targetWeight')"
        ></i>
        <i
          v-show="targetWeightEditActive"
          class="weight__icon ti-save"
          @click="closeInputEdit('targetWeight')"
        ></i>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      proteinEditActive: false,
      fatsEditActive: false,
      carbEditActive: false,
      targetWeightEditActive: false
    }
  },
  computed: {
    targetProtein () {
      return this.$store.getters['mealPlaner/getTargetProtein']
    },
    targetFats () {
      return this.$store.getters['mealPlaner/getTargetFats']
    },
    targetCarb () {
      return this.$store.getters['mealPlaner/getTargetCarb']
    },
    currentWeight () {
      return this.$store.getters['mealPlaner/getCurrentWeight']
    },
    targetWeight () {
      return this.$store.getters['mealPlaner/getTargetWeight']
    }
  },
  methods: {
    openInputEdit (targetNutrient) {
      switch (targetNutrient) {
        case 'protein':
          this.proteinEditActive = true
          setTimeout(() => {
            this.$refs.inputProtein.focus()
            this.$refs.inputProtein.select()
          }, 50)
          break
        case 'fats':
          this.fatsEditActive = true
          setTimeout(() => {
            this.$refs.inputFats.focus()
            this.$refs.inputFats.select()
          }, 50)
          break
        case 'carb':
          this.carbEditActive = true
          setTimeout(() => {
            this.$refs.inputCarb.focus()
            this.$refs.inputCarb.select()
          }, 50)
          break
        case 'targetWeight':
          this.targetWeightEditActive = true
          setTimeout(() => {
            this.$refs.inputTargetWeight.focus()
            this.$refs.inputTargetWeight.select()
          }, 50)
          break
        default:
          console.log('openInputEdit func argument error')
          break
      }
    },
    closeInputEdit (targetNutrient) {
      switch (targetNutrient) {
        case 'protein':
          this.proteinEditActive = false
          this.changeNutrients(targetNutrient)
          break
        case 'fats':
          this.fatsEditActive = false
          this.changeNutrients(targetNutrient)
          break
        case 'carb':
          this.carbEditActive = false
          this.changeNutrients(targetNutrient)
          break
        case 'targetWeight':
          this.targetWeightEditActive = false
          this.changeNutrients(targetNutrient)
          break
        default:
          console.log('closeInputEdit func argument error')
          break
      }
    },
    changeNutrients (nutrient) {
      switch (nutrient) {
        case 'protein':
          this.$store.state.mealPlaner.nutrients.protein = this.$refs.inputProtein.value
          break
        case 'fats':
          this.$store.state.mealPlaner.nutrients.fats = this.$refs.inputFats.value
          break
        case 'carb':
          this.$store.state.mealPlaner.nutrients.carb = this.$refs.inputCarb.value
          break
        case 'targetWeight':
          this.$store.state.userProfile.targetWeight = this.$refs.inputTargetWeight.value
          break
        default:
          console.log('changeNutrients func argument error')
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.nutrients-settings {
  // border: 1px solid red;
  margin-top: 40px;
  // margin-right: 40px;
  // min-width: 270px;
  // width: 100%;
  .nutrients-settings__title {
    font-size: 24px;
    // font-weight: 600;
  }
  .nutrients-settings__current-week {
    margin-top: 10px;
    color: $gray-dark;
    font-size: 14px;
  }
  .nutrients {
    // border: 1px solid red;
    // width: 300px;
    min-width: 300px;
    margin-top: 24px;
    .nutrients__title {
      font-size: 18px;
      font-weight: 500;
    }
    .nutrients__list {
      // border: 1px solid blue;
      margin-top: 10px;
      margin-bottom: 20px;
      .nutrients__list-item {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        margin: 6px 0;
        // justify-content: space-between;
      }
      .nutrients__list-item-left {
        // border: 1px solid red;
        .nutrients__list-item-text {
          // border: 1px solid red;
          font-size: 18px;
        }
      }
      .nutrients__list-item-right {
        // border: 1px solid red;
        position: relative;
        display: flex;
        align-items: center;
        margin-left: auto;
        .nutrients__list-item-value-input {
          position: absolute;
          top: 0px;
          right: 78px;
          background: transparent;
          width: 55px;
          padding: 0 7px;
          text-align: right;
          font-size: 18px;
          font-family: $fontMontserrat;
          font-weight: 600;
          outline: none;
          border: none;
          border-bottom: 2px solid $green;
        }
        .nutrients__list-item-value-input::selection {
          background: $green;
          color: $white;
        }
        .nutrients__list-item-value {
          // border: 1px solid red;
          // margin-right: 20px;
          font-size: 18px;
          font-weight: 600;
        }
        .nutrients__list-item-scale {
          margin-left: 10px;
          margin-right: 20px;
          font-size: 18px;
        }
        .nutrients__list-item-icon {
          // border: 1px solid red;
          padding: 2px 6px;
          // margin-right: 12px;
          font-family: $fontThemify;
          font-size: 18px;
          cursor: pointer;
          transition: $tr-02;
        }
        .nutrients__list-item-icon:hover {
          color: $green;
          transition: $tr-02;
        }
      }
    }
  }
  .weight__wrapper {
    display: flex;
    align-items: center;
    margin: 6px 0;
    .weight__left-block {
      .weight__text {
        font-size: 18px;
      }
    }
    .weight__right-block {
      position: relative;
      display: flex;
      align-items: center;
      margin-left: auto;
      .weight__value {
        font-size: 18px;
        font-weight: 600;
      }
      .weight__scale {
        font-size: 18px;
      }
      .weight__value-input {
        position: absolute;
        top: 0px;
        right: 76px;
        background: transparent;
        width: 55px;
        padding: 0 7px;
        text-align: right;
        font-size: 18px;
        font-family: $fontMontserrat;
        font-weight: 600;
        outline: none;
        border: none;
        border-bottom: 2px solid $green;
      }
      .weight__value-input::selection {
        background: $green;
        color: $white;
      }
      .weight__scale {
        margin-left: 10px;
        margin-right: 20px;
      }
      .weight__icon {
        // border: 1px solid red;
        padding: 2px 6px;
        // margin-right: 12px;
        font-family: $fontThemify;
        font-size: 18px;
        cursor: pointer;
        transition: $tr-02;
      }
      .weight__icon:hover {
        color: $green;
        transition: $tr-02;
      }
    }
  }
}
</style>
