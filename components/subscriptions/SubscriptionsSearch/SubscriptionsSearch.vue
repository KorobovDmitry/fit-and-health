<template>
  <div class="subscriptions-search">

    <p class="subscriptions-search__block-title">Интересные страницы</p>

    <app-search-block small filters mb20>
      <template v-slot:searchFilters>
        <div class="filter-element">
          <p>пол</p>
          <p>мужской</p>
        </div>
        <div class="filter-element">
          <p>возраст</p>
          <p>20-30</p>
        </div>
        <div class="filter-element">
          <p>город</p>
          <p>любой</p>
        </div>
      </template>
    </app-search-block>

    <div class="subscriptions-search__found-section">
      <div class="found-section__bottom-block">
        <div class="founding-users">
          <div class="founding-user-card founding-user-card--active">
            <div class="founding-user-card__avatar-wrapper">
              <img class="founding-user-card__avatar-img" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="user-img">
            </div>
            <div class="founding-user-card__main-user-info">
              <div class="main-user-info__left-block">
                <p class="main-user-info__user-name">Дмитрий Коробов</p>
                <p class="main-user-info__user-location">г. Самара</p>
                <div class="main-user-info__user-status">
                  <div class="user-status__dot"></div>
                  <p class="user-status__text">offline</p>
                </div>
              </div>
              <div class="main-user-info__right-block">
                <i class="ti-more main-user-info__action-btn-icon"></i>
              </div>
            </div>
          </div>

          <div v-for="(item, index) in 4" :key="index" class="founding-user-card">
            <div class="founding-user-card__avatar-wrapper">
              <img class="founding-user-card__avatar-img" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="user-img">
            </div>
            <div class="founding-user-card__main-user-info">
              <div class="main-user-info__left-block">
                <p class="main-user-info__user-name">John Doe</p>
                <p class="main-user-info__user-location">Moscow city</p>
                <div class="main-user-info__user-status main-user-info__user-status--active">
                  <div class="user-status__dot"></div>
                  <p class="user-status__text">online</p>
                </div>
              </div>
              <div class="main-user-info__right-block">
                <i class="ti-more main-user-info__action-btn-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- <app-button size14px uppercase center>Показать еще</app-button> -->
      </div>
    </div>

  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
export default {
  components: {
    AppButton,
    AppSearchBlock
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.subscriptions-search {
  flex: 1 1 auto;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .subscriptions-search__block-title {
    margin: 0 20px 14px 20px;
    padding: 0 5px;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
  }
  .subscriptions-search__found-section {
    .found-section__bottom-block {
      margin-bottom: 20px;
      .founding-users {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
        .founding-user-card {
          display: flex;
          margin-bottom: 10px;
          padding: 5px;
          width: 100%;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .founding-user-card__avatar-wrapper {
            // padding: 5px;
            // background: $white;
            // border: 1px solid $blockBorder;
            // border-radius: 6px;
            .founding-user-card__avatar-img {
              height: 80px;
              border: 1px solid $blockBorder;
              border-radius: 6px;
            }
          }
          .founding-user-card__main-user-info {
            flex: 1 1 auto;
            display: flex;
            justify-content: space-between;
            // margin-left: 5px;
            // padding: 10px 20px;
            // background: $white;
            // border: 1px solid $blockBorder;
            // border-radius: 6px;
            .main-user-info__left-block {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 20px;
              .main-user-info__user-name {
                // font-size: 18px;
                font-weight: 600;
              }
              .main-user-info__user-location {
                // margin-top: 5px;
                font-size: 14px;
                font-weight: 500;
              }
              .main-user-info__user-status {
                display: flex;
                margin-top: 15px;
                .user-status__dot {
                  margin-top: 4px;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background: $gray;
                }
                .user-status__text {
                  margin-left: 5px;
                  color: $gray-dark;
                  font-size: 12px;
                }
              }
              .main-user-info__user-status--active {
                .user-status__dot {
                  background: $green;
                }
                .user-status__text {
                  color: $green;
                }
              }
            }
            .main-user-info__right-block {
              margin-top: 5px;
              margin-right: 5px;
              .main-user-info__action-btn-icon {
                margin: 5px;
                transition: $tr-02;
                cursor: pointer;
              }
              .main-user-info__action-btn-icon:hover {
                color: $green;
              }
            }
          }
        }
        .founding-user-card--active {
          border: 2px solid $green;
          .founding-user-card__avatar-wrapper {
            // border: 2px solid $green;
          }
          .founding-user-card__main-user-info {
            // border: 2px solid $green;
            .main-user-info__left-block {
              .main-user-info__user-name {
                color: $green;
              }
              .main-user-info__user-location {
                color: $green;
              }
            }
          }
        }
      }
    }
  }
}

</style>
