<template>
  <div class="challenge-page">
    <app-page-title>Вызовы</app-page-title>
    <div class="callenge-page__content">
      <app-page-info
        :infoElements="pageInfoElements"
        btnTitle="Добавить вызов"
        @btnAction="openModal()"
      />
      <div class="challenges">
        Вызовы
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppPageInfo from '@/components/basic/AppPageInfo'

export default {
  components: {
    AppPageTitle,
    AppPageInfo
  },
  data () {
    return {
      pageInfoElements: [
        {
          title: 'Всего вызывов',
          value: 2123
        },
        {
          title: 'Принято',
          value: 12
        },
        {
          title: 'Побед',
          value: 10
        },
        {
          title: 'Мои вызовы',
          value: 3
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.challenge-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .callenge-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
