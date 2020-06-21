<template>
  <div class="training-days">
    <app-block-title>Тренировочные дни</app-block-title>
    <div class="training-days__elements">
      <div class="element element--active" @click="toggleTrainingDay($event)">
        <p class="element__title">День 1. Ноги и плечи</p>
        <div class="element__last-training">
          <p class="last-training__text">Последняя тренировка:</p>
          <p class="last-training__date">суббота, 10 декабря 2019</p>
        </div>
      </div>
      <div v-for="(item, index) in 4" :key="index" class="element" @click="toggleTrainingDay($event)">
        <p class="element__title">День 1. Ноги и плечи</p>
        <div class="element__last-training">
          <p class="last-training__text">Последняя тренировка:</p>
          <p class="last-training__date">суббота, 10 декабря 2019</p>
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
  },
  methods: {
    toggleTrainingDay ($event) {
      console.log(this)
      $event.target.classList.add('element--active')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.training-days {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .training-days__elements {
    // border: 1px solid red;
    flex: 1 1 auto;
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $btnHoverShadow;
    .element {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
      padding: 10px 20px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      transition: $tr-02;
      cursor: pointer;
      .element__title {
        font-size: 18px;
        font-weight: 500;
      }
      .element__last-training {
        transition: $tr-02;
        .last-training__text {
          margin-top: 5px;
          text-transform: uppercase;
          font-size: 12px;
        }
        .last-training__date {
          font-size: 12px;
        }
      }
    }
    .element:last-child {
      margin-bottom: 0;
    }
    .element:hover {
      box-shadow: $boxShadow;
    }
    .element--active {
      border: 2px solid rgba(0,0,0,.3);
      // box-shadow: $boxShadow;
      padding: 20px;
      .element__last-training {
        margin-top: 10px;
      }
    }
  }
}

</style>