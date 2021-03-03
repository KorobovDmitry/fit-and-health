<template>
  <div class="challenges-constructor">
    <app-page-title>Конструктор вызывов</app-page-title>
    <div class="callenges-constructor__content">
      <challenges-editor />
      <div class="additional-info-and-exercises">
        <additional-info />
        <exercises />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import ChallengesEditor from '@/components/challengesConstructor/ChallengesEditor/index'
import AdditionalInfo from '@/components/challengesConstructor/AdditionalInfo/index'
import Exercises from '@/components/challengesConstructor/Exercises/index'

export default {
  components: {
    AppPageTitle,
    ChallengesEditor,
    AdditionalInfo,
    Exercises
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.challenges-constructor {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .callenges-constructor__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;

    .additional-info-and-exercises {
      margin-left: 40px;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
    }
  }
}

</style>
