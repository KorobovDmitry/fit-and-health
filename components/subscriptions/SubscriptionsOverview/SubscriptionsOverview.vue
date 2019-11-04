<template>
  <div class="subscriptions-overview">

    <div class="subscriptions-overview__left-side">
      <selected-user-main-info />
      <user-all-time-stats />
    </div>

    <div class="subscriptions-overview__right-side">
      <selected-user-last-events />
    </div>

  </div>
</template>

<script>
import UserAllTimeStats from '@/components/home/MainInfo/UserAllTimeStats'
import SelectedUserMainInfo from '@/components/subscriptions/SubscriptionsOverview/SelectedUserMainInfo'
import SelectedUserLastEvents from '@/components/subscriptions/SubscriptionsOverview/SelectedUserLastEvents'
export default {
  components: {
    SelectedUserMainInfo,
    SelectedUserLastEvents,
    UserAllTimeStats
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.subscriptions-overview {
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  .subscriptions-overview__left-side {
    margin-left: 40px;
    flex: 1 1 auto;
  }
  .subscriptions-overview__right-side {
    margin-left: 40px;
    width: 400px;
    min-width: 400px;
    max-width: 400px;
  }
}

</style>
