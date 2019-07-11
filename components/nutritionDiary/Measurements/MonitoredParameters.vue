<template>
  <div class="monitored-parameters">
    <div class="options">
      <!-- <i class="optins__icon-btn ti-bookmark-alt"></i> -->
      <p class="options__title">Отслеживаемые параметры</p>
      <i class="optins__icon-btn ti-pencil-alt"></i>
      <!-- <div>Чекбоксы с вариантами отслеживаемых параметров выводят в список ниже только нужные блоки</div> -->
    </div>

    <p class="options-item">Рост</p>
    <p class="options-item">Вес</p>
    <weight-parameters />
    <p class="options-item">Процент подкожного жира</p>
    <p class="options-item">Грудь</p>
    <p class="options-item">Талия</p>
    <p class="options-item">Плечи</p>
    <p class="options-item">Бицепс</p>
    <p class="options-item">Бедро</p>
    <p class="options-item">Предплечье</p>
    <p class="options-item">Голень</p>
    <p class="options-item">Шея</p>
    <p class="options-item">Таз</p>

  </div>
</template>

<script>
import WeightParameters from '@/components/nutritionDiary/Measurements/Parameters/WeightParameters.vue'
export default {
  components: {
    WeightParameters
  },
  data () {
    return {
      heightValueEdit: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.monitored-parameters {
  // border: 1px solid red;
  margin-top: 40px;
  min-width: 35%;
  .options {
    // border: 1px solid red;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    // border-bottom: 1px dashed rgba(0,0,0,.2);
    .options__title {
      // border: 1px solid red;
      font-size: 24px;
    }
    .optins__icon-btn {
      // border: 1px solid red;
      margin-left: auto;
      font-size: 24px;
      cursor: pointer;
      transition: $tr-02;
    }
    .optins__icon-btn:hover {
      color: $green;
    }
  }
}

.options-item {
  border-top: 1px dashed rgba(0,0,0,.2);
  // border-bottom: 1px dashed rgba(0,0,0,.2);
  // border-radius: 6px;
  padding: 10px 20px;
  // margin-bottom: 10px;
  font-size: 18px;
  // font-weight: 600;
}

</style>
