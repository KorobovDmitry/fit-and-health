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
          <div class="week-chalenges">
            <div class="week-chalenge">
              <p>Первый вызов</p>
            </div>
            <div class="week-chalenge">
              <p>Второй вызов</p>
            </div>
            <div class="week-chalenge">
              <p>Третий вызов</p>
            </div>
          </div>

          <app-block-title>Рейтинг пользователей</app-block-title>
          <div class="users-raiting">
            <p>TOP - 100</p>
          </div>
        </div>
        <div class="right">
          <app-block-title>Полезные страницы</app-block-title>
          <div class="useful-pages">
            <nuxt-link to="/" class="page-link">
              <i class="ti-search page-link__icon"></i>
              <p class="page-link__title">Поиск<br>вызовов</p>
              <!-- <p>Поиск по вызовам с сортировкой по ровню сложности, популятронсти, на кардио, силу, выносливость, гибкость</p> -->
            </nuxt-link>
            <nuxt-link to="/" class="page-link">
              <i class="ti-layout page-link__icon"></i>
              <p class="page-link__title">Конструктор<br>вызовов</p>
            </nuxt-link>

            <nuxt-link to="/" class="page-link">
              <i class="ti-pencil-alt page-link__icon"></i>
              <p class="page-link__title">Принятые вызовы</p>
            </nuxt-link>

            <nuxt-link to="/" class="page-link">
              <i class="ti-heart page-link__icon"></i>
              <p class="page-link__title">Мои вызовы</p>
            </nuxt-link>
            <nuxt-link to="/" class="page-link">
              <i class="ti-bar-chart page-link__icon"></i>
              <p class="page-link__title">Статистика</p>
            </nuxt-link>
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
        .week-chalenges {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 20px;
          padding: 10px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          box-shadow: $boxShadow;
          .week-chalenge {
            margin-bottom: 10px;
            width: 100%;
            padding: 10px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
          }
          .week-chalenge:nth-child(2) {
            margin-right: 5px;
            margin-bottom: 0;
            width: calc(50% - 5px);
          }
          .week-chalenge:nth-child(3) {
            margin-left: 5px;
            margin-bottom: 0;
            width: calc(50% - 5px);
          }
        }
        .users-raiting {
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
        .useful-pages {
          display: flex;
          flex-wrap: wrap;
          padding: 10px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          box-shadow: $boxShadow;
          .page-link {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 5px;
            padding: 20px;
            background: $white;
            border: 1px solid $blockBorder;
            border-radius: 6px;
            .page-link__icon {
              font-size: 26px;
              transition: $tr-02;
            }
            .page-link__title {
              margin-top: 15px;
              text-align: center;
              font-weight: 500;
              transition: $tr-02;
            }
          }
          .page-link:nth-child(1) {
            margin-left: 0;
            margin-right: 2.5px;
          }
          .page-link:nth-child(2) {
            margin-left: 2.5px;
            margin-right: 0;
          }
          .page-link:nth-child(3) {
            margin-left: 0;
            margin-right: 0;
            width: 100%;
          }
          .page-link:nth-child(4) {
            margin-right: 2.5px;
            margin-bottom: 0;
          }
          .page-link:nth-child(5) {
            margin-left: 2.5px;
            margin-bottom: 0;
          }
          .page-link:hover {
            .page-link__icon {
              color: $green;
            }
            .page-link__title {
              color: $green;
            }
          }
        }
      }
    }
  }
}

</style>
