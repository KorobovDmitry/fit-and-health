<template>
  <div class="user-params-overview">

    <app-block-title>Параметры пользователя</app-block-title>

    <!-- user-params-overview -->
    <div class="muscle-img">
      <img src="https://kak-nakachat.pro/images/M/Obshiy-vid-mobile.png" alt="">
    </div>
    <div class="user-parameters">
      <div class="user-parameters__general">
        <div class="general__element">
          <p class="element__text">Возраст:</p>
          <p class="element__value">30</p>
        </div>
        <div class="general__element">
          <p class="element__text">Вес:</p>
          <p class="element__value">80</p>
        </div>
        <div class="general__element">
          <p class="element__text">Рост:</p>
          <p class="element__value">174</p>
        </div>
        <!-- <div class="general__element">
          <p class="element__text">ИМТ</p>
          <p class="element__value">25</p>
        </div> -->
      </div>
  
      <div class="user-parameters__additional">
        <div class="additional__element">
          <p class="element__text">Мышечной ткани:</p>
          <p class="element__value">0 %</p>
        </div>
        <div class="additional__element">
          <p class="element__text">Жировой ткани:</p>
          <p class="element__value">0 %</p>
        </div>
        <div class="additional__element">
          <p class="element__text">Воды в организме:</p>
          <p class="element__value">0 %</p>
        </div>
        <div class="additional__element">
          <p class="element__text">Костной ткани:</p>
          <p class="element__value">0 %</p>
        </div>
        <div class="additional__element">
          <p class="element__text">ИМТ:</p>
          <p class="element__value">25</p>
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
@import '@/assets/scss/vars.scss';

.user-params-overview {
  // border: 1px solid red;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .muscle-img {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    margin-bottom: 5px;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    img {
      height: 100%;
    }
  }
  .user-parameters {
    .user-parameters__general {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      padding: 10px 0;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .general__element {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid $blockBorder;
        .element__text {
          font-size: 14px;
          font-weight: 500;
        }
        .element__value {
          margin-top: 5px;
          color: $green;
          font-size: 20px;
          font-weight: 600;
        }
      }
      .general__element:last-child {
        border-right: none;
      }
    }
    .user-parameters__additional {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .additional__element {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        .element__text {
          font-size: 14px;
          font-weight: 500;
        }
        .element__value {
          margin-top: 5px;
          color: $green;
          font-size: 20px;
          font-weight: 600;
        }
      }
      .additional__element:nth-child(1) {
        border-right: 1px solid $blockBorder;
        border-bottom: 1px solid $blockBorder;
      }
      .additional__element:nth-child(2) {
        border-bottom: 1px solid $blockBorder;
      }
      .additional__element:nth-child(3) {
        border-right: 1px solid $blockBorder;
      }
      .additional__element:nth-child(5) {
        padding-bottom: 0;
        width: 100%;
        border-top: 1px solid $blockBorder;
      }
    }
  }
}

</style>
