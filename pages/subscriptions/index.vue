<template>
  <div class="subscriptions-page">
    <div class="subscriptions-page__content">
      <subscriptions-search />
      <subscriptions-overview />
    </div>
  </div>
</template>

<script>
import SubscriptionsSearch from '@/components/subscriptions/SubscriptionsSearch/SubscriptionsSearch'
import SubscriptionsOverview from '@/components/subscriptions/SubscriptionsOverview/SubscriptionsOverview'
export default {
  components: {
    SubscriptionsSearch,
    SubscriptionsOverview
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.subscriptions-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .subscriptions-page__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
