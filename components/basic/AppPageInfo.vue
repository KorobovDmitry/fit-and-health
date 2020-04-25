<template>
  <div class="page-info__wrapper">

    <div class="page-info">
      <div v-for="(element, index) in infoElements" :key="index" class="page-info__element">
        <p class="element__text">{{ element.title }}</p>
        <p class="element__value">{{ element.value }}</p>
      </div>
    </div>

    <app-button sizeXL uppercase right @click.native="btnHandler()">{{ btnTitle }}</app-button>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'

export default {
  props: {
    infoElements: Array,
    btnTitle: String
  },
  components: {
    AppButton
  },
  methods: {
    btnHandler () {
      this.$emit('btnAction')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.page-info__wrapper {
  // border: 1px solid red;
  display: flex;
  flex: 1 1 auto;
  margin-bottom: 40px;
  .page-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .page-info__element {
      // border: 1px solid red;
      padding: 0 40px;
      border-right: 1px solid rgba(0,0,0,.1);
      .element__text {
        font-size: 18px;
      }
      .element__value {
        color: $green;
        font-size: 32px;
        font-weight: 600;
      }
    }
    .page-info__element:first-child {
      padding-left: 0px;
    }
    .page-info__element:last-child {
      margin-right: auto;
      border-right: none;
    }
  }
}

</style>