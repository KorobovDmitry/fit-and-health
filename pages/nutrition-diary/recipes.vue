<template>
  <div class="recipes">
    <div class="recipes__content-wrapper">
      <p class="recipes__page-title">Рецепты</p>
      <div class="recipes__content">
        <filters />
        <results />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from '@/components/nutritionDiary/Recipes/Filters/Filters.vue'
import Results from '@/components/nutritionDiary/Recipes/Results/Results.vue'
export default {
  middleware: ['user-auth'],
  components: {
    Filters,
    Results
  },
  data () {
    return {

    }
  },
  beforeMount: function () {
    this.$store.commit('nutritionDiary/openSidebar')
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vars.scss";

.recipes {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .recipes__content-wrapper {
    // border: 1px solid red;
    margin-top: 60px;
    padding: 40px 40px 20px 40px;
    width: 100%;
    max-width: 1400px;
  }
  .recipes__page-title {
    text-align: center;
    font-size: 26px;
    @include for (1200) {
      // font-weight: 900;
    }
  }
  .recipes__content {
    // border: 1px solid red;
    display: flex;
  }
}

</style>
