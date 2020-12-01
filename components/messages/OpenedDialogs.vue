<template>
  <div class="opened-dialogs">
    
    
    <app-block-title>Открытые диалоги</app-block-title>

    <div class="search-and-chat-list">
      <app-search-block small />

      <ul class="chat-list">
        <app-scroll-block>
          <li class="chat-list__item">
            <div class="dialog-card">
              <div class="dialog-card__header">
                <img class="header__user-avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="">
                <div class="header__user-info">
                  <p class="user-info__name">Дмитрий Коробов</p>
                  <p class="user-info__last-visit-or-status">online</p>
                  <!-- <p class="user-info__last-visit-or-status">11 : 45</p> -->
                </div>
                <div class="header__unread-message header__unread-message--disable">
                  <p class="unread-message__amount">3</p>
                </div>
              </div>
              <div class="dialog-card__last-message-preview">
                <p class="last-message-preview__text">Посленее сообщение, содержащее максимум 100 символов и    размером в две строки...</p>
                <div class="last-message-preview__status">
                  <i class="ti-check status__icon"></i>
                  <i class="ti-check status__icon"></i>
                </div>
              </div>
            </div>
          </li>
          <li v-for="(item, index) in 5" :key="index" class="chat-list__item">
            <div class="dialog-card">
              <div class="dialog-card__header">
                <img class="header__user-avatar" src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="">
                <div class="header__user-info">
                  <p class="user-info__name">John Doe</p>
                  <!-- <p class="user-info__last-visit-or-status">online</p> -->
                  <p class="user-info__last-visit-or-status">11 : 45</p>
                </div>
                <div class="header__unread-message">
                  <p class="unread-message__amount">3</p>
                </div>
              </div>
              <div class="dialog-card__last-message-preview">
                <p class="last-message-preview__text">Посленее сообщение, содержащее максимум 100 символов и    размером в две строки...</p>
                <div class="last-message-preview__status">
                  <i class="ti-check status__icon"></i>
                  <!-- <i class="ti-check status__icon"></i> -->
                </div>
              </div>
            </div>
          </li>
        </app-scroll-block>
      </ul>

      
      
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppSearchBlock from '@/components/basic/AppSearchBlock'
import AppScrollBlock from '@/components/basic/AppScrollBlock'

export default {
  components: {
    AppBlockTitle,
    AppSearchBlock,
    AppScrollBlock
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.opened-dialogs {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .search-and-chat-list {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    // height: calc(100vh - 242px);
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    .chat-list {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      .chat-list__item {
        margin-bottom: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .dialog-card {
          .dialog-card__header {
            display: flex;
            .header__user-avatar {
              width: 80px;
              border: 1px solid $blockBorder;
              border-radius: 6px;
            }
            .header__user-info {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 10px;
              .user-info__name {
                font-weight: 500;
              }
              .user-info__last-visit-or-status {
                font-size: 12px;
              }
            }
            .header__unread-message {
              margin-left: auto;
              text-align: center;
              .unread-message__amount {
                padding: 5px;
                min-width: 30px;
                background: $green;
                border-radius: 6px;
                color: $white;
                font-size: 12px;
              }
            }
            .header__unread-message--disable {
              visibility: hidden;
            }
          }
          .dialog-card__last-message-preview {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            padding: 10px 10px 0 10px;
            border-top: 1px dashed $blockBorder;
            .last-message-preview__text {
              color: $gray;
              font-size: 12px;
            }
            .last-message-preview__status {
              display: flex;
              margin-left: 10px;
              .status__icon {
                color: $green;
                font-size: 10px;
              }
            }
          }
        }
      }
      .chat-list__item:last-child {
        margin-bottom: 0;
      }
    }
  }
}

</style>
