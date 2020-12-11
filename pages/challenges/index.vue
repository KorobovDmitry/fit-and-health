<template>
  <div class="challenge-page">
    <app-page-title>Вызовы</app-page-title>
    <div class="callenge-page__content">
      <!-- <app-page-info
        :infoElements="pageInfoElements"
        btnTitle="Добавить вызов"
        @btnAction="openModal()"
      /> -->
      
      <div class="challenges">
        <div class="left">
          <app-block-title>Вызовы этой недели</app-block-title>
          <div class="content">
            <p>большие карточки (основной навсю стринцацу и маленькие 1/2)</p>
            <br>
            <p>Поиск по вызовам с сортировкой по ровню сложности, популятронсти, на кардио, силу, выносливость, гибкость</p>
          </div>
        </div>
        <div class="right">
          <app-block-title>Рейтинг пользователей</app-block-title>
          <div class="content">
            TOP - 100
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppPageInfo from '@/components/basic/AppPageInfo'
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppPageTitle,
    AppPageInfo,
    AppBlockTitle
  },
  data () {
    return {
      pageInfoElements: [
        // {
        //   title: 'Всего вызывов',
        //   value: 2123
        // },
        {
          title: 'Принято',
          value: 12
        },
        {
          title: 'Побед',
          value: 10
        },
        {
          title: 'Поражений',
          value: 1
        },
        {
          title: 'Мои вызовы',
          value: 3
        }
      ]
    }
  },
  methods: {
    openModal () {
      console.log('добавить вызов')
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
    .challenges {
      display: flex;
      .left {
        // border: 1px solid red;
        flex: 1 1 auto;
        .content {
          padding: 10px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          box-shadow: $boxShadow;
        }
      }
      .right {
        // border: 1px solid red;
        margin-left: 40px;
        width: 400px;
        min-width: 400px;
        max-width: 400px;
        .content {
          padding: 10px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          box-shadow: $boxShadow;
        }
      }
    }
  }
}

</style>
