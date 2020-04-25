<template>
  <div class="meal-plans">
    <app-page-title>Сохраненные рационы</app-page-title>
    <div class="meal-plans__content">

      <app-page-info
        :infoElements="pageInfoElements"
        btnTitle="Добавить рацион"
        @btnAction="openModal()"
      />

      <div class="meal-plans__search-and-overview">
        <meal-plan-search />
        <meal-plan-overview />
      </div>

    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppPageInfo from '@/components/basic/AppPageInfo'
import MealPlanSearch from '@/components/mealPlans/MealPlanSearch'
import MealPlanOverview from '@/components/mealPlans/MealPlanOverview'

export default {
  components: {
    AppPageTitle,
    AppPageInfo,
    MealPlanSearch,
    MealPlanOverview
  },
  data () {
    return {
      pageInfoElements: [
        {
          title: 'Всего рационов',
          value: 14
        },
        {
          title: 'Избранное',
          value: 2
        },
        {
          title: 'Мои рационы',
          value: 4
        }
      ]
    }
  },
  methods: {
    openModal () {
      console.log('Открыть модальное окно "Добавить рацион"')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-plans {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .meal-plans__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
    .meal-plans__search-and-overview {
      // border: 1px solid red;
      display: flex;
    }
  }
}

</style>
