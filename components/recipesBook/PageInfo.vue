<template>
  <div class="overview-recipes">
    <div class="overview-recipes__info">
      <div class="info__element">
        <p class="info__element-text">Всего рецептов</p>
        <p class="info__element-value">{{ 958 }}</p>
      </div>
      <div class="info__element">
        <p class="info__element-text">Избранное</p>
        <p class="info__element-value">{{ 12 }}</p>
      </div>
      <div class="info__element">
        <p class="info__element-text">Мои рецепты</p>
        <p class="info__element-value">{{ 5 }}</p>
      </div>
    </div>
    <div class="add-recipes-btn__wrapper">
      <app-button sizeXL uppercase right @click.native="openModal()">Добавить рецепт</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
export default {
  components: {
    AppButton
  },
  methods: {
    openModal () {
      console.log('open modal add recipe')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.overview-recipes {
  // border: 1px solid red;
  display: flex;
  flex: 1 1 auto;
  margin-bottom: 40px;
  .overview-recipes__info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .info__element {
      // border: 1px solid red;
      padding: 0 40px;
      border-right: 1px solid rgba(0,0,0,.1);
      .info__element-text {
        font-size: 18px;
      }
      .info__element-value {
        color: $green;
        font-size: 32px;
        font-weight: 600;
      }
    }
    .info__element:first-child {
      padding-left: 0;
    }
    .info__element:last-child {
      border-right: none;
    }
  }
  .add-recipes-btn__wrapper {
    // border: 1px solid red;
    display: flex;
    margin-left: auto;
  }
}

</style>
