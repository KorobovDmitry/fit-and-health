<template>
  <div class="challenge-page">
    <app-page-title>Вызовы</app-page-title>
    <div class="callenge-page__content">

      <div class="challenges">
        <app-block-title>Легендарный вызов</app-block-title>
        <div class="week-chalenges">
          <div class="main-chalenge">
            <p class="main-chalenge__title">Название вызова</p>

            <div class="image-overview-user-rating">
              <div class="image-and-socials">
                <div class="image__wrapper">
                  <img class="image" src="https://wallpapercave.com/wp/wp1836146.jpg">
                </div>

                <social-btns class="mt-5" :btnsInfo="{like: 1, dislike: 0, share: 10}" />
              </div>
              <div class="description">
                <div class="description__overview">
                  <p class="overview__block-title">Описание</p>

                  <p class="overview__text">Описание текст</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="challenges__actions">
          <app-button size14px uppercase>Найти похожие</app-button>

          <app-button size14px class="ml-auto" uppercase>Подробнее</app-button>
          <app-button size14px class="ml-10" uppercase>Приступить к выполнению</app-button>
        </div>
      </div>
















      <div class="additional-info">
          <app-block-title>Рейтинг пользователей</app-block-title>
          <div class="users-raiting">
            <p>TOP - 100</p>
          </div>

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
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import SocialBtns from '@/components/basic/SocialBtns'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppPageTitle,
    AppBlockTitle,
    SocialBtns,
    AppButton
  },
  data () {
    return {}
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
    width: 100%;
    max-width: 1700px;

      .challenges {
        // border: 1px solid red;
        flex: 1 1 auto;
        .week-chalenges {
          display: flex;
          flex-wrap: wrap;
          padding: 10px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          box-shadow: $boxShadow;
          .main-chalenge {
            display: flex;
            flex-direction: column;
            width: 100%;
            .main-chalenge__title {
              padding: 10px;
              background: $white;
              border: 1px solid $blockBorder;
              border-radius: 6px;
              text-align: center;
              font-weight: 500;
            }
            .image-overview-user-rating {
              display: flex;
              margin-top: 5px;
              .image-and-socials {
                .image__wrapper {
                  padding: 10px;
                  max-width: 500px;
                  background: $white;
                  border: 1px solid $blockBorder;
                  border-radius: 6px;
                  .image {
                    object-fit: cover;
                    object-position: center;
                    border-radius: 6px;
                  }
                }
              }
              .description {
                flex: 1 1 auto;
                margin-left: 5px;
                .description__overview {
                  padding: 10px;
                  background: $white;
                  border: 1px solid $blockBorder;
                  border-radius: 6px;
                  .overview__block-title {
                    text-align: center;
                    font-weight: 500;
                  }
                }
              }
            }
          }
        }
        .challenges__actions {
          display: flex;
          margin-top: 10px;
        }
      }
      .additional-info {
        // border: 1px solid red;
        margin-left: 40px;
        width: 400px;
        min-width: 400px;
        max-width: 400px;
        .users-raiting {
          margin-bottom: 20px;
          padding: 10px;
          height: 600px;
          background: $hiddenBlockBG;
          border-radius: 6px;
          box-shadow: $boxShadow;
        }
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

</style>
