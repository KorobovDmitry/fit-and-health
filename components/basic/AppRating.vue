<template>
  <div ref="rating" class="rating">
    <i class="ti-crown rating__star" :class="[{'green': activeStars[0]}]"></i>
    <i class="ti-crown rating__star" :class="[{'green': activeStars[1]}]"></i>
    <i class="ti-crown rating__star" :class="[{'yellow': activeStars[2]}]"></i>
    <i class="ti-crown rating__star" :class="[{'yellow': activeStars[3]}]"></i>
    <i class="ti-crown rating__star" :class="[{'red': activeStars[4]}]"></i>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number
  },
  data () {
    return {}
  },
  computed: {
    activeStars () {
      let activeElements = []
      for (let i = 0; i < 5; i++) {
        if (i < this.rating) {
          activeElements.push(true)
        } else {
          activeElements.push(false)
        }
      }
      return activeElements
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.rating {
  // border: 1px solid red;
  .rating__star {
    color: $gray;
    font-size: 14px;
  }
  .green {
    color: $green;
  }
  .yellow {
    color: $yellow;
  }
  .red {
    color: $red;
  }
}

</style>