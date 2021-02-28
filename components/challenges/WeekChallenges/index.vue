<template>
  <div class="week-challenges">
    <main-challenge />
    <div class="second-and-third-challenges">
      <challenge />
      <challenge />
    </div>
  </div>
</template>

<script>
import MainChallenge from '@/components/challenges/WeekChallenges/MainChallenge'
import Challenge from '@/components/challenges/WeekChallenges/Challenge'

export default {
  components: {
    MainChallenge,
    Challenge
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.week-challenges {
  // border: 1px solid red;
  flex: 1 1 auto;
  .second-and-third-challenges {
    display: flex;
  }
}
</style>
